const slider = document.querySelector('#slider_1');
const sliderBody = slider.querySelector('.slider-body');
const sliderItem = slider.querySelectorAll('.slider-item');

const btnLefr = slider.querySelector('.btn-left');
const btnRight = slider.querySelector('.btn-right');

const slidesToShow = 3;
const slidesToScroll = 1;
let currentSlide = 0;
const itemWidth = sliderBody.offsetWidth / slidesToShow;

function info() {
    console.log('currentSlide', currentSlide);
    console.log('itemWidth', itemWidth);
    console.log('slidesToScroll', slidesToScroll);
}

function init() {
    sliderItem.forEach((sliderItem) => {
        sliderItem.style.minWidth = sliderBody.offsetWidth / slidesToShow + 'px';
    });
};

init();

function moveToLeft() {
    if (currentSlide - slidesToScroll >= 0) {
        currentSlide -= slidesToScroll;
    } else {
        currentSlide = 0;
    }

    setPosition();
}

function moveToRight() {
    if (currentSlide + slidesToScroll <= sliderItem.length - slidesToShow) {
        currentSlide += slidesToScroll;
    } else {
        currentSlide = sliderItem.length - slidesToShow;
    }

    setPosition();
}

function setPosition() {
    info();
    sliderBody.scrollLeft = currentSlide * itemWidth * currentSlide;
}


btnLefr.addEventListener('click', moveToLeft);
btnRight.addEventListener('click', moveToRight);
