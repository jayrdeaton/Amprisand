let faker = require('faker'),
  { is, isnt } = require('../../../');

describe('is', () => {
  describe('number.is()', () => {
    it('should assert', () => {
      let result, error, value = faker.random.number();
      try {
        result = value.is();
      } catch(err) {
        error = err;
      };
      is(result);
      isnt(error);
    });
  });
  describe('0.is()', () => {
    it('should not assert', () => {
      let result, error, value = 0;
      try {
        result = value.is();
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);
    });
  });
  describe('number.is(other)', () => {
    it('should not assert', () => {
      let result, error, value = faker.random.number(), test = faker.random.number();
      try {
        result = value.is(test);
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);
    });
  });
  describe('number.is(array)', () => {
    it('should not assert', () => {
      let result, error, value = faker.random.number(), test = [ value ];
      try {
        result = value.is(test);
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);
    });
  });
  describe('number.is(boolean)', () => {
    it('should not assert', () => {
      let result, error, value = faker.random.number(), test = faker.random.boolean();
      try {
        result = value.is(test);
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);
    });
  });
  describe('number.is(number)', () => {
    it('should assert', () => {
      let result, error, value = faker.random.number(), test = value;
      try {
        result = value.is(test);
      } catch(err) {
        error = err;
      };
      is(result);
      isnt(error);
    });
  });
  describe('number.is(object)', () => {
    it('should not assert', () => {
      let result, error, value = faker.random.number(), test = { value };
      try {
        result = value.is(test);
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);
    });
  });
  describe('number.is(string)', () => {
    it('should not assert', () => {
      let result, error, value = faker.random.number(), test = value.toString();
      try {
        result = value.is(test);
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);
    });
  });
  describe('number.is(Array)', () => {
    it('should not assert', () => {
      let result, error, value = faker.random.number(), test = Array;
      try {
        result = value.is(test);
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);
    });
  });
  describe('number.is(Boolean)', () => {
    it('should not assert', () => {
      let result, error, value = faker.random.number(), test = Boolean;
      try {
        result = value.is(test);
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);
    });
  });
  describe('number.is(Number)', () => {
    it('should assert', () => {
      let result, error, value = faker.random.number(), test = Number;
      try {
        result = value.is(test);
      } catch(err) {
        error = err;
      };
      is(result);
      isnt(error);
    });
  });
  describe('number.is(Object)', () => {
    it('should not assert', () => {
      let result, error, value = faker.random.number(), test = Object;
      try {
        result = value.is(test);
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);
    });
  });
  describe('number.is(String)', () => {
    it('should not assert', () => {
      let result, error, value = faker.random.number(), test = String;
      try {
        result = value.is(test);
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);
    });
  });
});
