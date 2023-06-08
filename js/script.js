const toggleSwitch = document.querySelector('#theme-toggle');

function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); // сохраняем тему в localStorage
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

// проверяем, какая тема сохранена в localStorage и устанавливаем её
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}
