@extends('errors::layout')

@section('title', 'Página não encontrada!')

@section('message')
    <header>
        <h1 class='animation-slide-top'>404</h1>
        <p>Página não encontrada!</p>
    </header>
    <p class='error-advise'>A página que você está procurando não existe.</p>
    <a class="btn btn-primary" href="/">Ir para a página inicial</a>
@endsection
