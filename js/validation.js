function clearValidationErrors(){
    const errorMessages = document.querySelectorAll('.error-text-message');
    errorMessages.forEach(msg => msg.remove());
    
    const errorInputs = document.querySelectorAll('.input-error-border')
    errorInputs.forEach(input => input.classList.remove('input-error-border'));

}

function showInputError(inputElement, message){
    inputElement.classList.add('input-error-border');

    const errorSpan = document.createElement('span');
    errorSpan.className = 'error-text-message';
    errorSpan.style.color = '#dc3545';
    errorSpan.style.fontSize = '12px';
    errorSpan.style.display = 'block';
    errorSpan.style.marginTop = '2px';
    errorSpan.innerText = message;

    inputElement.insertAdjacentElement('afterend', errorSpan);
}

function validateStudentForm(){
    clearValidationErrors();

    let isValid = true;

    const nameInput = document.getElementById('stu-name');
    const groupInput = document.getElementById('stu-group');
    const isuInput = document.getElementById('stu-isu');

    const nameValue = nameInput.value.trim();

    const nameReges = /^[а-яа-яёёa-z\s-]+$/i;
    
    if (nameValue.length < 3){
        showInputError(nameInput, 'ФИО должно быть длиннее 2 символов.')
        isValid = false;
    } else if (!nameReges.test(nameValue)){
        showInputError(nameInput, 'ФИО может содержать только буквы, дифисы, пробелы')
        isValid = false;
    }

    const groupValue = groupInput.value.trim();
    if (groupValue.length < 4){
        showInputError(groupInput, 'Название группы слишком короткое');
        isValid = false;
    }

    const isuValue = isuInput.value.trim();
    if (isuValue.length !== 6){
        showInputError(isuInput, 'ИСУ ID должен состоять строго из 6 цифр')
        isValid = false;
    }
    return isValid;
}

