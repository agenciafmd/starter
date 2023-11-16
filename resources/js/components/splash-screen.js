function AnimateSplashScreen(hastFirstLoadSplashScreen) {
  const splashScreen = document.querySelector('.splash-screen')
  const svg = splashScreen.querySelector('svg')
  svg.classList.add("d-block")
  if (hastFirstLoadSplashScreen === true) {
    if (!sessionStorage.isVisited) {
      sessionStorage.isVisited = true;
      setTimeout(firstLoadSplashScreen(splashScreen), 100)
      return
    }
  }
  reloadSplashScreen(splashScreen)
}
function reloadSplashScreen(splashScreen) {
  document.addEventListener("readystatechange", function () {
    if (document.readyState === "complete") {
      splashScreen.addEventListener("transitionend", function () {
        splashScreen.classList.add('d-none');
      })
      splashScreen.classList.add('splash-screen-hidden');
    }
  });
}

function firstLoadSplashScreen(splashScreen) {
  splashScreen.classList.add('splash-screen-first-load')
  splashScreen.addEventListener("animationend", function () {
    splashScreen.classList.add('splash-screen-hidden');
      splashScreen.addEventListener("transitionend", function () {
        splashScreen.classList.add('d-none');
      })
  });
}

window.addEventListener('DOMContentLoaded', function () {

  AnimateSplashScreen(true)

});
