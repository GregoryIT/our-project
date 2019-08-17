/**
 * major Function. it starts when document is ready
 */
$(document).ready(function majorFunc() {

    /**
     * when screen`s min-width is 1100px add menu to top screen
     */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0 && window.matchMedia('(min-width: 1100px)').matches) {
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

        var swiper5 = new Swiper('.swiper5', {
            direction: 'horizontal',
            loop: true,
            initialSlide: 0,
            speed: 400,
            spaceBetween: 60,
            slidesPerView: 1,
            navigation: {
                nextEl: '.swiper-button-next5',
                prevEl: '.swiper-button-prev5',
            },
        });


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

    slidersBehavior();
    /**
     * TO-DO - DESTROY OLD SLIDERS!
     */
    $(window).resize(function () {
        // swiper5.destroy();
        // swiper.destroy();
        // swiper1.destroy();
        // swiper2.destroy();
        // swiper5 = undefined;
        // swiper = undefined;
        // swiper1 = undefined;
        // swiper2 = undefined;
        // jQuery('.swiper-wrapper').removeAttr('style');
        // jQuery('.swiper-slide').removeAttr('style');
        // swiper.detachEvents();
        // swiper.reInit() // or mySwiper.resizeFix()
        // slidersBehavior();
    });

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
                userName: 'Please specify your name',
                userEmail: {
                    required: 'Please specify your name email',
                    email: 'Your email address must be in the format of name@domain.com'
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

});



