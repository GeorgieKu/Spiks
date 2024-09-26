import gulp from 'gulp';
import { globs } from '../const/index.js';

async function copyFonts(cb) {
  return gulp.src(`${globs.fonts}/**/*`, { encoding: false })
    .pipe(gulp.dest(globs.publicFonts))
    .on('end', cb)
    .on('error', cb);
}

export default copyFonts;
