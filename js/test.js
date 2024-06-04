$(document).ready(function() {
    $('#phone').mask('(000) 000-00(00');

    const maxFiles = 5;
    let fileCount = 0;
    const fileList = document.getElementById('fileList');
    const fileInput = document.getElementById('file');

    fileInput.addEventListener('change', function(event) {
        if (fileCount < maxFiles) {
            const file = event.target.files[0];
            if (file) {
                const fileItem = document.createElement('div');
                fileItem.textContent = file.name;
                fileList.appendChild(fileItem);
                fileCount++;
            }
        } else {
            customAlert('Максимально можно прикрепить 5 файлов.');
            fileInput.value = "";
        }
    });
});

document.getElementById('callbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const consent = document.getElementById('consent').checked;
    
    if (!name) {
        customAlert('Пожалуйста, введите ваше имя.');
        return;
    }
    
    if (!phone) {
        customAlert('Пожалуйста, введите ваш телефон.');
        return;
    }
    
    if (!email) {
        customAlert('Пожалуйста, введите ваш email.');
        return;
    }
    
    if (!consent) {
        customAlert('Пожалуйста, дайте свое согласие на обработку персональных данных.');
        return;
    }
    
    document.getElementById('callbackForm').classList.add('hidden');
    document.getElementById('successMessage').classList.remove('hidden');
});

function customAlert(message) {
    const alertBox = document.createElement('div');
    alertBox.className = 'custom-alert';
    alertBox.innerText = message;
    
    document.body.appendChild(alertBox);
    
    setTimeout(() => {
        alertBox.remove();
    }, 3000);
}

function resetForm() {
    document.getElementById('callbackForm').classList.remove('hidden');
    document.getElementById('successMessage').classList.add('hidden');
    document.getElementById('callbackForm').reset();
    document.getElementById('fileList').innerHTML = '';
}
