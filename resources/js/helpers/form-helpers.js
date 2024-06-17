function setupCustomFormFieldsVisibility() {

  HTMLElement.prototype.disableFormFields = function () {

    this.querySelectorAll('select').forEach(function (select) {

      select.disabled = true;
    });

    this.querySelectorAll('input').forEach(function (input) {

      input.disabled = true;
    });

    // Bootstrap styles required
    this.classList.add('d-none');
  };

  HTMLElement.prototype.enableFormFields = function () {

    const selects = this.querySelectorAll('select');

    selects.forEach(function (select) {

      select.disabled = false;
    });

    const inputs = this.querySelectorAll('input');

    inputs.forEach(function (input) {

      input.disabled = false;
    });

    // Bootstrap styles required
    this.classList.remove('d-none');
  };
}

function getFieldValue({ name, type }) {

  if (!type) {

    type = 'input';
  }

  if (type === 'input') {

    const inputElement = document.querySelector(`input[name="${ name }"]`);
    return inputElement ? inputElement.value : '';
  }

  if (type === 'select') {

    const selectElement = document.querySelector(`select[name="${ name }"]`);

    if (selectElement) {

      const selectedOption = selectElement.options[selectElement.selectedIndex];
      return selectedOption ? selectedOption.textContent : '';
    }

    return '';
  }
}

function setCustomFileLabel() {

  const inputFile = document.querySelector('.js-custom-file-input');
  const fileLabel = document.querySelector('.js-custom-file-label');

  if (!inputFile) {

    return;
  }

  inputFile.addEventListener('change', function () {

    if (!fileLabel) {

      throw new Error(`Adiciona classe '.js-custom-file-label' ao label do input file.`);
    }

    const file = this.files[0].name;
    fileLabel.textContent = file;
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

  const currentScrollPosition = window.scrollY;
  const invalidInputsSelectors = [
    '.form-control:invalid',
    '.form-select:invalid',
    '.form-check-input:invalid',
    '.form-range:invalid',
    '.form-control.is-invalid',
    '.form-select.is-invalid',
    '.form-check-input.is-invalid',
    '.form-range.is-invalid',
  ];

  const invalidInputs = document.querySelectorAll(invalidInputsSelectors.join(
      ', '));

  if (!invalidInputs.length) {

    return;
  }

  const firstInvalidInput = invalidInputs[0].parentNode;
  const firstInvalidInputOffsetTop = firstInvalidInput.getBoundingClientRect().top;

  const scrollContainerClass = 'js-scroll-container';
  const scrollContainerElement = document.querySelector(`.${scrollContainerClass}`);

  if (_isFormOnModal()) {

    _scrollToError('.modal.show .modal-body');
    return;
  }

  if (scrollContainerElement) {

    _scrollToError(`.${scrollContainerClass}`);
    return;
  }

  _scrollToError('html, body');

  function _scrollToError(container) {

    const animateConfig = {

      top: firstInvalidInputOffsetTop + currentScrollPosition - _getStickyHeaderOffset(),
      behavior: 'smooth',
    };

    _animateScroll(container, animateConfig);
  }

  function _animateScroll(container, animateConfig) {

    document.querySelector(container).scrollTo(animateConfig);
  }

  function _isFormOnModal() {

    return document.body.classList.contains('modal-open');
  }

  function _getStickyHeaderOffset() {

    const stickyHeaderSticky = document.querySelector('.fmd-header-is-fixed');
    return stickyHeaderSticky ? stickyHeaderSticky.getBoundingClientRect().height : 0;
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
