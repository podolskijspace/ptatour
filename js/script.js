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
});