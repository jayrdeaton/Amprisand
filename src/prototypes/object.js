let { objectIsEmpty } = require('../helpers');

module.exports = (value, test) => {
  if (test === undefined || test === null) {
    if (!value || objectIsEmpty(value)) return false;
    return true;
  };
  if (typeof test === 'function') test = test(value);
  if (typeof test === 'object') {
    if (Object.keys(value).length !== Object.keys(test).length) return false;
    for (let key of Object.keys(value)) if (value[key] !== test[key]) return false;
    return true;
  } else {
    return false;
  };
};
