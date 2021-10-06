const aside = document.querySelector('.aside');
const openPanel = document.querySelector('#openPanel');
openPanel.addEventListener('click', () => {
   aside.classList.toggle('aside_show');
});

// Переключение темы
const switchDark = document.querySelector('.page__switch-dark'),
   switchLight = document.querySelector('.page__switch-light');
switchDark.addEventListener('click', () => {
   document.querySelector('body').classList.add('theme-dark');
});
switchLight.addEventListener('click', () => {
   document.querySelector('body').classList.remove('theme-dark');
});

