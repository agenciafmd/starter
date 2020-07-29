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

  $('html, body')
      .animate({
        scrollTop: $firstInvalidInput.offset().top - getStickyHeaderOffset(),
      }, 1000);

  function getStickyHeaderOffset() {

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

function isValidDate(inputElement) {

  const datePattern = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

  // Match the date format through regular expression
  if (!inputElement.value.match(datePattern)) {

    return false;
  }

  // Test which separator is used '/' or '-'
  const slashOperator = inputElement.value.split('/');
  const dashOperator = inputElement.value.split('-');
  const isSlashOperator = !!slashOperator.length;
  const isDashOperator = !!dashOperator.length;

  // Extract the string into month, date and year
  let pdate;
  if (isSlashOperator) {

    pdate = inputElement.value.split('/');
  } else if (isDashOperator) {

    pdate = inputElement.value.split('-');
  }

  const dd = parseInt(pdate[0]);
  const mm = parseInt(pdate[1]);
  const yy = parseInt(pdate[2]);

  // Accept date until now
  if (yy > new Date().getFullYear()) {

    return false;
  }

  // Create list of days of a month assuming there is no leap year by default
  const lastDaysOfMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (mm === 1 || mm > 2) {
    if (dd > lastDaysOfMonths[mm - 1]) {
      return false;
    }
  }

  // If is february
  if (mm === 2) {

    const isLeapYear = !!(!(yy % 4) && yy % 100) || !(yy % 400);

    if ((!isLeapYear) && (dd >= 29) || (isLeapYear) && (dd > 29)) {
      return false;
    }
  }

  return true;
}

function setDateValidationHandlers() {

  document.querySelectorAll('.mask-date')
      .forEach(function (item) {

        item.addEventListener('blur', function () {

          if (!isValidDate(item)) {

            setInvalidInput({ input: item });
            return;
          }

          setValidInput({ input: item });
        });
      });
}

function initializeFormHelpers() {

  // Form usability
  setCustomFileLabel();
  setupCustomFormFieldsVisibility();

  // Validators
  setupFullNameValidate();
  setupBrazilianCellphoneValidate();
  setupBrazilianPhoneValidate();
  setDateValidationHandlers();
}
