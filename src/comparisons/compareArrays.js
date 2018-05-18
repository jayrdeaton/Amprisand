module.exports = (value, test) => {
  if (test === undefined || test === null) {
    if (!value || value.length === 0) return false;
    return true;
  };
  if (test === Array) return true;
  if (test === Object) return false;
  if (typeof test === 'function') test = test(value);
  if (Array.isArray(test)) {
    for (let [index, entry] of test.entries()) if (entry !== value[index]) return false;
    return true;
  } else {
    return false;
  };
};
