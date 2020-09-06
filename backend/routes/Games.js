const passport = require("passport")
const express = require("express")
const logging = require("../config/logging")
const GameService = require("../services/GameService")


const router = express.Router();

router.post('/search', passport.authenticate('jwt', { session: false }), async (req, res, next) => {
    if (logging.enabled)
        console.log({"/games/search": req.body})
    try{
        const search_results = await GameService.search_game(req.body.query, req.body.page)
        res.status(200).json(search_results)
    } catch(err){
        req.status(422).json({status: err})
    }
})
module.exports = router;