// // `Class`: Nome da classe, caso seja uma classe
// // `Interface`: Nome da interface, caso seja uma interface
// // `Extends`: Classe da qual herda (superclasse), caso exista
// // `Implements`: Interfaces a qual implementa, caso exista
// // `Attributes`: Atributos
// // `Methods`: Métodos
// // `Validations`: Validações que devem ser aplicadas aos atributos

// `Class`: Person
// `Attributes`:
//     - name: nome da pessoa
//     - birthDate: data de nascimento da pessoa
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro nome e data de nascimento
// `Validations`:
//     - O nome deve ter no mínimo três caracteres
//     - A data de nascimento não pode ser uma data no futuro
//     - A pessoa não pode possuir mais de 120 anos

export default class Person {
  constructor(private _name: string, private _birthDate: Date) {
    this.validatePerson();
  }
  getName(): string {
    return this._name;
  }
  setName(name: string): void {
    this.validateName(name);
    this._name = name;
  }
  getBirthDate(): Date {
    return this._birthDate;
  }
  setBirthDate(birthDate: Date): void {
    this.validateBirthDate(birthDate);
    this._birthDate = birthDate;
  }

  private validatePerson(): void {
    this.validateName(this._name);

    this.validateBirthDate(this._birthDate);
  }

  private validateName(name: string): void {
    if (this._name.length < 3) {
      throw new Error('O nome deve ter no mínimo três caracteres');
    }
  }
  private validateBirthDate(birthDate: Date): void {
    if (birthDate > new Date()) {
      throw new Error('A data de nascimento não pode ser uma data no futuro');
    }
    const age = new Date().getFullYear() - birthDate.getFullYear();
    if (age > 120) {
      throw new Error('A pessoa não pode possuir mais de 120 anos');
    }
  }
}

// CHECKED
