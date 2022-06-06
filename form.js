const fs = require('fs');
const { Form } = require('./formDetails');

const updateForm = (formDetails) => {
  fs.writeFileSync('.fromData.json', JSON.stringify(formDetails), 'utf8');
}

const createForm = (queries) => {
  const events = ['addName', 'addDOB', 'addHobbies']
  let index = 0;
  let formDetails = new Form(queries);
  console.log(formDetails.showQuestion(index));
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', (chunk) => {
    const informatio = chunk.split('\n');
    const info = informatio[0];
    index = formDetails[events[index]](info, index);
    console.log(formDetails.showQuestion(index));
    if (index >= queries.length) {
      updateForm(formDetails.formDetails);
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

