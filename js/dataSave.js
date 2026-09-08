import { CreateRUD } from "./CRUD.js";

function createStudent(fullName, group, ISU, dormNumber, stuRoom, dateArrived, isForeign, notes) {
    //! error
    let errorName = "";

    if(fullName.trim() === "" || fullName.length < 4) {
        errorName += "fullname ";
    }

    const regex = /^[A-Za-z]\d{4}$/;
    if(!regex.test(group)) {
        errorName += "group ";
    }

    if(ISU.length !== 6 || Number.isNaN(Number(ISU))) {
        errorName += "ISU "
    }

    if(errorName.length > 0) {
        throw new Error(errorName + "error");
    }
    //! empty cells
    if(String(dormNumber).trim() === "") {
        dormNumber = null;
    }
    if(dateArrived.toString().trim() === "" || dormNumber === null) {
        dateArrived = null;
        stuRoom = null;
    }

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

    student.ID = crypto.randomUUID();

    return student;
}

//function saveToJSON(student)
// Save form

const sendButton = document.querySelector("#student-form");


sendButton.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(sendButton);


    //! check errorBlock
    const errorBlock = document.querySelector(".error-message");
    if(errorBlock !== null) {
        errorBlock.remove();
    }

    try {
        const student = createStudent(
            formData.get("stu-name"),
            formData.get("stu-group"),
            formData.get("stu-isu"),
            formData.get("stu-hostel"),
            formData.get("stu-room"),
            formData.get("stu-date"),
            formData.has("stu-foreign"),
            formData.get("stu-notes")
        );
        //! save Student
        
        CreateRUD(student);

        //!goto index
        location.href = "index.html"
    } catch(error) {
        console.log(error.name)
        const attention = document.createElement("p");
        attention.classList.add("error-message")
        attention.style.color = "red";
        attention.textContent = error.message;

        const formBlock = document.querySelector("#form-section");

        formBlock.prepend(attention);
    } 

    
})

