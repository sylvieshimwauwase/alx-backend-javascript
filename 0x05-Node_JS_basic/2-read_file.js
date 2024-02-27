const fs = require('fs');

function countStudents(path) {
  try {
        // Read the database file synchronously
    const data = fs.readFileSync(path, 'utf8').trim().split('\n');

        // Check if the database is empty
    if (data.length === 0) {
      throw new Error('Cannot load the database');
    }

        // Initialize an object to store counts for each field
    const fieldCounts = {};

        // Iterate through each line in the data
    data.forEach(line => {
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
    console.log(`Number of students: ${data.length}`);

        // Log the number of students in each field
    Object.entries(fieldCounts).forEach(([field, count]) => {
      const list = data
        .filter(line => line.trim().endsWith(field))
        .map(line => line.split(',')[0].trim())
        .join(', ');
      console.log(`Number of students in ${field}: ${count}. List: ${list}`);
    });
  } catch (error) {
        // Throw an error if the database cannot be loaded
    throw new Error('Cannot load the database');
  }
}

// Example usage
countStudents('database.csv');

module.exports = countStudents;
