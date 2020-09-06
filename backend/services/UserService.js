const passport = require("passport");
const validators = require("./validation/validators");
const User = require("../models/User");
const Game = require("../models/Game");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const keys = require("../config/keys");
const utils = require("./lib/utils");
const logging = require("../config/logging");
const bcryptPromise = require("./lib/bcryptPromise");

const loginValidator = validators.loginValidator;
const registerValidator = validators.registerValidator;

const register_user = async (email, username, password) => {
  const { errors, isValid } = validators.registerValidator({
    username,
    email,
    password,
  });
  if (!isValid) {
    throw errors;
  } else {
    const user = await User.findOne({ email: email });
    if (user) {
      throw "Email already exists!";
    } else {
      const registerUser = new Users({
        name: username,
        email: email,
        password: password,
        board: {
          listsOrder: [],
          cards: [],
          lists: [],
        },
      });
      const salt = await bcryptPromise.genSalt(registerUser.password);
      const hash = await bcryptPromise.genHash(salt, registerUser.password);
      registerUser.password = hash;
      try {
        const user = await registerUser.save();
        return true;
      } catch (err) {
        throw err;
      }
    }
  }
};

const login_user = async (email, password) => {
  const { errors, isValid } = validators.loginValidator({email, password});
  if (!isValid) {
    res.status(400).json(errors);
  } else {
    const user = await Users.findOne({ email: email });
    if (!user) throw "Email doesn't exist!";
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw "Incorrect password provided!";
    else {
      const jwt = utils.issueJWT(user);
      return jwt;
    }
  }
};
module.exports = { register_user, login_user };
