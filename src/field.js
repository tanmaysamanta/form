class Field {
  #name;
  #promt;
  #response;
  #validator;
  #parser;
  constructor(name, promt, validator, parser = x => x) {
    this.#name = name;
    this.#promt = promt;
    this.#response = null;
    this.#validator = validator;
    this.#parser = parser;
  }

  fieldName() {
    return this.#name;
  }

  isValidFiledResponse(response) {
    return this.#validator(response);
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

  getEntry() {
    return { name: this.#name, response: this.#parser(this.#response) }
  }
}

module.exports = { Field };
