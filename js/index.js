//! initialase (Я хз как пишется) LS

if (localStorage.getItem("students") === null) {
    localStorage.setItem("students", JSON.stringify([]));
}

//!gotocreateStudent
const butt = document.querySelector("#show-add-form-bin")

butt.addEventListener("click", () => {
    location.href = "form.html"
})



const students = JSON.parse(localStorage.getItem("students"))



//! viewStudent

const table = document.querySelector("tbody");



for(let i = 0; i < students.length; i++) {
    const template = `
<tr>
    <td>${students[i].fullName}</td>
    <td>${students[i].group}</td>
    <td>${students[i].ISU}</td>
    <td>${}
</tr>`
    table.innerHTML += template;
}