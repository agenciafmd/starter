@extends('errors.minimal')

@section('message')
    @php
        $phrases = collect([
            // Irineu
            'Nunca saberemos o quão forte somos até que ser forte seja a única escolha.',
            'Seja humilde para admitir seus erros, inteligente para aprender com eles e maduro para corrigi-los.',

            // Eduardo
            'Mesmo que já tenhas feito uma longa caminhada, há sempre um novo caminho a fazer.',
            'Não encontre defeitos, encontre soluções.',

            // Jessica
            'É sempre divertido fazer o impossível.',
            'Tudo da certo no final, se ainda não deu certo é porque não chegou ao fim.',

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

            //Renan
            'Mesmo que já tenha feito uma longa caminhada, há sempre um novo caminho a fazer.',
            'Um ideal não é nada até você lutar por ele!',

            //Vitor
            'Quem responde antes de ouvir mostra que é insensato e passa vergonha.',
            'As pessoas aprendem umas com as outras, assim como o ferro afia o próprio ferro.',

            // Tarsísio
            'Eu teria escrito um texto mais curto, mas não tive tempo.',
            'O homem é escravo de suas falas e senhor de seu silêncio.'
        ]);
    @endphp

    {!! $phrases->random(1)->first() !!}
@endsection
