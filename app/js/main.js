$(function () {
    $('.promo__slider').slick({
        infinite: true,
        autoplay: true,
        fade: true,
        prevArrow: `<button type="button" class="slick-prev"><img src='../images/slider-left.svg'></button>`,
        nextArrow: `<button type="button" class="slick-next"><img src='../images/slider-right.svg'></button>`
    });
});

const tabBtns = document.querySelectorAll('[data-tabs-btn');
const tabContent = document.querySelectorAll('[data-tabs-field]');

for (const tab of tabBtns) {
    tab.addEventListener('click', () => {
        tabBtns.forEach(item => {
            if (tab === item) {
                item.classList.add('offers__btn--active');
            } else {
                item.classList.remove('offers__btn--active');
            }
        });
    });
    tabContent.forEach(item => {
        if (item.dataset.tabsField === tab.dataset.tabsBtn) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}