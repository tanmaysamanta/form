const fs = require('fs');
const { Form } = require('./form.js');

const updateForm = (formDetails) => {
  fs.writeFileSync('.fromData.json', JSON.stringify(formDetails), 'utf8');
}

const createForm = (queries, events, form) => {
  process.stdin.setEncoding('utf8');

  let index = 0;
  console.log(form.showQuestion(index));
  process.stdin.on('data', (chunk) => {
    const informatio = chunk.split('\n');
    const info = informatio[0];
    index = form[events[index]](info, index);
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
  const events = ['addName', 'addDOB', 'addHobbies', 'addPhNo', 'addAddress', 'addAddress'];
  createForm(queries, events, form);
};

main();

