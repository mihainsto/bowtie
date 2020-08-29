const passport = require("passport");
const express = require("express");
const uuid = require("uuid");
const igdb = require("../igdb/igdb");
const User = require("../models/User");
const Game = require("../models/Game");
const paths = require("../config/paths");
const smartcrop = require("../smartcrop/smartcrop");
const logging = require("../config/logging");

const router = express.Router();

router.post(
  "/createlist",
  passport.authenticate("jwt", { session: false }),
  async (req, res, next) => {
    if (logging.enabled)
      console.log({"/board/createlist": req.body})
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
    if (logging.enabled)
      console.log({"/board/updatelistorder": req.body})
    try {
      const newOrder = req.body.listOrder;
      req.user.Board.listsOrder = newOrder;
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
    if (logging.enabled)
      console.log({"/board/addcard": req.body})
    try {
      const listId = req.body.listId;
      const gameId = req.body.gameId;
      const newCard = {
        cardId: req.body.cardId,
        gameId: gameId,
      };
      req.user.Board.cards.push(newCard);
      for (i = 0; i < req.user.Board.lists.length; i++) {
        if (req.user.Board.lists[i].listId === listId) {
          req.user.Board.lists[i].cardsIds.push(newCard.cardId);
          break;
        }
      }
      const updated = await req.user.save();
      // after we created the card we want to update the games collection and
      // add the game there
      Game.find({ gameId: gameId }).then(async (games) => {
        if (games.length) {
          res
            .status(200)
            .json({ success: true, updated: newCard, game: games[0] });
        } else {
          // searching igdb for game and picture
          igdbGame = await igdb.get_game(gameId);
          //paths.imagesPath
          const src = igdbGame.image
          const newImageName = src.split("/")[src.split("/").length-1]
          const newImagePath = paths.imagesPath+"/games/"+newImageName
          const status = await smartcrop.applySmartCropPromise(igdbGame.image, newImagePath, 600, 300)
          const newGame = new Game({
            gameId: gameId,
            title: igdbGame.name,
            imageUrl: newImagePath,
            releaseDate: igdbGame.first_release_date
          });
          newGame
            .save()
            .then((game) => res.status(200).json({ success: true, game: newGame }))
            .catch((err) => {
              console.log(err);
              res.status(400).json({ error: true });
            });
        }
      });
      // res.status(200).json({ success: true, updated: newCard });
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
    if (logging.enabled)
      console.log({"/board/updatecardorder": req.body})
    try {
      const listId = req.body.listId;
      const cardOrder = req.body.cardOrder;
      console.log({ listId: listId, cardOrder: cardOrder });
      for (i = 0; i < req.user.Board.lists.length; i++) {
        if (req.user.Board.lists[i].listId === listId) {
          req.user.Board.lists[i].cardsIds = cardOrder;
          break;
        }
      }
      const updated = await req.user.save();
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
    if (logging.enabled)
      console.log({"/board/updatecardmove": req.body})
    try {
      const list1Id = req.body.list1Id;
      const list2Id = req.body.list2Id;
      const cardOrder1 = req.body.cardOrder1;
      const cardOrder2 = req.body.cardOrder2;

      for (i = 0; i < req.user.Board.lists.length; i++) {
        if (req.user.Board.lists[i].listId === list1Id) {
          req.user.Board.lists[i].cardsIds = cardOrder1;
        } else if (req.user.Board.lists[i].listId === list2Id) {
          req.user.Board.lists[i].cardsIds = cardOrder2;
        }
      }
      const updated = await req.user.save();
      res.status(200).json({ success: true });
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
    if (logging.enabled)
      console.log({"/board/getboard": req.body})
    try {
      // finding the games
      gameIds = []
      req.user.Board.cards.forEach(card => {
        gameIds.push(card.gameId)
      });

    const games = await Game.find({'gameId': { $in: gameIds}})
    const gamesObj = games.reduce((a,x) => ({...a, [x.gameId]: x}), {})
    console.log(gamesObj)
    res.status(200).json({ status: "success", board: req.user.Board, games: gamesObj });
    } catch (err) {
      console.log(err);
      res.status(400).json({ status: "error" });
    }
  }
);

module.exports = router;
