@extends('frontend::master', [
    'bodyClass' => 'greetings bg-black text-white vstack h-100vh',
    'critical' => 'index.css',
])

@section('title', 'Bem-vindo(a)')
@section('description', 'em breve, seu site estará logo aqui.')

@push('head')
<style>
    :root {
        --glow-color: #E9FF00;
        --bs-dark-rgb: 0, 0, 0;
    }
</style>
@endpush

@section('content')
<main class="vstack justify-content-around flex-grow-1">
    <section class="text-opacity-75 p-1 py-md-1h w-100 text-center bg-black z-1 text-light fs-xsmall fw-bold">
    @php
        $phrases = collect([
            // Irineu
            'Nunca saberemos o quão forte somos até que ser forte seja a única escolha.',
            'Seja humilde para admitir seus erros, inteligente para aprender com eles e maduro para corrigi-los.',

            // Eduardo
            'Mesmo que já tenhas feito uma longa caminhada, há sempre um novo caminho a fazer.',
            'Não encontre defeitos, encontre soluções.',

            // Renan Breno
            'Life is short. Drive fast and leave a sexy corpse',
            'Mas eu não sou, nem quero ser, igual a quem me diz que sendo igual eu posso ser feliz',

            // Edmo
            'Você decide como será o seu dia, então hora de Daytonar!',
            'Não tente se tornar uma pessoa de sucesso, prefira tentar se tornar uma pessoa de valor.',

            // Renato
            'Não tem problema ter problema. Só precisamos resolver o problema.',
            'Nunca se importe com a opinião de quem não importa.',

            // Onicio
            'O impossível é só questão de opinião. Só os loucos sabem. Tico brau tico brei. Vim de santos.',
            'A arte de ser louco é jamais cometer a loucura de ser um sujeito normal',

            // Giovanna
            'Acredite em si próprio e chegará um dia em que os outros não terão outra escolha senão acreditar com você.',
            'Por maior que seja, não há obstáculo que não possa ser superado.',

            // Carlos
            'スポーク日本語',
            '<a href="https://www.youtube.com/watch?v=nFO8kvRbT7U" target="_blank" rel="noopener" style="text-decoration: none; color: #636b6f;">Taca Ajinomoto aqui</a>',

            // Camila
            'Tudo o que um sonho precisa para ser realizado, é de alguém que acredite que ele possa ser realizado.',
            'Só é lutador quem sabe lutar consigo mesmo.',

            // Renan Zika
            'Mesmo que já tenha feito uma longa caminhada, há sempre um novo caminho a fazer.',
            'Um ideal não é nada até você lutar por ele!',

            // Vitor
            'Quem responde antes de ouvir mostra que é insensato e passa vergonha.',
            'As pessoas aprendem umas com as outras, assim como o ferro afia o próprio ferro.'
        ]);
    @endphp

    {!! $phrases->random(1)->first() !!}
    </section>
    <section class="mb-block-large text-center justify-content-center">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="mb-0h text-uppercase fs-xxsmall ls-1">
                        mais uma produção do:
                    </div>
                    <x-frontend-icon name="logo-mdm"
                                     class="mb-block-small mb-md-block-large img-sanitize"/>

                    <x-frontend::link link="/html/index"
                                      class="glowing-btn text-decoration-none">
                        <span class='glowing-txt'>
                            I<span class='faulty-letter'>N</span>ICIAR
                            <span class='faulty-letter'>J</span>ORN<span class='faulty-letter'>A</span>DA
                        </span>
                    </x-frontend::link>
                </div>
            </div>
        </div>
    </section>
</main>
@endsection
