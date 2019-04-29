@foreach (session('flash_notification', collect())->toArray() as $message)
<script>
    @if($message['level'] == 'success')
            swal('Sucesso!', '{!! $message['message'] !!}', 'success');
        @elseif($message['level'] == 'danger')
            swal('Falhou!', '{!! $message['message'] !!}', 'error');
        @elseif($message['level'] == 'warning')
            swal('Atenção', '{!! $message['message'] !!}', 'warning');
        @else
            swal('Informação', '{!! $message['message'] !!}', 'info');
        @endif
</script>
@endforeach

{{ session()->forget('flash_notification') }}