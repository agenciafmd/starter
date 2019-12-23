@extends('errors::minimal')

@section('title', __('Não Autorizado'))
@section('code', '401')
@section('message', __('Você não possui permissão para acessar esta área'))
