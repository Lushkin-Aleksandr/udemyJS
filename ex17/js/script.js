'use strict';

$(document).ready(function () {

    function showModal() {
        $('.overlay').fadeIn('slow');
        $('.modal').slideDown('slow');
    }

    function closeModal() {
        $('.overlay').fadeOut('slow');
        $('.modal').slideUp('slow');
    }

    $('.main_btna').on('click', function() {
        showModal();
    });

    $('.main_btn').on('click', function() {
        showModal();
    });

    $('nav ul li:nth-child(2) a').on('click', function() {
        showModal();
    });

    $('.close').on('click', function() {
        closeModal();
    });
});