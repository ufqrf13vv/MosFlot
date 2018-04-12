(function () {
    $(document).ready(function () {
        function menu(main, sibling) {
            var menu = main.siblings(sibling);

            if (menu.css('display') == 'none') {
                menu.fadeIn();

                return;
            }

            menu.fadeOut();
        }

        //  Main slider
        $('#main-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: true,
            centerPadding: '19.5%',
            centerMode: true,
            autoplay: false
        });
        //  Small slider
        $('.main-slider--small').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
            centerPadding: '19.5%',
            centerMode: true,
            autoplay: false
        });
        //  News slider
        $('.news-item__slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            autoplay: false
        });
        //  Events slider
		$('#events-slider').slick({
			slidesToShow: 5,
            slidesToScroll: 1,
            arrows: true,
            autoplay: false
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
    });
})();