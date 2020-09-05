const Game = require("../models/Game");
const igdb = require("./igdb/igdb");
const smartcrop = require("./smartcrop/smartcrop");
const paths = require("../config/paths");

const get_games = async (user) => {
  try {
    gameIds = [];
    user.board.cards.forEach((card) => {
      gameIds.push(card.gameId);
    });
    const games = await Game.find({ gameId: { $in: gameIds } });
    const gamesObj = games.reduce((a, x) => ({ ...a, [x.gameId]: x }), {});
    return gamesObj;
  } catch (err) {
    throw err;
  }
};

// Creates a game or returns one if it exists
const create_game = async (gameId) => {
  const games = await Game.find({ gameId: gameId });
  if (games.length) {
      return games[0]
  } else {
    // searching igdb for game and picture
    igdbGame = await igdb.get_game(gameId);
    //paths.imagesPath
    const src = igdbGame.image;
    const newImageName = src.split("/")[src.split("/").length - 1];
    const newImagePath = paths.imagesPath + "/games/" + newImageName;
    const status = await smartcrop.applySmartCropPromise(
      igdbGame.image,
      newImagePath,
      600,
      300
    );
    const newGame = new Game({
      gameId: gameId,
      title: igdbGame.name,
      imageUrl: newImagePath,
      releaseDate: igdbGame.first_release_date,
    });

    const game = await newGame.save();
    return newGame;
  }
};

const search_game = async (query, page) => {
    if (page <= 0)
        throw "Page dose not exist"
    if (query.length > 100) {
        throw "Query to big"
    }
    const search_results = await igdb.search_for_a_game(query, (page-1)*4, 4)
    return search_results
}

module.exports = { get_games, create_game, search_game };
