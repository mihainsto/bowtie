const passport = require("passport");
const express = require("express");
const uuid = require("uuid");
const igdb = require("../igdb/igdb");
const User = require("../models/User");

const router = express.Router();

router.post(
  "/createlist",
  passport.authenticate("jwt", { session: false }),
  async (req, res, next) => {
    try {
      const listTitle = req.body.listTitle;
      const listId = req.body.listId;
      const newList = {
        listId: listId,
        cardsIds: [],
        title: listTitle,
      };
      req.user.Board.lists.push(newList);
      req.user.Board.listsOrder.push(listId);
      const updated = await req.user.save();
      res.status(200).json({ status: "success", updated: newList });
    } catch (err) {
      console.log(err);
      res.status(400).json({ status: "error" });
    }
  }
);

router.post(
  "/updatelistorder",
  passport.authenticate("jwt", { session: false }),
  async (req, res, next) => {
    try {
      const newOrder = req.body.listOrder;
      req.user.Board.listsOrder = newOrder
      const updated = await req.user.save();
      res.status(200).json({ status: "success", updated: newOrder });
    } catch (err) {
      console.log(err);
      res.status(400).json({ status: "error" });
    }
  }
);

router.post(
  "/addcard",
  passport.authenticate("jwt", { session: false }),
  async (req, res, next) => {
    try {
      const listId = req.body.listId;
      const gameId = req.body.gameId;
      const newCard = {
        cardId: uuid.v4(),
        gameId: gameId,
      };
      req.user.Board.cards.push(newCard);
      for (i = 0; i < req.user.Board.lists.length; i++) {
        if (req.user.Board.lists[i].listId === listId) {
          req.user.Board.lists[i].cardsIds.push(newCard.cardId);
        }
      }
      const updated = await req.user.save();
      res.status(200).json({ success: true, updated: newCard });
    } catch (err) {
      console.log(err);
      res.status(400).json({ status: "success", error: true });
    }
  }
);

router.get(
  "/getboard",
  passport.authenticate("jwt", { session: false }),
  async (req, res, next) => {
    try {
      res.status(200).json({ status: "success", board: req.user.Board });
    } catch (err) {
      console.log(err);
      res.status(400).json({ status: "error" });
    }
  }
);

module.exports = router;
