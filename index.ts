//1
// import Person from './Person';

// const maria = new Person('Maria da Consolação', new Date('1980/01/25'));

// const luiza = new Person('Luiza Andrade', new Date('2005/10/02'));

// console.log(maria);

// console.log(luiza);

//2

// import Student from './Student';

// const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));

// const lucas = new Student('Lucas Peixoto Salgueiro', new Date('2006/07/19'));

// const jessica = new Student('Jéssica Bianca Nunes', new Date('2004/06/06'));

// const tamires = new Student('Tamires Santos Bastos', new Date('2005/11/05'));

// const fernando = new Student('Fernando Gonçalves', new Date('2006/09/11'));

// carolina.examsGrades = [25, 20, 25, 23];
// carolina.assignmentsGrades = [29, 99];
// carolina.assignmentsGrades;

// lucas.examsGrades = [25, 20, 25, 23];

// jessica.assignmentsGrades = [50, 45];

// tamires.assignmentsGrades = [47, 42];

// console.log(carolina);
// console.log(carolina.assignmentsGrades);
// console.log(carolina.sumGrades());
// console.log(carolina.sumAvaregeGrade());

// 4

// import Subject from './Subject';

// const math = new Subject('Matemática');

// const story = new Subject('História');

// const philosophy = new Subject('Filosofia');

// console.log(math);

// console.log(story);

// console.log(philosophy);

//5

import Subject from './Subject';

import Teacher from './Teacher';

const math = new Subject('Matemática');

const history = new Subject('História');

const philosophy = new Subject('Filosofia');

const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);

const joao = new Teacher(
  'João Antônio da Costa',
  new Date('1982/04/21'),
  2000,
  history
);

const lucio = new Teacher(
  'Lucio Teixeira',
  new Date('1986/01/29'),
  2000,
  philosophy
);

console.log(joao);

console.log(lucio);

// deve retornar erro

//const invalidTeacherSalary = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);

// deve retornar erro

// const today = new Date();

// today.setDate(today.getDate() + 1)

// const tomorrow = today;

// marta.admissionDate = tomorrow;
