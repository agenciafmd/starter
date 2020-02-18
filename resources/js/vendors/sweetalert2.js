class FmdSweetalert2 {

  fireSwal(swalOptions) {

    Swal.fire(swalOptions);
  }

  fireErrorAlert(swalOptions) {

    Swal.fire({
      icon: 'error',
      ...swalOptions,
    });
  }
}
