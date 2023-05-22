function doScrollAnimate(targetSelector) {
  const target = document.querySelector(targetSelector);

  if (!target) {

    console.error(`Alvo não encontrado, verifique se existe um elemento na página com o seletor ${ targetSelector }. Dê preferência a um ID, para evitar conflito no scroll.`);
    return;
  }

  const additionalOffset = Number(target.getAttribute('data-scroll-offset')) || 0;

  const scrollTop = target.getBoundingClientRect().top + document.body.scrollTop + additionalOffset;

  window.scrollBy({
    top: scrollTop,
    behavior: 'smooth',
  });
}

function setupSmoothScrollInOffcanvas() {

  const offcanvasElements = document.querySelectorAll('.offcanvas');

  offcanvasElements.forEach(function (offcanvas) {

    const offcanvasScrollTriggerElements =
        offcanvas
            .querySelectorAll('a.js-scroll-top[data-bs-dismiss="offcanvas"]');

    offcanvasScrollTriggerElements.forEach(function (triggerElement) {

      const hiddenOffcanvasHandler = (event) => {
        doScrollAnimate(triggerElement.hash);
        offcanvas.removeEventListener(
            'hidden.bs.offcanvas',
            hiddenOffcanvasHandler,
        );
      };

      triggerElement.addEventListener('click', function (event) {

        event.preventDefault();
        offcanvas.addEventListener(
            'hidden.bs.offcanvas',
            hiddenOffcanvasHandler,
        );
      });
    });
  });
}

function setupSmoothScroll() {

  // This selector is needed because offcanvas animation blocks page scroll, so
  // we need to handle each scroll separately.
  const scrollTriggerElements =
      document.querySelectorAll('*:not(.offcanvas) a.js-scroll-top');

  scrollTriggerElements.forEach(function (element) {
    element.addEventListener('click', function (event) {
      event.preventDefault();
      doScrollAnimate(this.hash);
    });
  });
}
