const STORAGE_KEY = 'students_management_system';

function getStudents() {
    const rawData = localStorage.getItem(STORAGE_KEY);
    return rawData ? JSON.parse(rawData) : [];
}

function saveStudents(studentsArray) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(studentsArray));
}

function getStudentById(id) {
    const students = getStudents();
    return students.find(student => student.id === id);
}

function saveOrUpdateStudent(studentData) {
    const students = getStudents();

    if (studentData.id) {
        const index = students.findIndex(s => s.id === studentData.id);
        if (index !== -1) {
            students[index] = studentData;
        }
    } else {
        studentData.id = Date.now().toString();
        students.push(studentData);
    }

    saveStudents(students);
}
function deleteStudent(id) {
    const students = getStudents();
    const filteredStudents = students.filter(student => student.id !== id);
    saveStudents(filteredStudents);
}
