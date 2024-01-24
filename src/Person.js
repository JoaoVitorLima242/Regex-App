const { evaluateRegex } = require("./utils.js");

class Person {
  constructor([
    nome,
    nacionalidade,
    estadoCivil,
    documento,
    rua,
    numero,
    bairro,
    estado,
  ]) {
    const firstLetterExp = evaluateRegex(/([a-zA-Z]{1})([a-zA-Z]+)/);
    const onlyNumberExp = evaluateRegex(/\D/g);
    const streetExp = evaluateRegex(/(?<=\sa\s()).*$/);
    const quarterExp = evaluateRegex(/(?<=\s()).*$/);

    const formatFirstLetter = (prop) => {
      return prop.replace(
        firstLetterExp,
        (_fullMatch, group1, group2, _index) => {
          return `${group1.toUpperCase()}${group2}`;
        }
      );
    };
    this.nome = nome;
    this.nacionalidade = formatFirstLetter(nacionalidade);
    this.estadoCivil = formatFirstLetter(estadoCivil);
    this.documento = documento.replace(evaluateRegex(onlyNumberExp), "");
    this.rua = rua.match(streetExp)[0];
    this.bairro = bairro.match(quarterExp)[0];
    this.numero = numero;
    this.estado = estado.replace(/\.$/, "");
  }
}

module.exports = Person;
