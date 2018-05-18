let { objectIsEmpty } = require('../helpers'),
  compareArrays = require('./compareArrays');

let compareObjects = (value, test) => {
  if (test === undefined || test === null) {
    if (value === test) return true;
    if (!value || objectIsEmpty(value)) return false;
    return true;
  };
  if (typeof test === 'function') test = test(value);
  if (typeof test === 'object') {
    if (Object.getOwnPropertyNames(value).length !== Object.getOwnPropertyNames(test).length) return false;
    for (let key of Object.getOwnPropertyNames(value)) {
      if (typeof value[key] === 'object') {
        if (Array.isArray(value[key])) {
          if (!compareArrays(value[key], test[key])) return false;
        } else {
          if (!compareObjects(value[key], test[key])) return false;
        };
      } else {
        if (value[key] !== test[key]) return false;
      };
    };
    return true;
  } else {
    return false;
  };
};

module.exports = compareObjects;
