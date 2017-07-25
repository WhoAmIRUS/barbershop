var $slider = $('.slider');
var slideNow = 1;
var slideCount = $('.slider__slidewrapper', $slider).children().length;
var slideInterval = 3000;
var navBtnId = 0;
var translateWidth = 0;

$(document).ready(function () {
    $('.slider__slidewrapper', $slider).css({width: $('.slider__block', $slider).width()*slideCount});
    $('.slider__content', $slider).css({width: $('.slider__block', $slider).width()});

    var switchInterval = setInterval(nextSlide, slideInterval);

    $slider.hover(function(){
        clearInterval(switchInterval);
    },function() {
        switchInterval = setInterval(nextSlide, slideInterval);
    });

    $('.slider__button_right', $slider).click(function() {
        nextSlide();
    });

    $('.slider__button_left', $slider).click(function() {
        prevSlide();
    });

    $('.slider__rhombus', $slider).click(function() {
        navBtnId = $(this).index();
        console.log(navBtnId);
        if (navBtnId + 1 !== slideNow) {

            translateWidth = -$('.slider__viewport').width() * (navBtnId);
            $('.slider__slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)'
            });
            $('.slider__rhombus').html('&#9671');
            $(this).html('&#9670');
            slideNow = navBtnId++;
        }

    });
});

function goToSlide(index) {
    translateWidth = -$('.slider__viewport').width() * index;
    $('.slider__slidewrapper').css({
        'transform': 'translate(' + translateWidth + 'px, 0)'
    });
}

function nextSlide() {
    if (slideNow === slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('.slider__slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        goToSlide(slideNow);
        slideNow++;
    }
    // $('.slider__rhombus').html('&#9671');
    /*if (slideNow === slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('.slider__slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$('.slider__viewport').width() * (slideNow);
        $('.slider__slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)'
        });
        slideNow++;
    }*/
    /*if ($('.slider__rhombus').index()-3 === slideNow){
        console.log('lol');
        $('.slider__rhombus').html('&#9670');
    } else{
        // $('.slider__rhombus').html('&#9671');
    }*/
}

function prevSlide() {
    if (slideNow === 1 || slideNow <= 0 || slideNow > slideCount) {
        goToSlide(slideCount - 1);
        slideNow = slideCount;
    } else {
        goToSlide(slideNow-2);
        slideNow--;
    }
    /*if (slideNow === 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('.slider__viewport').width() * (slideCount - 1);
        $('.slider__slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)'
        });
        slideNow = slideCount;
    } else {
        translateWidth = -$('.slider__viewport').width() * (slideNow - 2);
        $('.slider__slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)'
        });
        slideNow--;
    }*/
}