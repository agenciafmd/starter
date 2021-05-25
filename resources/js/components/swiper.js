function createSlider(options) {

    if (!document.querySelectorAll(options.container).length) {
        return;
    }

    if (!options.container) {

        throw new Error('passa o elemento ai');
    }

    return new Swiper(options.container, {
        speed: 300,
        direction: 'horizontal',
        autoHeight: false,
        roundLengths: true, //prevent blurry texts on usual resolution screens
        spaceBetween: 0,
        slidesPerView: 1,
        centeredSlides: false,
        loop: false,
        breakpoints: {
            // when window width is >= 480px
            480: {
                //slidesPerView: 3
            },
            // when window width is >= 640px
            640: {
                //slidesPerView: 4
            }
        },
        ...options
    });

}

function setupDefaultSlider() {

    document
        .querySelectorAll('.js-slider')
        .forEach(function (item) {

            createSlider({

                container: item
            });
        });
}

/*
    createSlider({
        container: '.js-banner-slider',
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 16
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 16
            },
            1440: {
                slidesPerView: 3,
                spaceBetween: 32
            },
        }
    });
 */
