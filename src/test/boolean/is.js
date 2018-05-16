let faker = require('faker'),
  { is, isnt } = require('../../../');

describe('is', () => {
  describe('true.is()', () => {
    it('should assert', () => {
      let result, error, value = true;
      try {
        result = value.is();
      } catch(err) {
        error = err;
      };
      is(result);
      isnt(error);
    });
  });
  describe('false.is()', () => {
    it('should not assert', () => {
      let result, error, value = false;
      try {
        result = value.is();
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);
    });
  });
  describe('boolean.is(other)', () => {
    it('should not assert', () => {
      let result, error, value = true, test = false;
      try {
        result = value.is(test);
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);
    });
  });
  describe('boolean.is(array)', () => {
    it('should not assert', () => {
      let result, error, value = faker.random.boolean(), test = [ value ];
      try {
        result = value.is(test);
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);
    });
  });
  describe('boolean.is(boolean)', () => {
    it('should assert', () => {
      let result, error, value = faker.random.boolean();
      try {
        result = value.is(value);
      } catch(err) {
        error = err;
      };
      is(result);
      isnt(error);
    });
  });
  describe('boolean.is(number)', () => {
    it('should not assert', () => {
      let result, error, value = faker.random.boolean(), test = faker.random.number();
      try {
        result = value.is(test);
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);
    });
  });
  describe('boolean.is(object)', () => {
    it('should not assert', () => {
      let result, error, value = faker.random.boolean(), test = { value };
      try {
        result = value.is(test);
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);
    });
  });
  describe('boolean.is(string)', () => {
    it('should not assert', () => {
      let result, error, value = faker.random.boolean(), test = faker.random.word();
      try {
        result = value.is(test);
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);

    });
  });
  describe('boolean.is(Array)', () => {
    it('should not assert', () => {
      let result, error, value = faker.random.boolean(), test = Array;
      try {
        result = value.is(test);
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);
    });
  });
  describe('boolean.is(Boolean)', () => {
    it('should assert', () => {
      let result, error, value = faker.random.boolean(), test = Boolean;
      try {
        result = value.is(test);
      } catch(err) {
        error = err;
      };
      is(result);
      isnt(error);
    });
  });
  describe('boolean.is(Number)', () => {
    it('should not assert', () => {
      let result, error, value = faker.random.boolean(), test = Number;
      try {
        result = value.is(test);
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);
    });
  });
  describe('boolean.is(Object)', () => {
    it('should not assert', () => {
      let result, error, value = faker.random.boolean(), test = Object;
      try {
        result = value.is(test);
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);
    });
  });
  describe('boolean.is(String)', () => {
    it('should assert', () => {
      let result, error, value = faker.random.boolean(), test = String;
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
