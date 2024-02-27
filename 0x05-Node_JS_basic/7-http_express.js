const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const database = 'database.csv'; // Replace with the actual name of your database file
  fs.readFile(database, 'utf8', (err, data) => {
    if (err) {
      res.send('Error reading database file');
    } else {
      const students = data.split('\n').filter((line) => line !== '');
      res.send(`This is the list of our students:\n${students.join('\n')}`);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
