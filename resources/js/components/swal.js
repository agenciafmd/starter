import Swal from 'sweetalert2';

function setupSweetAlert() {

  return window.Swal = Swal;
}

(() => {

   setupSweetAlert();

})();