// const { EventEmitter } = require('events');

class Form {
  constructor(queries) {
    this.queries = queries;
    this.formDetails = {};
  }

  showQuestion(queryNo) {
    return this.queries[queryNo];
  }

  addInfo(query, answer) {
    this.formDetails[query] = answer;
  }

}

const updateInfo = (form, question, info) => {
  const questionDetails = question.split(' ');
  const query = questionDetails[questionDetails.length - 1];
  form[query] = info;
}

const createForm = () => {
  const queries = [
    'Please enter your name:',
    'Please enter your DOB:',
    'Please enter your hobbies'
  ];
  let index = 0;
  let form = {};
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', (chunk) => {
    const info = chunk.trim();
    from = updateInfo(form, queries[index], chunk);
    index++;
    if (index >= queries.length) {
      console.log(form);
      process.exit();
    }
  });
};

createForm();
