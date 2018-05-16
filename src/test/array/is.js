let faker = require('faker'),
  { is, isnt } = require('../../../');

describe('is', () => {
  describe('array.is()', () => {
    it('should assert', () => {
      let result, error, value = [ faker.random.number() ];
      try {
        result = value.is();
      } catch(err) {
        error = err;
      };
      is(result);
      isnt(error);
    });
  });
  describe('[].is()', () => {
    it('should not assert', () => {
      let result, error, value = [];
      try {
        result = value.is();
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);
    });
  });
  describe('array.is(other)', () => {
    it('should not assert', () => {
      let result, error, value = [ faker.random.number() ], test = [ faker.random.number() ];
      try {
        result = value.is(test);
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);
    });
  });
  describe('array.is(array)', () => {
    it('should assert', () => {
      let result, error, value = [ faker.random.number() ];
      try {
        result = value.is(value);
      } catch(err) {
        error = err;
      };
      is(result);
      isnt(error);
    });
  });
  describe('array.is(boolean)', () => {
    it('should not assert', () => {
      let result, error, value = [ faker.random.number() ], test = faker.random.boolean();
      try {
        result = value.is(test);
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);
    });
  });
  describe('array.is(number)', () => {
    it('should not assert', () => {
      let result, error, value = [ faker.random.number() ], test = value[0];
      try {
        result = value.is(test);
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);
    });
  });
  describe('array.is(object)', () => {
    it('should not assert', () => {
      let result, error, value = [ faker.random.word() ], test = { test: value[0] };
      try {
        result = value.is(test);
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);
    });
  });
  describe('array.is(string)', () => {
    it('should not assert', () => {
      let result, error, value = [ faker.random.word() ], test = value[0];
      try {
        result = value.is(test);
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);
    });
  });
  describe('array.is(Array)', () => {
    it('should assert', () => {
      let result, error, value = [ faker.random.number() ];
      try {
        result = value.is(Array);
      } catch(err) {
        error = err;
      };
      is(result);
      isnt(error);
    });
  });
  describe('array.is(Boolean)', () => {
    it('should not assert', () => {
      let result, error, value = [ faker.random.boolean() ], test = Boolean;
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
      let result, error, value = [ faker.random.number() ], test = Number;
      try {
        result = value.is(test);
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);
    });
  });
  describe('array.is(Object)', () => {
    it('should not assert', () => {
      let result, error, value = [ faker.random.word() ], test = Object;
      try {
        result = value.is(test);
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);
    });
  });
  describe('array.is(String)', () => {
    it('should not assert', () => {
      let result, error, value = [ faker.random.word() ], test = String;
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
