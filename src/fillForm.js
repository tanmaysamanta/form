const fs = require('fs');
const { Form, registerResponses } = require('./form.js');
const { Field } = require('./field.js');
const { MultiLineField } = require('./multiLineField.js');

const updateForm = (formDetails) => {
  fs.writeFileSync('./formData.json', JSON.stringify(formDetails), 'utf8');
};

const isValidChar = (name) => {
  return name.split('').every(char => !/[0-9]/.test(char));
};

const isValidName = (name) => {
  return name.length >= 5 && isValidChar(name);
};

const isValidDOB = (date) => {
  const result = /^\d{4}-\d{2}-\d{2}$/.test(date);
  return result;
};

const isNotEmpty = (hobbies) => {
  return hobbies !== '';
};

const isValidPhNo = (phNo) => {
  return phNo.match(/^\d{10}$/);
};

const comaSplit = (text) => text.split(',');
const joinByNewLine = (lines) => lines.join('\n');

const createForm = () => {
  const nameField = new Field('name', 'Enter name', isValidName);
  const dobField = new Field('dob', 'Enter dob', isValidDOB);
  const hobbiesField = new Field('hobbies', 'Enter hobbies', isNotEmpty, comaSplit);
  const phNoField = new Field('phNo', 'Enter ph Number', isValidPhNo)
  const addressField = new MultiLineField('address', ['Enter address line 1', 'Enter address line 2'], isNotEmpty, joinByNewLine);
  return new Form(nameField, dobField, hobbiesField, phNoField, addressField);
};

const fillForm = (form) => {
  const writToFile = (responses) => {
    updateForm(responses);
    console.log('thank you');
    process.exit();
  };

  process.stdin.setEncoding('utf8');
  console.log(form.showCurrentPromt());
  process.stdin.on('data', (chunk) => {
    const responses = chunk.trim().split('\n');
    responses.forEach(response => {
      registerResponses(response, form, writToFile, console.log);
    });
  });
};

module.exports = { fillForm, isValidName, isValidDOB, isNotEmpty, createForm };
