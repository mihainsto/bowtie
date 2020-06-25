const fs = require('fs')
const fetch = require('node-fetch')

const api_key = JSON.parse(fs.readFileSync("./api_key.json"))["user-key"]
const options = {
    "method": "GET",
    "headers": {
        "user-key": api_key,
        "content-length": "26"
      }
}
const get_gameid = async (gameName) => {
    const url = "https://api-v3.igdb.com/games/"
    //let options = options
    options.body = "fields id; search \"Metro\";"
    const response  = await fetch(url, options)
}

get_gameid("Metro Exodus")