@extends('frontend::html.master', [
'bodyClass' => 'greetings bg-black text-white vstack h-100vh -header-overlap',
'critical' => 'index.css',
])

@section('title', 'Em desenvolvimento')
@section('description', 'em breve, seu site estará logo aqui.')

@push('head')
<style>
  :root {
    --glow-color: #e9ff00;
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
    'Nunca saberemos o quão forte somos até que ser forte seja a única
    escolha.',
    'Seja humilde para admitir seus erros, inteligente para aprender com eles e
    maduro para corrigi-los.',

    // Eduardo
    'Mesmo que já tenhas feito uma longa caminhada, há sempre um novo caminho a
    fazer.',
    'Não encontre defeitos, encontre soluções.',

    // Renan Breno
    'Life is short. Drive fast and leave a sexy corpse',
    'Mas eu não sou, nem quero ser, igual a quem me diz que sendo igual eu posso
    ser feliz',

    // Edmo
    'Você decide como será o seu dia, então hora de Daytonar!',
    'Não tente se tornar uma pessoa de sucesso, prefira tentar se tornar uma
    pessoa de valor.',

    // Renato
    'Não tem problema ter problema. Só precisamos resolver o problema.',
    'Nunca se importe com a opinião de quem não importa.',

    // Onicio
    'O impossível é só questão de opinião. Só os loucos sabem. Tico brau tico
    brei. Vim de santos.',
    'A arte de ser louco é jamais cometer a loucura de ser um sujeito normal',

    // Giovanna
    'Acredite em si próprio e chegará um dia em que os outros não terão outra
    escolha senão acreditar com você.',
    'Por maior que seja, não há obstáculo que não possa ser superado.',

    // Carlos
    'スポーク日本語',
    '
    <a href="https://www.youtube.com/watch?v=nFO8kvRbT7U"
       target="_blank"
       rel="noopener"
       style="text-decoration: none; color: #636b6f;">Taca Ajinomoto aqui
    </a>
    ',

    // Camila
    'Tudo o que um sonho precisa para ser realizado, é de alguém que acredite
    que ele possa ser realizado.',
    'Só é lutador quem sabe lutar consigo mesmo.',

    // Renan Zika
    'Mesmo que já tenha feito uma longa caminhada, há sempre um novo caminho a
    fazer.',
    'Um ideal não é nada até você lutar por ele!',

    // Vitor
    'Quem responde antes de ouvir mostra que é insensato e passa vergonha.',
    'As pessoas aprendem umas com as outras, assim como o ferro afia o próprio
    ferro.'
    ]);
    @endphp

    {!! $phrases->random(1)->first() !!}
  </section>
  <section class="mb-block-large text-center justify-content-center">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">

          <x-frontend-icon name="ic-cup-coffee"
                           class="coffee ic mb-0h"/>
          <p class="mb-1 fw-bold fs-small fs-md-base">
            Que tal uma xícara de café enquanto aguarda?
          </p>
          <small class="text-uppercase ls-1 fs-xxsmall px-0h rounded-pill">
            site em desenvolvimento
          </small>

        </div>
      </div>
    </div>
  </section>
</main>
@endsection
