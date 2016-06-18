image-average-color
===================

A simple library that calculates the average color of a PNG, JPG or GIF image.

The only exported function takes two arguments: first is either Buffer with image contents
or a filename, second one is a callback. Callback function should accept a possible error
and a color in form of array of four values in range 0...255 representing red, green,
blue and alpha channels.

```javascript
const average = require('image-average-color');

average('image.png', (err, color) => {
  if (err) throw err;
  var [red, green, blue, alpha] = color;
});

loadImageFromAstral((err, data) => {
  if (err) throw err;

  average(data, (err, color) => {
    if (err) throw err;
    var [red, green, blue, alpha] = color;
  });
});
```

This package also provides a command-line utility called `average-color` that accepts
a filename and prints the average color in CSS format:

```
$ average-color image.jpg
rgba(86, 219, 101, 1)
```
