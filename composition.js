const juxt = (val, exprs) => exprs.map(x => x(val));
const comp = (fns) => (v) => fns.reduce((acc, curr) => curr(acc), v);

module.exports = {juxt, comp};
