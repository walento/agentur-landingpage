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
const btnTop = document.querySelector('.btn_top');
const btnBottom = document.querySelector('.btn_bottom');
const sliderElement = document.querySelector('.section-container');
const sliderSlides = sliderElement.querySelectorAll('section').length;
const footerLinks = document.querySelectorAll('.footer-link');



// event listeners
window.addEventListener('load', preloaderTransition);
window.addEventListener('mousemove', cursorMove);
burgerBtn.addEventListener('click', toggleNav);
btnTop.addEventListener('click', sliderPrev);
btnBottom.addEventListener('click', sliderNext);
window.addEventListener("wheel", throttle(wheel, 700));


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
    cursor.classList.add('cursor-dissapear');
});
logo.addEventListener('mouseleave', () => {
    cursor.classList.remove('cursor-dissapear');
});


//cursor animation burger
burgerBtn.addEventListener('mouseover', () => {
    cursor.classList.add('cursor-dissapear');
});
burgerBtn.addEventListener('mouseleave', () => {
    cursor.classList.remove('cursor-dissapear');
});


//cursor animation scroll buttons
btnTop.addEventListener('mouseover', () => {
    cursor.classList.add('cursor-dissapear');
});
btnTop.addEventListener('mouseleave', () => {
    cursor.classList.remove('cursor-dissapear');
});
btnBottom.addEventListener('mouseover', () => {
    cursor.classList.add('cursor-dissapear');
});
btnBottom.addEventListener('mouseleave', () => {
    cursor.classList.remove('cursor-dissapear');
});

//cursor animation footerLinks
footerLinks.forEach(footerLink => {
    footerLink.addEventListener('mouseover', () => {
        cursor.classList.add('cursor-dissapear');
    })
    footerLink.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-dissapear');
    })
});


// Menu animation
function toggleNav() {
    line1.classList.toggle('open');
    line2.classList.toggle('open');
    line3.classList.toggle('open');
    nav.classList.toggle('open');
    header.classList.toggle('open');

}


// full page scroll animation 
let clickCountPlus = 1;
let clickCountMinus = clickCountPlus - 1;


function sliderPrev() {
    if (clickCountPlus === 1) {
        return;
    } else {
        $('html, body').animate({
            scrollTop: $('.section2').offset().top * clickCountMinus
        }, 500)
        clickCountPlus = clickCountPlus - 1;
        clickCountMinus--; 
    }
}

function sliderNext() {
    if (clickCountPlus >= sliderSlides) {
        return;
    } else {
        $('html, body').animate({
            scrollTop: $('.section2').offset().top * clickCountPlus
        }, 500)
        clickCountMinus = clickCountPlus - 1;
        clickCountPlus++;
    }
}

/*

// fullpage scroll  

let wheel_timer = 0

window.addEventListener('wheel', function throttle(e) {
    e.preventDefault;
    wheel(e);
    window.removeEventListener('wheel', throttle);
    wheel_timer = setTimeout(function () {
        window.addEventListener('wheel', throttle);
    }, 1000);
});

function wheel(e) {

    if (e.deltaY > 0) {
        sliderNext();
        console.log('slidernext');
    } else {
        sliderPrev();
        console.log('sliderprev');
    }
}

*/


function throttle(fn, wait) {
    var time = Date.now();

    return function (event) {
        
      if (Math.abs(event.deltaY) < 20) return

      if ((time + wait - Date.now()) < 0) {
        fn(event);
        time = Date.now();
      }
    }
}

function wheel(e) {

    if (e.deltaY > 0) {
        sliderNext();
        console.log(e.deltaY);
    } else {
        sliderPrev();
        console.log(e.deltaY);
    }
}
