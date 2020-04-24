<div>
    <form wire:submit.prevent="submit"
          novalidate>
        <div class="form-row">
            <div class="col-12">
                <div class="form-group">
                    <input wire:model.lazy="name" type="text"
                           placeholder="Nome"
                           required
                           aria-label="nome"
                           class="@error('name') is-invalid @enderror form-control contact-custom-placeholder text-dark">
                    @error('name')
                    <span class="invalid-feedback">
                        {{ $message }}
                    </span>
                    @enderror
                </div>
            </div>
            <div class="col-6">
                <div class="form-group">
                    <input wire:model.lazy="email" type="email"
                           placeholder="Email"
                           required
                           aria-label="email"
                           class="@error('email') is-invalid @enderror form-control contact-custom-placeholder text-dark">
                    @error('email')
                    <span class="invalid-feedback">
                        {{ $message }}
                    </span>
                    @enderror
                </div>
            </div>
            <div class="col-6">
                <div class="form-group">
                    <input wire:model.lazy="phone" type="text"
                           placeholder="Telefone"
                           required
                           aria-label="telefone"
                           class="@error('phone') is-invalid @enderror mask-phone form-control contact-custom-placeholder text-dark">
                    @error('phone')
                    <span class="invalid-feedback">
                        {{ $message }}
                    </span>
                    @enderror
                </div>
            </div>
            <div class="col-5 col-md-6">
                <div class="form-group">
                    <select wire:model.lazy="state" type="text"
                            required
                            aria-label="estado"
                            class="@error('state') is-invalid @enderror custom-select text-dark">
                        <option value="">Estado</option>
                        @foreach($states as $value => $text)
                            <option value="{{ $value }}">{{ $text }}</option>
                        @endforeach
                    </select>
                    @error('state')
                    <span class="invalid-feedback">
                        {{ $message }}
                    </span>
                    @enderror
                </div>
            </div>
            <div class="col-7 col-md-6">
                <div class="form-group">
                    <select wire:model.lazy="city" type="text"
                            required
                            aria-label="city"
                            class="@error('city') is-invalid @enderror custom-select text-dark">
                        <option value="">Cidade</option>
                        @foreach($cities as $value => $text)
                            <option value="{{ $value }}">{{ $text }}</option>
                        @endforeach
                    </select>
                    @error('city')
                    <span class="invalid-feedback">
                        {{ $message }}
                    </span>
                    @enderror
                </div>
            </div>
            <div class="col-md-12">
                <div class="form-group">
                    <div class="custom-file">
                        <input type="file"
                               data-upload="image"
                               required
                               aria-label="imagem"
                               aria-describedby="image"
                               class="@error('image') is-invalid @enderror custom-file-input form-control js-fields-attachment"
                               accept=".pdf, .doc, .docx, .jpg, .png">
                        <label class="custom-file-label"
                               for="image">{{ ($image) ? 'Arquivo anexado com sucesso' : 'Anexar Arquivo' }}
                        </label>
                        @error('image')
                        <span class="invalid-feedback">
                            {{ $message }}
                        </span>
                        @enderror
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="form-group">
                                <textarea wire:model.lazy="message"
                                          placeholder="Deixe aqui mais detalhes e informações"
                                          required
                                          aria-label="mensagem"
                                          rows="5"
                                          class="@error('message') is-invalid @enderror form-control contact-custom-placeholder text-dark"></textarea>
                    @error('message')
                    <span class="invalid-feedback">
                        {{ $message }}
                    </span>
                    @enderror
                </div>
            </div>
            <div class="col-md-auto ml-auto">
                <div class="form-group">
                    <button type="submit"
                            wire:loading.attr="disabled"
                            wire:target="submit"
                            aria-label="enviar formulário"
                            class="btn btn-primary btn-block">
                        <span class="position-relative">
                            <span wire:loading wire:target="submit"
                                  class="spinner-border spinner-border-sm text-white"
                                  role="status"
                                  aria-hidden="true"></span>
                            Enviar
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </form>
</div>
