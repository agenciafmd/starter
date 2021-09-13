function createSlider(options) {

  if (!options.container) {

    throw new Error(
        'Sorry, but to create a slider, you need to pass a container element :(');
  }

  const isContainerSelector = typeof options.container === 'string';

  if (isContainerSelector) {

    options.container = document.querySelector(options.container);
  }

  if (!options.container.classList.contains('swiper')) {

    throw new Error(`Please set 'swiper' class with your root container element.
      \r\n For example, <div class="swiper your-slider-class">. 
      \r\n Please see https://swiperjs.com/get-started#add-swiper-html-layout`);
  }

  const swiperWrapperElement = options.container.firstElementChild;

  if (!swiperWrapperElement || !swiperWrapperElement.classList.contains(
      'swiper-wrapper')) {

    throw new Error(`Please set 'swiper-wrapper' class in the first child element of 'swiper' element.`);
  }

  const swiperSlideElement = swiperWrapperElement.firstElementChild;

  if (!swiperSlideElement || !swiperSlideElement.classList.contains(
      'swiper-slide')) {

    throw new Error(`Please set 'swiper-slide' class in the first child element of 'swiper-wrapper' element.`);
  }

  return new Swiper(options.container, {
    speed: 300,
    direction: 'horizontal',
    autoHeight: false,
    roundLengths: true, //prevent blurry texts on usual resolution screens
    spaceBetween: 10,
    slidesPerView: 1,
    centeredSlides: false,
    loop: false,
    mousewheel: {
      forceToAxis: true,
    },
    breakpoints: {
      // when window width is >= 576px
      [getThemeVariables().breakpoints.sm]: {
        slidesPerView: 3,
      },
      // when window width is >= 1200px
      [getThemeVariables().breakpoints.lg]: {
        slidesPerView: 4,
      },
      // when window width is >= 1600px
      // [getThemeVariables().breakpoints.xl]: {
      //   slidesPerView: 4,
      // },
    },
    ...options,
  });

}

function setupDefaultSlider() {

  const defaultSliderSelector = '.js-slider';

  if (!document.querySelectorAll(defaultSliderSelector).length) {
    return;
  }

  document
      .querySelectorAll(defaultSliderSelector)
      .forEach(function createDefaultSlider(defaultSliderContainerElement) {

        createSlider({

          container: defaultSliderContainerElement,
          navigation: {
            prevEl: `${ defaultSliderSelector } .swiper-button-prev`,
            nextEl: `${ defaultSliderSelector } .swiper-button-next`,
          },
        });
      });
}

// createSlider({
//   container: '.js-banner-slider',
//   slidesPerView: 1,
//   spaceBetween: 0,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   autoplay: {
//     delay: 5000,
//     disableOnInteraction: false,
//   },
//   breakpoints: {
//     768: {
//       slidesPerView: 2,
//       spaceBetween: 16,
//     },
//     992: {
//       slidesPerView: 3,
//       spaceBetween: 16,
//     },
//     1440: {
//       slidesPerView: 3,
//       spaceBetween: 32,
//     },
//   },
// });
