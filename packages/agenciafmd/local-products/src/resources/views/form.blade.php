@extends('agenciafmd/admix::partials.crud.form')

@section('form')
    {!! Form::bsOpen(['model' => optional($model), 'create' => route('admix.products.store'), 'update' => route('admix.products.update', [$model->id])]) !!}
    <div class="card-header bg-gray-lightest">
        <h3 class="card-title">
            @if(request()->is('*/create'))
                Criar
            @elseif(request()->is('*/edit'))
                Editar
            @else
                Visualizar
            @endif
            {{ config('local-products.name') }}
        </h3>
        <div class="card-options">
            @if(strpos(request()->route()->getName(), 'show') === false)
                @include('agenciafmd/admix::partials.btn.save')
            @endif
        </div>
    </div>
    <ul class="list-group list-group-flush">

        @if (optional($model)->id)
            {!! Form::bsText('Código', 'id', null, ['disabled' => true]) !!}
        @endif

        {!! Form::bsIsActive('Ativo', 'is_active', null, ['required']) !!}

        {{ Form::bsBoolean('Destaque', 'star', null, ['required' => true]) }}

        {!! Form::bsText('Nome', 'name', null, ['required']) !!}

        {!! Form::bsText('Peso', 'weight', null, ['required']) !!}

        {!! Form::bsTextarea('Descrição', 'description') !!}

        {!! Form::bsTextarea('Ingredientes', 'ingredients') !!}

        {!! Form::bsTextarea('Informação Nutricional', 'information') !!}

        {!! Form::bsImages('Galeria', 'images', $model) !!}

        {!! Form::bsImage('Imagem', 'image', $model) !!}

        {!! Form::bsMedia('Arquivo', 'upload', $model) !!}

        {!! Form::bsMedias('Arquivos', 'uploads', $model) !!}
    </ul>
    <div class="card-footer bg-gray-lightest text-right">
        <div class="d-flex">
            @include('agenciafmd/admix::partials.btn.back')

            @if(strpos(request()->route()->getName(), 'show') === false)
                @include('agenciafmd/admix::partials.btn.save')
            @endif
        </div>
    </div>
    {!! Form::close() !!}
@endsection

@push('scripts')
{{--    <script>--}}
{{--        var editor = new MediumEditor('.js-wysiwyg', {--}}
{{--            placeholder: false,--}}
{{--        });--}}
{{--    </script>--}}
@endpush
