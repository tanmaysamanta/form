class Form {
  constructor(queries) {
    this.queries = queries;
    this.formDetails = {};
  }

  showQuestion(queryNo) {
    return this.queries[queryNo];
  }

  register(query, answer) {
    if (query === 'Address') {
      let fullAddress = this.formDetails[query] ? this.formDetails[query] : '';
      fullAddress = fullAddress.concat(`\n${answer}`);
      this.formDetails[query] = fullAddress.trim();
      return;
    }
    this.formDetails[query] = answer;
  }
}

exports.Form = Form;
