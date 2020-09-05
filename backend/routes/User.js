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
const OptionsService = require("../services/OptionsService");

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

router.post("/login", async (req, res) => {
  if (logging.enabled)
    console.log({"/login": req.body})
  
  try {
    const jwt = await UserService.login_user(req.body.email, req.body.password)
    res.status(200).json({
      success: true,
      token: jwt.token,
    });
  }
  catch(err) {
    res.status(400).json(err)
  }
});

router.post(
  "/options/set",
  passport.authenticate("jwt", { session: false }),
  async (req, res, next) => {
    if (logging.enabled)
      console.log({"/options/set": req.body})
    try {
      OptionsService.set_options(req.user, req.body.options)
      res.status(200).json({ success: true });
    } catch (err) {
      res.status(400).json(err);
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
