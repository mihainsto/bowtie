var igdbRequest = require("./igdbRequest");

const convert_image_to_full_size = (imageLink) =>
  imageLink.replace("t_thumb", "t_original");

const get_gameid = async (gameName) => {
  const querry =
    `fields id; 
    search "` +
    gameName +
    `"; 
    limit 1;`;
  const path = "/games";
  const response = await igdbRequest.make_igdb_request(path, querry);
  return response[0].id;
};

const get_game_coverimg = async (gameId) => {
  const querry =
    `fields url;
    where game = ` +
    gameId +
    `;`;
  const path = "/covers";
  const response = await igdbRequest.make_igdb_request(path, querry);
  let image_url = response[0].url;
  image_url = image_url.replace("//", "");
  image_url = convert_image_to_full_size(image_url);
  return image_url;
};

const get_thumb_coverimg = async (gameId) => {
  const querry =
    `fields url;
  where game = ` +
    gameId +
    `;`;
  const path = "/covers";
  const response = await igdbRequest.make_igdb_request(path, querry);
  if (typeof response[0] === "undefined") {
    return null;
  }
  let image_url = response[0].url;
  image_url = image_url.replace("//", "");
  return image_url;
};
const get_game_coverimg_for_game = async (game) => {
  const gameId = await get_gameid(game);
  const imageUrl = await get_game_coverimg(gameId);
  return imageUrl;
};

const search_for_a_game = async (gameName, offset, limit) => {
  const query =
    `fields id, name;
    search "` +
    gameName +
    `";
    limit ` +
    limit +
    `;` +
    `offset ` +
    offset +
    `;`;
  const path = "/games";
  const response = await igdbRequest.make_igdb_request(path, query);
  return response;
};

// Game Search with images
// const make_game_search_query = async (game, limit) => {
//   const games = await search_for_a_game(game, limit)
//   // const images = []
//   // for (let i = 0; i < games.length; i++) {
//   //   let image = await get_thumb_acoverimg(games[i]['id'])
//   //   images.push(image)
//   // }
//   console.log(games)
//   // console.log(images)
// }
// const test = async () => {
//   //let response = await search_for_a_game("metro", 10);
//   //console.log(response);
//   response = await get_thumb_coverimg("19586");
//   console.log(response)
// };
//test();
// make_game_search_query("metro", 10)

module.exports = { search_for_a_game };
