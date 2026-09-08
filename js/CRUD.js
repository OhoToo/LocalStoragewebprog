function getBack() {
    localStorage.setItem("students", JSON.stringify(students));
}

function CreateRUD(student) {
    const students = JSON.parse(localStorage.getItem("students")) || [];

    students.unshift(student);

    getBack();
}





function CRUDelete(studentID) {
    const students = JSON.parse(localStorage.getItem("students")) || [];

    students.splice(students.findIndex((student) => student.ID === studentID),1);

    getBack();
}









//! export

export { CreateRUD, getBack }