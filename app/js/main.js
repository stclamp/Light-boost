$(function () {
    $('.promo__slider').slick({
        infinite: true,
        autoplay: true,
        fade: true,
        prevArrow: `<button type="button" class="slick-prev"><img src='../images/slider-left.svg'></button>`,
        nextArrow: `<button type="button" class="slick-next"><img src='../images/slider-right.svg'></button>`
    });
});

//TABS

const tabBtn = document.querySelectorAll('.offers__btn');
const tabsContent = document.querySelectorAll('.offers__cards')
const tabBtns = document.querySelector('.offers__btns')

function hideTabContent() {
    tabsContent.forEach(item => {
        item.classList.add('hidden');
        item.classList.remove('show', 'fade');
    });

    tabBtn.forEach(item => {
        item.classList.remove('offers__btn--active');
    });
}

function showTabContent(i = 0) {
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hidden');
    tabBtn[i].classList.add('offers__btn--active');
}

hideTabContent();
showTabContent();

tabBtns.addEventListener('click', (event) => {
    const target = event.target;

    if (target && target.classList.contains('offers__btn')) {
        tabBtn.forEach((item, i) => {
            if (target == item) {
                hideTabContent();
                showTabContent(i);
            }
        });
    }
});

// TIMER 

const deadline = '2021-07-31 00:00';

function getTimeRemainig(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date());
    const days = Math.floor((t / (1000 * 60 * 60 * 24)));
    const hours = Math.floor((t / (1000 * 60 * 60) % 24));
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const seconds = Math.floor((t / 1000) % 60);

    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds,
    };
}



function setClock(selector, endtime) {
    const timer = document.querySelector(selector);
    const days = timer.querySelector('#days');
    const hours = timer.querySelector('#hours');
    const minutes = timer.querySelector('#minutes');
    const seconds = timer.querySelector('#seconds');
    const timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
        const t = getTimeRemainig(endtime);

        days.innerHTML = t.days;
        hours.innerHTML = t.hours;
        minutes.innerHTML = t.minutes;
        seconds.innerHTML = t.seconds;

        if (t.total <= 0) {
            clearInterval(timeInterval);
            days.innerHTML = 0;
            hours.innerHTML = 0;
            minutes.innerHTML = 0;
            seconds.innerHTML = 0;
        }
    }
}

setClock('.leveling__timer', deadline);


//humburger

const humburgerOpen = document.querySelector('.header__humburger');
const humburgerClose = document.querySelector('.header__humburger-close');
const menuList = document.querySelector('.header__list');
const menuInner = document.querySelector('.header__inner')
const checkinList = document.querySelector('.header__checkin-list');


const toggleMenu = () => {
    menuList.classList.toggle('show_tr');
    checkinList.classList.toggle('show_tr');
}

menuInner.addEventListener('click', (e) => {
    const target = e.target;

    if (target.classList.contains('header__item-link') ||
        target.classList.contains('header__checkin-login') ||
        target.classList.contains('header__checkin-reg')) {
        toggleMenu();
        humburgerOpen.style.display = 'block';
        humburgerClose.style.display = 'none';

    }
    console.log(target)

})

humburgerOpen.addEventListener('click', () => {
    toggleMenu();
    humburgerOpen.style.display = 'none';
    humburgerClose.style.display = 'block';
});

humburgerClose.addEventListener('click', () => {
    toggleMenu();
    humburgerOpen.style.display = 'block';
    humburgerClose.style.display = 'none';
});

