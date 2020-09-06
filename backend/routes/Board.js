const passport = require("passport");
const express = require("express");
const logging = require("../config/logging");
const BoardService = require("../services/BoardService");
const GameService = require("../services/GameService");

const router = express.Router();

router.post(
  "/createlist",
  passport.authenticate("jwt", { session: false }),
  async (req, res, next) => {
    if (logging.enabled) console.log({ "/board/createlist": req.body });
    try {
      const newList = await BoardService.create_list(
        req.user,
        req.body.listTitle,
        req.body.listId
      );
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
    if (logging.enabled) console.log({ "/board/updatelistorder": req.body });
    try {
      const newOrder = await BoardService.update_list_order(
        req.user,
        req.body.listOrder
      );
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
    if (logging.enabled) console.log({ "/board/addcard": req.body });
    try {
      const newGame = await BoardService.add_card(
        req.user,
        req.body.gameId,
        req.body.cardId,
        req.body.listId
      );
      res.status(200).json({ success: true, game: newGame });
    } catch (err) {
      console.log(err);
      res.status(400).json({ error: true });
    }
  }
);

router.post(
  "/updatecardorder",
  passport.authenticate("jwt", { session: false }),
  async (req, res, next) => {
    if (logging.enabled) console.log({ "/board/updatecardorder": req.body });
    try {
      const updated = await BoardService.update_card_order(
        req.user,
        req.body.listId,
        req.body.cardOrder
      );
      res.status(200).json({ success: true });
    } catch (err) {
      console.log(err);
      res.status(400).json({ status: "success", error: true });
    }
  }
);

router.post(
  "/updatecardmove",
  passport.authenticate("jwt", { session: false }),
  async (req, res, next) => {
    if (logging.enabled) console.log({ "/board/updatecardmove": req.body });
    try {
      const updated = await BoardService.move_card(
        req.user,
        req.body.list1Id,
        req.body.cardOrder1,
        req.body.list2Id,
        req.body.cardOrder2
      );
      res.status(200).json({ success: true });
    } catch (err) {
      console.log(err);
      res.status(400).json({ status: "success", error: true });
    }
  }
);

module.exports = router;
