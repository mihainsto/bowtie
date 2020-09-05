const Game = require("../models/Game");
const smartcrop = require("./smartcrop/smartcrop");
const GameService = require("./GameService");

const create_list = async (user, listTitle, listId) => {
  const newList = {
    listId: listId,
    cardsIds: [],
    title: listTitle,
  };
  user.board.lists.push(newList);
  user.board.listsOrder.push(listId);
  const updated = await user.save();
  return newList;
};

const update_list_order = async (user, newOrder) => {
  user.board.listsOrder = newOrder;
  const updated = await user.save();
  return newOrder;
};

const update_card_order = async (user, listId, cardOrder) => {
  for (i = 0; i < user.board.lists.length; i++) {
    if (user.board.lists[i].listId === listId) {
      user.board.lists[i].cardsIds = cardOrder;
      break;
    }
  }
  const updated = await user.save();
  return updated
};

const move_card = async (user, list1Id, cardOrder1, list2Id, cardOrder2) => {
    for (i = 0; i < user.board.lists.length; i++) {
        if (user.board.lists[i].listId === list1Id) {
          user.board.lists[i].cardsIds = cardOrder1;
        } else if (user.board.lists[i].listId === list2Id) {
          user.board.lists[i].cardsIds = cardOrder2;
        }
      }
      const updated = await user.save();
      return updated
};

const add_card = async (user, gameId, cardId, listId) => {

    const newCard = {
        cardId: cardId,
        gameId: gameId
    }
    user.board.cards.push(newCard);
    for (i = 0; i < user.board.lists.length; i++) {
        if (user.board.lists[i].listId === listId) {
          user.board.lists[i].cardsIds.push(newCard.cardId);
          break;
        }
      }
    const updated = await user.save()
    const game = GameService.create_game(gameId)
    return game
};

module.exports = {
  create_list,
  update_list_order,
  update_card_order,
  add_card,
  move_card,
};
