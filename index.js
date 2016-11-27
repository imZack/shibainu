var fs = require('fs');
var Canvas = require('canvas');


module.exports = function (text, options, cb) {
  options = Object.assign({
    type: 'file',
    path: '/tmp/shibainu.png',
    source: null,
    style: null
  }, options);

  if (typeof cb !== 'function') {
    cb = function () {};
  }

  if (typeof options.style !== 'function') {
    return cb(new Error("Must provide style callback function"));
  }

  if (options.source)

  var Image = Canvas.Image;
  var img = new Image;
  var profile = options.style();
  img.onload = function () {
    var canvas = new Canvas(img.width, img.height);
    ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, img.width, img.height);
    ctx.font = profile.font;
    ctx.fillStyle = 'white';
    ctx.fillText(text, profile.x, profile.y);

    if (options.type === 'imgur') {
      var imgur = require('imgur');
      imgur.uploadBase64(canvas.toDataURL().substring(22))
      .then(function (json) {
        cb(null, json.data.link);
      })
      .catch(function (err) {
        cb(new Error(err.message));
      });

      return;
    }

    var out = fs.createWriteStream(options.path);
    var stream = canvas.pngStream();
    stream.on('data', function (chunk) {
      out.write(chunk);
    });

    stream.on('end', function () {
      cb(null, options.path);
    });
  };

  img.src = options.source;
};
