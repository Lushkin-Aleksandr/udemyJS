'use strict';

let menu = document.querySelector('.menu');
let menuItems = document.querySelectorAll('.menu-item');

//Поменял местами третий и второй пункт меню
menu.insertBefore(menuItems[2], menuItems[1]);

//Создание пятого пункта меню
let fifthMenuItem = document.createElement('li');
fifthMenuItem.classList.add('menu-item');
fifthMenuItem.textContent = 'Пятый пункт';
menu.appendChild(fifthMenuItem); //Добавление пятого пункта меню в конец
console.log(fifthMenuItem);

//Замена фоновой картинки
document.body.style.backgroundImage = 'url(./img/apple_true.jpg)';

//Смена заголовка
let title = document.querySelector('.title');
title.textContent = 'Мы продаем только подлинную технику Apple';

//Удаление рекламного блока
let columns = document.querySelectorAll('.column');
columns[1].removeChild(document.querySelector(".adv"));

//Вопрос к пользователю о технике apple
let answerAboutApple = prompt('Как вы относитесь к технике Apple?', '');
let answerBlock = document.getElementById('prompt');
answerBlock.textContent = answerAboutApple;














