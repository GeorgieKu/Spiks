import gulp from 'gulp';
import { globs } from '../const/index.js';

async function copyImages(cb) {
  return gulp.src(`${globs.images}/**/*`, { encoding: false })
    .pipe(gulp.dest(globs.publicImages))
    .on('end', cb)
    .on('error', cb);
}
export default copyImages;
