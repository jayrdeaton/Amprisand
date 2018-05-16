let { array, boolean, number, object, string } = require('../prototypes');

let isAction = (test) => {
  if (!test) throw new Error(`${test} isn't`);
  return true;
};

let evaluate = (data, test, operation) => {
  if (!operation(data, test)) throw new Error(`${data} is not ${test}`);
  return true;
};

let isExtension = () => {
  Array.prototype.is = function(test) {
    // console.log('Array');
    return evaluate(this.valueOf(), test, array);
  };
  Boolean.prototype.is = function(test) {
    // console.log('Boolean');
    return evaluate(this.valueOf(), test, boolean);
  };
  Number.prototype.is = function(test) {
    // console.log('Number');
    return evaluate(this.valueOf(), test, number);
  };
  Object.prototype.is = function(test) {
    // console.log('Object');
    return evaluate(this.valueOf(), test, object);
  };
  String.prototype.is = function(test) {
    // console.log('String');
    return evaluate(this.valueOf(), test, string);
  };
};

module.exports = { isAction, isExtension };
