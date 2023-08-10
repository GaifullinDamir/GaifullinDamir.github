'use strict'

document.addEventListener('DOMContentLoaded', ()  => {
   
    window.addEventListener('load', () => {
        document.body.classList.add('loaded_hiding');
        window.setTimeout(function () {
            document.body.classList.add('loaded');
            document.body.classList.remove('loaded_hiding');
            }, 500);
    })
    const menu = document.querySelector('.menu');
    const menuItems = document.querySelectorAll('.menu_item');
    const hamburger = document.querySelector('.hamburger');

    const touchHandler = (e) => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    };

    hamburger.addEventListener('click', touchHandler);
    menuItems.forEach(item => {
        item.addEventListener('click', touchHandler);
    });
});