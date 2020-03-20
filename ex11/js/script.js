"use strict";
window.addEventListener('DOMContentLoaded', function() {
    
    let tab = document.querySelectorAll(".info-header-tab"),
        info = document.querySelector(".info-header"),
        tabContent = document.querySelectorAll(".info-tabcontent");

    //Функция для скрытия табов    
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    //Скрываем табы начиная со второго
    hideTabContent(1);

    //Функция для показа таба
    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    /*Обработчик нажатий на кнопки с длегированием(определяет на 
    какую кнопку произведено нажатие и открывает нужный таб)*/
    info.addEventListener('click', (event) => {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target === tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    //Timer

    let deadline = '2020-04-06';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000*60*60)));

            //Если значение состоит из одного знака, добавляем 0
            hours = (String(hours).length === 1) ? '0' + hours : hours;
            minutes = (String(minutes).length === 1) ? '0' + minutes : minutes;
            seconds = (String(seconds).length === 1) ? '0' + seconds : seconds;

            
            

            return {
                'total' : t,
                'hours' : hours,
                'minutes' : minutes,
                'seconds' : seconds
            };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('timer', deadline);

    //Modal window

    let more =  document.querySelector('.more'),
    moreTab = document.querySelectorAll('.description-btn'),
    overlay = document.querySelector('.overlay'),
    closeBtn = document.querySelector('.popup-close');

    function openModalWindow() {
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function closeModalWindow() {
        overlay.style.display = 'none';
        document.body.style.overflow = '';
    }

    more.addEventListener('click', () => {
        openModalWindow();
        more.classList.add('more-splash');
    });

    moreTab.forEach(function(item) {
        item.addEventListener('click', () => {
            openModalWindow();
        });
    });
    


    closeBtn.addEventListener('click', () => {
        closeModalWindow();
        more.classList.remove('more-splash');
    });
});




