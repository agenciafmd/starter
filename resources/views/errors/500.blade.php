@extends('errors::layout')

@section('title', 'Erro!')

@section('message')
    <header>
        <h1 class='animation-slide-top'>500</h1>
        <p>Erro!</p>
    </header>
    <p class='error-advise'>Ops, erro fatal!</p>
    <a class="btn btn-primary" href="/">Ir para a página inicial</a>

    @if(app()->environment(['production']) && app()->bound('sentry') && !empty(Sentry::getLastEventID()))
        <div class="subtitle">Error ID: {{ Sentry::getLastEventID() }}</div>

        <!-- Sentry JS SDK 2.1.+ required -->
        <script src="https://cdn.ravenjs.com/3.3.0/raven.min.js"></script>

        <script>
          Raven.showReportDialog({
            eventId: '{{ Sentry::getLastEventID() }}',
            // use the public DSN (dont include your secret!)
            dsn: '{{ config('sentry.dsn_public') }}',
            user: {
              'name': '{{ (auth()->user()->name) ?? '' }}',
              'email': '{{ (auth()->user()->email) ?? '' }}',
            }
          });
        </script>
    @endif
@endsection
