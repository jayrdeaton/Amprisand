let faker = require('faker'),
  { is, isnt } = require('../../../');

describe('isnt', () => {
  describe('object.isnt()', () => {
    it('should not assert', () => {
      let result, error, value = { value: faker.random.word() };
      try {
        result = value.isnt();
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);
    });
  });
  describe('{}.isnt()', () => {
    it('should assert', () => {
      let result, error, value = {};
      try {
        result = value.isnt();
      } catch(err) {
        error = err;
      };
      is(result);
      isnt(error);
    });
  });
  describe('object.isnt(other)', () => {
    it('should assert', () => {
      let result, error, value = { value: faker.random.word() }, test = { test: faker.random.word() };
      try {
        result = value.isnt(test);
      } catch(err) {
        error = err;
      };
      is(result);
      isnt(error);
    });
  });
  describe('object.isnt(array)', () => {
    it('should assert', () => {
      let result, error, value = { value: faker.random.word() }, test = [ value.value ];
      try {
        result = value.isnt(test);
      } catch(err) {
        error = err;
      };
      is(result);
      isnt(error);
    });
  });
  describe('object.isnt(boolean)', () => {
    it('should assert', () => {
      let result, error, value = { value: faker.random.boolean() }, test = value.value;
      try {
        result = value.isnt(test);
      } catch(err) {
        error = err;
      };
      is(result);
      isnt(error);
    });
  });
  describe('object.isnt(number)', () => {
    it('should assert', () => {
      let result, error, value = { value: faker.random.number() }, test = value.value;
      try {
        result = value.isnt(test);
      } catch(err) {
        error = err;
      };
      is(result);
      isnt(error);
    });
  });
  describe('object.isnt(object)', () => {
    it('should assert', () => {
      let result, error, value = { value: faker.random.word() }, test = value;
      try {
        result = value.isnt(test);
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);
    });
  });
  describe('object.is(object)', () => {
    it('should assert', () => {
      let result, error;
      let value = {
        array: [ faker.random.number(), faker.random.number(), faker.random.number() ],
        boolean: faker.random.boolean(),
        number: faker.random.number(),
        object: { a: faker.random.word(), b: faker.random.word(), c: faker.random.word() },
        string: faker.random.word(),
      };
      let test = JSON.parse(JSON.stringify(value));
      try {
        result = value.isnt(test);
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);
    });
  });
  describe('object.isnt(string)', () => {
    it('should assert', () => {
      let result, error, value = { value: faker.random.word() }, test = value.value;
      try {
        result = value.isnt(test);
      } catch(err) {
        error = err;
      };
      is(result);
      isnt(error);
    });
  });
  describe('object.isnt(Array)', () => {
    it('should assert', () => {
      let result, error, value = { value: faker.random.word() }, test = Array;
      try {
        result = value.isnt(test);
      } catch(err) {
        error = err;
      };
      is(result);
      isnt(error);
    });
  });
  describe('object.isnt(Boolean)', () => {
    it('should assert', () => {
      let result, error, value = { value: faker.random.word() }, test = Boolean;
      try {
        result = value.isnt(test);
      } catch(err) {
        error = err;
      };
      is(result);
      isnt(error);
    });
  });
  describe('array.isnt(Number)', () => {
    it('should assert', () => {
      let result, error, value = { value: faker.random.word() }, test = Number;
      try {
        result = value.isnt(test);
      } catch(err) {
        error = err;
      };
      is(result);
      isnt(error);
    });
  });
  describe('object.isnt(Object)', () => {
    it('should not assert', () => {
      let result, error, value = { value: faker.random.word() }, test = Object;
      try {
        result = value.isnt(test);
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);
    });
  });
  describe('object.isnt(String)', () => {
    it('should assert', () => {
      let result, error, value = { value: faker.random.word() }, test = String;
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
