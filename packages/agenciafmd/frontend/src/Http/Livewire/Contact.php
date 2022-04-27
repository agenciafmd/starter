<?php

namespace Agenciafmd\Frontend\Http\Livewire;

use Agenciafmd\Postal\Models\Postal;
use Agenciafmd\Postal\Notifications\SendNotification;
use Illuminate\Support\Facades\Cache;
use Livewire\Component;

class Contact extends Component
{
    public string $name = '';

    public string $email = '';

    public string $phone = '';

    public string $state = '';

    public string $city = '';

    public string $message = '';
    
    public $terms = null;

    public function render()
    {
        $view['states'] = $this->states();

        $view['cities'] = [];
        if ($this->state) {
            $view['cities'] = $this->cities($this->state);
        }

        return view('agenciafmd/frontend::livewire.contact', $view);
    }

    public function updated($field)
    {
        $this->validateOnly($field, $this->rules(), [], $this->attributes());
    }

    public function rules()
    {
        return [
            'name' => [
                'required',
                'min:6',
            ],
            'email' => [
                'required',
                'email',
            ],
            'phone' => [
                'required',
                'min:14',
            ],
            'state' => [
                'required',
            ],
            'city' => [
                'required',
            ],
            'message' => [
                'required',
                'min:15',
            ],
            'terms' => [
                'accepted',
            ],
        ];
    }

    public function attributes()
    {
        return [
            'name' => 'nome',
            'phone' => 'telefone',
            'state' => 'estado',
            'city' => 'cidade',
            'message' => 'mensagem',
            'terms' => 'políticas de privacidade',
        ];
    }

    public function submit()
    {
        $data = $this->validate($this->rules(), [], $this->attributes());

        Postal::where('slug', 'contato')
            ->first()
            ->notify(new SendNotification([
                'greeting' => 'Contato',
                'introLines' => [
                    '**Nome:** ' . $data['name'],
                    '**E-mail:** ' . $data['email'],
                    '**Telefone:** ' . $data['phone'],
                    '**Cidade:** ' . $data['city'] . ' - ' . $data['state'],
                    '**Mensagem:** ' . nl2br($data['message']),
                    '**Política de Privacidade:** ' . (($data['terms']) ? 'Sim' : 'Não'),
                ],
            ], [$data['email'] => $data['name']]));

        $this->emit('swal', [
            'level' => 'success',
            'message' => 'Mensagem enviada com sucesso.',
        ]);

        $this->emit('datalayer', [
            'form_name' => 'contato',
        ]);

        $this->reset();
    }

    private function statesCities()
    {
        return Cache::rememberForever('statesCities', function () {
            return collect(json_decode(file_get_contents(public_path('json/estados-cidades.json'))));
        });
    }

    private function states()
    {
        $statesCities = $this->statesCities();

        return $statesCities->mapWithKeys(function ($item) {
            return [
                $item->nome => $item->nome,
            ];
        });
    }

    private function cities($state)
    {
        $statesCities = $this->statesCities();

        return $statesCities->where('nome', $state)
            ->mapWithKeys(function ($item) {
                $cities = collect($item->cidades);

                return $cities->mapWithKeys(function ($city) {
                    return [
                        $city => $city,
                    ];
                });
            });
    }
}
