const passport = require("passport")
const express = require("express")
const igdb = require("../igdb/igdb")


const router = express.Router();

router.post('/search', passport.authenticate('jwt', { session: false }), async (req, res, next) => {
    const query = req.body.query
    const limit = req.body.limit
    const search_results = await igdb.search_for_a_game(query, limit)
    res.status(200).json(search_results)
})
module.exports = router;