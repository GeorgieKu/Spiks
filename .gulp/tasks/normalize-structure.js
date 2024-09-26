import fs from 'fs';
import { globs } from '../const/index.js';

async function normalizeStructure() {
  if (!fs.existsSync(globs.publicAssets)) {
    fs.mkdirSync(globs.publicAssets);
  }
  
  return Promise.resolve();
}

export default normalizeStructure;
