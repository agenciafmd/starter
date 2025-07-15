import { createSlider } from '../swiper.js';
import { getThemeVariables } from '../../frontend.js';

(() => {

  const sliderArticlesGalleries = document.querySelectorAll(
      '.js-slider-articles-gallery');

  if (sliderArticlesGalleries) {

    sliderArticlesGalleries.forEach((sliderArticleGallery) => {
      createSlider({
        container: sliderArticleGallery,
        effect: 'fade',
        fadeEffect: {
          crossFade: true,
        },
        slidesPerView: 1,
        spaceBetween: 16,
        breakpoints: {
          [getThemeVariables().breakpoints.md]: {
            slidesPerView: 1,
            spaceBetween: 32,
          },
        },
        navigation: {
          nextEl: sliderArticleGallery.closest('.swiper-container')
              .querySelector(
                  '.swiper-button-next'),
          prevEl: sliderArticleGallery.closest('.swiper-container')
              .querySelector(
                  '.swiper-button-prev'),
        },
      });
    });
  }

})();
