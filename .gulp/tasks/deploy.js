import gh from 'gh-pages';
import { globs } from '../const/index.js';

function deploy(cb) {
  return gh.publish(globs.dest, {
    branch: 'build',
    message: 'build: build project',
  }, cb);
}

export default deploy;
