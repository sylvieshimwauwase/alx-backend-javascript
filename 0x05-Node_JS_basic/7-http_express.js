const express = require('express');
const { countStudents } = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
    const databasePath = 'database.csv';
    countStudents(databasePath)
        .then(totalStudents => {
            res.send(`This is the list of our students. Total number of students: ${totalStudents}`);
        })
        .catch(error => {
            res.status(500).send(error.message);
        });
});

const PORT = 1245;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});

module.exports = app;
