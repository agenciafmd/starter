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
