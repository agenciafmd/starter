import GLightbox from 'glightbox';

function setupGLightBox() {

  return GLightbox({
    touchNavigation: true,
    loop: true,
    autoplayVideos: true,
    videosWidth: '80vw',
  });
}

(() => {

  setupGLightBox();

})();

