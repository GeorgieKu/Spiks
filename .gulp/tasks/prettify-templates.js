import gulp from 'gulp';
import prettifyHtml from 'gulp-pretty-html';
import { globs } from '../const/index.js';

async function prettifyTemplates(cb) {
  if (process.env.NODE_ENV !== 'production') {
    return Promise.resolve();
  }

  return gulp.src(`${globs.dest}/*.html`)
    .pipe(prettifyHtml({
      indent_size: 4,
    }))
    .pipe(gulp.dest(globs.dest))
    .on('end', cb)
    .on('error', cb);
}

export default prettifyTemplates;
