let currentEditingId = null;

document.addEventListener('DOMContentLoaded', () => {
    const formElement = document.getElementById('student-form');
    const formTitle = document.getElementById('form-title');

    const urlParams = new URLSearchParams(window.location.search);
    const editId = urlParams.get('editId');

    if (editId) {
        currentEditingId = editId;
        formTitle.innerText = 'Редактирование данных студента';

        const student = getStudentById(editId);

        if (student) {
            document.getElementById('stu-name').value = student.name;
            document.getElementById('stu-group').value = student.group;
            document.getElementById('stu-isu').value = student.isu;
            document.getElementById('stu-hostel').value = student.hostel;
            document.getElementById('stu-room').value = student.room;
            document.getElementById('stu-date').value = student.date;
            document.getElementById('stu-foreign').checked = student.isForeign;
            document.getElementById('stu-notes').value = student.notes;
        }
    } else {
        formTitle.innerText = 'Добавление нового студента';
    }

    formElement.addEventListener('submit', handleFormSubmit);
});

function handleFormSubmit(event) {
    event.preventDefault();

    const isFormValid = validateStudentForm();

    if (!isFormValid) {
        return;
    }

    const studentData = {
        name: document.getElementById('stu-name').value.trim(),
        group: document.getElementById('stu-group').value.trim(),
        isu: document.getElementById('stu-isu').value.trim(),
        hostel: document.getElementById('stu-hostel').value.trim(),
        room: document.getElementById('stu-room').value.trim(),
        date: document.getElementById('stu-date').value,
        isForeign: document.getElementById('stu-foreign').checked,
        notes: document.getElementById('stu-notes').value.trim()
    };

    if (currentEditingId) {
        studentData.id = currentEditingId;
    }

    // Сохраняем в localStorage
    saveOrUpdateStudent(studentData);

    // Принудительно перенаправляем на главную страницу
    window.location.replace('index.html');
}
