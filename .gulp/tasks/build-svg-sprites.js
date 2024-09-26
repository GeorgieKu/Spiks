import gulp from 'gulp';
import buildSvgSprite from 'gulp-svg-sprite';
import { globs } from '../const/index.js';
import { svgSpriteConfig } from '../configs/index.js';

async function buildSvgSprites(cb) {
  return gulp
    .src(`${globs.sprites}/*.svg`)
    .pipe(buildSvgSprite(svgSpriteConfig.typeDefault))
    .pipe(gulp.dest(globs.publicSprites))
    .on('end', cb)
    .on('error', cb);
}

export default buildSvgSprites;
