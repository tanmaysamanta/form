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

  register(response) {
    const key = this.#fields[this.#index].fieldName();
    this.#responses[key] = response;
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
