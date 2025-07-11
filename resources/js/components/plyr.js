import Plyr from 'plyr';

function setupPlyr() {

  const playerEmbeds = document.querySelectorAll('.js-player-embed');

  if (!playerEmbeds) {

    return;
  }

  playerEmbeds.forEach((player) => {

    const playerEmbed = new Plyr(player, {
      autoplay: true,
      quality: 1080,
      settings: ['captions', 'quality', 'speed', 'loop'],
    });
  });
}

function setupEmbedVideo() {

  const ctaVideos = document.querySelectorAll('.js-player-embed-link');

  if (!ctaVideos) {
    return;
  }

  ctaVideos.forEach((ctaVideo) => {
    ctaVideo.addEventListener('click', (e) => {

      const provider = ctaVideo.dataset.plyrProvider;
      const embed = ctaVideo.dataset.plyrEmbedId;
      const id = ctaVideo.id;

      e.preventDefault();

      ctaVideo.closest('.js-player-embed-container').innerHTML = templateVideo(
          { props: { provider, embed, id } });

      setupPlyr();
    });
  });

  function templateVideo({ props }) {

    return `<div id="${ props.id }"
                   data-plyr-provider="${ props.provider }"
                   data-plyr-embed-id="${ props.embed }"
                   class="js-player-embed">
              </div>`;
  }
}

(() => {

  setupEmbedVideo();

})();