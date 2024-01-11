interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Slv",
    lastName: "Shimwa",
    age: 24,
    location: "Kigali",
};

const student2: Student = {
    firstName: "Joxy",
    lastName: "Uwase",
    age: 24,
    location: "America",
};

const studentsList: Student[] = [student1, student2];

function renderTable(students: Student[]): void {
    const table =  document.createElement("table");

    students.forEach((student) => {
        const row = table.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(2);

        cell1.textContent = student.firstName;
        cell2.textContent = student.location;
    });

    document.body.appendChild(table);
}

renderTable(studentsList);