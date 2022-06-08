class Form {
  #fields;
  #index;
  constructor(...fields) {
    this.#fields = fields;
    this.#index = 0;
  }

  showCurrentPromt() {
    return this.#fields[this.#index].getPromt();
  }

  isValidResponse(response) {
    return this.#fields[this.#index].isValidFiledResponse(response);
  }

  register(response) {
    const field = this.#fields[this.#index];
    field.fill(response);
    this.#index++;
  }

  isFilled() {
    return this.#index === this.#fields.length;
  }

  getResponses() {
    return this.#fields.reduce((responses, field) => {
      const { name, response } = field.getEntry();
      responses[name] = response;
      return responses;
    }, {});
  }
}

const registerResponses = (chunk, form, writeToFile, logger) => {
  const response = chunk.trim();
  if (!form.isValidResponse(response)) {
    logger('Invalid response')
    logger(form.showCurrentPromt());
    return;
  }
  form.register(response);
  if (form.isFilled()) {
    writeToFile(form.getResponses());
    return;
  }
  logger(form.showCurrentPromt());
};

module.exports = { Form, registerResponses };