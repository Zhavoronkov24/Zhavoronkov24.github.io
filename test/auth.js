// Открытие или создание базы данных
const request = indexedDB.open('registrationDB', 1);

// Обработчик события успешного открытия/создания базы данных
request.onsuccess = function(event) {
  const db = event.target.result;

  // Обработчик события отправки формы авторизации
  document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Получение значений полей формы
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Создание транзакции для чтения данных
    const transaction = db.transaction(['users'], 'readonly');
    const objectStore = transaction.objectStore('users');
    const index = objectStore.index('email');

    // Поиск пользователя по email
    const request = index.get(email);

   // Обработчик события успешного поиска пользователя
request.onsuccess = function(event) {
    const user = event.target.result;
    const messageElement = document.getElementById('message');
  
    if (user && user.password === password) {
      messageElement.textContent = 'Загрузка...';
      setTimeout(function() {
        window.location.href = "success.html";
      }, 1500);
    } else {
      messageElement.textContent = 'Пользователь не найден';
  }
  };
  

    // Обработчик события ошибки при поиске пользователя
    request.onerror = function(event) {
        const messageElement = document.getElementById('message');
        messageElement.textContent = 'Ошибка при поиске пользователя';
    };
  });
};

// Обработчик события ошибки открытия/создания базы данных
request.onerror = function(event) {
  console.error('Ошибка при открытии/создании базы данных');
};

