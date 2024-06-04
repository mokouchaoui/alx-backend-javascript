export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location === city).map((st) => {
    const gradeObj = newGrades.filter((nG) => nG.studentId === st.id)[0];
    const grade = gradeObj ? gradeObj.grade : 'N/A';
    return {
      ...st,
      grade,
    };
  });
}
