// `Class`: Subject
// `Attributes`:
//     - name: nome da disciplina
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro nome
// `Validations`:
//     - O nome tem que possuir no mínimo 3 caracteres

export default class Subject {
  constructor(private _name: string) {
    this.validateName(_name);
  }

  set name(name: string) {
    this.validateName(name);
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  private validateName(value: string): void {
    if (value.length < 3)
      throw new Error('O nome deve conter no mínimo 3 caracteres.');
  }
}
