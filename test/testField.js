const assert = require('assert');
const { Field } = require('../src/field.js');

describe('Field', () => {
  it('should return field name', () => {
    const nameField = new Field('name', 'Enter name')
    assert.deepStrictEqual(nameField.fieldName(), 'name');
  });

  it('should return promt name', () => {
    const nameField = new Field('name', 'Enter name')
    assert.deepStrictEqual(nameField.getPromt(), 'Enter name');
  });

  it('should check when field is fill', () => {
    const nameField = new Field('name', 'Enter name')
    nameField.fill('tanmay');
    assert.deepStrictEqual(nameField.isFilled(), true);
  });

  it('should check when field is not fill', () => {
    const nameField = new Field('name', 'Enter name')
    assert.deepStrictEqual(nameField.isFilled(), false);
  });
});