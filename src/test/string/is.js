let faker = require('faker'),
  { is, isnt } = require('../../../');

describe('is', () => {
  describe('string.is()', () => {
    it('should assert', () => {
      let result, error, value = faker.random.word();
      try {
        result = value.is();
      } catch(err) {
        error = err;
      };
      is(result);
      isnt(error);
    });
  });
  describe('"".is()', () => {
    it('should not assert', () => {
      let result, error, value = '';
      try {
        result = value.is();
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);
    });
  });
  describe('string.is(other)', () => {
    it('should not assert', () => {
      let result, error, value = faker.random.word(), test = faker.random.word();
      try {
        result = value.is(test);
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);
    });
  });
  describe('string.is(STRING)', () => {
    it('should not assert', () => {
      let result, error, value = faker.random.word().toLowerCase(), test = value.toUpperCase();
      try {
        result = value.is(test);
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);
    });
  });
  describe('string.is(array)', () => {
    it('should not assert', () => {
      let result, error, value = faker.random.word(), test = [ value ];
      try {
        result = value.is(test);
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);
    });
  });
  describe('string.is(boolean)', () => {
    it('should not assert', () => {
      let result, error, value = faker.random.word(), test = faker.random.boolean();
      try {
        result = value.is(test);
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);
    });
  });
  describe('string.is(number)', () => {
    it('should not assert', () => {
      let result, error, test = faker.random.number(), value = test.toString();
      try {
        result = value.is(test);
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);
    });
  });
  describe('string.is(object)', () => {
    it('should not assert', () => {
      let result, error, value = faker.random.word(), test = { value };
      try {
        result = value.is(test);
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);
    });
  });
  describe('string.is(string)', () => {
    it('should assert', () => {
      let result, error, value = faker.random.word(), test = value;
      try {
        result = value.is(test);
      } catch(err) {
        error = err;
      };
      is(result);
      isnt(error);
    });
  });
  describe('string.is(Array)', () => {
    it('should not assert', () => {
      let result, error, value = faker.random.word(), test = Array;
      try {
        result = value.is(test);
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);
    });
  });
  describe('string.is(Boolean)', () => {
    it('should not assert', () => {
      let result, error, value = faker.random.word(), test = Boolean;
      try {
        result = value.is(test);
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);
    });
  });
  describe('string.is(Number)', () => {
    it('should not assert', () => {
      let result, error, value = faker.random.word(), test = Number;
      try {
        result = value.is(test);
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);
    });
  });
  describe('string.is(Object)', () => {
    it('should not assert', () => {
      let result, error, value = faker.random.word(), test = Object;
      try {
        result = value.is(test);
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);
    });
  });
  describe('string.is(String)', () => {
    it('should assert', () => {
      let result, error, value = faker.random.word(), test = String;
      try {
        result = value.is(test);
      } catch(err) {
        error = err;
      };
      is(result);
      isnt(error);
    });
  });
});
