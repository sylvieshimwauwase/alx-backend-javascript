const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    // Read the database file asynchronously
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        // If an error occurs, reject the Promise with an appropriate message
        reject(new Error('Cannot load the database'));
        return;
      }

      // Split the data by newline characters and trim any leading or trailing whitespace
      const lines = data.trim().split('\n');

      // Initialize an object to store counts for each field
      const fieldCounts = {};

      // Iterate through each line in the data
      lines.forEach((line) => {
        const fields = line.split(',');
        const field = fields[fields.length - 1].trim();

        // Skip empty lines
        if (fields.length === 1 && fields[0].trim() === '') {
          return;
        }

        // Increment the count for the field
        fieldCounts[field] = (fieldCounts[field] || 0) + 1;
      });

      // Log the total number of students
      console.log(`Number of students: ${lines.length}`);

      // Log the number of students in each field
      Object.entries(fieldCounts).forEach(([field, count]) => {
        const list = lines
          .filter((line) => line.trim().endsWith(field))
          .map((line) => line.split(',')[0].trim())
          .join(', ');
        console.log(`Number of students in ${field}: ${count}. List: ${list}`);
      });

      // Resolve the Promise with the total number of students
      resolve(lines.length);
    });
  });
}

// Example usage
countStudents('database.csv')
  .then((totalStudents) => {
    // Handle success
    console.log(`Total number of students: ${totalStudents}`);
  })
  .catch((error) => {
    // Handle error
    console.error(error.message);
  });

module.exports = countStudents;
