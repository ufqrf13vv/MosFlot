(function () {
    $(document).ready(function () {
        //  Выпадающее меню
        $('#menu').on('click', function (e) {
            e.preventDefault();

            var menu = $(this).siblings('.main-menu__list');

            if (menu.css('display') == 'none') {
                menu.fadeIn();

                return;
            }

            menu.fadeOut();
        });

        $(document).on('click', function(e) {
            var menu = $('.main-menu__list');

            if (!e.target.classList.contains('main-menu__burger') && !e.target.classList.contains('main-menu__item')) {

                if (menu.css('display') == 'block') {
                    menu.fadeOut();
                }
            }
        });

        //  Main slider
        $('#main-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: true,
            centerPadding: '15%',
            centerMode: true,
            autoplay: true,
            swipeToSlide: true,
            responsive: [{
                breakpoint: 1600,
                settings: {
                    centerPadding: '10%'
                }
            }, {
                breakpoint: 1400,
                settings: {
                    centerPadding: '5%'
                }
            }, {
                breakpoint: 1200,
                settings: {
                    centerPadding: '3%'
                }
            }, {
                breakpoint: 960,
                settings: {
                    centerMode: false
                }
            }]
        });
        //  Small slider
        $('.main-slider--small').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
            centerPadding: '19.5%',
            centerMode: true,
            autoplay: false,
            swipeToSlide: true,
            responsive: [{
                breakpoint: 1800,
                settings: {
                    slidesToShow: 3,
                    centerMode: false
                }
            }, {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 2,
                    centerMode: false
                }
            }, {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    centerMode: false
                }
            }, {
                breakpoint: 960,
                settings: {
                    slidesToShow: 1,
                    centerMode: true
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    centerMode: false
                }
            }]
        });
        //  Item slider
        $('.item-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            swipeToSlide: true,
            autoplay: false
        });
        //  Ships-slider
        $('#ships-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            autoplay: false,
            swipeToSlide: true,
            responsive: [{
                breakpoint: 960,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1
                }
            }]
        });
        //  Events slider
		$('#events-slider').slick({
			slidesToShow: 5,
            slidesToScroll: 1,
            arrows: true,
            autoplay: false,
            swipeToSlide: true,
            responsive: [{
                breakpoint: 960,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1
                }
            }]
        });

        $('#trip-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            swipeToSlide: true,
            autoplay: true
        });

        $('.faq__btn').on('click', function() {
            var parent = $(this).parent('.faq');
            var title = $(this).siblings('.faq__title');
            var text = $(this).siblings('.faq__text');

            $(this).toggleClass('faq__btn--active');
            parent.toggleClass('faq--active');
            text.toggleClass('faq__text--active');


            if(title.css('display') === 'block') {
                title.hide();
            } else {
                title.show();
            }
        });

        //  Open modal-window
        $('#modal-call').on('click', function(event) {
            event.preventDefault();

            $('.modal').addClass('modal--active');
            $('.modal__background').addClass('modal__background--active');
        });

        //  Close modal-window
        $('.modal__close').on('click', function() {
            $('.modal__background').removeClass('modal__background--active');
            $('.modal').removeClass('modal--active');
        });

        $('#background').on('click', function() {
            var background = $('#background'),
                sibling = background.siblings('div[class$="--active"]'),
                classes = sibling.attr('class'),
                classArr = classes.split(' ');

            sibling.removeClass(classArr[1]);
            background.removeClass('modal__background--active');
        });
        //  Scroll
        $('.parkings__header').on('click', 'a', function (event) {
            event.preventDefault();

            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body, html').animate({scrollTop: top}, 2000);
        });
        //  Phone-mask
        $('#phone').mask('+7 (000)-000-00-00');
    });
})();