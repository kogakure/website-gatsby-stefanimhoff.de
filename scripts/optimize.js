/* eslint-disable import/no-extraneous-dependencies */
const sharp = require('sharp');
const glob = require('glob');
const fs = require('fs-extra');

const matches = glob.sync('content/**/*.{png,jpg,jpeg}');

const MAX_WIDTH = 1500;
const QUALITY = 80;

Promise.all(
  matches.map(async (match) => {
    const stream = sharp(match);
    const info = await stream.metadata();
    if (info.width < MAX_WIDTH) {
      return;
    }
    const optimizedName = match.replace(
      /(\..+)$/,
      (_match, ext) => `-optimized${ext}`
    );

    await stream
      .resize(MAX_WIDTH)
      .jpeg({ quality: QUALITY })
      .toFile(optimizedName);

    fs.rename(optimizedName, match);
  })
);
