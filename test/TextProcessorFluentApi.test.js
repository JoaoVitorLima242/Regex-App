const { describe, it } = require("mocha");
const { expect } = require("chai");
const TextProcessorFluentApi = require("../src/TextProcessorFluentApi.js");
const mock = require("./mock/valid.js");

describe("TextProcessorAPI", () => {
  it("#build", () => {
    const result = new TextProcessorFluentApi(mock).build();

    expect(result).to.be.deep.eq(mock);
  });

  it("#extractPeopleData", () => {
    const result = new TextProcessorFluentApi(mock).extractPeopleData().build();
    const expected = [
      [
        "Xuxa da Silva, brasileira, casada, CPF 235.743.420-12, residente e ",
        "domiciliada a Rua dos bobos, zero, bairro Alphaville, São Paulo. ",
      ].join("\n"),
      [
        "Arya Robbin, belga, casado, CPF 884.112.200-52, residente e ",
        "domiciliada a Av. paulista, 1400, bairro Consolação, São Paulo. ",
      ].join("\n"),
      [
        "Júlia Menezes, brasileira, solteira, CPF 297.947.800-81, residente e ",
        "domiciliada a Av. dos Estados, 99, bairro Jardins, São Paulo. ",
      ].join("\n"),
    ];

    expect(result).to.be.deep.eq(expected);
  });

  it("#divideTextInColumns", () => {
    const content = [
      [
        "Xuxa da Silva, brasileira, casada, CPF 235.743.420-12, residente e ",
        "domiciliada a Rua dos bobos, zero, bairro Alphaville, São Paulo. ",
      ].join("\n"),
    ];
    const expected = [
      [
        "Xuxa da Silva",
        " brasileira",
        " casada",
        " CPF 235.743.420-12",
        " residente e \ndomiciliada a Rua dos bobos",
        " zero",
        " bairro Alphaville",
        " São Paulo. ",
      ],
    ];

    const result = new TextProcessorFluentApi(content)
      .divideTextInColumns()
      .build();

    expect(result).to.be.deep.equal(expected);
  });

  it("#removeEmptyCharacters", () => {
    const content = [
      [
        "Xuxa da Silva",
        " brasileira",
        " casada",
        " CPF 235.743.420-12",
        " residente e \ndomiciliada a Rua dos bobos",
        " zero",
        " bairro Alphaville",
        " São Paulo.",
      ],
    ];
    const expected = [
      [
        "Xuxa da Silva",
        "brasileira",
        "casada",
        "CPF 235.743.420-12",
        "residente e domiciliada a Rua dos bobos",
        "zero",
        "bairro Alphaville",
        "São Paulo.",
      ],
    ];

    const result = new TextProcessorFluentApi(content)
      .removeEmptyCharacters()
      .build();

    expect(result).to.be.deep.equal(expected);
  });

  it("#mapPerson", () => {
    const content = [
      [
        "Xuxa da Silva",
        "brasileira",
        "casada",
        "CPF 235.743.420-12",
        "residente e domiciliada a Rua dos bobos",
        "zero",
        "bairro Alphaville",
        "São Paulo.",
      ],
    ];

    const expected = [
      {
        nome: "Xuxa da Silva",
        nacionalidade: "Brasileira",
        estadoCivil: "Casada",
        documento: "23574342012",
        rua: "Rua dos bobos",
        numero: "zero",
        bairro: "Alphaville",
        estado: "São Paulo",
      },
    ];

    const result = new TextProcessorFluentApi(content).mapPerson().build();

    expect(result).to.be.deep.equal(expected);
  });
});
