$(document).ready(function () {


    //счетчик слайдов
    $('.comments-slider').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('.comments-desc__count .comments-desc__current').text(i);
        $('.comments-desc__count .comments-desc__all').text('/' + slick.slideCount);
    });

    //кнопка след слайд
    $('.comments-desc__next').click(function(e) {
        e.preventDefault();
        $('.comments-slider')[0].slick.slickNext();
    })
    
    //кнопка пред слайд
    $('.comments-desc__prev').click(function(e) {
        e.preventDefault();
        $('.comments-slider')[0].slick.slickPrev();
    })

    // слайдер отзывов
    $('.comments-slider').slick({
        slidesToShow: 3,
        arrows: false,
    });

    // Круги внизу главной страницы
    const directionsListItem = document.querySelectorAll('.directions--list__item'),
            directionBlock = document.querySelector('.wrapper--directions');

    makeCircles = () => {
        if (pageYOffset >= (directionBlock.offsetTop - directionBlock.clientHeight + 220)){
            directionsListItem.forEach(item => setProgress(item.querySelector('.directions--circle__progress'), parseInt(item.querySelector('.directions--circle__text').textContent)))
            document.removeEventListener('scroll', makeCircles);
        }
    }

    setProgress = (item, percent) => {
        const   radius = item.r.baseVal.value,
                    circumference = 2 * Math.PI * radius,
                    offset = circumference - percent / 100 * circumference;
        
        
        plusOffset(circumference, offset, item)
        
    }

    plusOffset = (start, percent, elem) => {
        start -= 1
        if (start >= percent) {
            elem.style.strokeDashoffset = start;
            requestAnimationFrame(() => plusOffset(start, percent, elem));
        }
    }

    document.addEventListener('scroll', makeCircles)

    //Появление и исчезновение меню
    const menuOpenBtn = document.querySelector('.header-menuIcon'),
                menuCloseBtn = document.querySelector('.header-menu__close'),
                menu = document.querySelector('.header-menu');

    const openMenu = () => {
        menu.style.transform = 'translateX(0)';
    }

    const closeMenu = () => {
        menu.style.transform = 'translateX(100%)';
    }

    menuOpenBtn.addEventListener('click', openMenu)

    menuCloseBtn.addEventListener('click', closeMenu)

    //слайдер на страницу обо мне
    // const sliderAbout = () => {
    //     const slider = document.querySelector('.command--slides'),
    //                 arrowLeft = slider.querySelector('.command--slides__arrow_left'),
    //                 arrowRight = slider.querySelector('.command--slides__arrow_left'),
    //                 sliderWrapper = slider.querySelector('.command--slides__wrapper');
                
    //     const moveLeft = (transform) => {
    //         transform += 300;
    //         sliderWrapper.style.transform = `translateX(${transform}px`;
    //     }

    //     moveLeft(sliderWrapper.style.transform || 0)

    // }

    // sliderAbout();

    $('.command--slides__wrapper').slick({
        asNavFor: '.command--left',
        arrows: true,
        prevArrow: '.command--slides__arrow_left',
        nextArrow: '.command--slides__arrow_right',
        speed:1000,
    });

    $('.command--left').slick({
        arrows: false,
        fade: true,
        speed: 500,
    });


});