<div id="formCard"
     class="bg-secondary stretch-on-mobile px-1h pe-auto px-md-1hq px-xl-2q py-3 py-md-1hq py-xl-3 rounded-md">
    <h2 class="text-light fs-5 fs-md-6 fs-xl-4  mb-0 fw-medium fs-3 fs-md-5 fs-xl-3 ls-xl">
        Fale com nossos consultores
        <span class="text-info">
            e garanta o seu terreno
        </span>
    </h2>
    <form wire:submit.prevent="submit"
          class="needs-validation"
          novalidate>
        <div class="row gx-0 gy-1h gy-md-0hq gy-xl-1h">
            <div class="col-12">
                <div class="form-floating">
                    <input wire:model.lazy="name"
                           type="text"
                           id="name"
                           autocomplete="off"
                           placeholder=""
                           aria-label="nome"
                           class="@error('name') is-invalid @enderror form-control">
                    <label for="name"
                           class="form-label">Nome
                    </label>
                    @error('name')
                    <span class="invalid-feedback">
                        {{ $message }}
                    </span>
                    @enderror
                </div>
            </div>
            <div class="col-12">
                <div class="form-floating">
                    <input wire:model.lazy="email"
                           type="email"
                           id="email"
                           autocomplete="off"
                           placeholder=""
                           aria-label="email"
                           class="@error('email') is-invalid @enderror form-control">
                    <label for="email"
                           class="form-label">E-mail
                    </label>
                    @error('email')
                    <span class="invalid-feedback">
                        {{ $message }}
                    </span>
                    @enderror
                </div>
            </div>
            <div class="col-12">
                <div class="form-floating">
                    <input wire:model.lazy="phone"
                           x-mask:dynamic="$input.length <= 14 ? '(99) 9999-9999' : '(99) 99999-9999'"
                           type="tel"
                           id="phone"
                           autocomplete="off"
                           placeholder=""
                           aria-label="telefone"
                           class="@error('phone') is-invalid @enderror form-control">
                    <label for="phone"
                           class="form-label">
                        Telefone/celular
                    </label>
                    @error('phone')
                    <span class="invalid-feedback">
                        {{ $message }}
                    </span>
                    @enderror
                </div>
            </div>
            <div class="col-12">
                <div class="form-check mt-0h mb-1">
                    <input wire:model.lazy="terms"
                           type="checkbox"
                           name="privacy-terms"
                           class="form-check-input @error('terms') is-invalid @enderror"
                           id="privacy-terms">
                    <label class="form-check-label"
                           for="privacy-terms">
                        <x-frontend::privacy-terms-message/>
                    </label>
                    @error('terms')
                    <span class="d-block invalid-feedback">
                        {{ $message }}
                    </span>
                    @enderror
                </div>
            </div>
            <div class="col-12">
                <button type="submit"
                        wire:loading.attr="disabled"
                        wire:target="submit"
                        aria-label="Quero saber mais"
                        class="btn btn-info fs-6 fs-md-xlarge fs-xl-6 p-1q p-md-1 p-xl-1q w-100">
                    <span wire:loading.remove
                          wire:target="submit">Quero saber mais
                    </span>
                    <span wire:loading
                          wire:target="submit">
                        Enviando...
                        <span class="spinner-grow spinner-grow-sm ms-0h"
                              role="status"
                              aria-hidden="true"></span>
                    </span>
                </button>
            </div>
        </div>
    </form>
</div>