import { api_url } from "./config";
import axios from "axios";

// Creates a list given the id and the title
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

// Updates the lists order array
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
};

// Updates the card order array of a list
// can be used when moving a card inside a list
const api_board_updateCardOrder = async (jwt, listId, cardOrder) => {
  const response = await axios({
    method: "post",
    url: api_url + "/board/updatecardorder",
    headers: { Authorization: jwt },
    data: {
      listId: listId,
      cardOrder: cardOrder
    },
  });
  return response.data;
}

// Move a card between two lists
// given two lists and their cards orders
const api_board_moveCard = async (jwt, list1Id, list2Id, cardOrder1, cardOrder2) => {
  const response = await axios({
    method: "post",
    url: api_url + "/board/updatecardmove",
    headers: { Authorization: jwt },
    data: {
      list1Id: list1Id,
      list2Id: list2Id,
      cardOrder1: cardOrder1,
      cardOrder2: cardOrder2
    },
  });
  return response.data;
}
// Create a new card
// Returns the new created card with the game data associated with that card
// Based on the gameId given
const api_board_addCard = async (jwt, cardId, listId, gameId) => {
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
};

// Gets all the board data
const api_get_board_data = async (jwt) => {
  const response = await axios({
    method: "get",
    url: api_url + "/board/getboard",
    headers: { Authorization: jwt },
  });
  return response.data;
};

export {
  api_board_createlist,
  api_get_board_data,
  api_board_updateListOrder,
  api_board_addCard,
  api_board_updateCardOrder,
  api_board_moveCard
};
