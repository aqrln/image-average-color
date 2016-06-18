const fs = require('fs'),
      readimage = require('readimage');

module.exports = (source, callback) => {
  if (source instanceof Buffer) {
    return process(source);
  }

  fs.readFile(source, (err, data) => {
    if (err) return callback(err);
    process(data);
  });

  function process(data) {
    readimage(data, (err, image) => {
      if (err) return callback(err);

      var pixels = image.frames[0].data;
      var totalRed = 0,
          totalGreen = 0,
          totalBlue = 0,
          totalAlpha = 0;

      for (var i = 0; i < pixels.length; i += 4) {
        totalRed   += pixels[i],
        totalGreen += pixels[i + 1],
        totalBlue  += pixels[i + 2],
        totalAlpha += pixels[i + 3];
      }

      var pixelsCount = pixels.length / 4;

      var averageRed   = Math.round(totalRed / pixelsCount),
          averageGreen = Math.round(totalGreen / pixelsCount),
          averageBlue  = Math.round(totalBlue / pixelsCount),
          averageAlpha = Math.round(totalAlpha / pixelsCount);

      callback(null, [averageRed, averageGreen, averageBlue, averageAlpha]);
    });
  }
};
