@extends('agenciafmd/frontend::html.master', [
'bodyClass' => 'index bg-black text-white',
'critical' => 'index.css',
])

@section('title', 'Em desenvolvimento')
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
<main>
  <div class="text-opacity-75 p-1 py-md-1h w-100 text-center bg-black z-1 text-light fs-xsmall fw-bold">
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
  </div>
  <section class="text-center min-vh-100 d-flex flex-column justify-content-center">
    <div class="mb-12">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <svg width="113" height="154" viewBox="0 0 113 154" class="coffee ic mb-0h" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M67.113 143.79C64.617 146.241 56.117 148.047 46.013 148.047C35.783 148.047 27.196 146.196 24.822 143.698H24.82C8.40301 127.571 3.525 110.68 0.076004 77.339L91.956 77.3C88.507 110.64 83.531 127.663 67.115 143.79H67.113Z"
                    fill="#E6E6E6"/>
              <path
                d="M89.642 95.782C89.227 97.91 87.165 99.298 85.037 98.883C82.909 98.468 81.521 96.406 81.936 94.278C83.173 88.009 87.939 83.966 93.356 82.765C95.614 82.264 97.978 82.256 100.234 82.785C102.532 83.323 104.741 84.415 106.648 86.107C111.224 90.166 113.922 97.58 111.319 108.846C108.913 119.255 103.165 124.676 97.236 126.328C94.793 127.009 92.321 127.046 90.014 126.523C87.681 125.994 85.519 124.893 83.726 123.306C79.699 119.743 77.551 113.83 79.59 106.624C80.175 104.539 82.34 103.322 84.425 103.907C86.51 104.492 87.727 106.657 87.142 108.743C86.025 112.69 86.989 115.74 88.914 117.443C89.711 118.149 90.681 118.641 91.733 118.879C92.81 119.123 93.979 119.102 95.148 118.776C98.588 117.817 102.024 114.239 103.675 107.096C105.518 99.123 104.093 94.305 101.46 91.97C100.583 91.192 99.546 90.684 98.454 90.429C97.321 90.163 96.149 90.164 95.045 90.409C92.473 90.98 90.217 92.868 89.642 95.782Z"
                fill="white"/>
              <path
                d="M89.642 95.782C89.227 97.91 87.165 99.298 85.037 98.883C82.909 98.467 81.521 96.406 81.937 94.278C83.174 88.009 87.939 83.966 93.357 82.765C93.502 82.733 93.647 82.703 93.792 82.675C93.438 85.718 93.064 88.619 92.662 91.388C91.172 92.331 90.028 93.825 89.642 95.782ZM84.013 123.555C83.916 123.474 83.82 123.391 83.726 123.307C79.699 119.744 77.551 113.831 79.59 106.625C80.175 104.54 82.34 103.323 84.425 103.908C86.51 104.493 87.727 106.658 87.142 108.744C86.401 111.361 86.576 113.584 87.339 115.282C86.357 118.194 85.256 120.939 84.013 123.555Z"
                fill="#E6E6E6"/>
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M67.113 143.79C64.973 145.892 58.417 147.519 50.221 147.94C41.908 147.513 35.283 145.844 33.243 143.698H33.241C16.825 127.571 11.946 110.68 8.49699 77.339L91.955 77.304C88.506 110.643 83.529 127.664 67.113 143.79Z"
                    fill="white"/>
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M46.013 88.869C71.342 88.869 92 83.432 92 76.767C92 70.102 71.342 64.665 46.013 64.665C20.684 64.665 0.026001 70.101 0.026001 76.767C0.027001 83.432 20.685 88.869 46.013 88.869Z"
                    fill="white"/>
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M46.013 86.001C69.194 86.001 88.101 81.853 88.101 76.767C88.101 71.681 69.194 67.533 46.013 67.533C22.832 67.533 3.925 71.681 3.925 76.767C3.925 81.853 22.832 86.001 46.013 86.001Z"
                    fill="#E6E6E6"/>
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M82.039 81.544C74.664 84.215 61.289 86.001 46.013 86.001C30.737 86.001 17.362 84.215 9.987 81.544C17.362 78.872 30.737 77.087 46.013 77.087C61.289 77.087 74.664 78.872 82.039 81.544Z"
                    fill="#5C3D30"/>
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M82.039 81.544C79.713 82.387 76.791 83.141 73.401 83.779C72.463 82.217 71.251 81.059 70.103 80.485C66.199 78.533 52.687 78.383 48.633 79.284C44.579 80.185 37.823 81.086 34.37 80.485C30.917 79.884 21.308 80.936 17.77 83.614C14.743 83.013 12.115 82.315 9.987 81.545C17.362 78.874 30.737 77.088 46.013 77.088C61.289 77.086 74.664 78.872 82.039 81.544Z"
                    fill="#A17E6F"/>
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M76.047 81.828C77.261 81.828 78.251 81.568 78.251 81.248C78.251 80.929 77.261 80.668 76.047 80.668C74.833 80.668 73.843 80.928 73.843 81.248C73.844 81.568 74.833 81.828 76.047 81.828Z"
                    fill="#5C3D30"/>
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M46.986 78.524C47.793 78.524 48.451 78.351 48.451 78.138C48.451 77.925 47.793 77.752 46.986 77.752C46.179 77.752 45.52 77.925 45.52 78.138C45.52 78.351 46.178 78.524 46.986 78.524Z"
                    fill="#5C3D30"/>
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M74.35 82.994C75.157 82.994 75.816 82.82 75.816 82.608C75.816 82.396 75.158 82.222 74.35 82.222C73.543 82.222 72.884 82.395 72.884 82.608C72.884 82.821 73.542 82.994 74.35 82.994Z"
                    fill="#5C3D30"/>
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M41.986 79.684C43.2 79.684 44.189 79.423 44.189 79.104C44.189 78.785 43.199 78.524 41.986 78.524C40.772 78.524 39.782 78.784 39.782 79.104C39.782 79.423 40.772 79.684 41.986 79.684Z"
                    fill="#5C3D30"/>
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M17.188 82.181C17.995 82.181 18.654 82.008 18.654 81.795C18.654 81.582 17.995 81.409 17.188 81.409C16.381 81.409 15.722 81.582 15.722 81.795C15.722 82.008 16.381 82.181 17.188 82.181Z"
                    fill="#5C3D30"/>
              <path d="M37.1724 60.873C13.0324 33.184 43.4834 20.607 49.5674 3" class="animate" stroke="#A09D96"
                    stroke-width="6" stroke-linecap="round"/>
            </svg>
            <p class="mb-1 fw-bold fs-small fs-md-base">
              Que tal uma xícara de café enquanto aguarda?
            </p>
            <small class="text-uppercase ls-1 fs-xxsmall px-0h rounded-pill">
              site em desenvolvimento
            </small>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
@endsection
