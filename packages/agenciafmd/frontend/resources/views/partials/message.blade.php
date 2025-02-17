@forelse (session('flash_notification', collect())->toArray() as $message)
    <script>
        @if($message['level'] === 'success')
        Swal.fire({
            text: '{!! $message['message'] !!}',
            icon: 'success',
            title: 'Sucesso',
            showConfirmButton: false,
            showCloseButton: true,
        });
        @elseif($message['level'] === 'danger')
        Swal.fire({
            text: '{!! $message['message'] !!}',
            icon: 'error',
            title: 'Falhou!',
            showConfirmButton: false,
            showCloseButton: true,
        });
        @elseif($message['level'] === 'warning')
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
@empty
    @if (session()->get('errors'))
        @if(collect(session()->get('errors'))->flatten()->first()->has('hp_time'))
            {{--@dd(collect(session()->get('errors'))->flatten()->first()->first('hp_time'))--}}
            <script>
                Swal.fire({
                    text: 'Por favor, aguarde alguns segundos para enviar os dados.',
                    icon: 'info',
                    title: 'Informação',
                    showConfirmButton: false,
                    showCloseButton: true,
                });
            </script>
        @endif
    @endif
@endforelse

{{ session()->forget('flash_notification') }}

<script>
    document.addEventListener('livewire:init', () => {
        Livewire.on('swal', (param) => {
            const title = {
                success: 'Sucesso',
                danger: 'Falhou',
                warning: 'Atenção',
                info: 'Informação',
            };

            Swal.fire({
                text: param.message,
                icon: param.level,
                title: title[param.level],
                showConfirmButton: false,
                showCloseButton: true,
            });
        });

        Livewire.on('datalayer', (param) => {
            const defaultDataLayerOptions = {
                event: param.event || 'form',
                action: param.action || 'success',
                details: param.message || 'Formulário Disparado!',
                form_name: param.form_name || 'Contato',
                form_id: param.form_id || '00000',
            };

            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                ...defaultDataLayerOptions,
                ...param,
            });
        });
    });
</script>
