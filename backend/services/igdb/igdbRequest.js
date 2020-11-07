var request = require('request');
var rp = require('request-promise');
var config = require("./config");
const client_id = config.client_id
const access_token = config.access_token
var headers = {
  'Client-ID': client_id,
  'Authorization': 'Bearer ' + access_token
};

const make_igdb_request = async(path, querry) => {
  var options = {
      url: 'https://api.igdb.com/v4'+path,
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

// const test = async () => {
//   const body = await make_igdb_request("/games", 'fields id; search "Metro";')
//   console.log(body)
// }

module.exports = {
  make_igdb_request
}