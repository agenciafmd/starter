<?php

namespace Agenciafmd\Frontend\Livewire;

use Agenciafmd\Postal\Models\Postal;
use Agenciafmd\Postal\Notifications\SendNotification;
use Illuminate\Contracts\View\View;
use Livewire\Attributes\Validate;
use Livewire\Component;

class Contact extends Component
{
    #[Validate]
    public string $name = '';

    #[Validate]
    public string $email = '';

    #[Validate]
    public string $phone = '';

    #[Validate]
    public bool $terms = false;

    public function render(): View
    {
        $view = [];

        return view('frontend::livewire.contact', $view);
    }

    public function updated(mixed $field): void
    {
        $this->validateOnly($field, $this->rules(), [], $this->attributes());
    }

    public function rules(): array
    {
        return [
            'name' => [
                'required',
                'min:6',
            ],
            'phone' => [
                'required',
                'min:14',
            ],
            'email' => [
                'required',
                'email:rfc,dns',
                'max:255',
            ],
            'terms' => [
                'accepted',
            ],
        ];
    }

    public function attributes(): array
    {
        return [
            'name' => 'nome',
            'email' => 'e-mail',
            'phone' => 'telefone',
            'terms' => 'termos de uso',
        ];
    }

    public function submit(): void
    {
        $data = $this->validate($this->rules(), [], $this->attributes());

        $postal = Postal::query()
            ->where('slug', 'contato')
            ->first();

        if (!$postal) {
            $this->dispatch(
                event: 'swal',
                level: 'error',
                message: 'Formulário de disparo não configurado.',
            );

            return;
        }

        $postal->notify(new SendNotification([
            'greeting' => 'Contato',
            'introLines' => [
                "**Nome:** {$data['name']}",
                "**E-mail:** {$data['email']}",
                "**Telefone:** {$data['phone']}",
            ],
        ], [$data['email'] => $data['name']]));

        $this->dispatch(
            event: 'swal',
            level: 'success',
            message: 'Mensagem enviada com sucesso.',
        );

        $this->dispatch(
            event: 'datalayer',
            form_name: 'contato',
            name: $data['name'],
            email: $data['email'],
            phone: $data['phone'],
        );

        $this->reset();
    }
}
