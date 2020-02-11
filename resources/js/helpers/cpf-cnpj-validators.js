class CpfCnpjValidators {

  constructor() {

    this.swal = new FmdSweetalert2();
    this.sizes = {
      cpf: 11,
      cnpj: 14,
    };
    this.selectors = {
      cpf: '.mask-cpf',
      cnpj: '.mask-cnpj',
    };
  }

  sanitize(cpfOrCnpj) {

    return cpfOrCnpj.replace(/[^\d]+/g, '');
  }

  checkCNPJ(cnpjInput) {

    const sanitizedCnpj = this.sanitize(cnpjInput.value);

    const sizes = {
      full: sanitizedCnpj.length,
      prefix: sanitizedCnpj.length - 2,
    };

    const cnpj = {
      number: {
        full: sanitizedCnpj,
        prefix: sanitizedCnpj.substring(0, sizes.prefix),
        suffix: sanitizedCnpj.substring(sizes.prefix),
      },
    };

    if (!cnpj.number.full || cnpj.number.full.length !== this.sizes.cnpj) {

      setInvalidInput(cnpjInput);
    }

    if (cnpj.number.full === '00000000000000' ||
        cnpj.number.full === '11111111111111' ||
        cnpj.number.full === '22222222222222' ||
        cnpj.number.full === '33333333333333' ||
        cnpj.number.full === '44444444444444' ||
        cnpj.number.full === '55555555555555' ||
        cnpj.number.full === '66666666666666' ||
        cnpj.number.full === '77777777777777' ||
        cnpj.number.full === '88888888888888' ||
        cnpj.number.full === '99999999999999') {
      setInvalidInput(cnpjInput);
      return;
    }

    let sum = 0;
    let positionIndex = sizes.prefix - 7;

    for (let i = sizes.prefix; i >= 1; i--) {

      sum += cnpj.number.full.charAt(sizes.prefix - i) * positionIndex--;

      if (positionIndex < 2) {

        positionIndex = 9;
      }
    }

    let result = sum % 11 < 2
                 ? 0
                 : 11 - sum % 11;

    if (result !== Number(cnpj.number.suffix.charAt(0))) {

      setInvalidInput(cnpjInput);
      return;
    }

    sizes.prefix = sizes.prefix + 1;
    sum = 0;
    positionIndex = sizes.prefix - 7;

    for (let i = sizes.prefix; i >= 1; i--) {

      sum += cnpj.number.full.charAt(sizes.prefix - i) * positionIndex--;

      if (positionIndex < 2) {

        positionIndex = 9;
      }
    }

    result = sum % 11 < 2
             ? 0
             : 11 - sum % 11;

    if (result !== Number(cnpj.number.suffix.charAt(1))) {

      setInvalidInput(cnpjInput);
      return;
    }

    setValidInput(cnpjInput);
    return true;
  }

  checkCPF(cpfInput) {

    const sanitizedCpf = this.sanitize(cpfInput.value);

    const cpf = {
      fullNumber: sanitizedCpf,
      prefix: sanitizedCpf.substr(0, 9),
      suffix: sanitizedCpf.substr(9, 2),
    };

    if (!cpf.fullNumber || cpf.fullNumber.length !== this.sizes.cpf) {

      setInvalidInput(cpfInput);
      return;
    }

    if (cpf.fullNumber === '00000000000' ||
        cpf.fullNumber === '11111111111' ||
        cpf.fullNumber === '22222222222' ||
        cpf.fullNumber === '33333333333' ||
        cpf.fullNumber === '44444444444' ||
        cpf.fullNumber === '55555555555' ||
        cpf.fullNumber === '66666666666' ||
        cpf.fullNumber === '77777777777' ||
        cpf.fullNumber === '88888888888' ||
        cpf.fullNumber === '99999999999') {
      setInvalidInput(cpfInput);
      return;
    }

    let d1 = 0;

    for (let i = 0; i < 9; i++) {

      d1 += cpf.prefix.charAt(i) * (10 - i);
    }

    if (d1 === 0) {

      setInvalidInput(cpfInput);
      return;
    }

    d1 = 11 - (d1 % 11);

    if (d1 > 9) {

      d1 = 0;
    }

    if (Number(cpf.suffix.charAt(0)) !== d1) {

      setInvalidInput(cpfInput);
      return;
    }

    d1 *= 2;

    for (let i = 0; i < 9; i++) {

      d1 += cpf.prefix.charAt(i) * (11 - i);
    }

    d1 = 11 - (d1 % 11);

    if (d1 > 9) {

      d1 = 0;
    }

    if (Number(cpf.suffix.charAt(1)) !== d1) {

      setInvalidInput(cpfInput);
      return;
    }

    setValidInput(cpfInput);
    return true;
  }
}
