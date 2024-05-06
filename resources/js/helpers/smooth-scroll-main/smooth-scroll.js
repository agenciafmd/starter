function init() {
  new SmoothScroll(document, 70, 25);
}

function SmoothScroll(target, speed, smooth) {
  let timer;
  if (target === document)
    target =
      document.scrollingElement ||
      document.documentElement ||
      document.body.parentNode ||
      document.body; // cross browser support for document scrolling

  let moving = false;
  let pos = target.scrollTop;
  let frame =
    target === document.body && document.documentElement
      ? document.documentElement
      : target; // safari is the new IE

  let deltaMain = 0;
  let scrollBarWasClicked = false
  const hmltTag = document.querySelector('html')

  window.addEventListener("mousedown", function (e) {
    deltaMain = 0
    hmltTag.style.scrollBehavior = "smooth";
    scrollBarWasClicked = true
  });

  document.addEventListener('scroll', function() {

    if(timer !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(function() {
      pos = document.documentElement.scrollTop
      hmltTag.style.scrollBehavior = "smooth";
    }, smooth);
  }, false);

  target.addEventListener("mousewheel", scrolled, { passive: false });
  target.addEventListener("DOMMouseScroll", scrolled, { passive: false });

  function scrolled(e) {
    e.preventDefault(); // disable default scrolling
    scrollBarWasClicked = false
    hmltTag.style.scrollBehavior = "initial";

    let delta = normalizeWheelDelta(e);

    pos += -delta * speed;
    pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)); // limit scrolling

    if (!moving) update();
  }

  function normalizeWheelDelta(e) {
    if (e.detail) {
      if (e.wheelDelta)
        return (e.wheelDelta / e.detail / 40) * (e.detail > 0 ? 1 : -1);
      // Opera
      else return -e.detail / 3; // Firefox
    } else return e.wheelDelta / 120; // IE,Safari,Chrome
  }

  function update() {
    moving = true;

    if (!scrollBarWasClicked) {
      deltaMain = (pos - target.scrollTop) / smooth;
    }

    target.scrollTop += deltaMain;

    if (Math.abs(deltaMain) > 0.5) requestFrame(update);
    else moving = false;
  }

  let requestFrame = (function () {
    // requestAnimationFrame cross browser
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (func) {
        window.setTimeout(func, 1000 / 50);
      }
    );
  })();
}

window.addEventListener("DOMContentLoaded", init);
