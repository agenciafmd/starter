import { createSlider } from '../swiper.js';

(() => {

  const sliderBanners = document.querySelector('#js-slider-banners');

  if (sliderBanners) {

    createSlider({
      container: sliderBanners,
      slidesPerView: 1,
      effect: 'fade',
       fadeEffect: {
          crossFade: true,
        },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: sliderBanners.closest('.swiper-container').querySelector(
            '.swiper-button-next'),
        prevEl: sliderBanners.closest('.swiper-container').querySelector(
            '.swiper-button-prev'),
      },
    });
  }
})();
