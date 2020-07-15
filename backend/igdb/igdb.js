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

const get_game_coverimg_for_game = async (game) => {
  const gameId = await get_gameid(game);
  const imageUrl = await get_game_coverimg(gameId);
  return imageUrl;
};

const test = async () => {
  const image = await get_game_coverimg_for_game("Metro Exodus");
  console.log(image);
};

test();
