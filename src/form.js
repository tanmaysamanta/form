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

  isValidResponse(response) {
    return this.#fields[this.#index].isValidFiledResponse(response);
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

const registerResponses = (chunk, form, cb, logger) => {
  const response = chunk.trim();
  if (!form.isValidResponse(response)) {
    logger(form.showCurrentPromt());
    return;
  }
  form.register(response);
  if (form.isFilled()) {
    cb(form.getResponses());
    return;
  }
  logger(form.showCurrentPromt());
};

module.exports = { Form, registerResponses };