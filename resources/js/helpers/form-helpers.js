function setupCustomFormFieldsVisibility() {

  $.fn.disableFormFields = function () {
    this.find('select')
        .each(function () {
          $(this)
              .attr('disabled', true);
        });
    this.find('input')
        .each(function () {
          $(this)
              .attr('disabled', true);
        });

    // Bootstrap styles required
    this.addClass('d-none');
  };

  $.fn.enableFormFields = function () {
    this.find('select')
        .each(function () {
          $(this)
              .attr('disabled', false);
        });

    this.find('input')
        .each(function () {
          $(this)
              .attr('disabled', false);
        });

    // Bootstrap styles required
    this.removeClass('d-none');
  };
}

function getFieldValue({ name, type }) {

  if (!type) {

    type = 'input';
  }

  if (type === 'input') {

    return $(`${ type }[name="${ name }"]`)
        .val();
  }

  if (type === 'select') {

    return $(`${ type }[name="${ name }"]`)
        .children('option:selected')
        .text();
  }
}

function setCustomFileLabel() {

  $('.custom-file-input')
      .change(function () {
        const file = $(this)[0].files[0].name;
        const fileName = $('.custom-file-label');
        fileName.text(file);
      });
}

function setInvalidInput({ input, message }) {

  input.setCustomValidity(message || 'invalid');
  input.classList.add('is-invalid');
}

function setValidInput({ input }) {

  input.setCustomValidity('');
  input.classList.remove('is-invalid');
}

function guideUserToTheFirstError() {

  const currentScrollPosition = $(window)
      .scrollTop();
  const invalidInputsSelectors = [
    '.form-control:invalid',
    '.custom-control-input:invalid',
    '.form-control.is-invalid',
    '.custom-control-input.is-invalid',
  ];
  const $invalidInputs = $(invalidInputsSelectors.join(', '));
  // Selects the parent to get input label
  const $firstInvalidInput = $invalidInputs.first()
      .parent();
  const firstInvalidInputOffsetTop = $firstInvalidInput.offset().top;

  if (currentScrollPosition <= firstInvalidInputOffsetTop) {

    return;
  }

  if (_isFormOnModal()) {

    _scrollToError({ container: '.modal.show' });

    return;
  }

  _scrollToError({ container: 'html, body' });

  function _scrollToError({ container }) {

    const animateConfig = {
      properties: {
        scrollTop: $firstInvalidInput.offset().top - _getStickyHeaderOffset(),
      },
      options: {
        duration: 1000,
      },
    };

    $(container)
        .animate(animateConfig.properties, animateConfig.options);
  }

  function _isFormOnModal() {

    return $('body').hasClass('modal-open');
  }

  function _getStickyHeaderOffset() {

    const $stickyHeaderSticky = $('.js-header-sticky');

    if (!$stickyHeaderSticky.length) {

      return 0;
    }

    return $stickyHeaderSticky.innerHeight();
  }
}

function validateFullName({ fullNameElement, invalidMessage }) {

  const fullName = fullNameElement.value;
  // Only for themed form by Bootstrap
  const invalidFeedbackElement = fullNameElement.nextElementSibling;
  const defaultInvalidFeedback = invalidFeedbackElement.innerText;

  if (!isValidFullName()) {

    setInvalidInput({ input: fullNameElement, message: invalidMessage });
    invalidFeedbackElement.innerText = invalidMessage;
    return;
  }

  setValidInput({ input: fullNameElement });
  invalidFeedbackElement.innerText = defaultInvalidFeedback;

  function isValidFullName() {

    return fullName.trim()
                   .split(' ').length >= 2;
  }
}

function setupFullNameValidate() {

  const fullNameElements = document.querySelectorAll('.js-full-name');

  if (!fullNameElements.length) {

    return;
  }

  fullNameElements.forEach((fullNameElement) => {

    // Execute as soon as it's found
    fullNameValidateHandler({ fullNameElement });

    fullNameElement.addEventListener('blur', function () {

      // Execute on every blur event propagation
      fullNameValidateHandler({ fullNameElement });
    });
  });

  function fullNameValidateHandler({ fullNameElement }) {

    if (!fullNameElement.value.length) {

      return;
    }

    const invalidMessage = 'Por favor, insira nome e sobrenome';

    validateFullName({ fullNameElement: fullNameElement, invalidMessage });
  }
}

function setupBrazilianCellphoneValidate() {

  const phoneInputs = document.querySelectorAll('.js-cellphone-validate');

  phoneInputs.forEach((phoneInput) => {

    phoneInput.addEventListener('blur', function () {

      if (!isValidPhone(phoneInput)) {

        setInvalidInput({
          input: phoneInput,
          message: 'Por favor, insira um número de celular válido',
        });
        return;
      }

      setValidInput({ input: phoneInput });
    });
  });

  function isValidPhone(phoneValue) {

    const sanitizedPhone = phoneValue.value.replace(/\D/g, '');

    // Check if has phone number and it has 11 characters
    return sanitizedPhone.length && sanitizedPhone.length === 11;
  }
}

function setupBrazilianPhoneValidate() {

  const phoneInputs = document.querySelectorAll('.js-phone-validate');

  phoneInputs.forEach((phoneInput) => {

    phoneInput.addEventListener('blur', function () {

      if (!isValidPhone(phoneInput)) {

        setInvalidInput({
          input: phoneInput,
          message: 'Por favor, insira um número de telefone válido',
        });
        return;
      }

      setValidInput({ input: phoneInput });
    });
  });

  function isValidPhone(phoneValue) {

    const sanitizedPhone = phoneValue.value.replace(/\D/g, '');

    // Check if has phone number and it has 11 characters
    return sanitizedPhone.length && sanitizedPhone.length === 10;
  }
}

function initializeFormHelpers() {

  // Form usability
  setCustomFileLabel();
  setupCustomFormFieldsVisibility();

  // Validators
  setupFullNameValidate();
  setupBrazilianCellphoneValidate();
  setupBrazilianPhoneValidate();
}
