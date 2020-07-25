var request = require("request");
var gm = require("gm").subClass({ imageMagick: true });
var smartcrop = require("smartcrop-gm");
const util = require('util')

const applySmartCrop = (src, dest, width, height) => {
  request(src, { encoding: null }, function process(error, response, body) {
    if (error) return console.error(error);
    smartcrop
      .crop(body, { width: width, height: height })
      .then(function (result) {
        var crop = result.topCrop;
        gm(body)
          .crop(crop.width, crop.height, crop.x, crop.y)
          .resize(width, height)
          .write(dest, function (error) {
            if (error) return console.error(error);
          });
      }); 
  });
}
// Apply smart crop solves the promise when te image is done and saved
const applySmartCropPromise = (src, dest, width, height) => {
  return new Promise((resolve, reject) => {
    request(src, { encoding: null }, function process(error, response, body) {
      if (error) return console.error(error);
      smartcrop
        .crop(body, { width: width, height: height })
        .then(function (result) {
          var crop = result.topCrop;
          gm(body)
            .crop(crop.width, crop.height, crop.x, crop.y)
            .resize(width, height)
            .write(dest, function (error) {
              if (error) reject(console.error(error));
              resolve({status: "done"})
            });
        }); 
    });
  })
}
module.exports = {
  applySmartCropPromise
};

//Test
// var src = 'https://images.igdb.com/igdb/image/upload/t_original/ebus9dxflazafgwc6xq0.jpg';
// var src = 'https://images.igdb.com/igdb/image/upload/t_original/co1r0o.jpg'
// applySmartCrop(src, 'public/images/games/croppedimg.jpg', 600, 300);
// const test = async ()=>{
//   const data = await applySmartCropPromise(src, 'public/images/games/aTest.jpg', 600, 300)
//   console.log(data)
// }
// test()