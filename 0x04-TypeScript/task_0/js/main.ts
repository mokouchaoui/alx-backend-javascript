interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'fn1',
  lastName: 'ln1',
  age: 5,
  location: 'loc1',
}

const student2: Student = {
  firstName: 'fn2',
  lastName: 'ln2',
  age: 10,
  location: 'loc2',
}

const studentsList: Array<Student> = [student1, student2];

// const horizontalLine = (size: number): string => {
//   let retLine = ''
//   for (let i = 0; i < size; i++) {
//     retLine += '-';
//   }
//   return retLine;
// }

// const printSpaces = (size: number): string => {
//   let retSpace = ''
//   for (let i = 0; i < size; i++) {
//     retSpace += ' ';
//   }
//   return retSpace;
// }

// const printRow = (firstWord: string, secondWord: string) => {
//   console.log(`| ${firstWord}${printSpaces(25 - (firstWord.length + 2))}| ${secondWord}${printSpaces(25 - (secondWord.length + 3))}|`);
//   console.log(horizontalLine(50));
// }

// console.log(horizontalLine(50));
// printRow('name', 'location');
// for (const student of studentsList) {
//   printRow(student.firstName, student.location);
// }

const table = document.createElement('table');
const title = document.createElement('thead');
const titleContent = document.createElement('tr');
const body = document.createElement('tbody');
titleContent.insertAdjacentHTML('beforeend', '<td>Name</td>');
titleContent.insertAdjacentHTML('beforeend', '<td>Name</td>');
title.insertAdjacentElement('beforeend', titleContent);

for (const student of studentsList) {
  const bodyContent = document.createElement('tr');
  bodyContent.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
  bodyContent.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
  body.insertAdjacentElement('beforeend', bodyContent);
}
table.insertAdjacentElement('beforeend', title);
table.insertAdjacentElement('beforeend', body);