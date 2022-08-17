// query selectors
const preloader = document.querySelector('.preloader');
const cursor = document.querySelector('.cursor');
const logo = document.querySelector('.header__logo');
const navLinks = document.querySelectorAll('.nav-links li');
const burgerBtn = document.querySelector('.burger-btn');
const line1 = document.querySelector('.burger-btn__line1');
const line2 = document.querySelector('.burger-btn__line2');
const line3 = document.querySelector('.burger-btn__line3');
const header = document.querySelector('.header');
const nav = document.querySelector('.nav');



// event listeners
window.addEventListener('load', preloaderTransition);
window.addEventListener('mousemove', cursorMove);
burgerBtn.addEventListener('click', toggleNav);


// delay and slide preloader
function preloaderTransition() {
    setTimeout(slidePreloader, 1500);
    setTimeout(hidePreloader, 2000);
}

function slidePreloader() {
    preloader.style.transform = 'translateY(-100vh)';
}

function hidePreloader() {
    preloader.style.display = 'none';
}


//tracking mouse-movement for cursor animation
function cursorMove(e) {
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';
}


//cursor animation navLinks
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        cursor.classList.add('cursor-nav');
    })
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-nav');
    })
});


//cursor animation logo
logo.addEventListener('mouseover', () => {
    cursor.classList.add('cursor-logo');
    console.log('logo');
});
logo.addEventListener('mouseleave', () => {
    cursor.classList.remove('cursor-logo');
});


//cursor animation burger
burgerBtn.addEventListener('mouseover', () => {
    cursor.classList.add('cursor-burger-btn');
});
burgerBtn.addEventListener('mouseleave', () => {
    cursor.classList.remove('cursor-burger-btn');
});



// Menu animation
function toggleNav() {
    line1.classList.toggle('open');
    line2.classList.toggle('open');
    line3.classList.toggle('open');
    nav.classList.toggle('open');
    header.classList.toggle('open');

}