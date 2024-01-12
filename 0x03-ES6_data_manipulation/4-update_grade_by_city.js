function updateStudentGradeByCity(students, city, newGrades) {
    if (!Array.isArray(students) || !Array.isArray(newGrades)) {
        return [];
    }
    const studentsInCity = students.filter(student => student.location === city);

    const updatedStudents = studentsInCity.map(student => {
        const matchingGrade = newGrades.find(grade => grade.studentId === student.id);
        return {
            ...student,
            grade: matchingGrade ? matchingGrade.grade : 'N/A',
        };
    });
    return updatedStudents;
}

export default updateStudentGradeByCity;
