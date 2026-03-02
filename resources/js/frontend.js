import {
  setupSmoothScroll,
  setupSmoothScrollInOffcanvas,
} from './components/smooth-scroll.js';
import { CpfCnpjValidators } from './helpers/cpf-cnpj-validators.js';
import {
  guideUserToTheFirstError,
  initializeFormHelpers,
} from './helpers/form-helpers.js';
import { setupUtmHelpers } from './helpers/utm-helper.js';
import { setupFmdHeader } from './components/fmd-header.js';
import mask from '@alpinejs/mask'
import ClipboardJS from 'clipboard';
import WOW from 'wow.js';
import { Modal, Popover, Tooltip, Toast } from 'bootstrap';
import InfiniteScroll from 'infinite-scroll';

export function getThemeVariables() {
  const root = getComputedStyle(document.documentElement);

  // Read 'from --bs-breakpoint-??' (min-width)
  const breakpoints = {
    xs: Number(root.getPropertyValue('--bs-breakpoint-xs').replace('px', '')),
    sm: Number(root.getPropertyValue('--bs-breakpoint-sm').replace('px', '')),
    md: Number(root.getPropertyValue('--bs-breakpoint-md').replace('px', '')),
    lg: Number(root.getPropertyValue('--bs-breakpoint-lg').replace('px', '')),
    xl: Number(root.getPropertyValue('--bs-breakpoint-xl').replace('px', '')),
    xxl: Number(root.getPropertyValue('--bs-breakpoint-xxl').replace('px', '')),
  };

  function isWindowWidthUp(breakpoint) {

    return window.innerWidth >= breakpoints[breakpoint];
  }

  function isWindowWidthDown(breakpoint) {

    return window.innerWidth < breakpoints[breakpoint];
  }

  return {
    breakpoints,
    collapseTransitionTime: 350, // In milliseconds
    colors: {
      primary: root.getPropertyValue('--bs-primary'),
      secondary: root.getPropertyValue('--bs-secondary'),
      success: root.getPropertyValue('--bs-success'),
      info: root.getPropertyValue('--bs-info'),
      warning: root.getPropertyValue('--bs-warning'),
      danger: root.getPropertyValue('--bs-danger'),
      light: root.getPropertyValue('--bs-light'),
      dark: root.getPropertyValue('--bs-dark'),
    },
    isWindowWidthUp,
    isWindowWidthDown,
  };
}

function setupStateCityOptions() {

  const stateSelect = document.querySelector('.js-state');
  const citySelect = document.querySelector('.js-city');

  if (!stateSelect) {

    return;
  }

  fetch('/json/estados-cidades.json')
      .then(response => response.json())
      .then(data => {

        let stateOptions = '<option value="">-</option>';

        data.forEach(state => {

          const selected = state.nome === stateSelect.getAttribute(
              'data-selected') ? 'selected' : '';
          stateOptions += `<option value="${ state.nome }" ${ selected }>${ state.nome }</option>`;
        });

        stateSelect.innerHTML = stateOptions;

        stateSelect.addEventListener('change', () => {

          let cityOptions = '<option value="">-</option>';
          const selectedState = stateSelect.value;

          data.forEach(state => {

            if (state.nome !== selectedState) {

              return;
            }

            state.cidades.forEach(city => {

              const selected = city === citySelect.getAttribute('data-selected')
                  ? 'selected'
                  : '';
              cityOptions += `<option value="${ city }" ${ selected }>${ city }</option>`;
            });
          });

          citySelect.innerHTML = cityOptions;
        });

        stateSelect.dispatchEvent(new Event('change'));
      })
      .catch(error => {

        console.error('Error fetching data:', error);
      });
}

function preventInvalidFormSubmit() {

  const forms = document.getElementsByClassName('needs-validation');
  const validation = Array.prototype.filter.call(forms, function (form) {

    form.addEventListener('submit', function (event) {

      if (form.checkValidity() === false) {

        event.preventDefault();
        event.stopPropagation();

        guideUserToTheFirstError();
        form.classList.add('was-validated');
      }
    }, false);
  });

  setupInvalidElements();

  function setupInvalidElements() {

    const invalidElements = document.querySelectorAll('.is-invalid');

    if (!invalidElements) {

      return;
    }

    invalidElements.forEach(element => {

      element.setCustomValidity('needs validate');

      element.addEventListener('focusout', () => {

        this.classList.remove('is-invalid');
        this.setCustomValidity('');
      });
    });
  }
}

