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

  if (!$('.js-state').length) {

    return;
  }

  $.getJSON('/json/estados-cidades.json', function (data) {

    const $state = $('.js-state');
    let $options = '<option value="">-</option>';

    $.each(data, function (key, val) {

      var selected = '';

      if (val.nome === $state.attr('data-selected')) {

        selected = 'selected';
      }

      $options +=
          `<option value="${ val.nome }" ${ selected }>${ val.nome }</option>`;
    });

    $state.html($options);

    $state.change(function () {

      let $optionsCity = '<option value="">-</option>';

      let str = '';

      $('.js-state option:selected')
          .each(function () {
            str += $(this)
                .text();
          });

      var city = $('.js-city');

      $.each(data, function (key, val) {

        if (val.nome !== str) {

          return;
        }

        $.each(val.cidades, function (key_city, val_city) {

          let selected = '';

          if (val_city === city.attr('data-selected')) {

            selected = 'selected';
          }

          $optionsCity +=
              `<option value="${ val_city }" ${ selected }>${ val_city }</option>`;
        });
      });

      city.html($optionsCity);
    })
          .change();
  });
}

function setupServiceWorker() {

  if (!('serviceWorker' in navigator)) {

    return;
  }

  window.addEventListener('load', function () {

    if (navigator.onLine) {

      return;
    }

    $('<style type=\'text/css\'>' +
        ' .is-online { display: none } ' +
        ' .is-offline { display: block } ' +
        '</style>')
        .appendTo('head');
  });

  if (navigator.serviceWorker.controller) {

    console.log(
        '[PWA Builder] active service worker found, no need to register');
    return;
  }

  // Register the ServiceWorker
  navigator.serviceWorker
           .register('/sw.js')
           .then(function (reg) {
             console.log('Service worker has been registered for scope: ' + reg.scope);
           })
           .catch(function (err) {
             console.log('ServiceWorker registration failed: ', err);
           });
}

function preventInvalidFormSubmit() {

  var forms = document.getElementsByClassName('needs-validation');
  var validation = Array.prototype.filter.call(forms, function (form) {

    form.addEventListener('submit', function (event) {

      if (form.checkValidity() === false) {

        event.preventDefault();
        event.stopPropagation();

        guideUserToTheFirstError();
        form.classList.add('was-validated');
      }
    }, false);
  });

  $('.is-invalid')
      .each(function () {
        $(this)[0].setCustomValidity('needs validate');
      })
      .on('focusout', function () {
        $(this)
            .removeClass('is-invalid');
        $(this)[0].setCustomValidity('');
      });
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
  //   <option class="" value="/html/faq">FAQ</option>
  //</select>

  document.querySelector('.js-onchange').change(function () {
    window.location = document.querySelector(this).value;
  });
}

function setupSelect2() {

  $('select.js-select2')
      .select2({
        theme: 'bootstrap',
        language: 'pt-BR',
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

  $('.js-zipcode')
      .on('blur', function () {

        var $this = $(this);
        var cep = $this.val()
                       .replace('-', '');

        if (cep.length === 8) {
          $.getJSON('https://api.mixd.com.br/cep/' + cep, {},
              function (result) {

                if (!result) {

                  console.log(result.message || 'Houve um erro desconhecido');
                  return;
                }

                var stateInput = $('.js-state');
                var cityInput = $('.js-city');

                $('.js-neighborhood')
                    .val(result.bairro);
                $('.js-address')
                    .val(result.logradouro);

                if (stateInput.is('input')) {
                  stateInput.val(result.uf_nome);
                }

                if (cityInput.is('input')) {
                  cityInput.val(result.cidade);
                }

                if (stateInput.is('select')) {
                  stateInput.val(result.uf_nome);
                  stateInput.trigger('change');
                  cityInput.val(result.cidade);
                }
              },
          );
        }
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

  $('a[href="#"]')
      .click(function (e) {

        e.preventDefault();
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

function insertCopyrightYear() {

  const copyrightContainerSelector = '.js-copyright-container';

  const hasCopyrightSelector = $('footer')
      .find(copyrightContainerSelector).length;

  if (!hasCopyrightSelector) {

    console.error(`${ copyrightContainerSelector } class is required to insert copyright text`);
    return;
  }

  const $yearContainer = $(copyrightContainerSelector);

  $yearContainer.text(`Todos os direitos reservados © ${ new Date().getFullYear() }`);
}

function setupClipboardJS() {

  // Don't forget to install the package: npm install clipboard --save

  const triggerElement = new ClipboardJS('.js-copy');

  triggerElement.on('success', (event) => {

    showTooltip(event.trigger);
  });

  function showTooltip(targetElement) {

    const successTooltip = $(targetElement).tooltip({

      title: 'Copiado para a área de transferência',
      placement: 'bottom',
      trigger: 'manual',
    });

    successTooltip.tooltip('show');

    setTimeout(() => {

      successTooltip.tooltip('hide');
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

$(function () {

  setupServiceWorker();

  preventInvalidFormSubmit();

  verifyUserAgent();

  setupSmoothScroll();

  setupSmoothScrollInOffcanvas();

  // setupCepSearch();

  // setupStateCityOptions();

  // onChangeSelectLink();

  // setupSelect2();

  setupInputMasks();

  // setupPopover();

  // setupTooltip();

  // setupAnchorReloadPrevention();

  // insertCopyrightYear();

  initializeFormHelpers();

  // setupDefaultSlider();

  // setupClipboardJS();

  setupShareAPI();

  // setupDataLayerEventClickButton();

  setupUtmHelpers();

  // setupWOWJS();
});

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
