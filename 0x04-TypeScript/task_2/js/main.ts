export interface DirectorInterface {
  workFromHome: () => string;
  getCoffeeBreak: () => string;
  workDirectorTasks: () => string;
}

export interface TeacherInterface {
  workFromHome: () => string;
  getCoffeeBreak: () => string;
  workTeacherTasks: () => string;
}

export class Director {
  workFromHome() {
    return 'Working from home';
  }
  getCoffeeBreak() {
    return 'Getting a coffee break';
  }
  workDirectorTasks() {
    return 'Getting to director tasks';
  }
  toString() {
    return 'Director';
  }
}

export class Teacher {
  workFromHome() {
    return 'Cannot work from home';
  }
  getCoffeeBreak() {
    return 'Cannot have a break';
  }
  workTeacherTasks() {
    return 'Getting to work';
  }
  toString() {
    return 'Teacher';
  }
}

export function createEmployee(salary: number | string): DirectorInterface | TeacherInterface {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

console.log(createEmployee(200).toString());
console.log(createEmployee(1000).toString());
console.log(createEmployee('$500').toString());

type Subjects = 'Math' | 'History';

const teachClass = (todayClass: Subjects) => {
  return `Teaching ${todayClass}`;
}

console.log(teachClass('Math'));
console.log(teachClass('History'));