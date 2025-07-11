import TomSelect from 'tom-select';

function setupDevelopmentTomSelect() {

  const tomSelectInputs = document.querySelectorAll('.js-development-tom-select');

  if (!tomSelectInputs) {

    return;
  }

  tomSelectInputs.forEach((input) => {

    const pinSvg = `<svg class="text-primary ic-xxxsm" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.16517 12.7022C9.16517 16.3938 12.1686 19.3972 15.8601 19.3972C19.5517 19.3972 22.5551 16.3938 22.5551 12.7022C22.5551 10.8959 21.867 9.21138 20.6054 7.96414C19.351 6.70256 17.6665 6.00726 15.8601 6.00726C14.0538 6.00726 12.3765 6.69539 11.122 7.95697C9.86047 9.21138 9.16517 10.8959 9.16517 12.7022ZM11.3156 12.7022C11.3156 10.1504 13.3155 8.15767 15.8601 8.15767C18.4048 8.15767 20.4047 10.1934 20.4047 12.7022C20.4047 15.211 18.3689 17.2468 15.8601 17.2468C13.3513 17.2468 11.3156 15.254 11.3156 12.7022Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M16.0034 31.7911C15.3797 31.7911 14.8135 31.5259 14.4407 31.0743L6.1473 20.8455C4.21909 18.2149 3.29441 15.1613 3.49512 12.2224C3.69582 9.06125 5.02908 6.08651 7.25834 3.84291C9.58796 1.49896 12.6917 0.20871 16.0034 0.20871C19.315 0.20871 22.4188 1.49896 24.7484 3.84291C26.9776 6.08651 28.3109 9.06125 28.5116 12.2224C28.7195 15.2258 27.7805 18.2794 25.8666 20.8312L17.566 31.0743C17.2004 31.5331 16.627 31.7911 16.0034 31.7911ZM16.0034 2.35912C12.4193 2.35912 10.0395 4.07229 8.67762 5.5059C6.91428 7.35525 5.8104 9.8569 5.64553 12.3657C5.48067 14.8029 6.26199 17.3475 7.85329 19.5338L16.0034 29.5834L24.1749 19.4979C25.7519 17.3905 26.5332 14.853 26.3684 12.3657C26.0458 7.44844 22.0747 2.35912 16.0034 2.35912Z" fill="currentColor"/></svg>`;

    function renderDescription(data) {

      if (!data.name) {
        return '';
      }

      return `<div class="hstack gap-0h fs-xsmall">
                <span>${ pinSvg }</span>
                <span>${ data.city }</span>
              </div>`;
    }

    function renderTitle(data) {

      if (!data.name) {

        return `<div class="hstack gap-0h">
                  <span>${ pinSvg }</span>
                  <span>${ data.city }</span>
                </div>`;
      }

      return `${ data.text }`;
    }

    let settings = {
      create: false,
      sortField: {
        direction: 'asc',
      },
      render: {
        option: function (data, escape) {
          return `<div class="vstack gap-0q">
                    <span>${ renderTitle(data) }</span>
                    <span>${ renderDescription(data) }</span>
                  </div>`;
        },
        no_results: function (data, escape) {
          return '<div class="no-results">Não foi encontrando resultados</div>';
        },
      },

    };
    new TomSelect(input, settings);
  });
}

function setupTomSelect() {

  const tomSelectInputs = document.querySelectorAll('.js-tom-select');

  if (!tomSelectInputs) {

    return;
  }

  tomSelectInputs.forEach((input) => {

    let settings = {
      create: false,
      sortField: {
        direction: 'asc',
      },
      render: {
        no_results: function (data, escape) {
          return '<div class="no-results">Não foi encontrando resultados</div>';
        },
      },
    };
    new TomSelect(input, settings);
  });
}

(() => {

  setupTomSelect();
  // setupDevelopmentTomSelect();

})();