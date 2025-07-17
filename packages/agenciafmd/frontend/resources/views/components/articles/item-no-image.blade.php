@props([
'article' => [],
])

<x-frontend::cards.card card-body-class="vstack p-0"
                        class="vstack border-0 rounded-0">
  <x-frontend::link link="{{ $article->route }}"
                    aria-label="Link para {{ $article->name }}"
                    title="Ir para {{ $article->name }}"
                    class="btn-link text-decoration-none">
    <span class="card-subtitle text-primary fs-base">
      {{ $article->subtitle }}
    </span>
    <h2 class="card-title text-body">
      {{ $article->name }}
    </h2>
    <p class="fs-small text-body">
      {{ $article->date }}
    </p>
  </x-frontend::link>
</x-frontend::cards.card>