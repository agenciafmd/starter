function setupLax() {

  lax.init();

  // Setup mouse move listener
  document.addEventListener('mousemove', function (e) {
    lax.__cursorX = e.clientX;
    lax.__cursorY = e.clientY;
  }, false);

  // Add lax driver for cursorX
  lax.addDriver('cursorX', function () {
    return lax.__cursorX || 0;
  });

  // Add lax driver for cursorY
  lax.addDriver('cursorY', function () {
    return lax.__cursorY || 0;
  });

  // Add a driver that we use to control our animations
  lax.addDriver('scrollY', function () {
    return window.scrollY;
  });

  // Add animation bindings to elements
  lax.addElements('.js-lax-center-short', {
    scrollY: {
      translateY: [
        ['elInY - elHeight * 0.25', 'elCenterY', 'elOutY + elHeight * 0.25'],
        ['-elHeight * 0.25', 0, 'elHeight * 0.25'],
      ],
    },
  });

  lax.addElements('.js-lax-center', {
    scrollY: {
      translateY: [
        ['elInY - elHeight * 0.5', 'elCenterY', 'elOutY + elHeight * 0.5'],
        ['-elHeight * 0.5', 0, 'elHeight * 0.5'],
      ],
    },
  });

  lax.addElements('.js-lax-center-long', {
    scrollY: {
      translateY: [
        ['elInY - elHeight', 'elCenterY', 'elOutY + elHeight'],
        ['-elHeight', 0, 'elHeight'],
      ],
    },
  });

  lax.addElements('.js-lax-up-short', {
    scrollY: {
      translateY: [
        ['elInY', 'elOutY + elHeight * 0.25'],
        [0, '-elHeight * 0.25'],
      ],
    },
  });

  lax.addElements('.js-lax-up', {
    scrollY: {
      translateY: [
        ['elInY', 'elOutY + elHeight * 0.5'],
        [0, '-elHeight * 0.5'],
      ],
    },
  });

  lax.addElements('.js-lax-up-long', {
    scrollY: {
      translateY: [
        ['elInY', 'elOutY + elHeight'],
        [0, '-elHeight'],
      ],
    },
  });

  lax.addElements('.js-lax-down-short', {
    scrollY: {
      translateY: [
        ['elInY', 'elOutY - elHeight * 0.25'],
        [0, 'elHeight * 0.25'],
      ],
    },
  });

  lax.addElements('.js-lax-down', {
    scrollY: {
      translateY: [
        ['elInY', 'elOutY + elHeight * 0.5'],
        [0, 'elHeight * 0.5'],
      ],
    },
  });

  lax.addElements('.js-lax-down-long', {
    scrollY: {
      translateY: [
        ['elInY', 'elOutY - elHeight'],
        [0, 'elHeight'],
      ],
    },
  });
}
