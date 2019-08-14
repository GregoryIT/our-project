$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
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

// $('.form')
//     .validate({
//         rules: {
//             userName: {required: true},
//             userEmail: {
//                 required: true,
//                 email: true
//             }
//         },
//         messages: {
//             userName: 'Please specify your name',
//             userEmail: {
//                 required: 'Please specify your name email',
//                 email: 'Your email address must be in the format of name@domain.com'
//             }

//         },
//         errorClass: 'errValidForm'

//     });

$(document).ready(function () {
    //initialize swiper when document ready
    var swiper2 = new Swiper('.swiper2', {
        direction: 'horizontal',
        loop: true,
        initialSlide: 0,
        speed: 400,
        spaceBetween: 60,
        slidesPerView: 3,
        navigation: {
            nextEl: '.swiper-button-next2',
            prevEl: '.swiper-button-prev2',
        },
    });

    var swiper1 = new Swiper('.swiper1', {
        direction: 'horizontal',
        loop: true,
        initialSlide: 0,
        speed: 400,
        spaceBetween: 60,
        slidesPerView: 3,
        navigation: {
            nextEl: '.swiper-button-next1',
            prevEl: '.swiper-button-prev1',
        },
    });

});
//
//     var mySwiper = new Swiper('.swiper-container', {
//         // Optional parameters
//         direction: 'horizontal',
//         loop: true,
//         initialSlide: 0,
//         speed: 400,
//         spaceBetween: 60,
//         slidesPerView: 3,
//         // pagination: {
//         //     el: '.swiper-pagination',
//         // },
//
//         // Navigation arrows
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },
//
//         // And if we need scrollbar
//         // scrollbar: {
//         //     el: '.swiper-scrollbar',
//         // },
//     })
// });
//
// $(document).ready(function () {
//     //initialize swiper when document ready
//     var mySwiper2 = new Swiper('.swiper-container2', {
//         // Optional parameters
//         direction: 'horizontal',
//         loop: true,
//         initialSlide: 0,
//         speed: 400,
//         spaceBetween: 60,
//         slidesPerView: 3,
//         // pagination: {
//         //     el: '.swiper-pagination',
//         // },
//
//         // Navigation arrows
//         navigation: {
//             nextEl: '.swiper-button-next2',
//             prevEl: '.swiper-button-prev2',
//         },
//
//         // And if we need scrollbar
//         // scrollbar: {
//         //     el: '.swiper-scrollbar',
//         // },
//     })
// });

//
// var mySwiper2 = document.querySelector('.swiper-container').swiper
//
// // Now you can use all slider methods like
// mySwiper2.slideNext();
