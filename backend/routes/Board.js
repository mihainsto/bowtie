const passport = require("passport")
const express = require("express")
const uuid = require("uuid")
const igdb = require("../igdb/igdb")
const User = require("../models/User")

const router = express.Router();


router.post('/createlist', passport.authenticate('jwt', { session: false }), async (req, res, next) => {
    try{
    const listName = req.body.listName
    const newList = {
        listId: uuid.v4(),
        cardsIds: [],
        title: listName
    }
    req.user.Board.lists.push(newList)

    const updated = await req.user.save()
    res.status(200).json({success: true, updated: newList});
    }catch(err){
        console.log(err)
        res.status(400).json({success: false, error: true})
    }
    
})
module.exports = router;