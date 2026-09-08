function getBack(students) {
    localStorage.setItem("students", JSON.stringify(students));
}


function checkErrorStudent(student) {
    //! error
    let errorName = "";

    if(student.fullName.trim() === "" || student.fullName.length < 4) {
        errorName += "fullname ";
    }

    const regex = /^[A-Za-z]\d{4}$/;
    if(!regex.test(student.group)) {
        errorName += "group ";
    }

    if(student.ISU.length !== 6 || Number.isNaN(Number(student.ISU))) {
        errorName += "ISU "
    }

    if(errorName.length > 0) {
        throw new Error(errorName + "error");
    }
    //! empty cells
    if(String(student.dormNumber).trim() === "") {
        student.dormNumber = null;
    }
    if(student.dateArrived.toString().trim() === "" || student.dormNumber === null) {
        student.dateArrived = null;
        student.stuRoom = null;
    }
}

function createStudent(fullName, group, ISU, dormNumber, stuRoom, dateArrived, isForeign, notes) {
    //!finally

    const student = {
        "fullName" : fullName,
        "group" : group,
        "ISU" : ISU,
        "dormNumber" : dormNumber,
        "room" : stuRoom,
        "dateArrived" : dateArrived,
        "isForeign" : isForeign,
        "notes" : notes,
    }

    //!errors
    checkErrorStudent(student)

    student.ID = crypto.randomUUID();

    return student;
}



function CreateRUD(student) {
    const students = JSON.parse(localStorage.getItem("students"));

    students.unshift(student);

    getBack(students);
}





function CRUDelete(studentID) {
    const students = JSON.parse(localStorage.getItem("students"));

    students.splice(students.findIndex((student) => student.ID === studentID),1);

    getBack(students);
}









//! export

export { CreateRUD, CRUDelete, createStudent, getBack, checkErrorStudent }