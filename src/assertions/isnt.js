let { compareArrays, compareBooleans, compareNumbers, compareObjects, compareStrings } = require('../comparisons');

let isntAction = (test) => {
  if (test) throw new Error(`${test} is`);
  return true;
};

let evaluate = (data, test, operation) => {
  if (operation(data, test)) {
    if (test !== undefined) {
      throw new Error(`${data} is ${test}`)
    } else {
      throw new Error(`${data} is`)
    };
  };
  return true;
};

let isntExtension = () => {
  Array.prototype.isnt = function(test) {
    // console.log('Array');
    return evaluate(this.valueOf(), test, compareArrays);
  };
  Boolean.prototype.isnt = function(test) {
    // console.log('Boolean');
    return evaluate(this.valueOf(), test, compareBooleans);
  };
  Number.prototype.isnt = function(test) {
    // console.log('Number');
    return evaluate(this.valueOf(), test, compareNumbers);
  };
  Object.prototype.isnt = function(test) {
    // console.log('Object');
    return evaluate(this.valueOf(), test, compareObjects);
  };
  String.prototype.isnt = function(test) {
    // console.log('String');
    return evaluate(this.valueOf(), test, compareStrings);
  };
};

module.exports = { isntAction, isntExtension };
