function getThemeVariables() {

  return {
    breakpoints: {
      xs: 0,
      sm: 425, // Read 'from 425px' (min-width)
      md: 1024, // Read 'from 1024px' (min-width)
      lg: 1366, // Read 'from 1366px' (min-width)
      xl: 1680, // Read 'from 1680px' (min-width)
    },
    collapseTransitionTime: 350, // In milliseconds
    colors: {
      primary: '#',
      secondary: '#',
      success: '#',
      info: '#',
      warning: '#',
      danger: '#',
      light: '#',
      dark: '#',
    },
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
        return;
      }

      // Execute the function only when form was submitted and is valid
      disableButtonOnSubmit(form);
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

function disableButtonOnSubmit(form) {

  const buttons = form.querySelectorAll('button');

  buttons.forEach((button) => {

    button.setAttribute('disabled', 'disabled');

    const buttonText = button.innerText;
    button.innerHTML = `<span class="spinner-container">
                            <span class="spinner-border spinner-border-sm text-light"
                                  role="status"></span>
                            ${ buttonText }
                        </span>`;

    const spinner = button.querySelector('.spinner-container');
    spinner.classList.add('d-inline-block');
  });
}

function setupSmoothScroll() {

  // Smooth page scroll
  const elementsScrollTo = document.querySelectorAll('a.js-scroll-top');

  Array.prototype.forEach.call(elementsScrollTo, function (el, i) {
    el.addEventListener('click', function (event) {
      event.preventDefault();

      const additionalOffset = Number(this.getAttribute('data-scroll-offset')) || 0;

      doScrollAnimate(this.hash, additionalOffset);
    });
  });

  function doScrollAnimate(targetSelector, additionOffset) {
    const target = document.querySelector(targetSelector);

    if (!target) {

      console.error(`Alvo não encontrado, verifique se existe um elemento na página com o id ${ targetSelector }.`);
      return;
    }

    const scrollTop = target.getBoundingClientRect().top + document.body.scrollTop + additionOffset;

    window.scrollBy({
      top: scrollTop,
      behavior: 'smooth',
    });
  }
}

function verifyUserAgent() {

  var OSNome = '';
  if (window.navigator.userAgent.indexOf('Windows NT 10.0') !== -1) {
    OSNome = 'Windows 10';
  }
  if (window.navigator.userAgent.indexOf('Windows NT 6.2') !== -1) {
    OSNome = 'Windows 8';
  }
  if (window.navigator.userAgent.indexOf('Windows NT 6.1') !== -1) {
    OSNome = 'Windows 7';
  }
  if (window.navigator.userAgent.indexOf('Windows NT 6.0') !== -1) {
    OSNome = 'Windows Vista';
  }
  if (window.navigator.userAgent.indexOf('Windows NT 5.1') !== -1) {
    OSNome = 'Windows XP';
  }
  if (window.navigator.userAgent.indexOf('Windows NT 5.0') !== -1) {
    OSNome = 'Windows 2000';
  }
  if (window.navigator.userAgent.indexOf('Mac') !== -1) {
    OSNome = 'Mac/iOS';
  }
  if (window.navigator.userAgent.indexOf('X11') !== -1) {
    OSNome = 'UNIX';
  }
  if (window.navigator.userAgent.indexOf('Linux') !== -1) {
    OSNome = 'Linux';
  }

  if (OSNome !== 'Mac/iOS') {

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

  $('.js-onchange')
      .change(function () {

        window.location = $(this)
            .val();
      });
}

function setupSelect2() {

  $('select.js-select2')
      .select2({
        theme: 'bootstrap',
        language: 'pt-BR',
      });
}

function setupInputMasks() {

  function setMaskToAllElements(elements, maskOptions) {
    Array.prototype.forEach.call(elements, function (element) {
      const mask = IMask(element, maskOptions);
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
    blocks: {
      d: {
        mask: IMask.MaskedRange,
        from: 1,
        to: 31,
        maxLength: 2,
      },
      m: {
        mask: IMask.MaskedRange,
        from: 1,
        to: 12,
        maxLength: 2,
      },
      Y: {
        mask: IMask.MaskedRange,
        from: 1900,
        to: 2999,
      },
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

  $('[data-toggle="popover"]')
      .popover();
}

function setupTooltip() {

  $('[data-toggle="tooltip"]')
      .tooltip();
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

function setupShareWindow() {

  $('.share')
      .click(function (e) {
        e.preventDefault();
        window.open(
            $(this)
                .attr('href'),
            'shareWindow', 'height=450, width=550, top=' + ($(window)
            .height() / 2 - 275) + ', left=' + ($(window)
            .width() / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0',
        );
        return false;
      });
}

function setupSideDrawer() {

  const $body = $('body');
  const $mainContent = $('.js-main-content');
  const $navbar = $('.navbar');
  const $navbarCollapse = $('.navbar-collapse');
  const $navbarToggler = $('.navbar-toggler');
  const headerHeight = $navbar
      .innerHeight();

  resetSideDrawerConfig();

  if (window.innerWidth > getThemeVariables().breakpoints.md) {

    return;
  }

  $navbarCollapse.css('margin-top', `${ headerHeight }px`);

  function resetSideDrawerConfig() {

    $navbarCollapse.css('margin-top', '');
    $navbarCollapse.removeClass('show');
    $mainContent.removeClass('show-backdrop');
    $body.removeClass('overflow-hidden');
  }

  function navbarToggleHandler() {

    $navbarCollapse.toggleClass('show');
    $mainContent.toggleClass('show-backdrop');
    $body.toggleClass('overflow-hidden');
  }

  $navbarToggler.click(navbarToggleHandler);
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

function setupLivewire() {
  document.addEventListener('livewire:load', function (event) {
    // window.livewire.hook('afterDomUpdate', (component) => {
    //   setupInputMasks();
    //
    //   document.querySelectorAll('[data-upload]').forEach((item) => {
    //     item.addEventListener('change', (event) => {
    //       let target = event.target;
    //       let inputName = target.getAttribute('data-upload');
    //       let file = target.files[0];
    //       let reader = new FileReader();
    //       reader.readAsDataURL(file);
    //       reader.onload = () => {
    //         livewire.emit('upload', inputName, reader.result);
    //         /* console.log(reader.result); */
    //       };
    //       reader.onerror = (error) => {
    //         livewire.emit('upload', inputName, '');
    //         /* console.log('Error: ', error); */
    //       };
    //     });
    //   });
    // });
  });
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

function setupDataLayerEventClickButton() {

  const buttons = document.querySelectorAll('.js-btn-data-layer');

  if (!buttons.length) {

    return;
  }

  buttons.forEach((button) => {

    button.addEventListener('click', (clickEvent) => {

      const nameDataLayerAction = 'data-fmd-datalayer-action';
      const linkDataLayerAction = clickEvent.currentTarget.getAttribute(
          nameDataLayerAction);

      if (!linkDataLayerAction) {

        throw new Error(`Adicione atributo ${ nameDataLayerAction } com seu valor`);
      }

      const dataLayerOptions = getDataLayerOptions({ action: linkDataLayerAction });
      window.dataLayer.push(dataLayerOptions);
    });
  });
}

function getDataLayerOptions(options) {

  window.dataLayer = window.dataLayer || [];

  return {
    ...options,
    event: options.event || 'gaEvent',
    category: options.category || 'clique',
    action: options.action || '',
    label: options.label || 'enviado',
  };
}

$(function () {

  setupServiceWorker();

  preventInvalidFormSubmit();

  verifyUserAgent();

  setupSmoothScroll();

  // setupSideDrawer();

  // setupCepSearch();

  // setupStateCityOptions();

  // onChangeSelectLink();

  // setupSelect2();

  setupInputMasks();

  // setupPopover();

  // setupTooltip();

  // setupAnchorReloadPrevention();

  // setupShareWindow();

  // insertCopyrightYear();

  initializeFormHelpers();

  // setupDefaultSlider();

  // setupClipboardJS();

  setupShareAPI();

  // setupDataLayerEventClickButton();

  setupUtmHelpers();
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

setupLivewire();
