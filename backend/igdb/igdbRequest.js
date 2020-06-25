var request = require('request');
var rp = require('request-promise');
var config = require("./config");
const api_key = config.api_key;

var headers = {
  'user-key': api_key,
};

const make_igdb_request = async(path, querry) => {
  var options = {
      url: 'https://api-v3.igdb.com'+path,
      method: 'POST',
      headers: headers,
      body: querry
  };
  
  const body = await rp(options)
  .then(function callback(body) {
      return (JSON.parse(body));
  })

  return body
};

const test = async () => {
  const body = await make_igdb_request("/games", 'fields id; search "Metro";')
  console.log(body)
}
