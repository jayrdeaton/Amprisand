module.exports = (value, test) => {
  if (test === undefined || test === null) {
    if (!value) return false;
    return true;
  };
  if (typeof test === 'function') test = test(value);
  if (typeof test === 'boolean') {
    if (value !== test) return false;
    return true;
  } else {
    return false;
  };
};
