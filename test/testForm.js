const assert = require('assert');
const { Form } = require('../src/form.js');
const { Field } = require('../src/field.js');

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
