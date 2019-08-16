var flag = true;
var xFlag = false;


function addSwiper() {
    var firstCountSlids = 3;
    var secCountSlids = 3;
    var thirtCountSlids = 3;
    var firstSpace = 60;
    var secSpace = 60;
    var thirtSpace = 60;
    if (window.matchMedia('(max-width: 1099px)').matches) {
        firstCountSlids = 2;
        secCountSlids = 2;
        thirtCountSlids = 2;
        firstSpace = 60;
        secSpace = 60;
        thirtSpace = 0;
    }
    if (window.matchMedia('(max-width: 800px)').matches) {
        firstCountSlids = 2;
        secCountSlids = 1;
        thirtCountSlids = 1;
        firstSpace = 60;
        secSpace = 60;
        thirtSpace = 60;
    }
    if (window.matchMedia('(max-width: 500px)').matches) {
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
        spaceBetween: firstSpace,
        slidesPerView: firstCountSlids,
        navigation: {
            nextEl: '.swiper-button-next4',
            prevEl: '.swiper-button-prev4',
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
}

function menuControl() {
    document.querySelectorAll('#collapse-navbar a').forEach(function (item) {
        item.addEventListener('click', function (e) {
            document.querySelector('#collapse-navbar').classList.remove('active');
        });
    });

    $(document).mouseup(function (e) {
        debugger;
        if (e.target.classList.contains('navbar-menu') )  return;
        // var isActive = document.querySelector('#collapse-navbar').classList.contains('active');
        var container = $("#collapse-navbar");
        if ((container.has(e.target).length === 0) ) {
            document.querySelector('#collapse-navbar').classList.remove('active');
        }
        flag = false;
    });
}

function showMenu() {
    var collapseNavbar = document.querySelector('#collapse-navbar');
    var isActive = collapseNavbar.classList.toggle('active');

    // console.log(collapseNavbar.classList);
    //  if (collapseNavbar.classList.contains('active')) {
    //      collapseNavbar.classList.remove('active');
    //      flag = false;
    // } else if (flag === false) {
    //      collapseNavbar.classList.add('active');
    //      flag = true;
    //  }
}

if (window.matchMedia('(min-width: 1100px)').matches) {
    xFlag = true;
}
$(window).scroll(function () {
    if ($(this).scrollTop() > 0 && xFlag) {
        $(".top-bar").addClass("fixed");
        $(".fake-top-bar").addClass("fake-top-bar-active");
    } else {
        $(".top-bar").removeClass("fixed");
        $(".fake-top-bar").removeClass("fake-top-bar-active");
    }
});

function majorFunc() {
    $(".top-bar").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1000);
    });

    addSwiper();

    $("input[name=user-phone]").mask("+375 (99) 99 99 999");
    $('#new-form')
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

    if (window.matchMedia('(max-width: 710px)').matches) {
        document.querySelector('.navbar-menu').addEventListener('click', function (e)  {
            showMenu();
        });
    }
}

$(document).ready(majorFunc);

$( window ).resize(function() {
    majorFunc();
});


