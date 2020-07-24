const passport = require("passport");
const validators = require("../validation/validators");
const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const keys = require("../config/keys");
const utils = require("../lib/utils");
const logging = require("../config/logging");

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

router.post("/register", (req, res) => {
  if (logging.enabled)
    console.log({"/register": req.body})
  const { errors, isValid } = validators.registerValidator(req.body);
  if (!isValid) {
    res.status("400").json(errors);
  } else {
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      res.status(404).json({ email: "Email ID already exists!" });
    } else {
      const registerUser = new Users({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password,
        Board: {
          listsOrder: [],
          cards: [],
          lists: [],
        },
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(registerUser.password, salt, (err, hash) => {
          if (err) throw err;
          registerUser.password = hash;
          registerUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
        });
      });
    }
  });
  // res.send(errors);
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

module.exports = router;
