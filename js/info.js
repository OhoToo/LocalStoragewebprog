
const students = JSON.parse(localStorage.getItem("students"));

const studentID = new URLSearchParams(location.search).get("id");

const infoBody = document.querySelector("section");

const student = students.find((student) => student.ID === studentID);

infoBody.innerHTML = `
<p><strong>ФИО:</strong> ${student.fullName}</p>

<p><strong>Группа:</strong> ${student.group}</p>

<p><strong>ИСУ ID:</strong> ${student.ISU}</p>

<p><strong>Общежитие:</strong> ${student.dormNumber || "-"}</p>

<p><strong>Дата заселения:</strong> ${student.dateArrived || "-"}</p>

<p><strong>Иностранец:</strong> ${student.isForeign ? "Да" : "Нет"}</p>

<p><strong>Заметки:</strong> ${student.notes || "-"}</p>

<p><strong>ID:</strong> ${student.ID}</p>
`

