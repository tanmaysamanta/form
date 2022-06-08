const assert = require('assert');
const { Form, registerResponses } = require('../src/form.js');
const { isValidName, isValidDOB } = require('../src/fillForm.js');
const { Field } = require('../src/field.js');

const identity = x => x;

describe('registerResponses', () => {
  it('should add a response', () => {
    const nameField = new Field('name', 'Enter name', isValidName);
    const form = new Form(nameField);
    registerResponses('tanmay', form, identity);

    assert.deepStrictEqual(form.getResponses(), { name: 'tanmay' })
  });

  it('should show current promt', () => {
    const nameField = new Field('name', 'Enter name', isValidName);
    const dobField = new Field('dob', 'Enter name', isValidDOB);
    const form = new Form(nameField, dobField);
    const logStack = [];
    const logger = promt => logStack.push(promt);
    registerResponses('tanmay', form, identity, logger);

    assert.deepStrictEqual(['Enter name'], logStack);
  });

  it('should show invalid response message', () => {
    const nameField = new Field('name', 'Enter name', isValidName);
    const form = new Form(nameField);
    const logStack = [];
    const logger = promt => logStack.push(promt);
    registerResponses('joy', form, identity, logger);

    assert.deepStrictEqual(['Invalid response', 'Enter name'], logStack);
  });
});

describe('Form', () => {
  it('Should show current pormt', () => {
    const nameField = new Field('name', 'Enter name');
    const form = new Form(nameField);
    assert.deepStrictEqual(form.showCurrentPromt(), 'Enter name');
  });

  it('Should return responses', () => {
    const nameField = new Field('name', 'Enter name')
    const form = new Form(nameField);
    form.register('tanmay')
    assert.deepStrictEqual(form.getResponses(), { name: 'tanmay' });
  });

});
