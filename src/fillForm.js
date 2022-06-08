const fs = require('fs');
const { Form } = require('./form.js');
const { Field } = require('./field.js');

const updateForm = (formDetails) => {
  fs.writeFileSync('./fromData.json', JSON.stringify(formDetails), 'utf8');
};

// const isValidChar = (name) => {
//   return name.split('').every(char => !/[0-9]/.test(char));
// };

// const isValidDOB = (date) => {
//   const result = /^\d{4}-\d{2}-\d{2}$/.test(date);
//   return result;
// };

// const isValidName = (name) => {
//   return name.length >= 5 && isValidChar(name);
// };

// const isValidHobbies = (hobbies) => {
//   return hobbies !== '';
// };

// const isValidPhNo = (phNo) => {
//   return phNo.length === 10 && isFinite(phNo);
// };

// const isValidAddress = (address) => {
//   return address !== '';
// };

// const parse = (answer, field) => {
//   if (field === 'Hobbies') {
//     return answer.split(',');
//   }
//   return answer;
// };

const fillForm = (form) => {
  process.stdin.setEncoding('utf8');

  console.log(form.showCurrentPromt());
  process.stdin.on('data', (chunk) => {
    const response = chunk.trim();
    form.register(response);
    if (form.isFilled()) {
      updateForm(form.getResponses());
      console.log('thank you');
      process.exit();
    }

    console.log(form.showCurrentPromt());
  });
};

const main = () => {
  const nameField = new Field('name', 'Enter name');
  const dobField = new Field('dob', 'Enter dob');
  const hobbiesField = new Field('hobbies', 'Enter hobbies');
  const form = new Form(nameField, dobField, hobbiesField);

  fillForm(form);
};

main();
