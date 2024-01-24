const TextProcessorFluentApi = require("./TextProcessorFluentApi");

class TextProcessorFacade {
  #textProcessorFluentApi;
  constructor(text) {
    this.#textProcessorFluentApi = new TextProcessorFluentApi(text);
  }

  getPeoplesFromPDF() {
    return this.#textProcessorFluentApi
      .extractPeopleData()
      .divideTextInColumns()
      .removeEmptyCharacters()
      .mapPerson()
      .build();
  }
}

module.exports = TextProcessorFacade;
