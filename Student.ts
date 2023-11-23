// `Class`: Student
// `Extends`: Person
// `Attributes`:
//     - enrollment: matrícula da pessoa estudante
//     - examsGrades: notas de provas
//     - assignmentsGrades: notas de trabalhos
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro nome e data de nascimento e
//       preencher a matrícula automaticamente
//     - sumGrades: retorna a soma das notas da pessoa estudante
//     - sumAverageGrade: retorna a média das notas da pessoa estudante
//     - generateEnrollment: retorna uma string única gerada
//       como matrícula para a pessoa estudante
// `Validations`:
//     - A matrícula deve possuir no mínimo 16 caracteres
//     - A pessoa estudante deve possuir no máximo 4 notas de provas
//     - A pessoa estudante deve possuir no máximo 2 notas de trabalhos

import Person from './Person';

export default class Student extends Person {
  private _enrollment = String();
  private _examsGrades: number[] = [];
  private _assignmentsGrades: number[] = [];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    // this.validateStudent();
    this._enrollment = this.generateEnrollment();
  }

  getEnrollment(): string {
    return this._enrollment;
  }

  //esse método gera um id de inscrição aleatório baseado na data de cadastro da pessoa estudante

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(
      /\W/g,
      ''
    );

    return `STU${randomStr}`;
  }

  //   setEnrollment(enrollment: string): void {
  //     this.validateEnrollment(enrollment);
  //     this._enrollment = enrollment;
  //   }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(examsGrades: number[]) {
    this.validateGradesExams(examsGrades);
    this._examsGrades = examsGrades;
  }

  get assignmentsGrades(): number[] {
    return this._assignmentsGrades;
  }

  set assignmentsGrades(assignmentsGrades: number[]) {
    this.validateGradesAssigments(assignmentsGrades);
    this._assignmentsGrades = assignmentsGrades;
  }

  sumGrades(): number {
    const sumExamsGrades = this._examsGrades.reduce((acc, curr) => acc + curr);
    const sumAssignmentsGrades = this._assignmentsGrades.reduce(
      (acc, curr) => acc + curr
    );
    return sumExamsGrades + sumAssignmentsGrades;
  }

  sumAvaregeGrade(): number {
    const sumGrades = this.sumGrades();
    return (
      sumGrades / (this._examsGrades.length + this._assignmentsGrades.length)
    );
  }

  validateStudent(): void {
    this.validateEnrollment(this._enrollment);
    this.validateGradesExams(this._examsGrades);
    this.validateGradesAssigments(this._assignmentsGrades);
  }

  validateEnrollment(enrollment: string): void {
    if (enrollment.length < 16) {
      throw new Error('A matrícula deve possuir no mínimo 16 caracteres');
    }
  }
  validateGradesExams(examsGrades: number[]): void {
    if (examsGrades.length > 4) {
      throw new Error(
        'A pessoa estudante deve possuir no máximo 4 notas de provas'
      );
    }
  }
  validateGradesAssigments(assignmentsGrades: number[]): void {
    if (assignmentsGrades.length > 2) {
      throw new Error(
        'A pessoa estudante deve possuir no máximo 2 notas de trabalhos'
      );
    }
  }
}
