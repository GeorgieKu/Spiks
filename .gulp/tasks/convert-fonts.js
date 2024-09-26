import gulp from 'gulp';
import ttf2woff from 'gulp-ttf2woff';
import ttf2woff2 from 'gulp-ttf2woff2';
import { globs } from '../const/index.js';

const convertersMap = {
  woff: ttf2woff,
  woff2: ttf2woff2,
};

const convertFontsBuilder = (from, to) => {
  return (cb) => {
    const convert = convertersMap[to];

    return gulp.src(`${globs.fontsToConvert}/**/*.${from}`)
      .pipe(convert())
      .pipe(gulp.dest(globs.fonts))
      .on('end', cb)
      .on('error', cb);
  };
};

async function convertFonts2Woff(cb) {
  return convertFontsBuilder('ttf', 'woff')(cb);
}

async function convertFonts2Woff2(cb) {
  return convertFontsBuilder('ttf', 'woff2')(cb);
}

const convertFonts = gulp.parallel(
  convertFonts2Woff,
  convertFonts2Woff2,
);

export default convertFonts;
