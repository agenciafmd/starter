function createSlider(options) {

  if (!$('main').find(options.container).length) {
    return;
  }

  return tns({
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000,
    mouseDrag: true,
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

$(function () {

  /*$('.js-default').each(function () {

    createSlider({

      container: '#' + $(this).attr('id'),
      responsive: {

        1024: {

          items: 3,
        },
      },
    });
  });*/
});
