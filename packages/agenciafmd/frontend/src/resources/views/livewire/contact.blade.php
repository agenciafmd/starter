<form wire:submit.prevent="submit" novalidate>
    <div class="row gy-2">
        <div class="col-md-4">
            <label for="name" class="form-label">Nome</label>
            <input wire:model.lazy="name" type="text"
                   id="name"
                   placeholder="Nome"
                   required
                   aria-label="nome"
                   class="@error('name') is-invalid @enderror form-control">
            @error('name')
            <span class="invalid-feedback">
                {{ $message }}
            </span>
            @enderror
        </div>
        <div class="col-sm-6 col-md-4">
            <label for="email" class="form-label">E-mail</label>
            <input wire:model.lazy="email" type="email"
                   id="email"
                   placeholder="E-mail"
                   required
                   aria-label="email"
                   class="@error('email') is-invalid @enderror form-control">
            @error('email')
            <span class="invalid-feedback">
                {{ $message }}
            </span>
            @enderror
        </div>
        <div class="col-sm-6 col-md-4">
            <label for="phone" class="form-label">Telefone ou celular</label>
            <input wire:model.lazy="phone" type="tel"
                   id="phone"
                   placeholder="Telefone"
                   required
                   aria-label="telefone"
                   class="@error('phone') is-invalid @enderror js-mask-phone form-control">
            @error('phone')
            <span class="invalid-feedback">
                {{ $message }}
            </span>
            @enderror
        </div>
        <div class="col-sm-6">
            <label for="state" class="form-label">Estado</label>
            <select wire:model.lazy="state"
                    id="state"
                    required
                    aria-label="estado"
                    class="@error('state') is-invalid @enderror form-select">
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
        <div class="col-sm-6">
            <label for="city" class="form-label">Cidade</label>
            <select wire:model.lazy="city"
                    id="city"
                    required
                    aria-label="city"
                    class="@error('city') is-invalid @enderror form-select">
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
        <div class="col-12">
            <label for="message" class="form-label">Mensagem</label>
            <textarea wire:model.lazy="message"
                      id="message"
                      placeholder="Digite aqui sua mensagem"
                      required
                      aria-label="mensagem"
                      rows="5"
                      class="@error('message') is-invalid @enderror form-control"></textarea>
            @error('message')
            <span class="invalid-feedback">
                {{ $message }}
            </span>
            @enderror
        </div>
        <div class="col-12">
            <div class="form-check">
                <input wire:model.lazy="terms"
                       type="checkbox"
                       name="privacy-terms"
                       required
                       class="form-check-input @error('terms') is-invalid @enderror"
                       id="privacy-terms">
                <label class="form-check-label text-reset" for="privacy-terms">
                    <x-frontend::privacy-terms-message />
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
                    aria-label="enviar formulário"
                    class="btn btn-primary">
                <span wire:loading.remove wire:target="submit">Enviar</span>
                <span wire:loading wire:target="submit">
                    Enviando...
                    <span class="spinner-grow spinner-grow-sm ms-0h" role="status" aria-hidden="true"></span>
                </span>
            </button>
        </div>
    </div>
</form>
