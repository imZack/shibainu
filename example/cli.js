var shibainu = require('../index');
var text = "８７分不能再高";
var textVertical = text.split('').join('\n');

var stylefn = function () {
  var profiles = {
    large: {
      x: 520,
      y: 180,
      fontSize: 80
    },
    medium: {
      x: 535,
      y: 90,
      fontSize: 46
    },
    small: {
      x: 535,
      y: 80,
      fontSize: 26
    }
  };

  if (text.length <= 3) {
    return profiles.large;
  } else if (text.length <= 6) {
    return profiles.medium;
  } else {
    return profiles.small;
  }
};


// save to path /tmp/123.png
shibainu(textVertical, {
  path: '/tmp/123.png',
  source: __dirname + '/shibainu.jpg',
  style: stylefn
}, function (err, path) {
  console.log("saved! " + path);
});

shibainu(textVertical, {
  type: 'imgur',
  source: __dirname + '/shibainu.jpg',
  style: stylefn
}, function (err, link) {
  if (err) return console.error(err);
  console.log("saved! " + link);
});
