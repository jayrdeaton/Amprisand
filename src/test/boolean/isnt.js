let faker = require('faker'),
  { is, isnt } = require('../../../');

describe('isnt', () => {
  describe('true.isnt()', () => {
    it('should not assert', () => {
      let result, error, value = true;
      try {
        result = value.isnt();
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);
    });
  });
  describe('false.isnt()', () => {
    it('should assert', () => {
      let result, error, value = false;
      try {
        result = value.isnt();
      } catch(err) {
        error = err;
      };
      is(result);
      isnt(error);
    });
  });
  describe('boolean.isnt(other)', () => {
    it('should assert', () => {
      let result, error, value = true, test = false;
      try {
        result = value.isnt(test);
      } catch(err) {
        error = err;
      };
      is(result);
      isnt(error);
    });
  });
  describe('boolean.isnt(array)', () => {
    it('should assert', () => {
      let result, error, value = faker.random.boolean(), test = [ value ];
      try {
        result = value.isnt(test);
      } catch(err) {
        error = err;
      };
      is(result);
      isnt(error);
    });
  });
  describe('boolean.isnt(boolean)', () => {
    it('should not assert', () => {
      let result, error, value = faker.random.boolean();
      try {
        result = value.isnt(value);
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);
    });
  });
  describe('boolean.isnt(number)', () => {
    it('should assert', () => {
      let result, error, value = faker.random.boolean(), test = faker.random.number();
      try {
        result = value.isnt(test);
      } catch(err) {
        error = err;
      };
      is(result);
      isnt(error);
    });
  });
  describe('boolean.isnt(object)', () => {
    it('should assert', () => {
      let result, error, value = faker.random.boolean(), test = { value };
      try {
        result = value.isnt(test);
      } catch(err) {
        error = err;
      };
      is(result);
      isnt(error);
    });
  });
  describe('boolean.isnt(string)', () => {
    it('should assert', () => {
      let result, error, value = faker.random.boolean(), test = faker.random.word();
      try {
        result = value.isnt(test);
      } catch(err) {
        error = err;
      };
      is(result);
      isnt(error);

    });
  });
  describe('boolean.isnt(Array)', () => {
    it('should assert', () => {
      let result, error, value = faker.random.boolean(), test = Array;
      try {
        result = value.isnt(test);
      } catch(err) {
        error = err;
      };
      is(result);
      isnt(error);
    });
  });
  describe('boolean.isnt(Boolean)', () => {
    it('should not assert', () => {
      let result, error, value = faker.random.boolean(), test = Boolean;
      try {
        result = value.isnt(test);
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);
    });
  });
  describe('boolean.isnt(Number)', () => {
    it('should assert', () => {
      let result, error, value = faker.random.boolean(), test = Number;
      try {
        result = value.isnt(test);
      } catch(err) {
        error = err;
      };
      is(result);
      isnt(error);
    });
  });
  describe('boolean.isnt(Object)', () => {
    it('should assert', () => {
      let result, error, value = faker.random.boolean(), test = Object;
      try {
        result = value.isnt(test);
      } catch(err) {
        error = err;
      };
      is(result);
      isnt(error);
    });
  });
  describe('boolean.isnt(String)', () => {
    it('should assert', () => {
      let result, error, value = faker.random.boolean(), test = String;
      try {
        result = value.isnt(test);
      } catch(err) {
        error = err;
      };
      is(result);
      isnt(error);
    });
  });
});
