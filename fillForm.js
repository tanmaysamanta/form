const assert = require('assert');
const fs = require('fs');
const { Form } = require('./form.js');

const updateForm = (formDetails) => {
  fs.writeFileSync('.fromData.json', JSON.stringify(formDetails), 'utf8');
}

const isValidChar = (name) => {
  return name.split('').every(char => !isFinite(char))
};

const isValidDOB = (date) => {
  const result = /^\d{4}-\d{2}-\d{2}$/.test(date);
  return result;
};

const isValidName = (name) => {
  return name.length >= 5 && isValidChar(name);
};

const isValidHobbies = (hobbies) => {
  return hobbies !== '';
};

const isValidPhNo = (phNo) => {
  return phNo.length === 10 && isFinite(phNo);
};

const isValidAddress = (address) => {
  return address !== '';
};

const validators = {
  Name: isValidName,
  DOB: isValidDOB,
  Hobbies: isValidHobbies,
  PhNo: isValidPhNo,
  Address: isValidAddress,
}

const parse = (answer, field) => {
  if (field === 'Hobbies') {
    return answer.split(',');
  }
  return answer;
}

const fillForm = (queries, fields, form) => {
  process.stdin.setEncoding('utf8');

  let index = 0;
  console.log(form.showQuestion(index));
  process.stdin.on('data', (chunk) => {
    const informatio = chunk.split('\n')[0];
    const field = fields[index];
    const answer = parse(informatio, field);

    if (validators[field](answer)) {
      form.register(field, answer);
      index++;
    }

    if (index >= queries.length) {
      updateForm(form.formDetails);
      console.log('Thank you');
      process.exit();
    }
    console.log(form.showQuestion(index));
  });
};

const main = () => {
  const queries = [
    'Please enter your name :',
    'Please enter your DOB :',
    'Please enter your hobbies :',
    'Please enter your phone number :',
    'Please enter your address line 1 :',
    'Please enter your address line 2 :'
  ];
  let form = new Form(queries);
  const fields = ['Name', 'DOB', 'Hobbies', 'PhNo', 'Address', 'Address'];
  fillForm(queries, fields, form);
};

main();

