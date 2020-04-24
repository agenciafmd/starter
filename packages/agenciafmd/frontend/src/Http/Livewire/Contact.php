<?php

namespace Agenciafmd\Frontend\Http\Livewire;

use Agenciafmd\Leads\Lead;
use Agenciafmd\Postal\Notifications\SendNotification;
use Agenciafmd\Postal\Postal;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Livewire\Component;

class Contact extends Component
{
    public $name;

    public $email;

    public $phone;

    public $state;

    public $city;

    public $image;

    public $message;

    protected $listeners = [
        'upload' => 'upload',
    ];

    public function render()
    {
        $statesCities = Cache::rememberForever('statesCities', function () {
            return collect(json_decode(file_get_contents(public_path('json/estados-cidades.json'))));
        });

        $view['states'] = $statesCities->mapWithKeys(function ($item) {
            return [
                $item->nome => $item->nome,
            ];
        });

        $view['cities'] = [];
        if ($this->state) {
            $view['cities'] = $statesCities->where('nome', $this->state)
                ->mapWithKeys(function ($item) {
                    $cities = collect($item->cidades);

                    return $cities->mapWithKeys(function ($city) {
                        return [
                            $city => $city,
                        ];
                    });
                });
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
            ],
            'state' => [
                'required',
            ],
            'city' => [
                'required',
            ],
            'image' => [
                'required',
            ],
            'message' => [
                'required',
                'min:15',
            ],
        ];
    }

    public function attributes()
    {
        return [
            'name' => 'nome',
            'phone' => 'telefone',
            'state' => 'estado',
            'image' => 'imagem',
            'city' => 'cidade',
            'message' => 'mensagem',
        ];
    }

    public function submit()
    {
        $data = $this->validate($this->rules(), [], $this->attributes());

        $attachments = null;
        if ($data['image']) {
            $attachments[] = $data['image'];
        }

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
                ],
            ], [$data['email'] => $data['name']], $attachments));

        Lead::create([
            'source' => 'contato',
            'name' => $data['name'],
            'email' => $data['email'],
            'phone' => $data['phone'],
            'description' => 'Cidade: ' . $data['city'] . ' - ' . $data['state']
                . '<br/> Mensagem: ' . nl2br($data['message']),
        ]);

        $this->emit('swal', ['level' => 'success', 'message' => 'Mensagem enviada com sucesso.']);
        $this->reset();
    }

    public function upload($field, $value)
    {
        $content = base64_decode(trim(strstr($value, ','), ','));
        $extension = explode('/', mime_content_type($value))[1];
        $name = Str::slug((($this->name) ?? date('YmdHis')) . '-' . str_random(5));
        $customName = $name . '.' . $extension;

        Storage::disk('local')
            ->put('attachments/' . $customName, $content);

        $this->{$field} = storage_path('app/attachments/' . $customName);
        $this->resetValidation($field);
    }
}
