// `Class`: Teacher
// `Extends`: Person
// `Implements`: Employee
// `Attributes`:
//     - subject: a disciplina lecionada pela pessoa professora
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro nome, data de nascimento, salário
//       e a disciplina
// `Validations`:
//     - O registro deve possuir no mínimo 16 caracteres
//     - O salário não pode ser negativo.
//     - A data de admissão não pode ser no futuro

import Employee from './Employee';
import Person from './Person';
import Subject from './Subject';

export default class Teacher extends Person implements Employee {
  private _subject: Subject;
  private _registration = String();
  private _admissionDate: Date;

  constructor(
    name: string,
    birthDate: Date,
    private _salary: number,
    subject: Subject
  ) {
    super(name, birthDate);

    this._subject = subject;
    this.salary = _salary;
    this._admissionDate = new Date();
    this.registration = this.generateRegistration();

    this.validateTeacher();
  }

  get subject(): Subject {
    return this._subject;
  }

  set subject(value: Subject) {
    this._subject = value;
  }

  get registration(): string {
    return this._registration;
  }

  set registration(value: string) {
    this.validateRegistration(value);
    this._registration = value;
  }

  get salary(): number {
    return this._salary;
  }

  set salary(value: number) {
    this.validateSalary(value);

    this._salary = value;
  }

  get admissionDate(): Date {
    return this._admissionDate;
  }

  set admissionDate(value: Date) {
    this.validateAdmissionDate(value);
    this._admissionDate = value;
  }

  generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(
      /\W/g,
      ''
    );

    return `TEA${randomStr}`;
  }

  private validateTeacher(): void {
    this.validateRegistration(this.registration);
    this.validateSalary(this.salary);
    this.validateAdmissionDate(this._admissionDate);
  }

  validateRegistration(registration: string): void {
    if (registration.length < 16)
      throw new Error('O registro deve possuir no mínimo 16 caracteres');
  }

  validateSalary(salary: number): void {
    if (salary < 0) throw new Error('O salário não pode ser negativo.');
  }

  validateAdmissionDate(admissionDate: Date): void {
    if (admissionDate > new Date())
      throw new Error('A data de admissão não pode ser no futuro');
  }
}
