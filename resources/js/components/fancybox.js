function createFancybox(options) {

  return $().fancybox({

    buttons: ['close', 'thumbs', 'share'],
    animationEffect: 'fade',
    transitionEffect: 'fade',
    preventCaptionOverlap: false,
    idleTime: false,
    gutter: 0,
    loop: true,
    lang: 'pt',
    i18n: {
      pt: {

        SHARE: 'Compartilhar',
      }
    },
    afterLoad: function(instance, slide, current) {

      const alt = $(slide.opts.$orig).next().attr('alt');

      $(current.$image).attr('alt', alt);
    },
    ...options,
  });
}

$(function () {

  createFancybox({

    selector: '.custom-layout',
    baseClass: 'fancybox-custom-layout',
    caption: function() {

      const caption = $(this).attr('data-caption');
      const title = $(this).attr('data-fancybox');
      const subtitle = $(this).attr('data-subtitle');

      return `<h3 class="fancybox-caption-title">${title}</h3>
      <p class="fancybox-caption-subtitle">${subtitle}</p>
      <span class="fancybox-caption-description">${caption}</span>`;
    },
  });
});