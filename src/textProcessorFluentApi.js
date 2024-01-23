class TextProcessorFluentApi {
  #content;
  constructor(content) {
    this.#content = content;
  }

  build() {
    return this.#content;
  }
}

module.exports = TextProcessorFluentApi;
