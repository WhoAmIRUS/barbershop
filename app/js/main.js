/*var $slider = $('.slider');
var slideNow = 1;
var slideCount = $('.slider__slidewrapper', $slider).children().length;
var slideInterval = 3000;
var navBtnId = 0;
var translateWidth = 0;*/

/*$(document).ready(function () {*/
    /*$('.slider__slidewrapper', $slider).css({width: $('.slider__block', $slider).width()*slideCount});
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
        if (navBtnId + 1 !== slideNow) {
            goToSlide(navBtnId);
            $('.slider__rhombus').html('&#9671');
            $(this).html('&#9670');
            slideNow = navBtnId+1;
        }

    });
});

function goToSlide(index) {
    translateWidth = -$('.slider__viewport').width() * index;
    $('.slider__slidewrapper').css({
        'transform': 'translate(' + translateWidth + 'px, 0)'
    });
    $('.slider__rhombus').html('&#9671');
    $('.slider__rhombus').eq(index).html('&#9670');
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
    /!*if (slideNow === slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('.slider__slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$('.slider__viewport').width() * (slideNow);
        $('.slider__slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)'
        });
        slideNow++;
    }*!/
    /!*if ($('.slider__rhombus').index()-3 === slideNow){
        console.log('lol');
        $('.slider__rhombus').html('&#9670');
    } else{
        // $('.slider__rhombus').html('&#9671');
    }*!/
}

function prevSlide() {
    if (slideNow === 1 || slideNow <= 0 || slideNow > slideCount) {
        goToSlide(slideCount - 1);
        slideNow = slideCount;
    } else {
        goToSlide(slideNow-2);
        slideNow--;
    }
    /!*if (slideNow === 1 || slideNow <= 0 || slideNow > slideCount) {
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
    }*!/
}

$('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
});*/

/*jQuery(document).ready(function ($) {
    var $slider = $('ul');
    var slideNow = 1;
    var slideCount = $slider.children().length;

    $('.next').on('click', function() {
        var $current = $('li.current', $slider);
        if (slideNow === slideCount){
            var $next = $('li', $slider).eq(0);
            slideNow = 0;
        }
        else{
            var $next = $('li.current', $slider).next();
        }

        $current.css({
            left: '0'
        });
        $next.css({
            left: '100%'
        });
        /!**!/
        setTimeout(function(){
            $current.addClass('animation');
            $next.addClass('animation');
            $current.css({
                left: '-100%'
            });
            $next.css({
                left: '0'
            });

            setTimeout(function(){
                $current.removeClass('animation');
                $next.removeClass('animation');

                $('li', $slider).removeClass('current');
                $next.addClass('current');
            }, 500);
        }, 0);
        /!**!/
        slideNow++
    });

    $('.prev').on('click', function() {
        var $current = $('li.current', $slider);
        if (slideNow === 1){
            var $prev = $('li', $slider).eq(slideCount-1);
            slideNow = slideCount+1;
        }
        else{
            var $prev = $('li.current', $slider).prev();
        }

        $current.css({
            left: '0'
        });
        $prev.css({
            left: '-100%'
        });
        /!**!/
        setTimeout(function(){
            $current.addClass('animation');
            $prev.addClass('animation');
            $current.css({
                left: '100%'
            });
            $prev.css({
                left: '0'
            });

            setTimeout(function(){
                $current.removeClass('animation');
                $prev.removeClass('animation');

                $('li', $slider).removeClass('current');
                $prev.addClass('current');
            }, 500);
        }, 0);
        /!**!/
        slideNow--
    });
    /!*$('#checkbox').change(function(){
        setInterval(function () {
            moveRight();
        }, 3000);
    });

    var slideCount = $('.slider__slidewrapper').children().length;
    var slideWidth = $('.slider__content').width();
    var slideHeight = $('.slider__content').height();
    var sliderUlWidth = slideCount * slideWidth;

    $('.slider').css({ width: slideWidth, height: slideHeight });

    $('.slider__slidewrapper').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('.slider__content:last-child').prependTo('.slider__slidewrapper');

    function moveLeft() {
        $('.slider__slidewrapper').animate({
            left: + slideWidth
        }, 200, function () {
            $('.slider__content:last-child').prependTo('.slider__slidewrapper');
            $('.slider__slidewrapper').css('left', '');
        });
    };

    function moveRight() {
        $('.slider__slidewrapper').animate({
            left: - slideWidth
        }, 200, function () {
            $('.slider__content:first-child').appendTo('.slider__slidewrapper');
            $('.slider__slidewrapper').css('left', '');
        });
    };

    $('.slider__button_left').click(function () {
        moveLeft();
    });

    $('.slider__button_right').click(function () {
        moveRight();
    });*!/

});*/

