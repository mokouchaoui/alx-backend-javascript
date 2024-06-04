export default function getListStudentIds(students) {
  return students.reduce((acc, curr) => acc + curr.id, 0);
}
