$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
        appendDots:'.slider-dots',
        dotsClass:'dots',

    });
    let hamberger = document.querySelector('.hamberger');
    let times = document.querySelector('.times');
    let mob = document.querySelector('.mob');

    hamberger.addEventListener('click',function(){
        mob.classList.add('open');

        
    })
    times.addEventListener('click',function(){
        mob.classList.remove('open');


    })



});