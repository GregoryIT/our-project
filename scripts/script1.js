// СЛАЙДЕР

    'use strict';
    var multiItemSlider = (function () {
        return function (selector, config) {
            var
                _mainElement = document.querySelector(selector), // основный элемент блока
                _sliderWrapper = _mainElement.querySelector('.slider__wrapper'), // обертка для .slider-item
                _sliderItems = _mainElement.querySelectorAll('.slider__item'), // элементы (.slider-item)
                _sliderControls = _mainElement.querySelectorAll('.slider__control'), // элементы управления
                _sliderControlLeft = _mainElement.querySelector('.slider__control_left'), // кнопка "LEFT"
                _sliderControlRight = _mainElement.querySelector('.slider__control_right'), // кнопка "RIGHT"
                _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width), // ширина обёртки
                _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width), // ширина одного элемента    
                _positionLeftItem = 0, // позиция левого активного элемента
                _transform = 0, // значение транфсофрмации .slider_wrapper
                _step = _itemWidth / _wrapperWidth * 100, // величина шага (для трансформации)
                _items = []; // массив элементов
            // наполнение массива _items
            _sliderItems.forEach(function (item, index) {
                _items.push({
                    item: item,
                    position: index,
                    transform: 0
                });
            });

            var position = {
                getMin: 0,
                getMax: _items.length - 1,
            }

            var _transformItem = function (direction) {
                if (direction === 'right') {
                    if ((_positionLeftItem + _wrapperWidth / _itemWidth - 1) >= position.getMax) {
                        return;
                    }
                    if (!_sliderControlLeft.classList.contains('slider__control_show')) {
                        _sliderControlLeft.classList.add('slider__control_show');
                    }
                    if (_sliderControlRight.classList.contains('slider__control_show') && (_positionLeftItem + _wrapperWidth / _itemWidth) >= position.getMax) {
                        _sliderControlRight.classList.remove('slider__control_show');
                    }
                    _positionLeftItem++;
                    _transform -= _step;
                }
                if (direction === 'left') {
                    if (_positionLeftItem <= position.getMin) {
                        return;
                    }
                    if (!_sliderControlRight.classList.contains('slider__control_show')) {
                        _sliderControlRight.classList.add('slider__control_show');
                    }
                    if (_sliderControlLeft.classList.contains('slider__control_show') && _positionLeftItem - 1 <= position.getMin) {
                        _sliderControlLeft.classList.remove('slider__control_show');
                    }
                    _positionLeftItem--;
                    _transform += _step;
                }
                _sliderWrapper.style.transform = 'translateX(' + _transform + '%)';
            }

            // обработчик события click для кнопок "назад" и "вперед"
            var _controlClick = function (e) {
                var direction = this.classList.contains('slider__control_right') ? 'right' : 'left';
                e.preventDefault();
                _transformItem(direction);
            };

            var _setUpListeners = function () {
                // добавление к кнопкам "назад" и "вперед" обрботчика _controlClick для событя click
                _sliderControls.forEach(function (item) {
                    item.addEventListener('click', _controlClick);
                });
            }

            // инициализация
            _setUpListeners();

            return {
                right: function () { // метод right
                    _transformItem('right');
                },
                left: function () { // метод left
                    _transformItem('left');
                }
            }

            // обработчик события click для кнопок "назад" и "вперед"
            var _controlClick = function (e) {
                var direction = this.classList.contains('slider__control_right') ? 'right' : 'left';
                e.preventDefault();
                _transformItem(direction);
            };

            var _setUpListeners = function () {
                // добавление к кнопкам "назад" и "вперед" обрботчика _controlClick для событя click
                _sliderControls.forEach(function (item) {
                    item.addEventListener('click', _controlClick);
                });
            }

            // инициализация
            _setUpListeners();

            return {
                right: function () { // метод right
                    _transformItem('right');
                },
                left: function () { // метод left
                    _transformItem('left');
                }
            }

            // обработчик события click для кнопок "назад" и "вперед"
            var _controlClick = function (e) {
                var direction = this.classList.contains('slider__control_right') ? 'right' : 'left';
                e.preventDefault();
                _transformItem(direction);
            };

            var _setUpListeners = function () {
                // добавление к кнопкам "назад" и "вперед" обрботчика _controlClick для событя click
                _sliderControls.forEach(function (item) {
                    item.addEventListener('click', _controlClick);
                });
            }

            // инициализация
            _setUpListeners();

            return {
                right: function () { // метод right
                    _transformItem('right');
                },
                left: function () { // метод left
                    _transformItem('left');
                }
            }

        }
    }());

    var slider = multiItemSlider('.slider')

// кОНЕЦ

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
//
// $(document).ready(function () {
//     var z = 3;
//     var i = 60;
//     if (window.matchMedia('(max-width: 1100px)').matches) {
//         z = 2;
//         i = 160;
//     }
//     if (window.matchMedia('(max-width: 1100px)').matches) {
//         z = 2;
//         i = 100;
//     }
//     if (window.matchMedia('(max-width: 720px)').matches) {
//         z = 1;
//         i = 1;
//     }
//     //initialize swiper when document ready
//     var swiper2 = new Swiper('.swiper2', {
//         direction: 'horizontal',
//         loop: true,
//         initialSlide: 0,
//         speed: 400,
//         spaceBetween: i,
//         slidesPerView: z,
//         navigation: {
//             nextEl: '.swiper-button-next2',
//             prevEl: '.swiper-button-prev2',
//         },
//     });
//
//     var swiper1 = new Swiper('.swiper1', {
//         direction: 'horizontal',
//         loop: true,
//         initialSlide: 0,
//         speed: 400,
//         spaceBetween: i,
//         slidesPerView: z,
//         navigation: {
//             nextEl: '.swiper-button-next1',
//             prevEl: '.swiper-button-prev1',
//         },
//     });
//
// });
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
