const STORAGE_KEY = 'students_management_system';

function getStudent(){
    const rewData = localStorage.getItem(STORAGE_KEY);
    return rawData ? JSON.parse(rawData) : [];
}

function saveStudents(studentsArray){
    const stringData = JSON.stringify(studentsArray);
    localStorage.setItem(STORAGE_KEY, stringData)
}

function getStudentById (id) {
    const students = getStudent();
    return students.find(student => student.id === id)
}

function saveOrUpdateStudent(studentData) {
    const students = getStudent();
    if (studentData.id) {
        const index = students.findIndex(s => s.id === studentData.id);
        if (index !== -1){
            students[index] = studentData;
        }
    } else {
        studentData.id = Date.now().toString();
        students.push(studentData);
    }
    saveStudents(students);
}

function deleteStudent(id){
    const students = getStudents();
    const filteredStudents = students.filter(student => student.id !== id)
    saveStudents(filteredStudents);
}