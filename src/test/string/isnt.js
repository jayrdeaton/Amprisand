let faker = require('faker'),
  { is, isnt } = require('../../../');

describe('isnt', () => {
  describe('string.isnt()', () => {
    it('should not assert', () => {
      let result, error, value = faker.random.word();
      try {
        result = value.isnt();
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);
    });
  });
  describe('"".isnt()', () => {
    it('should assert', () => {
      let result, error, value = '';
      try {
        result = value.isnt();
      } catch(err) {
        error = err;
      };
      is(result);
      isnt(error);
    });
  });
  describe('string.isnt(other)', () => {
    it('should assert', () => {
      let result, error, value = faker.random.word(), test = faker.random.word();
      try {
        result = value.isnt(test);
      } catch(err) {
        error = err;
      };
      is(result);
      isnt(error);
    });
  });
  describe('string.isnt(STRING)', () => {
    it('should assert', () => {
      let result, error, value = faker.random.word().toLowerCase(), test = value.toUpperCase();
      try {
        result = value.isnt(test);
      } catch(err) {
        error = err;
      };
      is(result);
      isnt(error);
    });
  });
  describe('string.isnt(array)', () => {
    it('should assert', () => {
      let result, error, value = faker.random.word(), test = [ value ];
      try {
        result = value.isnt(test);
      } catch(err) {
        error = err;
      };
      is(result);
      isnt(error);
    });
  });
  describe('string.isnt(boolean)', () => {
    it('should assert', () => {
      let result, error, value = faker.random.word(), test = faker.random.boolean();
      try {
        result = value.isnt(test);
      } catch(err) {
        error = err;
      };
      is(result);
      isnt(error);
    });
  });
  describe('string.isnt(number)', () => {
    it('should assert', () => {
      let result, error, test = faker.random.number(), value = test.toString();
      try {
        result = value.isnt(test);
      } catch(err) {
        error = err;
      };
      is(result);
      isnt(error);
    });
  });
  describe('string.isnt(object)', () => {
    it('should assert', () => {
      let result, error, value = faker.random.word(), test = { value };
      try {
        result = value.isnt(test);
      } catch(err) {
        error = err;
      };
      is(result);
      isnt(error);
    });
  });
  describe('string.isnt(string)', () => {
    it('should not assert', () => {
      let result, error, value = faker.random.word(), test = value;
      try {
        result = value.isnt(test);
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);
    });
  });
  describe('string.isnt(Array)', () => {
    it('should assert', () => {
      let result, error, value = faker.random.word(), test = Array;
      try {
        result = value.isnt(test);
      } catch(err) {
        error = err;
      };
      is(result);
      isnt(error);
    });
  });
  describe('string.isnt(Boolean)', () => {
    it('should assert', () => {
      let result, error, value = faker.random.word(), test = Boolean;
      try {
        result = value.isnt(test);
      } catch(err) {
        error = err;
      };
      is(result);
      isnt(error);
    });
  });
  describe('string.isnt(Number)', () => {
    it('should assert', () => {
      let result, error, value = faker.random.word(), test = Number;
      try {
        result = value.isnt(test);
      } catch(err) {
        error = err;
      };
      is(result);
      isnt(error);
    });
  });
  describe('string.isnt(Object)', () => {
    it('should assert', () => {
      let result, error, value = faker.random.word(), test = Object;
      try {
        result = value.isnt(test);
      } catch(err) {
        error = err;
      };
      is(result);
      isnt(error);
    });
  });
  describe('string.isnt(String)', () => {
    it('should not assert', () => {
      let result, error, value = faker.random.word(), test = String;
      try {
        result = value.isnt(test);
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);
    });
  });
});
