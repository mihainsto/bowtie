const passport = require("passport")
const express = require("express")
const igdb = require("../igdb/igdb")
const logging = require("../config/logging")


const router = express.Router();

router.post('/search', passport.authenticate('jwt', { session: false }), async (req, res, next) => {
    if (logging.enabled)
        console.log({"/games/search": req.body})
    const query = req.body.query
    // console.log(query)
    const page = req.body.page
    if (page <= 0)
        res.status(422).json({"status": "Page dose not exist"})
    if (query.length > 100) {
        res.status(422).json({"status": "Query to big"})
    }

    const search_results = await igdb.search_for_a_game(query, (page-1)*4, 4)
    // const search_results = await igdb.search_for_a_game(query, 0, 10)
    res.status(200).json(search_results)
})
module.exports = router;