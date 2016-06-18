#!/usr/bin/env node

const average = require('./average-color');

if (!process.argv[2]) {
  console.log('Usage: average-color <image file>');
  process.exit();
}

average(process.argv[2], (err, color) => {
  if (err) throw err;
  color[3] /= 255;
  console.log('rgba(' + color.join(', ') + ')');
});
