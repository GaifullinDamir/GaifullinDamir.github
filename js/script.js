'use strict'

document.addEventListener('DOMContentLoaded', ()  => {
    const menu = document.querySelector('.menu');
    const menuItems = document.querySelectorAll('.menu_item');
    const hamburger = document.querySelector('.hamburger');

    const touchHandler = (e) => {
        e.preventDefault();
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    };

    hamburger.addEventListener('click', touchHandler);
    menuItems.forEach(item => {
        item.addEventListener('click', touchHandler);
    });
});