import gulp from 'gulp';
import { globs } from '../const/index.js';

async function copyOtherAssets(cb) {
  return gulp.src(`${globs.otherAssets}/**/*`, { encoding: false })
    .pipe(gulp.dest(globs.publicOtherAssets))
    .on('end', cb)
    .on('error', cb);
}

export default copyOtherAssets;
