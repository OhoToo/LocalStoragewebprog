import { CRUDelete } from "./CRUD.js";

//! initialase (Я хз как пишется) LS

if (localStorage.getItem("students") === null) {
    localStorage.setItem("students", JSON.stringify([]));
}

//!gotocreateStudent------------------------------------------------
const butt = document.querySelector("#show-add-form-bin")

butt.addEventListener("click", () => {
    location.href = "form.html"
})

const students = JSON.parse(localStorage.getItem("students"))

//! viewStudent

const table = document.querySelector("tbody");

function renderTable(table = document.querySelector("tbody"), students = JSON.parse(localStorage.getItem("students"))) {
    table.innerHTML = "";
    for(let i = 0; i < students.length; i++) {
        //todo Придумать оптимизацию id for update
        const template = `
    <tr>
        <td>${students[i].fullName}</td>
        <td>${students[i].group}</td>
        <td>${students[i].ISU}</td>
        <td>
            <button data-fdid="${students[i].ID}">Удалить</button>
        </td>
    </tr>`
        table.innerHTML += template;
    }
}

renderTable();

//! button's work

table.addEventListener("click", (event) => {
    if(event.target.textContent === "Удалить") {
        CRUDelete(event.target.dataset.fdid)
    }
    //todo Make about update
    renderTable();
})











