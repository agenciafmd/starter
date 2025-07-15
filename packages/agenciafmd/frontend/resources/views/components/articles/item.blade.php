@props([
'article' => [],
])
<x-frontend::cards.card-picture :image="$article->image"
                                :has-shadow="true"
                                card-body-class="vstack"
                                class="overflow-hidden vstack">
  <div class="mb-2">
    <span class="card-subtitle text-primary">
      {{ $article->subtitle }}
    </span>
    <h2 class="card-title">
      {{ $article->name }}
    </h2>
    <p class="fs-small text-dark">
      {{ $article->date }}
    </p>
  </div>
  <x-frontend::link link="{{ $article->route }}"
                    aria-label="Link para {{ $article->name }}"
                    title="Ir para {{ $article->name }}"
                    label="Leia mais"
                    class="mt-auto btn btn-primary btn-lg w-100 stretched-link"/>
</x-frontend::cards.card-picture>