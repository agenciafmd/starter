@extends('errors::minimal')

@section('title', __('Proibido'))
@section('code', '403')
@section('message', __($exception->getMessage() ?: 'Proibido'))