/*jQuery(document).ready(function ($) {
    var $slider = $('ul');
    var slideNow = 1;
    var slideCount = $slider.children().length;

    $('.next').on('click', function() {
        var $current = $('li.current', $slider);
        if (slideNow === slideCount){
            var $next = $('li', $slider).eq(0);
            slideNow = 0;
        }
        else{
            var $next = $('li.current', $slider).next();
        }

        $current.css({
            left: '0'
        });
        $next.css({
            left: '100%'
        });
        /!**!/
        setTimeout(function(){
            $current.addClass('animation');
            $next.addClass('animation');
            $current.css({
                left: '-100%'
            });
            $next.css({
                left: '0'
            });

            setTimeout(function(){
                $current.removeClass('animation');
                $next.removeClass('animation');

                $('li', $slider).removeClass('current');
                $next.addClass('current');
            }, 500);
        }, 0);
        /!**!/
        slideNow++
    });

    $('.prev').on('click', function() {
        var $current = $('li.current', $slider);
        if (slideNow === 1){
            var $prev = $('li', $slider).eq(slideCount-1);
            slideNow = slideCount+1;
        }
        else{
            var $prev = $('li.current', $slider).prev();
        }

        $current.css({
            left: '0'
        });
        $prev.css({
            left: '-100%'
        });
        /!**!/
        setTimeout(function(){
            $current.addClass('animation');
            $prev.addClass('animation');
            $current.css({
                left: '100%'
            });
            $prev.css({
                left: '0'
            });

            setTimeout(function(){
                $current.removeClass('animation');
                $prev.removeClass('animation');

                $('li', $slider).removeClass('current');
                $prev.addClass('current');
            }, 500);
        }, 0);
        /!**!/
        slideNow--
    });
    /!*$('#checkbox').change(function(){
     setInterval(function () {
     moveRight();
     }, 3000);
     });

     var slideCount = $('.slider__slidewrapper').children().length;
     var slideWidth = $('.slider__content').width();
     var slideHeight = $('.slider__content').height();
     var sliderUlWidth = slideCount * slideWidth;

     $('.slider').css({ width: slideWidth, height: slideHeight });

     $('.slider__slidewrapper').css({ width: sliderUlWidth, marginLeft: - slideWidth });

     $('.slider__content:last-child').prependTo('.slider__slidewrapper');

     function moveLeft() {
     $('.slider__slidewrapper').animate({
     left: + slideWidth
     }, 200, function () {
     $('.slider__content:last-child').prependTo('.slider__slidewrapper');
     $('.slider__slidewrapper').css('left', '');
     });
     };

     function moveRight() {
     $('.slider__slidewrapper').animate({
     left: - slideWidth
     }, 200, function () {
     $('.slider__content:first-child').appendTo('.slider__slidewrapper');
     $('.slider__slidewrapper').css('left', '');
     });
     };

     $('.slider__button_left').click(function () {
     moveLeft();
     });

     $('.slider__button_right').click(function () {
     moveRight();
     });*!/

});*/
var $slider = $('.slider__wrapper');
var slideNow = 1;
var slideCount = $slider.children().length;
var slideInterval = 3000;

var $sliderSingularity = $('.singularity');
var slideNowSingularity = 1;
var slideCountSingularity = $sliderSingularity.children().length;


$(document).ready(function () {

    var switchInterval = setInterval(nextSlide, slideInterval);

    $('.slider').hover(function(){
        clearInterval(switchInterval);
    },function() {
        switchInterval = setInterval(nextSlide, slideInterval);
    });

    $('.slider__button_next').on('click', function() {
        nextSlide()
    });

    $('.slider__button_prev').on('click', function() {
        prevSlide()
    });

    $('.slider__rhombus').click(function() {
        var navBtnId = $(this).index();
        console.log(navBtnId);
        var currentSlide = slideNow;
        if ((navBtnId+1) < currentSlide){
            for (var i=0; i<=(currentSlide-navBtnId-2); i++){
                prevSlide()
            }
        }else if ((navBtnId+1) > currentSlide){
            for (i=0; i<=(navBtnId-currentSlide); i++){
                nextSlide()
            }
        }
    });

    var trigger = document.querySelector('.menu__button');

    trigger.addEventListener('click', function() {
        if (trigger.classList.contains('menu__button_open')) {
            $('.menu__wrapper').css({
                right: '-250px'
            });
            $('.menu__button').css({
                right: '0'
            });
            trigger.classList.remove('menu__button_open');
        } else {
            $('.menu__wrapper').css({
                right: '0'
            });
            $('.menu__button').css({
                right: '250px'
            });
            trigger.classList.add('menu__button_open');
        }
    });
    var scr_w=screen.width;
    if (scr_w <= 555){
        clickOnRhombusSingularity();
    }
    $( window ).resize(function() {
        clickOnRhombusSingularity();
    });
});

