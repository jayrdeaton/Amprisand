let { is, isnt } = require('../assertions'),
  { isAction, isExtension } = is,
  { isntAction, isntExtension } = isnt;

let Amprisand = class Amprisand {
  constructor(data) {
    this.isExtended = false;
    this.isntExtended = false;
  };
  get is() {
    if (!this.isExtended) {
      isExtension();
      this.isExtended = true;
    };
    return isAction;
  };
  get isnt() {
    if (!this.isntExtended) {
      isntExtension();
      this.isntExtended = true;
    };
    return isntAction;
  };
};

module.exports = Amprisand;
