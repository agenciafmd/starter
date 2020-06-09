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
        var file = $(this)[0].files[0].name;
        var fileName = $('.custom-file-label');
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

  const regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
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

    return regName.test(fullName);
  }
}

function setupFullNameValidate() {

  const fullNameElements = document.querySelectorAll('.js-full-name');

  if (!fullNameElements.length) {

    return;
  }

  fullNameElements.forEach((fullNameElement) => {

    fullNameElement.addEventListener('focusout', function () {

      if (!fullNameElement.value.length) {

        return;
      }

      const invalidMessage = 'Por favor, insira nome e sobrenome';

      validateFullName({ fullNameElement: fullNameElement, invalidMessage });
    });
  });
}
