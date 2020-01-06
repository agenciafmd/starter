@foreach (session('flash_notification', collect())->toArray() as $message)
    <script>
        @if($message['level'] == 'success')
        Swal.fire({
            text: '{!! $message['message'] !!}',
            type: 'success',
            title: 'Sucesso',
            showConfirmButton: false,
            showCloseButton: true,
        });
        @elseif($message['level'] == 'danger')
        Swal.fire({
            text: '{!! $message['message'] !!}',
            type: 'error',
            title: 'Falhou!',
            showConfirmButton: false,
            showCloseButton: true,
        });
        @elseif($message['level'] == 'warning')
        Swal.fire({
            text: '{!! $message['message'] !!}',
            type: 'warning',
            title: 'Atenção',
            showConfirmButton: false,
            showCloseButton: true,
        });
        @else
        Swal.fire({
            text: '{!! $message['message'] !!}',
            type: 'info',
            title: 'Informação',
            showConfirmButton: false,
            showCloseButton: true,
        });
        @endif
    </script>
@endforeach

{{ session()->forget('flash_notification') }}
