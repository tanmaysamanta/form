const { fillForm, createForm } = require('./src/fillForm.js');

const main = () => {
  const form = createForm();
  fillForm(form);
};

main();