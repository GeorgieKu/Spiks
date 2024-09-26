import gulp from 'gulp';
import { globs } from '../const/index.js';

async function copySvgSprites(cb) {
  return gulp.src(`${globs.sprites}/**/*`, { encoding: false })
    .pipe(gulp.dest(globs.publicSprites))
    .on('end', cb)
    .on('error', cb);
}

export default copySvgSprites;
