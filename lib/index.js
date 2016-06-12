import {basename, extname} from 'path';
import {valid} from 'semver';

module.exports = array => array.reduce(
  (obj, filename) => {
    const str = basename(filename, extname(filename));
    const index = str.lastIndexOf('-');
    const pkg = str.slice(0, index);
    const version = str.slice(index + 1);
    if (valid(version)) {
      obj[pkg] = obj[pkg] || [];
      obj[pkg].push(version);
    }
    return obj;
  },
  {}
);