function verifyUserAgent() {

  const operationalSystemsData = [
    {
      osUserAgent: 'Windows NT 10.0',
      osSystemName: 'Windows 10',
    },
    {
      osUserAgent: 'Windows NT 6.2',
      osSystemName: 'Windows 8',
    },
    {
      osUserAgent: 'Windows NT 6.1',
      osSystemName: 'Windows 7',
    },
    {
      osUserAgent: 'Windows NT 6.0',
      osSystemName: 'Windows Vista',
    },
    {
      osUserAgent: 'Windows NT 5.1',
      osSystemName: 'Windows XP',
    },
    {
      osUserAgent: 'Windows NT 5.0',
      osSystemName: 'Windows 2000',
    },
    {
      osUserAgent: 'Mac',
      osSystemName: 'Mac/iOS',
    },
    {
      osUserAgent: 'X11',
      osSystemName: 'UNIX',
    },
    {
      osUserAgent: 'Linux',
      osSystemName: 'Linux',
    },
  ];

  const operationalSystemName = operationalSystemsData
      .reduce((previousSystemData, currentSystemdata) => {

        if (window.navigator.userAgent.indexOf(currentSystemdata.osUserAgent)
            !== -1) {

          return currentSystemdata.osSystemName;
        }

        return previousSystemData;
      });

  if (operationalSystemName !== 'Mac/iOS') {

    let body = document.querySelector('body');
    body.classList.add('style-scroll');
  }
}

function onChangeSelectLink() {

  // Switch page action when links are in a select
  // e.g. to do in html
  // <select class="form-control js-onchange">
  //   <option value=""
  //     selected>Link
  //   </option>
  //   <option class="" value="/html/index">Home</option>
  //   <option class="" value="/html/tema">FAQ</option>
  //</select>

  const selects = document.querySelectorAll('.js-onchange');
  if (!selects) {
    return;
  }
  selects.forEach(select => {
    select.addEventListener('change', function () {
      window.location = select.value;
    });
  });
}

function getBrowser() {

  const userAgent = navigator.userAgent.toLowerCase();
  const hasUserAgentSafariToken = userAgent.indexOf('safari') > -1;
  const hasUserAgentChromeToken = userAgent.indexOf('chrome') > -1;

  if (hasUserAgentSafariToken) {

    if (hasUserAgentChromeToken) {

      return 'chrome';
    }

    return 'safari';
  }
}

function isSafari() {
  return getBrowser() === 'safari';
}

function setupAlpine() {
  Alpine.plugin(mask)

  window.Alpine = Alpine
}

function setupInputMasks() {

  function setMaskToAllElements(elements, maskExpression) {

    elements.forEach((element) => {
      element.setAttribute('x-mask:dynamic', maskExpression);

      if (window.Alpine) {
        Alpine.initTree(element);
      }
    });
  }

  // PHONE (dynamic mask)
  setMaskToAllElements(
      document.querySelectorAll('.js-mask-phone'),
      "$input.length <= 14 ? '(99) 9999-9999' : '(99) 99999-9999'"
  );

  // CPF
  setMaskToAllElements(
      document.querySelectorAll('.js-mask-cpf'),
      () => { return "999.999.999-99" }
  );

  // CNPJ
  setMaskToAllElements(
      document.querySelectorAll('.js-mask-cnpj'),
      () => { return "99.999.999/9999-99" }
  );

  // CPF or CNPJ (dynamic)
  setMaskToAllElements(
      document.querySelectorAll('.js-mask-cpfcnpj'),
      "$input.replace(/\\D/g,'').length <= 11 ? '999.999.999-99' : '99.999.999/9999-99'"
  );

  // RG
  setMaskToAllElements(
      document.querySelectorAll('.js-mask-rg'),
      "$input.endsWith('x') ? '99.999.999-x' : ($input.endsWith('X') ? '99.999.999-X' : '99.999.999-9')"
  );

  // CEP
  setMaskToAllElements(
      document.querySelectorAll('.js-mask-cep'),
      () => { return "99999-999" }
  );

  setMaskToAllElements(
      document.querySelectorAll('.js-mask-money'),
      "'R$ ' + $money($input, ',')"
  );

  // DATE
  setMaskToAllElements(
      document.querySelectorAll('.js-mask-date'),
      () => { return "99/99/9999" }
  );

  const cpfCnpjValidators = new CpfCnpjValidators();
  const cpfInput = document.querySelector(cpfCnpjValidators.selectors.cpf);
  const cnpjInput = document.querySelector(cpfCnpjValidators.selectors.cnpj);

  if (cpfInput) {

    cpfInput.addEventListener('blur', function (event) {

      cpfCnpjValidators.checkCPF(event.target);
    });
  }

  if (cnpjInput) {

    cnpjInput.addEventListener('blur', function (event) {

      cpfCnpjValidators.checkCNPJ(event.target);
    });
  }
}

function setupCepSearch() {

  const zipcodeInputs = document.querySelectorAll('.js-zipcode');

  if (!zipcodeInputs) {

    return;
  }

  zipcodeInputs.forEach(zipcodeInput => {

    zipcodeInput.addEventListener('blur', () => {

      const cep = zipcodeInput.value.replace('-', '');

      if (cep.length === 8) {
        fetch('https://viacep.com.br/ws/' + cep + '/json')
            .then(response => response.json())
            .then(result => {

              if (!result) {

                console.log(result.message || 'Houve um erro desconhecido');
                return;
              }

              const neighborhoodInput = document.querySelector(
                  '.js-neighborhood');
              const addressInput = document.querySelector('.js-address');
              const stateInput = document.querySelector('.js-state');
              const cityInput = document.querySelector('.js-city');

              neighborhoodInput.value = result.bairro;
              addressInput.value = result.logradouro;

              if (stateInput.tagName === 'INPUT') {

                stateInput.value = result.uf;
              }

              if (cityInput.tagName === 'INPUT') {

                cityInput.value = result.localidade;
              }

              if (stateInput.tagName === 'SELECT') {

                stateInput.value = result.uf;
                stateInput.dispatchEvent(new Event('change'));
                cityInput.value = result.localidade;
              }
            })
            .catch(error => {

              console.error('Erro:', error);
            });
      }
    });
  });
}

