@extends('errors::minimal')

@section('title', __('Serviço Indisponível'))
@section('code', '503')
@section('message', __($exception->getMessage() ?: 'Estamos em manutenção, voltaremos em breve.'))
