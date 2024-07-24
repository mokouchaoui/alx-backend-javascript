const express = require('express');
const fs = require('fs');

const COLUMN_COUNT = 4;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf8' }, (err, data) => {
      if (err) {
        reject(new Error('This is the list of our students\nCannot load the database'));
      } else {
        const arrOfStudents = data.split('\n');
        const arrLength = arrOfStudents.length;
        const numOfStudents = arrOfStudents[arrLength - 1] ? arrLength - 1 : arrLength - 2;
        const strList = ['This is the list of our students'];
        strList.push(`Number of students: ${numOfStudents}`);
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
        for (const dept in deptDict) {
          if (dept) {
            strList.push(`Number of students in ${dept}: ${deptDict[dept].length}. List: ${deptDict[dept].join(', ')}`);
          }
        }
        resolve(strList);
      }
    });
  });
}

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const listsArray = await countStudents(process.argv[2]);
    let strOutput = '';
    listsArray.forEach((str, idx) => {
      const strAug = idx > 0 ? `\n${str}` : str;
      strOutput += strAug;
    });
    res.send(strOutput);
  } catch (err) {
    res.send(err.message);
  }
});

app.listen(1245, () => {});

module.exports = app;
