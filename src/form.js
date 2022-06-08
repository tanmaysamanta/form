class Form {
  #fields;
  #responses;
  #index;
  constructor(...fields) {
    this.#fields = fields;
    this.#responses = {};
    this.#index = 0;
  }

  showCurrentPromt() {
    return this.#fields[this.#index].getPromt();
  }

  register(answer) {
    const key = this.#fields[this.#index].fieldName();
    this.#responses[key] = answer;
    this.#index++;
  }

  isFilled() {
    return this.#index === this.#fields.length;
  }

  getResponses() {
    return this.#responses;
  }
}

exports.Form = Form;
