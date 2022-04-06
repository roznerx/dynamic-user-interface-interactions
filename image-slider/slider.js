// CONTAINERS

const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//BUTTONS - LEFT & RIGHT

const prevBtn = document.querySelector('#left-arrow-btn');
const nextBtn = document.querySelector('#right-arrow-btn');

//BUTTONS - NAV DOTS

const circleOne = document.getElementById('circle-1');
const circleTwo = document.getElementById('circle-2');
const circleThree = document.getElementById('circle-3');
const circleFour = document.getElementById('circle-4');
const circleFive = document.getElementById('circle-5');

// VARIABLES

let counter = 1;
let circleArr = [circleOne, circleTwo, circleThree, circleFour, circleFive];

//FUNCTIONS 

function toWhite(x) {
    for (let i = 0; i < circleArr.length; i++) {
        if (circleArr[i] == x) {
            circleArr[i].style.color = 'white';
        } else {
            circleArr[i].style.color = 'transparent';
        }
    }
}

toWhite(circleOne);

//EVENT LISTENERS

prevBtn.addEventListener('click', () => {
    console.log(counter);
    if (counter == 5) {
        carouselSlide.style.transform = 'translateX(-2667px)';
        toWhite(circleFour);
    }
    if (counter == 4) {
        carouselSlide.style.transform = 'translateX(-1778px)';
        toWhite(circleThree);
    }
    if (counter == 3) {
        carouselSlide.style.transform = 'translateX(-899px)';
        toWhite(circleTwo);
    }
    if (counter == 2) {
        carouselSlide.style.transform = 'translateX(0)';
        toWhite(circleOne);
    }
    if (counter == 1) {
        return;
    }
    counter --
})

nextBtn.addEventListener('click', () => {
    if (counter == 1) {
        carouselSlide.style.transform = 'translateX(-899px)';
        toWhite(circleTwo);
    }
    if (counter == 2) {
        carouselSlide.style.transform = 'translateX(-1778px)';
        toWhite(circleThree);
    }
    if (counter == 3) {
        carouselSlide.style.transform = 'translateX(-2667px)';
        toWhite(circleFour);
    }
    if (counter == 4) {
        carouselSlide.style.transform = 'translateX(-3556px)';
        toWhite(circleFive);
    }
    if (counter == 5) {
        carouselSlide.style.transform = 'translateX(0px)';
        counter = 0;
        toWhite(circleOne);
    }
    counter++;
});

circleOne.addEventListener('click', () => {
    if (counter != 1) {
        carouselSlide.style.transform = 'translateX(0px)'
        counter = 1;
        toWhite(circleOne)
    }
});

circleTwo.addEventListener('click', () => {
    if (counter != 2) {
        carouselSlide.style.transform = 'translateX(-899px)'
        counter = 2;
        toWhite(circleTwo);
    }
});

circleThree.addEventListener('click', () => {
    if (counter != 3) {
        carouselSlide.style.transform = 'translateX(-1778px)'
        counter = 3;
        toWhite(circleThree);
    }
});

circleFour.addEventListener('click', () => {
    if (counter != 4) {
        carouselSlide.style.transform = 'translateX(-2667px)'
        counter = 4;
        toWhite(circleFour);
    }
});

circleFive.addEventListener('click', () => {
    if (counter != 5) {
        carouselSlide.style.transform = 'translateX(-3556px)'
        counter = 5;
        toWhite(circleFive);
    }
});
