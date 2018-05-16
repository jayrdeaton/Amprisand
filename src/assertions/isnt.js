let { array, boolean, number, object, string } = require('../prototypes');

let isntAction = (test) => {
  if (test) throw new Error(`${test} is`);
  return true;
};

let evaluate = (data, test, operation) => {
  if (operation(data, test)) throw new Error(`${data} is ${test}`);
  return true;
};

let isntExtension = () => {
  Array.prototype.isnt = function(test) {
    // console.log('Array');
    return evaluate(this.valueOf(), test, array);
  };
  Boolean.prototype.isnt = function(test) {
    // console.log('Boolean');
    return evaluate(this.valueOf(), test, boolean);
  };
  Number.prototype.isnt = function(test) {
    // console.log('Number');
    return evaluate(this.valueOf(), test, number);
  };
  Object.prototype.isnt = function(test) {
    // console.log('Object');
    return evaluate(this.valueOf(), test, object);
  };
  String.prototype.isnt = function(test) {
    // console.log('String');
    return evaluate(this.valueOf(), test, string);
  };
};

module.exports = { isntAction, isntExtension };
