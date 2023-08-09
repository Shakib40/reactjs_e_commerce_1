/* eslint-disable */
export const groupBy = (xs, f) => {
  return xs.reduce((r, v, i, a, k = f(v)) => ((r[k] || (r[k] = [])).push(v), r), {});
};
/* eslint-enable */

export const groupElemetsByKey = (list, key) => {
  console.log(list, key);
  return groupBy(list, obj => obj[key]);
};

export const findIndex = (array, key, value) => {
  return array.findIndex((obj) => {
    return obj[key] === value;
  });
};

export const removeObjectFromKey = (array, key, value) => {
  const index = findIndex(array, key, value);
  if (index !== -1) {
    array.splice(index, 1);
  }
  return array;
};

export default {
  groupElemetsByKey,
  removeObjectFromKey,
  findIndex
};
