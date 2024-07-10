const cpp = new Subjects.Cpp();
const java = new Subjects.Java();
const react = new Subjects.React();
export const cTeacher: Subjects.Teacher = {
  firstName: 'Cpp',
  lastName: 'Teacher',
  experienceTeachingC: 10,
}
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());
console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());