class TextProcessorFluentApi {
  #content;
  constructor(content) {
    this.#content = content;
  }

  extractPeopleData() {
    const matchPerson = /(?<=[CONTRANTE|CONTRATADA]:\s{1})(?!\s)(.*\n.*)$/gim;
    const onlyPerson = this.#content.match(matchPerson);

    this.#content = onlyPerson;

    return this;
  }

  build() {
    return this.#content;
  }
}

module.exports = TextProcessorFluentApi;
