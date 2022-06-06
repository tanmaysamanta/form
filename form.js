const fs = require('fs');

const updateForm = (formDetails) => {
  const name = formDetails[0];
  const DOB = formDetails[1];
  const hobbies = formDetails[2].split(',');
  const formatedFormInfos = { name, DOB, hobbies };
  fs.writeFileSync('.fromData.json', JSON.stringify(formatedFormInfos), 'utf8');
}
const createForm = (queries) => {
  let index = 0;
  let formDetails = [];
  console.log(queries[index]);
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', (chunk) => {
    const informatio = chunk.split('\n');
    const info = informatio[0];
    formDetails.push(info);
    index++;
    console.log(queries[index]);
    if (index >= queries.length) {
      updateForm(formDetails);
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

