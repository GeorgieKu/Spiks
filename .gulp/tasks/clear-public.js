import { deleteAsync } from 'del';
import { globs } from '../const/index.js';

function clearPublic() {
  return deleteAsync([globs.dest], {
    force: true,
  });
}

export default clearPublic;
