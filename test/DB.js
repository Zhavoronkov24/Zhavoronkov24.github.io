// Открытие или создание базы данных
const request = indexedDB.open('registrationDB', 1);

// Обработчик события успешного открытия/создания базы данных
request.onsuccess = function(event) {
  const db = event.target.result;

  // Обработчик события отправки формы
  document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Получение значений полей формы
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const birthdate = document.getElementById('birthdate').value;
    const city = document.getElementById('city').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const gender = document.getElementById('gender').value;
    const phone = document.getElementById('phone').value;
    const agreement = document.getElementById('agreement').checked;

    // Создание транзакции для записи данных
    const transaction = db.transaction(['users'], 'readwrite');
    const objectStore = transaction.objectStore('users');

    // Создание объекта пользователя
    const user = {
      firstName: firstName,
      lastName: lastName,
      birthdate: birthdate,
      city: city,
      email: email,
      password: password,
      gender: gender,
      phone: phone,
      agreement: agreement
    };

    // Добавление объекта пользователя в хранилище
    const request = objectStore.add(user);

    // Обработчик события успешного добавления объекта
    request.onsuccess = function(event) {
      console.log('Данные успешно сохранены в IndexedDB');
    };

    // Обработчик события ошибки при добавлении объекта
    request.onerror = function(event) {
      console.error('Ошибка при сохранении данных в IndexedDB');
    };
  });
};

// Обработчик события ошибки открытия/создания базы данных
request.onerror = function(event) {
  console.error('Ошибка при открытии/создании базы данных');
};

// Обработчик события обновления базы данных
request.onupgradeneeded = function(event) {
  const db = event.target.result;

  // Создание хранилища объектов для пользователей
  const objectStore = db.createObjectStore('users', { keyPath: 'email' });

  // Создание индекса для поиска пользователей по email
  objectStore.createIndex('email', 'email', { unique: true });

  console.log('База данных успешно создана/обновлена');
};
