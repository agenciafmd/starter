@extends('agenciafmd/frontend::master')

@section('content')
    <div>
        <?php
            $phrases = collect([
                'Se você não lutar por alguma coisa será vencido por qualquer coisa!',
                'Be Great!',
                'What a lovely day',
                'Hakuna Matata',
            ]);
        ?>
        {{ $phrases->random(1)->first() }}
    </div>
@endsection

@push('head')
    <style>
        body, html {
            height: 100%;
            display: grid;
        }

        div {
            color: #3e515b;
            margin: auto;
            font-size: 48px;
        }
    </style>
@endpush