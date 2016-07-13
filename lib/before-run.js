const fs = require('fs-extra');
const path = require('path');

const root = path.resolve();

// fs.copy(root + '/lib/ts-node/dist/ts-node.js', root + '/node_modules/ts-node/dist/ts-node.js', err => {
//   if (err) { return console.error(err); }
//   console.log("ts-node.js overwrite success.");
// });
const err = fs.copySync(root + '/lib/ts-node/dist/ts-node.js', root + '/node_modules/ts-node/dist/ts-node.js');
if (err) {
  console.error(err);
} else {
  console.log("ts-node.js overwrite success. (for ts-node 0.7.3)");
}