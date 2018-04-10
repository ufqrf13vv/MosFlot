(function () {
    $(document).ready(function () {
        //  Выпадающее меню
        $('#filter, #menu').on('click', function (e) {
            e.preventDefault();

            if ($(this).attr('id') == 'filter') {
                menu($(this), '.filter__aside-wrapper');
            } else {
                menu($(this), '.main-menu__wrapper');
            }
        });

        function menu(main, sibling) {
            var menu = main.siblings(sibling);

            if (menu.css('display') == 'none') {
                menu.fadeIn();

                return;
            }

            menu.fadeOut();
        }

        //  Табы
        $('.product__tabs-item').on('click', function () {
            if (!$(this).hasClass('product__tabs-item--active')) {
                $(this).addClass('product__tabs-item--active');
                $(this).siblings('.product__tabs-item--active').removeClass('product__tabs-item--active');
            }
        })

        // +/-
        $('.button--minus, .button--plus').on('click', function () {
            var count = $(this).siblings('.input--count, .input--cart');
            var number = count.val();
            var parent = $(this).parent();

            if ($(this).hasClass('button--plus')) {
                count.val(++number);

                if (parent.attr('id') == 'cart-count') {
                    counting(number);
                }
            } else {
                if (number == 1) {
                    return
                }
                count.val(--number);

                if (parent.attr('id') == 'cart-count') {
                    counting(number);
                }
            }
        })
        //  Пересчет суммы
        function counting(number) {
            var price = $('#price').text();
            var priceArr = price.split(' ');
            var result, strResult;

            price = priceArr.join('');
            result = parseInt(price) * number;
            strResult = (result + '').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');

            $('#total').text(strResult + ' руб.')
        }

        //  Запрет на ввод символов кроме цифр
        $('.input--count, .input--cart').on('keypress', function (event) {
            event = event || window.event;

            if (event.charCode && event.charCode != 0 && event.charCode != 46 && (event.charCode < 48 || event.charCode > 57))

                return false;
        });

        $('.input--cart').on('input', function () {
            counting($(this).val());
        });

        //  Главный слайдер
        $('#main-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: true,
            autoplay: true
        });

        //  Недавно вы смотрели
        $('#small-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }]
        });

        $('.filter__more').on('click', function (e) {
            e.preventDefault();

            var list = $(this).siblings('.filter__list');

            if ($(this).hasClass('filter__more--active')) {
                $(this).removeClass('filter__more--active');
                list.height(70);
                $(this).text('Еще');
            } else {
                $(this).addClass('filter__more--active');
                list.height('auto');
                $(this).text('Скрыть');
            }
        });
        //  Галерея в карточке товара
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav'
        });
        $('.slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            arrows: false,
            autoplay: true,
            centerMode: true,
            focusOnSelect: true
        });
    });
})();