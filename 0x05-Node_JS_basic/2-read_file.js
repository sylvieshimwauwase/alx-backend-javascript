const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8').trim().split('\n');

    if (data.length === 0) {
      throw new Error('Cannot load the database');
    }

    const fieldCounts = {};

    data.forEach((line) => {
      const fields = line.split(',');
      const field = fields[fields.length - 1].trim();

      if (fields.length === 1 && fields[0].trim() === '') {
        return;
      }

      fieldCounts[field] = (fieldCounts[field] || 0) + 1;
    });

    console.log(`Number of students: ${data.length}`);

    Object.entries(fieldCounts).forEach(([field, count]) => {
      const list = data
        .filter((line) => line.trim().endsWith(field))
        .map((line) => line.split(',')[0].trim())
        .join(', ');
      console.log(`Number of students in ${field}: ${count}. List: ${list}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

countStudents('database.csv');

module.exports = countStudents;
