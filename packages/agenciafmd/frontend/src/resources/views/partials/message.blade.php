@foreach (session('flash_notification', collect())->toArray() as $message)
    <script>
        @if($message['level'] == 'success')
        Swal.fire({
            text: '{!! $message['message'] !!}',
            icon: 'success',
            title: 'Sucesso',
            showConfirmButton: false,
            showCloseButton: true,
        });
        @elseif($message['level'] == 'danger')
        Swal.fire({
            text: '{!! $message['message'] !!}',
            icon: 'error',
            title: 'Falhou!',
            showConfirmButton: false,
            showCloseButton: true,
        });
        @elseif($message['level'] == 'warning')
        Swal.fire({
            text: '{!! $message['message'] !!}',
            icon: 'warning',
            title: 'Atenção',
            showConfirmButton: false,
            showCloseButton: true,
        });
        @else
        Swal.fire({
            text: '{!! $message['message'] !!}',
            icon: 'info',
            title: 'Informação',
            showConfirmButton: false,
            showCloseButton: true,
        });
        @endif
    </script>
@endforeach

{{ session()->forget('flash_notification') }}
