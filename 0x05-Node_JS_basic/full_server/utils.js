import fs from 'fs';

const COLUMN_COUNT = 4;

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf8' }, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const arrOfStudents = data.split('\n');
        const arrLength = arrOfStudents.length;
        const deptDict = {};
        arrOfStudents.slice(1, arrLength).forEach((student) => {
          if (student) {
            const studentArr = student.split(',');
            if (deptDict[studentArr[COLUMN_COUNT - 1]]) {
              deptDict[studentArr[COLUMN_COUNT - 1]].push(studentArr[0]);
            } else {
              deptDict[studentArr[COLUMN_COUNT - 1]] = [studentArr[0]];
            }
          }
        });
        resolve(deptDict);
      }
    });
  });
}

export default readDatabase;
