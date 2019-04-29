@extends('errors.layout')

@section('title', 'Offline!')

@section('message')
    <header>
        <h1 class='animation-slide-top'>
            <svg width="170" height="150" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M-1-1h172v152H-1z"/><g><path fill="#76838f" d="M146.6 7.45l-19.15 20.81C86.85 10.53 38.6 19.6 5.8 55.24l11.35 12.33c26.42-28.52 64.36-37.19 97.7-25.62L101.74 56.2c-25.54-5.79-53.2 2.11-73.06 23.89l11.35 12.33c12.95-14.06 30.15-21 47.34-20.42l-19.5 21.2a46.52 46.52 0 0 0-16.49 11.75l2.84 3.08-20.57 21.97 6.2 6.74L152.8 14.2l-6.2-6.75zM74.08 129.62l11.34 12.34 11.35-12.34a14.98 14.98 0 0 0-22.7 0zM79.4 107.66c10.1-2.12 21.1 1.15 28.9 9.63l11.35-12.33A47.06 47.06 0 0 0 95.18 90.7L79.4 107.66zM108.12 76.44a64.48 64.48 0 0 1 22.87 16l11.35-12.34a78.28 78.28 0 0 0-21.99-16.96l-12.23 13.3zM144.11 37.32l-11.7 12.72a98.4 98.4 0 0 1 21.46 17.53l11.34-12.33a125.42 125.42 0 0 0-21.1-17.92z"/></g></svg>
        </h1>
        <p>Offline</p>
    </header>
    <p class='error-advise'>Por favor, verifique sua conexão com a internet.</p>
    <a class="btn btn-primary" href="/">Ir para a página inicial</a>
@endsection