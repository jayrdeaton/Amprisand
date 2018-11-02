let { compareArrays, compareBooleans, compareNumbers, compareObjects, compareStrings } = require('../comparisons');

let isAction = (test) => {
  if (!test) throw new Error(`${JSON.stringify(test)} isn't`);
  return true;
};

let evaluate = (data, test, operation) => {
  if (!operation(data, test)) {
    if (test !== undefined) {
      throw new Error(`${JSON.stringify(data)} is not ${JSON.stringify(test)}`)
    } else {
      throw new Error(`${JSON.stringify(data)} isn't`)
    };
  };
  return true;
};

let isExtension = () => {
  Array.prototype.is = function(test) {
    // console.log('Array');
    return evaluate(this.valueOf(), test, compareArrays);
  };
  Boolean.prototype.is = function(test) {
    // console.log('Boolean');
    return evaluate(this.valueOf(), test, compareBooleans);
  };
  Number.prototype.is = function(test) {
    // console.log('Number');
    return evaluate(this.valueOf(), test, compareNumbers);
  };
  Object.prototype.is = function(test) {
    // console.log('Object');
    return evaluate(this.valueOf(), test, compareObjects);
  };
  String.prototype.is = function(test) {
    // console.log('String');
    return evaluate(this.valueOf(), test, compareStrings);
  };
};

module.exports = { isAction, isExtension };
