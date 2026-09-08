function getBack(students) {
    localStorage.setItem("students", JSON.stringify(students));
}

function CreateRUD(student) {
    const students = JSON.parse(localStorage.getItem("students")) || [];

    students.unshift(student);

    getBack(students);
}





function CRUDelete(studentID) {
    const students = JSON.parse(localStorage.getItem("students")) || [];

    students.splice(students.findIndex((student) => student.ID === studentID),1);

    getBack(students);
}









//! export

export { CreateRUD, CRUDelete, getBack }