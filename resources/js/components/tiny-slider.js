function createSlider(options) {

  if (!options.container) {

    throw new Error('passa o elemento ai');
  }

  return tns({
    container: options.container,
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000,
    controls: true,
    navPosition: 'center',
    controlsPosition: 'bottom',
    speed: 400,
    loop: false,
    onInit: function (info) {

      info.nextButton.setAttribute('aria-label', 'ir para o próximo slide');
      info.prevButton.setAttribute('aria-label', 'ir para o slide anterior');
    },
    ...options,
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
