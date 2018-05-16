let faker = require('faker'),
  { is, isnt } = require('../../../');

describe('isnt', () => {
  describe('array.isnt()', () => {
    it('should not assert', () => {
      let result, error, value = [ faker.random.number() ];
      try {
        result = value.isnt();
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);
    });
  });
  describe('[].isnt()', () => {
    it('should assert', () => {
      let result, error, value = [];
      try {
        result = value.isnt();
      } catch(err) {
        error = err;
      };
      is(result);
      isnt(error);
    });
  });
  describe('array.isnt(other)', () => {
    it('should assert', () => {
      let result, error, value = [ faker.random.number() ], test = [ faker.random.number() ];
      try {
        result = value.isnt(test);
      } catch(err) {
        error = err;
      };
      is(result);
      isnt(error);
    });
  });
  describe('array.isnt(array)', () => {
    it('should not assert', () => {
      let result, error, value = [ faker.random.number() ];
      try {
        result = value.isnt(value);
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);
    });
  });
  describe('array.isnt(boolean)', () => {
    it('should assert', () => {
      let result, error, value = [ faker.random.number() ], test = faker.random.boolean();
      try {
        result = value.isnt(test);
      } catch(err) {
        error = err;
      };
      is(result);
      isnt(error);
    });
  });
  describe('array.isnt(number)', () => {
    it('should assert', () => {
      let result, error, value = [ faker.random.number() ], test = value[0];
      try {
        result = value.isnt(test);
      } catch(err) {
        error = err;
      };
      is(result);
      isnt(error);
    });
  });
  describe('array.isnt(object)', () => {
    it('should assert', () => {
      let result, error, value = [ faker.random.word() ], test = { test: value[0] };
      try {
        result = value.isnt(test);
      } catch(err) {
        error = err;
      };
      is(result);
      isnt(error);
    });
  });
  describe('array.isnt(string)', () => {
    it('should assert', () => {
      let result, error, value = [ faker.random.word() ], test = value[0];
      try {
        result = value.isnt(test);
      } catch(err) {
        error = err;
      };
      is(result);
      isnt(error);
    });
  });
  describe('array.isnt(Array)', () => {
    it('should not assert', () => {
      let result, error, value = [ faker.random.number() ], test = Array;
      try {
        result = value.isnt(test);
      } catch(err) {
        error = err;
      };
      isnt(result);
      is(error);
    });
  });
  describe('array.isnt(Boolean)', () => {
    it('should assert', () => {
      let result, error, value = [ faker.random.boolean() ], test = Boolean;
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
      let result, error, value = [ faker.random.number() ], test = Number;
      try {
        result = value.isnt(test);
      } catch(err) {
        error = err;
      };
      is(result);
      isnt(error);
    });
  });
  describe('array.isnt(Object)', () => {
    it('should assert', () => {
      let result, error, value = [ faker.random.word() ], test = Object;
      try {
        result = value.isnt(test);
      } catch(err) {
        error = err;
      };
      is(result);
      isnt(error);
    });
  })
  describe('array.isnt(String)', () => {
    it('should assert', () => {
      let result, error, value = [ faker.random.word() ], test = String;
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
