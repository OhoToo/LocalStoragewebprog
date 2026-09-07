document.addEventListener('DOMContentLoaded', () => {
    // Отрисовываем таблицу со студентами из базы данных
    renderStudentsTable();

    // Настраиваем логику всплывающего окна досье
    initProfileTooltip();
});

function renderStudentsTable() {
    const tbody = document.getElementById('students-tbody');
    
    // Получаем актуальный массив студентов из localStorage
    const students = getStudents();

    // Очищаем старое содержимое таблицы перед новой отрисовкой
    tbody.innerHTML = '';

    // Если база данных пуста
    if (students.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4" style="text-align: center; color: #6c757d;">Список студентов пуст</td></tr>`;
        return;
    }

    // Перебираем массив студентов
    students.forEach(student => {
        const tr = document.createElement('tr');

        // Генерируем строки таблицы. ВАЖНО: id таблицы в твоем index.html был "student-table"
        tr.innerHTML = `
            <td>
                <span class="student-name-trigger" data-id="${student.id}">${student.name}</span>
            </td>
            <td>${student.group}</td>
            <td>${student.isu}</td>
            <td>
                <button class="btn-edit" onclick="editStudent('${student.id}')">Редактировать</button>
                <button class="btn-delete" onclick="handleDeleteStudent('${student.id}')">Удалить</button>
            </td>
        `;

        tbody.appendChild(tr);
    });
}

function handleDeleteStudent(id) {
    if (confirm('Вы уверены, что хотите удалить этого студента из системы?')) {
        deleteStudent(id);
        renderStudentsTable();
    }
}

function editStudent(id) {
    window.location.href = `form.html?editId=${id}`;
}

function initProfileTooltip() {
    const tooltip = document.getElementById('profile-tooltip');
    const tooltipContent = document.getElementById('tooltip-content');
    const tbody = document.getElementById('students-tbody');

    if (!tbody || !tooltip || !tooltipContent) return;

    tbody.addEventListener('mouseover', (event) => {
        if (event.target.classList.contains('student-name-trigger')) {
            const id = event.target.getAttribute('data-id');
            const student = getStudentById(id);

            if (student) {
                tooltipContent.innerHTML = `
                    <p><strong>Общежитие:</strong> № ${student.hostel}</p>
                    <p><strong>Комната:</strong> ${student.room}</p>
                    <p><strong>Заселен до:</strong> ${student.date}</p>
                    <p><strong>Иностранец:</strong> ${student.isForeign ? 'Да' : 'Нет'}</p>
                    <p><strong>Заметки:</strong> ${student.notes || '—'}</p>
                `;
                tooltip.classList.remove('hidden');
            }
        }
    });

    tbody.addEventListener('mousemove', (event) => {
        if (!tooltip.classList.contains('hidden')) {
            tooltip.style.left = (event.pageX + 15) + 'px';
            tooltip.style.top = (event.pageY + 15) + 'px';
        }
    });

    tbody.addEventListener('mouseout', (event) => {
        if (event.target.classList.contains('student-name-trigger')) {
            tooltip.classList.add('hidden');
        }
    });
}


// Явно делаем функции глобальными, чтобы атрибуты onclick в HTML их гарантированно видели
window.handleDeleteStudent = handleDeleteStudent;
window.editStudent = editStudent;
