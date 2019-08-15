$(document).ready(function () {
    var x = false;
    if (window.matchMedia('(min-width: 1100px)').matches) {
        x = true;
    }
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0 && x) {
            $(".top-bar").addClass("fixed");
            $(".fake-top-bar").addClass("fake-top-bar-active");
        } else {
            $(".top-bar").removeClass("fixed");
            $(".fake-top-bar").removeClass("fake-top-bar-active");
        }
    });
});

$(document).ready(function () {
    $(".top-bar").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1000);
    });
});

$(document).ready(function () {
    $("#phone").mask("+ 375 (--) -- -- ---");
});




$(document).ready(function () {
    let firstCountSlids = 3;
    let secCountSlids = 3;
    let thirtCountSlids = 3;
    let firstSpace = 60;
    let secSpace = 60;
    let thirtSpace = 60;

    if (window.matchMedia('(max-width: 1099px)').matches) {
         firstCountSlids = 2;
         secCountSlids = 2;
         thirtCountSlids = 2;
         firstSpace = 60;
         secSpace = 60;
         thirtSpace = 60;
    }
    if (window.matchMedia('(max-width: 720px)').matches) {
        firstCountSlids = 1;
        secCountSlids = 1;
        thirtCountSlids = 1;
        firstSpace = 60;
        secSpace = 60;
        thirtSpace = 60;
    }
    var swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        initialSlide: 0,
        speed: 400,
        spaceBetween: thirtSpace,
        slidesPerView: thirtCountSlids,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    var swiper1 = new Swiper('.swiper1', {
        direction: 'horizontal',
        loop: true,
        initialSlide: 0,
        speed: 400,
        spaceBetween: secSpace,
        slidesPerView: secCountSlids,
        navigation: {
            nextEl: '.swiper-button-next1',
            prevEl: '.swiper-button-prev1',
        },
    });

    var swiper2 = new Swiper('.swiper2', {
        direction: 'horizontal',
        loop: true,
        initialSlide: 0,
        speed: 400,
        spaceBetween: thirtSpace,
        slidesPerView: thirtCountSlids,
        navigation: {
            nextEl: '.swiper-button-next2',
            prevEl: '.swiper-button-prev2',
        },
    });
});
