let faker = require('faker'),
  { is, isnt } = require('../../../');

describe('is', () => {
  describe('object.is()', () => {
    it('should assert', () => {
      let result, error, value = { value: faker.random.word() };
      try {
        result = value.is();
      } catch(err) {
        error = err;
      };
      is(result);
      isnt(error);
    });
  });
  describe('{}.is()', () => {
    it('should not assert', () => {
      let result, error, value = {};
      try {
        result = value.is();
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);
    });
  });
  describe('object.is(other)', () => {
    it('should not assert', () => {
      let result, error, value = { value: faker.random.word() }, test = { test: faker.random.word() };
      try {
        result = value.is(test);
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);
    });
  });
  describe('object.is(array)', () => {
    it('should not assert', () => {
      let result, error, value = { value: faker.random.word() }, test = [ value.value ];
      try {
        result = value.is(test);
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);
    });
  });
  describe('object.is(boolean)', () => {
    it('should not assert', () => {
      let result, error, value = { value: faker.random.boolean() }, test = value.value;
      try {
        result = value.is(test);
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);
    });
  });
  describe('object.is(number)', () => {
    it('should not assert', () => {
      let result, error, value = { value: faker.random.number() }, test = value.value;
      try {
        result = value.is(test);
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);
    });
  });
  describe('object.is(object)', () => {
    it('should assert', () => {
      let result, error, value = { value: faker.random.word() }, test = value;
      try {
        result = value.is(test);
      } catch(err) {
        error = err;
      };
      is(result);
      isnt(error);
    });
  });
  describe('object.is(string)', () => {
    it('should not assert', () => {
      let result, error, value = { value: faker.random.word() }, test = value.value;
      try {
        result = value.is(test);
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);
    });
  });
  describe('object.is(Array)', () => {
    it('should assert', () => {
      let result, error, value = { value: faker.random.word() }, test = Array;
      try {
        result = value.is(test);
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);
    });
  });
  describe('object.is(Boolean)', () => {
    it('should not assert', () => {
      let result, error, value = { value: faker.random.word() }, test = Boolean;
      try {
        result = value.is(test);
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);
    });
  });
  describe('array.is(Number)', () => {
    it('should not assert', () => {
      let result, error, value = { value: faker.random.word() }, test = Number;
      try {
        result = value.is(test);
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);
    });
  });
  describe('object.is(Object)', () => {
    it('should assert', () => {
      let result, error, value = { value: faker.random.word() }, test = Object;
      try {
        result = value.is(test);
      } catch(err) {
        error = err;
      };
      is(result);
      isnt(error);
    });
  });
  describe('object.is(String)', () => {
    it('should not assert', () => {
      let result, error, value = { value: faker.random.word() }, test = String;
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
