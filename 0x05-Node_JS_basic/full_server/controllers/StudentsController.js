import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2]).then((data) => {
      const keyList = [];
      for (const dataKey in data) {
        if (dataKey) {
          keyList.push(dataKey);
        }
      }
      const sortedStudents = keyList.sort().map((dKey, idx) => {
        const lineUpgrade = `Number of students in ${dKey}: ${data[dKey].length}. List: ${data[dKey].join(', ')}`;
        if (idx > 0) {
          return `\n${lineUpgrade}`;
        }
        return lineUpgrade;
      }).join('');
      response.status(200).send(`This is the list of our students\n${sortedStudents}`);
    }).catch(() => {
      response.status(500).send('This is the list of our students\nCannot load the database');
    });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (!['CS', 'SWE'].includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase(process.argv[2]).then((data) => {
      response.status(200).send(`List: ${data[major].sort().join(', ')}`);
    }).catch(() => {
      response.status(500).send('Cannot load the database');
    });
  }
}

export default StudentsController;
