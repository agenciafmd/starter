@extends('agenciafmd/frontend::master')

@section('content')
    <div>
        @php
            $phrases = collect([
                'Se você não lutar por alguma coisa será vencido por qualquer coisa!',
                'Que o vento leve o necessário e me traga o suficiente.',
                'Nunca saberemos o quão forte somos até que ser forte seja a única escolha.',
                'Se a caminhada está difícil, é porque você está no caminho certo.',
                'Seja humilde para admitir seus erros, inteligente para aprender com eles e maduro para corrigi-los.',
                'Inspira. Respira. Não pira.',
            ]);
        @endphp

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
            text-align: center;
        }
    </style>
@endpush
