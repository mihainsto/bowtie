const passport = require("passport");
const validators = require("../services/validation/validators");
const express = require("express");
const User = require("../models/User");
const Game = require("../models/Game");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const keys = require("../config/keys");
const utils = require("../services/lib/utils");
const logging = require("../config/logging");
const UserService = require("../services/UserService");

const loginValidator = validators.loginValidator;
const registerValidator = validators.registerValidator;

const router = express.Router();
// TODO: delete in production
router.get(
  "/protected",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    res.status(200).json({ success: true, msg: "jwt valid" });
    // console.log(req.user);
  }
);

router.post("/register", async (req, res) => {
  if (logging.enabled)
    console.log({"/register": req.body})
  try {
    const result = await UserService.register_user(req.body.email, req.body.username, req.body.password)
    if (result){
      res.json({success: true})
    } else {
      res.status("400").json("error");
    }
  } catch (err){
    console.log(err)
    res.status(400).json(err);
  }
});

router.post("/login", (req, res) => {
  if (logging.enabled)
    console.log({"/login": req.body})
  const { errors, isValid } = validators.loginValidator(req.body);
  
  if (!isValid) {
    res.status(400).json(errors);
  }
  else {
  Users.findOne({ email: req.body.email }).then((user) => {
    if (!user) res.status(400).json({ email: "Email doesn't exist!" });
    bcrypt.compare(req.body.password, user.password).then((isMatch) => {
      if (!isMatch)
        res.status(400).json({ password: "Incorrect password provided!" });
      else {
        const jwt = utils.issueJWT(user);
        res.status(200).json({
          success: true,
          token: jwt.token,
        });
      }
    });
  });
}
});

router.post(
  "/options/set",
  passport.authenticate("jwt", { session: false }),
  async (req, res, next) => {
    if (logging.enabled)
      console.log({"/options/set": req.body})
    try {
      const options = req.body.options;
      req.user.options = options;
      const updated = await req.user.save();
      res.status(200).json({ success: true });
    } catch (err) {
      console.log(err);
      res.status(400).json({ status: "success", error: true });
    }
  }
);

// TODO: Refactor this code since is a duplicate with getBoard method
router.get(
  "/reauth",
  passport.authenticate("jwt", { session: false }),
  async (req, res, next) => {
    if (logging.enabled)
      console.log({"/reauth": req.body})
    try {
      // finding the games
      gameIds = []
      req.user.board.cards.forEach(card => {
        gameIds.push(card.gameId)
      });

    const games = await Game.find({'gameId': { $in: gameIds}})
    const gamesObj = games.reduce((a,x) => ({...a, [x.gameId]: x}), {})
    console.log(gamesObj)
    const userCpy = Object.assign({}, req.user._doc)
    delete userCpy.password
    delete userCpy._id
    res.status(200).json({ status: "success", user: {...userCpy, games: gamesObj} });
    console.log(req.user)
    } catch (err) {
      console.log(err);
      res.status(400).json({ status: "error" });
    }
  }
);
module.exports = router;
