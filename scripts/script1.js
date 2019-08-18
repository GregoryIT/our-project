var swiper5;
var swiper4;
var swiper1;
var swiper2;

/**
 * major Function. it starts when document is ready
 */
$(document).ready(function majorFunc() {

    /**
     * when screen`s min-width is 1100px add menu to top screen
     */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0 && window.matchMedia('(min-width: 710px)').matches) {
            $(".top-bar").addClass("fixed");
            $(".fake-top-bar").addClass("fake-top-bar-active");
        } else {
            $(".top-bar").removeClass("fixed");
            $(".fake-top-bar").removeClass("fake-top-bar-active");
        }
    });

    /**
     * add an animated scroll after click on the menu link
     */
    $(".top-bar").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1000);
    });

    /**
     * add an animated scroll after click on the collapse-menu link
     */
    $(".collapse").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1000);   
    });

    /**
     * add sliders behavior
     */
    function slidersBehavior() {
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
            thirtSpace = 0;
        }
        if (window.matchMedia('(max-width: 720px)').matches) {
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

        swiper5 = new Swiper('.swiper5', {
            direction: 'horizontal',
            loop: true,
            initialSlide: 0,
            speed: 400,
            spaceBetween: 60,
            slidesPerView: 1,
            grabCursor: true,
            centeredSlides: true,
            navigation: {
                nextEl: '.swiper-button-next5',
                prevEl: '.swiper-button-prev5',
            },
        });

        swiper4 = new Swiper('.swiper4', {
            direction: 'horizontal',
            loop: true,
            observer: true,
            initialSlide: 0,
            speed: 400,
            spaceBetween: firstSpace,
            slidesPerView: firstCountSlids,
            grabCursor: true,
            navigation: {
                nextEl: '.swiper-button-next4',
                prevEl: '.swiper-button-prev4',
            },
        });

        swiper1 = new Swiper('.swiper1', {
            direction: 'horizontal',
            loop: true,
            initialSlide: 0,
            speed: 400,
            spaceBetween: secSpace,
            slidesPerView: secCountSlids,
            grabCursor: true,
            navigation: {
                nextEl: '.swiper-button-next1',
                prevEl: '.swiper-button-prev1',
            },
        });

        swiper2 = new Swiper('.swiper2', {
            direction: 'horizontal',
            loop: true,
            initialSlide: 0,
            speed: 400,
            spaceBetween: thirtSpace,
            slidesPerView: thirtCountSlids,
            grabCursor: true,
            navigation: {
                nextEl: '.swiper-button-next2',
                prevEl: '.swiper-button-prev2',
            },
        });
    }

    slidersBehavior();

    /**
     * this runs the rules for validating forms
     */
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
                userName: 'Пожалуйста, укажите ваше имя',
                userEmail: {
                    required: 'Пожалуйста, укажите ваш адрес электронной почты',
                    email: 'Ваш адрес электронной почты должен быть в формате имя@домен.com'
                }
            },
            errorClass: 'errValidForm'
        });

    /**
     * this runs the rules for validating input-phone
     */
    $("input[name=user-phone]").mask("+375 (99) 99 99 999");

    /**
     * hide the menu when a click occurs outside the menu
     */
    $(document).mouseup(function (e) {
        let isActive = document.querySelector('#collapse-navbar').classList.contains('active');
        var container = $("#collapse-navbar");
        if ((container.has(e.target).length === 0) && isActive) {
            document.querySelector('#collapse-navbar').classList.toggle('active');
        }
    });

    /**
     * add behavior for the collapse-menu
     */
    const behaviorMenu = () => {
        if (window.matchMedia('(max-width: 710px)').matches) {
            document.querySelector('.navbar-menu').addEventListener('click', function (e) {
                document.querySelector('#collapse-navbar').classList.toggle('active');
            });
        } else {
            document.querySelector('.navbar-menu').addEventListener('click', function (e) {
                document.querySelector('#collapse-navbar').classList.remove('active');
            });
        }
        document.querySelectorAll('#collapse-navbar a').forEach(item => {
            item.addEventListener('click', (e) => {
                document.querySelector('#collapse-navbar').classList.remove('active');
            });
        });
    };

    behaviorMenu();

    /**
     * add behavior for the collapse
     */
    var collapse = function () {
        var data = $(".collapse").attr("data-collapse");

        $(".collapse-header").on("click", function () {
            if (data === "close") {
                $(".collapse-body").slideUp();
                if ($(this).hasClass("activeAccord")) {
                    $(this).toggleClass("activeAccord");
                } else {
                    $(".collapse-header").removeClass("activeAccord");
                    $(this).toggleClass("activeAccord");
                }
            } else {
                $(this).toggleClass("activeAccord");
            }
            $(this).parent().next(".collapse-body").not(":animated").slideToggle();
        })
    }
    collapse();

    document.querySelectorAll('#collapse-navbar a').forEach(function (item) {
        item.addEventListener('click', function (e) {
            document.querySelector('#collapse-navbar').classList.remove('active');
        });
    });

    /**
     * DESTROY OLD and write new SLIDERS! change a behavior Menu.
     */
    $(window).resize(function () {
        swiper5.destroy();
        swiper4.destroy();
        swiper1.destroy();
        swiper2.destroy();
        swiper5,swiper4,swiper1,swiper2 = undefined;
        jQuery('.swiper-wrapper').removeAttr('style');
        jQuery('.swiper-slide').removeAttr('style');

        slidersBehavior();
        behaviorMenu();
    });
});



