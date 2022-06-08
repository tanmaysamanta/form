class MultiLineField {
  #name;
  #promts;
  #response;
  #validator;
  #parser;
  #index;
  constructor(name, promts, validator, parser = x => x) {
    this.#name = name;
    this.#promts = promts;
    this.#response = [];
    this.#validator = validator;
    this.#parser = parser;
    this.#index = 0;
  }

  fieldName() {
    return this.#name;
  }

  isValidFiledResponse(response) {
    return this.#validator(response);
  }

  fill(response) {
    this.#response.push(response);
    this.#index++;
  }

  getPromt() {
    return this.#promts[this.#index];
  }

  isFilled() {
    return this.#promts.length === this.#response.length;
  }

  getEntry() {
    return { name: this.#name, response: this.#parser(this.#response) }
  }
}

module.exports = { MultiLineField };
