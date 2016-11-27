# Shibainu 柴犬圖產生器

![](https://github.com/imZack/shibainu/blob/master/example/demo.png)

## Install

`npm install shibainu`

## QuickStart

```node
var shibainu = require('../index');
var text = "８７分不能再高";
var textVertical = text.split('').join('\n');

var stylefn = function () {
  var profiles = {
    large: {
      x: 520,
      y: 180,
      font: '80 pt Arial'
    },
    medium: {
      x: 535,
      y: 90,
      font: '46 pt Arial'
    },
    small: {
      x: 535,
      y: 80,
      font: '26 pt Arial'
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

```

## API

### shibainu(text, options, callback)

**text**: Plain text, newline with `\n`

**options**: All of options

options.**type**: `file` or `imgur` (callback's second arg will be file path or image link depends on type)

options.**style**: style function should return style object

options.**source**: source image

style object:
```
{
  x: 520,
  y: 180,
  font: '80 pt Arial'
}
```

### License
MIT

### Credit
Shibainu Photo by [Roger Hsueh](https://www.flickr.com/photos/tachikoma/2253791728/in/photostream/)
