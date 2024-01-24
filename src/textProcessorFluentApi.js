const { evaluateRegex } = require("./utils");

class TextProcessorFluentApi {
  #content;
  constructor(content) {
    this.#content = content;
  }

  extractPeopleData() {
    const matchPerson = evaluateRegex(
      /(?<=[CONTRANTE|CONTRATADA]:\s{1})(?!\s)(.*\n.*)$/gim
    );
    const onlyPerson = this.#content.match(matchPerson);

    this.#content = onlyPerson;

    return this;
  }

  divideTextInColumns() {
    const splitRegex = evaluateRegex(/,/);
    this.#content = this.#content.map((line) => line.split(splitRegex));
    return this;
  }
  removeEmptyCharacters() {
    const trimRegex = evaluateRegex(/^\s+|\s+$|\n/g);

    this.#content = this.#content.map((item) =>
      item.map((line) => line.replace(trimRegex, ""))
    );
    return this;
  }

  build() {
    return this.#content;
  }
}

module.exports = TextProcessorFluentApi;
