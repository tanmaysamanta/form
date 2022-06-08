class Field {
  #name;
  #promt;
  #response;
  #validator;
  constructor(name, promt, validator, parse) {
    this.#name = name;
    this.#promt = promt;
    this.#response = null;
    this.#validator = validator;
  }

  fieldName() {
    return this.#name;
  }

  isValidFiledResponse(response) {
    return this.#validator(response)
  }

  fill(response) {
    this.#response = response;
  }

  getPromt() {
    return this.#promt;
  }

  isFilled() {
    return this.#response ? true : false;
  }
}

module.exports = { Field };
