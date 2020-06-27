var request = require('request');
var gm = require('gm').subClass({ imageMagick: true });
var smartcrop = require('smartcrop-gm');

function applySmartCrop(src, dest, width, height) {
    request(src, { encoding: null }, function process(error, response, body) {
      if (error) return console.error(error);
      smartcrop.crop(body, { width: width, height: height }).then(function(result) {
        var crop = result.topCrop;
        gm(body)
          .crop(crop.width, crop.height, crop.x, crop.y)
          .resize(width, height)
          .write(dest, function(error) {
            if (error) return console.error(error);
          });
      });
    });
  }

// Test
//var src = 'https://images.igdb.com/igdb/image/upload/t_original/ebus9dxflazafgwc6xq0.jpg';
//applySmartCrop(src, 'croppedimg.jpg', 600, 300);