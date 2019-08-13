$(document).ready(function () {
    $("#phone").mask("+ 375 (--) -- -- ---");
});

$('.form')
    .validate({
        rules: {
            userName: {required: true},
            userEmail: {
                required: true,
                email: true
            }
        },
        messages: {
            userName: 'Please specify your name',
            userEmail: {
                required: 'Please specify your name email',
                email: 'Your email address must be in the format of name@domain.com'
            }

        },
        errorClass: 'errValidForm'

    });

$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        initialSlide: 0,
        speed: 400,
        spaceBetween: 60,
        slidesPerView: 3,
        // pagination: {
        //     el: '.swiper-pagination',
        // },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },
    })
});

//
// var mySwiper2 = document.querySelector('.swiper-container').swiper
//
// // Now you can use all slider methods like
// mySwiper2.slideNext();
