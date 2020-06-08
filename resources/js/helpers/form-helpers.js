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

function setInvalidInput(input) {

  input.setCustomValidity('invalid');
  input.classList.add('is-invalid');
}

function setValidInput(input) {

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