function goToSlide(index) {
    $('.slider__rhombus').html('&#9671');
    $('.slider__rhombus').eq(index).html('&#9670');
}

function nextSlide() {
    var $current = $('.slider__content.current', $slider);
    if (slideNow === slideCount){
        var $next = $('.slider__content', $slider).eq(0);
        slideNow = 0;
    }
    else{
        $next = $('.slider__content.current', $slider).next();
    }
    $current.css({
        left: '0'
    });
    $next.css({
        left: '100%'
    });
    /**/
    setTimeout(function(){
        $current.addClass('animation');
        $next.addClass('animation');
        $current.css({
            left: '-100%'
        });
        $next.css({
            left: '0'
        });

        setTimeout(function(){
            $current.removeClass('animation');
            $next.removeClass('animation');

            $('li', $slider).removeClass('current');
            $next.addClass('current');
        }, 500);
    }, 0);
    /**/
    slideNow++;
    goToSlide(slideNow-1);
}
function prevSlide() {
    var $current = $('.slider__content.current', $slider);
    if (slideNow === 1){
        var $prev = $('.slider__content', $slider).eq(slideCount-1);
        slideNow = slideCount+1;
    }
    else{
        $prev = $('.slider__content.current', $slider).prev();
    }

    $current.css({
        left: '0'
    });
    $prev.css({
        left: '-100%'
    });
    /**/
    setTimeout(function(){
        $current.addClass('animation');
        $prev.addClass('animation');
        $current.css({
            left: '100%'
        });
        $prev.css({
            left: '0'
        });

        setTimeout(function(){
            $current.removeClass('animation');
            $prev.removeClass('animation');

            $('li', $slider).removeClass('current');
            $prev.addClass('current');
        }, 500);
    }, 0);
    /**/
    slideNow--;
    goToSlide(slideNow-1);
}

function goToSlideClassSingularity(index) {
    $('.singularity__rhombus').html('&#9671');
    $('.singularity__rhombus').eq(index).html('&#9670');
}

function nextSlideClassSingularity() {
    var $current = $('.singularity__item.current', $sliderSingularity);
    if (slideNowSingularity === slideCountSingularity){
        var $next = $('.singularity__item', $sliderSingularity).eq(0);
        slideNowSingularity = 0;
    }
    else{
        $next = $('.singularity__item.current', $sliderSingularity).next();
    }
    $current.css({
        left: '0'
    });
    $next.css({
        left: '100%'
    });
    /**/
    setTimeout(function(){
        $current.addClass('animation');
        $next.addClass('animation');
        $current.css({
            left: '-100%'
        });
        $next.css({
            left: '0'
        });

        setTimeout(function(){
            $current.removeClass('animation');
            $next.removeClass('animation');

            $('li', $slider).removeClass('current');
            $next.addClass('current');
        }, 500);
    }, 0);
    /**/
    slideNowSingularity++;
    goToSlideClassSingularity(slideNowSingularity-1);
}
function prevSlideClassSingularity() {
    var $current = $('.singularity__item.current', $sliderSingularity);
    if (slideNowSingularity === 1){
        var $prev = $('.slider__content', $sliderSingularity).eq(slideCountSingularity-1);
        slideNowSingularity = slideCountSingularity+1;
    }
    else{
        $prev = $('.singularity__item.current', $sliderSingularity).prev();
    }

    $current.css({
        left: '0'
    });
    $prev.css({
        left: '-100%'
    });
    /**/
    setTimeout(function(){
        $current.addClass('animation');
        $prev.addClass('animation');
        $current.css({
            left: '100%'
        });
        $prev.css({
            left: '0'
        });

        setTimeout(function(){
            $current.removeClass('animation');
            $prev.removeClass('animation');

            $('li', $slider).removeClass('current');
            $prev.addClass('current');
        }, 500);
    }, 0);
    /**/
    slideNowSingularity--;
    goToSlideClassSingularity(slideNowSingularity-1);
}

function clickOnRhombusSingularity() {
    $('.singularity__rhombus').click(function() {
        var navBtnId = $(this).index();
        console.log(navBtnId);
        var currentSlide = slideNowSingularity;
        if ((navBtnId+1) < currentSlide){
            for (var i=0; i<=(currentSlide-navBtnId-2); i++){
                prevSlideClassSingularity();
            }
        }else if ((navBtnId+1) > currentSlide){
            for (i=0; i<=(navBtnId-currentSlide); i++){
                nextSlideClassSingularity();
            }
        }
    });
}