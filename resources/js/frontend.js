function getThemeVariables() {
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

              const selected = city === citySelect.getAttribute('data-selected') ? 'selected' : '';
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

        if (window.navigator.userAgent.indexOf(currentSystemdata.osUserAgent) !== -1) {

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

function setupInputMasks() {

  function setMaskToAllElements(elements, maskOptions) {

    elements.forEach(function (element) {

      const mask = IMask(element, maskOptions);

      mask.on('complete', function () {

        // Safari doesn't detect the latest input changes
        if (isSafari()) {

          if ('createEvent' in document) {
            const evt = new Event(
                'change',
                {
                  'bubbles': true,
                  'cancelable': false,
                },
            );
            element.dispatchEvent(evt);
            return;
          }

          element.dispatchEvent(new InputEvent('change'));
        }
      });
    });
  }

  const phoneMaskOptions = {
    mask: [
      { mask: '(00) 0000-0000' },
      { mask: '(00) 00000-0000' },
    ],
  };
  setMaskToAllElements(
      document.querySelectorAll('.js-mask-phone'),
      phoneMaskOptions,
  );

  const cpfMaskOptions = { mask: '000.000.000-00' };
  setMaskToAllElements(
      document.querySelectorAll('.js-mask-cpf'),
      cpfMaskOptions,
  );

  const cnpjMaskOptions = { mask: '00.000.000/0000-00' };
  setMaskToAllElements(
      document.querySelectorAll('.js-mask-cnpj'),
      cnpjMaskOptions,
  );

  const cpfcnpjMaskOptions = { mask: [cpfMaskOptions, cnpjMaskOptions] };
  setMaskToAllElements(
      document.querySelectorAll('.js-mask-cpfcnpj'),
      cpfcnpjMaskOptions,
  );

  const rgMaskOptions = {
    mask: '00.000.000-X',
    definitions: {
      'X': /[0-9Xx]/,
    },
  };
  setMaskToAllElements(
      document.querySelectorAll('.js-mask-rg'),
      rgMaskOptions,
  );

  const cepMaskOptions = { mask: '00000-000' };
  setMaskToAllElements(
      document.querySelectorAll('.js-mask-cep'),
      cepMaskOptions,
  );

  const moneyMaskOptions = {
    mask: 'R$ num',
    blocks: {
      num: {
        mask: Number,
        thousandsSeparator: '.',
      },
    },
  };
  setMaskToAllElements(
      document.querySelectorAll('.js-mask-money'),
      moneyMaskOptions,
  );

  const dateMaskOptions = {
    mask: Date,
    autofix: true,
    pattern: 'd{/}`m{/}`Y',
    blocks: {
      Y: {
        mask: IMask.MaskedRange,
        from: 1900,
        to: 2999,
      },
    },
    format: function (date) {
      let day = date.getDate();
      let month = date.getMonth() + 1;
      const year = date.getFullYear();

      if (day < 10) {
        day = '0' + day;
      }
      if (month < 10) {
        month = '0' + month;
      }

      return [day, month, year].join('/');
    },
    parse: function (str) {
      const yearMonthDay = str.split('/');
      const day = yearMonthDay[0];
      const month = yearMonthDay[1] - 1;
      const year = yearMonthDay[2];

      // console.log(new Date(year, month, day))
      return new Date(year, month, day);
    },
  };
  setMaskToAllElements(
      document.querySelectorAll('.js-mask-date'),
      dateMaskOptions,
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

function setupPopover() {

  const popoverTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="popover"]'));

  popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });
}

function setupTooltip() {

  const tooltipTriggerList = [].slice.call(document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'));

  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
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

    const successTooltip = bootstrap.Tooltip.getOrCreateInstance(targetElement, {

      title: 'Copiado para a área de transferência',
      placement: 'bottom',
      trigger: 'manual',
    });

    successTooltip.show();

    setTimeout(() => {

      successTooltip.hide();
    }, 2000);
  }
}

function setupShareAPI() {

  const shareButtonElements = document.querySelectorAll('.js-btn-share');

  if (!shareButtonElements.length) {

    return;
  }

  const pageTitle = document.querySelector('title').textContent;
  const pageDescription = document.querySelector('meta[name="description"]')
      .getAttribute('content');

  shareButtonElements.forEach(buttonItem => {

    buttonItem.addEventListener('click', function () {

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
    return new bootstrap.Modal(modalElement, {
      focus: false,
    });
  });
}

(function () {

  preventInvalidFormSubmit();

  verifyUserAgent();

  setupSmoothScroll();

  setupSmoothScrollInOffcanvas();

  // setupCepSearch();

  // setupStateCityOptions();

  onChangeSelectLink();

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

  setupLightDarkModeController();
})();

window.addEventListener('load', function () {

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
