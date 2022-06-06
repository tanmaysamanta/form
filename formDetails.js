class Form {
  constructor(queries) {
    this.queries = queries;
    this.formDetails = {};
  }

  showQuestion(queryNo) {
    return this.queries[queryNo];
  }

  addName(name, queryNo) {
    if (name.length >= 5) {
      this.formDetails.name = name;
      queryNo++;
    }
    return queryNo;
  }

  addDOB(DOB, queryNo) {
    this.formDetails.DOB = DOB;
    return ++queryNo;
  }

  addHobbies(hobbies, queryNo) {
    this.formDetails.hobbies = hobbies;
    return ++queryNo;
  }
}

exports.Form = Form;
