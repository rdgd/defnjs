const when = (pred, expr) => (pred ? expr : null);
const ifn = (pred, thenn, elsen) => (pred ? thenn : elsen);

const cond = (pairs) => {
  for ([pred, con] of pairs) { if (pred) { return con; } }
  return null;
};

const condThread = (val, pairs) => pairs.reduce((acc, curr) => (curr[0] ? curr[1](acc) : acc), val);


const thread = (val, exprs) => exprs.reduce((acc, curr) => curr(acc), val);

module.exports = {when, ifn, cond, condThread, thread};
