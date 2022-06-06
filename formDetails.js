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
      if (name.split('').every(char => !isFinite(char))) {
        this.formDetails.name = name;
        queryNo++;
      }
    }
    return queryNo;
  }

  addDOB(DOB, queryNo) {
    this.formDetails.DOB = DOB;
    return ++queryNo;
  }

  addHobbies(hobbies, queryNo) {
    if (hobbies) {
      this.formDetails.hobbies = hobbies.split(',');
      queryNo++;
    }
    return queryNo;
  }

  addPhNo(phNo, queryNo) {
    if (phNo.length === 10 && isFinite(phNo)) {
      this.formDetails.phNo = phNo;
      queryNo++;
    }
    return queryNo;
  }
}

exports.Form = Form;
