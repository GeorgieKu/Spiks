import gulp from 'gulp';
import rename from 'gulp-rename';
import pug from 'gulp-pug';
import { globs } from '../const/index.js';

async function compileTemplates(cb) {
  return gulp.src(`${globs.pages}/**/index.pug`)
    .pipe(rename((path) => {
      // eslint-disable-next-line no-param-reassign
      path.basename = path.dirname;
      // eslint-disable-next-line no-param-reassign
      path.dirname = '';
    }))
    .pipe(pug({
      basedir: globs.src,
      verbose: true,
    }))
    .pipe(gulp.dest(globs.dest))
    .on('end', cb)
    .on('error', cb);
}

export default compileTemplates;
