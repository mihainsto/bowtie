const validators = require("../validation/validators");
const express = require("express");
const User = require('../models/User');
const bcrypt = require("bcrypt"); 
const mongoose = require("mongoose");
const keys = require("../config/keys");

const loginValidator = validators.loginValidator;
const registerValidator = validators.registerValidator;


const router = express.Router();

router.post('/register',(req,res) => {
    const { errors, isValid } = validators.registerValidator(req.body);
    if(!isValid){
        res.status("400").json(errors);
    }
    User
    .findOne({email: req.body.email})
    .then((user) =>{
        if(user){
             res.status(404).json({"email":"Email ID already exists!"});
        }
        else{
            const registerUser = new Users({
                name: req.body.username,
                email: req.body.email,
                password: req.body.password
            })
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(registerUser.password, salt, (err, hash) => {
                  if (err) throw err;
                  registerUser.password = hash;
                  registerUser
                    .save()
                    .then(user => res.json(user))
                    .catch(err => console.log(err));
                });
              });
        }
    })
   // res.send(errors);
});

module.exports = router;