export function setupPopover() {

  const popoverTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="popover"]'));

  popoverTriggerList.map((popoverTriggerEl) => {
    return new Popover(popoverTriggerEl, {});
  });
}

export function setupTooltip() {

  const tooltipTriggerList = [].slice.call(document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'));

  tooltipTriggerList.map((tooltipTriggerEl) => {
    return new Tooltip(tooltipTriggerEl);
  });
}

export function setupToast() {

  const toastTriggerList = [].slice.call(document.querySelectorAll(
      '.js-button-toast'));

  toastTriggerList.map((toastTriggerEl) => {
    return toastTriggerEl.addEventListener('click', () => {
      Toast.getOrCreateInstance(toastTriggerEl.nextElementSibling.querySelector(
          '.toast')).show();
    });
  });
}

function setupAnchorReloadPrevention() {

  const targetClickLinkElements = document.querySelectorAll('a[href="#"]');

  if (!targetClickLinkElements) {

    return;
  }
  targetClickLinkElements.forEach(function (linkElement) {

    linkElement.addEventListener('click', function (clickEvent) {

      clickEvent.preventDefault();
    });
  });
}

function setupInfiniteScroll() {

  const scrollContainerElement = document.querySelector('.infinite-scroll');
  const nextElementSelector = 'a[rel~="next"]';
  const nextPageElement = document.querySelector(nextElementSelector);

  if (!scrollContainerElement || !nextPageElement) {

    return;
  }

  new InfiniteScroll(scrollContainerElement, {
    path: nextElementSelector,
    append: '.infinite-scroll-content',
    scrollThreshold: 100,
    status: '.page-load-status',
    history: 'push',
  });
}

function setupClipboardJS() {

  // Don't forget to install the package: npm install clipboard --save

  const triggerElement = new ClipboardJS('.js-copy');

  triggerElement.on('success', (event) => {

    showTooltip(event.trigger);
  });

  function showTooltip(targetElement) {

    const successTooltip = bootstrap.Tooltip.getOrCreateInstance(
        targetElement,
        {

          title: 'Copiado para a área de transferência',
          placement: 'bottom',
          trigger: 'manual',
        },
    );

    successTooltip.show();

    setTimeout(() => {

      successTooltip.hide();
    }, 2000);
  }
}

export function setupShareAPI() {

  const shareButtonElements = document.querySelectorAll('.js-btn-share');

  if (!shareButtonElements.length) {

    return;
  }

  const pageTitle = document.querySelector('title').textContent;
  const pageDescription = document.querySelector('meta[name="description"]')
      .getAttribute('content');

  shareButtonElements.forEach(buttonItem => {

    buttonItem.addEventListener('click', (e) => {

      e.preventDefault();

      navigator.share(
          {
            title: pageTitle,
            text: pageDescription,
            url: location.href,
            fbId: buttonItem.getAttribute('data-fmd-share-btn-fbidentification'),
          },
          {
            // change this configurations to hide specific unnecessary icons
            copy: true,
            email: true,
            print: true,
            sms: true,
            messenger: true,
            facebook: true,
            whatsapp: true,
            twitter: true,
            linkedin: true,
            telegram: true,
            skype: true,
            language: 'pt', // specify the default language
          },
      )
          .then(() => console.log('Compartilhado com sucesso!'))
          .catch(error => console.log(
              'Ops! Algo de errado aconteceu:\'(\n',
              error,
          ));
    });
  });
}

function setupWOWJS() {
  new WOW().init();
}

function setupModalConfig() {

  const modalElements = document.querySelectorAll('.modal');

  modalElements.forEach((modalElement) => {
    return new Modal(modalElement, {
      focus: false,
    });
  });
}

(() => {

  preventInvalidFormSubmit();

  verifyUserAgent();

  setupSmoothScroll();

  setupSmoothScrollInOffcanvas();

  // setupCepSearch();

  // setupStateCityOptions();

  onChangeSelectLink();

  setupAlpine();

  setupInputMasks();

  // setupPopover();

  // setupTooltip();

  // setupAnchorReloadPrevention();

  initializeFormHelpers();

  // setupDefaultSlider();

  // setupClipboardJS();

  // setupShareAPI();

  // setupDataLayerEventClickButton();

  setupUtmHelpers();

  // setupWOWJS();

  setupModalConfig();

  // setupLightDarkModeController();
})();

window.addEventListener('load', () => {

  /**
   * Usually the header triggers after the first section which has the
   * height defined as 100vh. We need the starting function here because
   * vh/vw are calculated after all resources loaded*/
  setupFmdHeader();

  if (window.innerWidth > getThemeVariables().breakpoints.md) {
    // setupLax();
  }

  setupInfiniteScroll();
});
