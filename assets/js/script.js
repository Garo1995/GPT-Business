$(document).ready(function () {
    window.onscroll = function () {
        myFunction();

    };
    let nav = document.querySelector("header");
    let prt = nav.parentElement;
    let sticky = nav.offsetTop+100;
    function myFunction() {
        let wdth = window.innerWidth
        if (wdth < 257) {
            if (window.pageYOffset > sticky) {
                nav.classList.add("sticky");
            } else {
                nav.classList.remove("sticky");
            }
        } else {
            if (window.pageYOffset > sticky) {
                nav.classList.add("sticky");
            } else {
                nav.classList.remove("sticky");
            }
        }
    }
});


const track = document.querySelector('.programming-track');
const items = Array.from(track.children);
let speed = 1;
let position = 0;

items.forEach(item => {
    let clone = item.cloneNode(true);
    track.appendChild(clone);
});

// Функция для прокрутки
function scrollTrack() {
    position -= speed;
    track.style.transform = `translateX(${position}px)`;

    if (Math.abs(position) >= track.scrollWidth / 2) {
        position = 0;
    }

    requestAnimationFrame(scrollTrack);
}

scrollTrack();


const trackTwo = document.querySelector('.programming-track-two');
const itemsTwo = Array.from(trackTwo.children);
let speedTwo = 1;
let positionTwo = 0;

itemsTwo.forEach(item => {
    let cloneTwo = item.cloneNode(true);
    trackTwo.appendChild(cloneTwo);
});

// Функция для прокрутки
function scrollTrackTwo() {
    positionTwo -= speedTwo;
    trackTwo.style.transform = `translateX(${positionTwo}px)`;

    if (Math.abs(positionTwo) >= trackTwo.scrollWidth / 2) {
        positionTwo = 0;
    }
    requestAnimationFrame(scrollTrackTwo);
}
scrollTrackTwo();


$(document).ready(function () {
    $('.open-menu').on('click', function () {
        $(this).toggleClass('close-menu');
        if ($(this).hasClass('close-menu')) {
            $('.nav-menu').addClass('transition-menu');
            $('body').addClass('body_fix');
        } else {
            $('.nav-menu').addClass('menu-width');
            $('body').removeClass('body_fix');
            $('.nav-menu').removeClass('transition-menu');
        }
    });
    $('.head-menu a').on('click', function () {
        $('.nav-menu').addClass('menu-width');
        $('body').removeClass('body_fix');
        $('.nav-menu').removeClass('transition-menu');
        $('.open-menu').removeClass('close-menu');
    })
});

$('.menu-scroll a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
        let $target = $(this.hash);
        $target = $target.length && $target
            || $('[name=' + this.hash.slice(1) +']');
        if ($target.length) {
            let targetOffset = $target.offset().top-130;
            $('html,body')
                .animate({scrollTop: targetOffset}, 1000);
            return false;
        }
    }
});

$('.open-reviews-box').click(function () {
    $(this).toggleClass('open-reviews-act');
    $('.about-people-cnt').toggleClass('about-people-act');
})

$(function () {
    let Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        let links = this.el.find('.link');
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    };

    Accordion.prototype.dropdown = function (e) {
        let $el = e.data.el;
        $this = $(this),
            $next = $this.next();
        $next.slideToggle();
        if (!e.data.multiple) {

            $el.find('.submenu').not($next).slideUp();
        }
        if (!$this.hasClass('open')) {
            $('.link').each(function () {
                $(this).removeClass('open')
            })
            $this.addClass('open')
        } else {
            $this.removeClass('open')
        }
    }

    let accordion = new Accordion($('#accordion'), false);
});






let usersSwiper = new Swiper(".users-slider", {
    loop: true,
    direction: "vertical",
    slidesPerView: 3,
    spaceBetween: 10,
    mousewheel: false,
    speed: 1600,
    autoplay: {
        delay: 1800,
        disableOnInteraction: false,
    },
    breakpoints: {
        '991': {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        '767': {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        '570': {
            slidesPerGroup: 1,

            slidesPerView: 2,
            spaceBetween: 10,
        },
        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
    },
    pagination: {
        el: ".our-users-pagination",
        clickable: true,
    },

});



let swiper2 = new Swiper(".users-stats-slider", {
    spaceBetween: 10,
    effect: "fade",
    thumbs: {
        swiper: usersSwiper,
    },
});





let usersMobileSwiper = new Swiper(".users-mobile-slider", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    breakpoints: {
        '1000': {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        '767': {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        '570': {
            slidesPerGroup: 1,

            slidesPerView: 2,
            spaceBetween: 10,
        },
        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
    },
    pagination: {
        el: ".users-mobile-pagination",
        clickable: true,
    },
});