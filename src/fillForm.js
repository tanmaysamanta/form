const fs = require('fs');
const { Form, registerResponses } = require('./form.js');
const { Field } = require('./field.js');
const { text } = require('stream/consumers');

const updateForm = (formDetails) => {
  fs.writeFileSync('./fromData.json', JSON.stringify(formDetails), 'utf8');
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

const isValidHobbies = (hobbies) => {
  return hobbies !== '';
};

const comaSplit = (text) => text.split(',');

const createForm = () => {
  const nameField = new Field('name', 'Enter name', isValidName);
  const dobField = new Field('dob', 'Enter dob', isValidDOB);
  const hobbiesField = new Field('hobbies', 'Enter hobbies', isValidHobbies, comaSplit);
  return new Form(nameField, dobField, hobbiesField);
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
    registerResponses(chunk, form, writToFile, console.log);
  });
};

module.exports = { fillForm, isValidName, isValidDOB, isValidHobbies, createForm };
