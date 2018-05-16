let faker = require('faker'),
  { is, isnt } = require('../../../');

describe('isnt', () => {
  describe('number.isnt()', () => {
    it('should not assert', () => {
      let result, error, value = faker.random.number();
      try {
        result = value.isnt();
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);
    });
  });
  describe('0.isnt()', () => {
    it('should assert', () => {
      let result, error, value = 0;
      try {
        result = value.isnt();
      } catch(err) {
        error = err;
      };
      is(result);
      isnt(error);
    });
  });
  describe('number.isnt(other)', () => {
    it('should assert', () => {
      let result, error, value = faker.random.number(), test = faker.random.number();
      try {
        result = value.isnt(test);
      } catch(err) {
        error = err;
      };
      is(result);
      isnt(error);
    });
  });
  describe('number.isnt(array)', () => {
    it('should assert', () => {
      let result, error, value = faker.random.number(), test = [ value ];
      try {
        result = value.isnt(test);
      } catch(err) {
        error = err;
      };
      is(result);
      isnt(error);
    });
  });
  describe('number.isnt(boolean)', () => {
    it('should assert', () => {
      let result, error, value = faker.random.number(), test = faker.random.boolean();
      try {
        result = value.isnt(test);
      } catch(err) {
        error = err;
      };
      is(result);
      isnt(error);
    });
  });
  describe('number.isnt(number)', () => {
    it('should assert', () => {
      let result, error, value = faker.random.number(), test = value;
      try {
        result = value.isnt(test);
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);
    });
  });
  describe('number.isnt(object)', () => {
    it('should assert', () => {
      let result, error, value = faker.random.number(), test = { value };
      try {
        result = value.isnt(test);
      } catch(err) {
        error = err;
      };
      is(result);
      isnt(error);
    });
  });
  describe('number.isnt(string)', () => {
    it('should assert', () => {
      let result, error, value = faker.random.number(), test = value.toString();
      try {
        result = value.isnt(test);
      } catch(err) {
        error = err;
      };
      is(result);
      isnt(error);
    });
  });
  describe('number.isnt(Array)', () => {
    it('should assert', () => {
      let result, error, value = faker.random.number(), test = Array;
      try {
        result = value.isnt(test);
      } catch(err) {
        error = err;
      };
      is(result);
      isnt(error);
    });
  });
  describe('number.isnt(Boolean)', () => {
    it('should assert', () => {
      let result, error, value = faker.random.number(), test = Boolean;
      try {
        result = value.isnt(test);
      } catch(err) {
        error = err;
      };
      is(result);
      isnt(error);
    });
  });
  describe('number.isnt(Number)', () => {
    it('should assert', () => {
      let result, error, value = faker.random.number(), test = Number;
      try {
        result = value.isnt(test);
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);
    });
  });
  describe('number.isnt(Object)', () => {
    it('should assert', () => {
      let result, error, value = faker.random.number(), test = Object;
      try {
        result = value.isnt(test);
      } catch(err) {
        error = err;
      };
      is(result);
      isnt(error);
    });
  });
  describe('number.isnt(String)', () => {
    it('should assert', () => {
      let result, error, value = faker.random.number(), test = String;
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
