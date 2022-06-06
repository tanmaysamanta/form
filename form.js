const fs = require('fs');
const { Form } = require('./formDetails');

const updateForm = (formDetails) => {
  fs.writeFileSync('.fromData.json', JSON.stringify(formDetails), 'utf8');
}

const createForm = (queries) => {
  let form = new Form(queries);
  const events = ['addName', 'addDOB', 'addHobbies']

  process.stdin.setEncoding('utf8');

  let index = 0;
  console.log(form.showQuestion(index));
  process.stdin.on('data', (chunk) => {
    const informatio = chunk.split('\n');
    const info = informatio[0];
    index = form[events[index]](info, index);
    console.log(form.showQuestion(index));
    if (index >= queries.length) {
      updateForm(form.formDetails);
      console.log('Thank you');
      process.exit();
    }
  });
};

const main = () => {
  const queries = [
    'Please enter your name',
    'Please enter your DOB',
    'Please enter your hobbies'
  ];
  createForm(queries);
};

main();

