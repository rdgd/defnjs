const { concat } =  require('./data.js');

const interleave = (a, b) => a.reduce((acc, curr, idx) => concat(acc, [curr], [b[idx]]), []);
const frequencies = (arr) => arr.reduce((acc, curr) => {
  let n = {};
  n[curr] = acc[curr] ? acc[curr] + 1 : 1;
  return Object.assign({}, acc, n)
}, {});

module.exports = {interleave, frequencies};
