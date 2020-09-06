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
const get_gameid_list_coverimg = async (gameIdList) =>{
  const querry =
  `fields url, game; where game =(`+gameIdList.join(",")+`);`
  const path = "/covers";
  const response = await igdbRequest.make_igdb_request(path, querry)
  for(i=0; i<response.length; i++){
    if (typeof response[i] !== undefined)
      response[i]["url"] = response[i]["url"].replace("//","").replace("t_thumb", "t_logo_med")
      //t_logo_med
  }
  return response
}

const search_for_a_game_names = async (gameName, offset, limit) => {
  const query =
    `fields id, name, first_release_date;
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

const get_game_artwork = async (gameId) => {
    const querry =
    `fields url;
  where game = ` +
    gameId +
    `;`;
  const path = "/artworks";
  const response = await igdbRequest.make_igdb_request(path, querry);
  if (typeof response[0] === "undefined") {
    return null;
  }
  let image_url = response[0].url;
  image_url = image_url.replace("//", "");
  return image_url;
}
//Game Search with images
const search_for_a_game = async (gameName, offset, limit) => {
  const games = await search_for_a_game_names(gameName, offset, limit)
  if (typeof games === "undefined" || games === null || games.length === null
  || games.length <= 0){
    return {status: "null"}
  }
  const  newGames = []
  const gameIds = []
  games.forEach(element => {
    gameIds.push(element["id"])
  });
  const images = await get_gameid_list_coverimg(gameIds)
  // console.log(gameIds)
  for (i=0;i<gameIds.length;i++){
    imageobj = images.find(o => o["game"] === gameIds[i])
    if (typeof imageobj === "undefined"){
      newGames.push({...games[i], image: ""})
    } else{
      newGames.push({...games[i], image: imageobj["url"]})
    }
  }
  // console.log(newGames)
  return newGames
  }

const get_game = async (gameId) => {
  const querry =
  `fields name, first_release_date; 
  where id = ` +
  gameId +
  `; 
  limit 1;`;
  const path = "/games";
  const gameQuery = await igdbRequest.make_igdb_request(path, querry);
  const image = await get_game_coverimg(gameId)
  const fullImage = convert_image_to_full_size(image)
  const response = {...gameQuery[0], image: "https://"+fullImage}
  return response;
}


// const test = async () => {
//   //const response = await get_gameid_list_coverimg([37016, 10283])
//   //console.log(response);
//   const response = await get_game(26192)
//   console.log(response)
// };

// test()
module.exports = { search_for_a_game, get_game };
