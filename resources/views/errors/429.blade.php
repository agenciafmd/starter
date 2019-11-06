@extends('errors::layout')

@section('title', 'Muitos requests!')

@section('message')
    <header>
        <h1 class='animation-slide-top'>429</h1>
        <p>Muitos requests!</p>
    </header>
    <p class='error-advise'>Opa, vamos com calma!</p>
@endsection
