const {ifn} = require('./flow.js');

const get = (assoc, key) => ((assoc instanceof Map) ? assoc.get(key) : assoc[key]);
const getIn = (map, keys) => {
  const isMap = map instanceof Map;
  const k = keys[0];
  const v = isMap ? map.get(k) : map[k];
  return (k && v) ? getIn(v, keys.slice(1)) : map;
};

const concat = (arr, ...varargs) =>
  ifn(varargs, varargs.reduce((acc, curr) => acc.concat(curr), arr), arr);

const hashMap = (x) => (Array.isArray(x)) ? new Map(x) : new Map(Object.entries(x));

module.exports = {get, getIn, concat, hashMap};
