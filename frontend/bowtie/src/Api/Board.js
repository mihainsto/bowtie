import { api_url } from "./config";
import axios from "axios";

const api_board_createlist = async (jwt, listId, listTitle) => {
  const response = await axios({
    method: "post",
    url: api_url + "/board/createlist",
    headers: { Authorization: jwt },
    data: {
      listTitle: listTitle,
      listId: listId,
    },
  });
  return response.data;
};

const api_board_updateListOrder = async (jwt, listOrder) => {
  const response = await axios({
    method: "post",
    url: api_url + "/board/updatelistorder",
    headers: { Authorization: jwt },
    data: {
      listOrder: listOrder,
    },
  });
  return response.data;
}

const api_board_addCard  = async (jwt, cardId, listId, gameId) => {
  const response = await axios({
    method: "post",
    url: api_url + "/board/addcard",
    headers: { Authorization: jwt },
    data: {
      cardId: cardId,
      listId: listId,
      gameId: gameId,
    },
  });
  return response.data;
}
const api_get_board_data = async (jwt) => {
  const response = await axios({
    method: "get",
    url: api_url + "/board/getboard",
    headers: { Authorization: jwt },
  });
  return response.data;
};


export { api_board_createlist, api_get_board_data, api_board_updateListOrder };
