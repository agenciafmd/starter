@if(config('frontend.google.tagmanager'))
    <link href="https://www.google-analytics.com" rel="preconnect" crossorigin>
    <link href="https://www.google-analytics.com" rel="dns-prefetch" crossorigin>
    <link href="https://www.googletagmanager.com" rel="preconnect" crossorigin>
    <link href="https://www.googletagmanager.com" rel="dns-prefetch" crossorigin>
    <link href="https://connect.facebook.net" rel="preconnect" crossorigin>
    <link href="https://connect.facebook.net" rel="dns-prefetch" crossorigin>

    <!-- Google Tag Manager -->
    <script>
        (function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start':
                    new Date().getTime(), event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', '{{ config('frontend.google.tagmanager') }}');
    </script>
    <!-- End Google Tag Manager -->
@endif
