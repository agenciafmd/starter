@extends('errors::layout')

@section('title', 'Página expirada')

@section('message')
    <header>
        <h1 class='animation-slide-top'>419</h1>
        <p>Página expirada</p>
    </header>
    <p class='error-advise'>
        A página expirou por inatividade.
        <br />
        Por favor, atualize a página e tente novamente
    </p>
@endsection
