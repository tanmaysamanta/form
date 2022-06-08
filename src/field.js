class Field {
  #name;
  #promt;
  #response;
  constructor(name, promt) {
    this.#name = name;
    this.#promt = promt;
    this.#response = null;
  }

  fieldName() {
    return this.#name;
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

exports.Field = Field;