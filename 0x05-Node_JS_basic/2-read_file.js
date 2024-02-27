const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter(line => {line.trim() !== ''});

    const fields = lines[0].split(',');
    const students = lines.slice(1);

    const countByField = {};
    fields.forEach(field => {
      countByField[field] = 0;
    });

    students.forEach(student => {
      const values = student.split(',');
      fields.forEach((field, index) => {
        if (values[index].trim() !== '') {
          countByField[field]++;
        }
      });
    });

    console.log(`Number of students: ${students.length}`);
    fields.forEach(field => {
      const count = countByField[field];
      const list = students
        .filter(student => student.split(',')[fields.indexOf(field)].trim() !== '')
        .map(student => student.split(',')[fields.indexOf(field)].trim())
        .join(', ');
      console.log(`Number of students in ${field}: ${count}. List: ${list}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
