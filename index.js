const when = (pred, expr) => (pred ? expr : null);
const ifn = (pred, thenn, elsen) => (pred ? thenn : elsen);
const thread = (val, exprs) => exprs.reduce((acc, curr) => curr(acc), val);
const juxt = (val, exprs) => exprs.map(x => x(val));
const get = (assoc, key) => assoc[key];
const getIn = (map, keys) => {
  const k = keys[0];
  const v = map[k];
  return (k && v) ? getIn(v, keys.slice(1)) : map;
};

const cond = (pairs) => {
  for (let i = 0; i < pairs.length; i++) {
    if (pairs[i][0]) {
      return pairs[i][1];
    }
  }

  return null;
};

const condThread = (val, pairs) => {
  let acc = val;

  for (let i = 0; i < pairs.length; i++) {
    if (pairs[i][0]) { acc = pairs[i][1](acc); }
  }

  return acc;
};

const concat = (arr, ...varargs) =>
  ifn(varargs, varargs.reduce((acc, curr) => {
    return acc.concat(curr);
  }, arr), arr);


