document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu_laptop');
    const menuClose = document.querySelector('.menu_close');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('menu_active');
    });

    menuClose.addEventListener('click', () => {
        menu.classList.remove('menu_active');
    });

    // Закрывать меню при клике вне его области
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
            menu.classList.remove('menu_active');
        }
    });

    // Отменить закрытие при клике внутри меню
    menu.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});