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
function renderTable(table = document.querySelector("tbody"), students = JSON.parse(localStorage.getItem("students"))) {
    table.innerHTML = "";
    for(let i = 0; i < students.length; i++) {
        const template = `
    <tr data-id="${students[i].ID}">
        <td><a href="../html/info.html?id=${students[i].ID}">${students[i].fullName}</a></td>
        <td>${students[i].group}</td>
        <td>${students[i].ISU}</td>
        <td>
            <button class="btn-edit">Изменить</button>
            <button class="btn-delete">Удалить</button>
        </td>
    </tr>`
        table.innerHTML += template;
    }
}

renderTable();

//! button's work

const table = document.querySelector("tbody");
table.addEventListener("click", (event) => {
    if(event.target.textContent === "Удалить") {
        CRUDelete(event.target.closest("tr").dataset.id)
    }
    //todo Make about update
    if(event.target.textContent === "Изменить") {
        location.href = `../html/form.html?id=${event.target.closest("tr").dataset.id}`;
    }
    renderTable();
})










