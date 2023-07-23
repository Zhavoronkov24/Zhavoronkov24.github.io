const themeToggle = document.querySelector('#toggle-theme');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        themeToggle.checked = true;
        document.querySelector('.theme-switch label').setAttribute('data-content', '🌙');
    }
}

themeToggle.addEventListener('change', function () {
    if (this.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        document.querySelector('.theme-switch label').setAttribute('data-content', '🌙');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        document.querySelector('.theme-switch label').setAttribute('data-content', '☀️');
    }
});