<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    @include('agenciafmd/frontend::partials.pwa')

    <title>@yield('title')</title>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <style>
      html, body {
        background-color: #000;
        color: #fff;
        font-family: 'Nunito', sans-serif;
        font-weight: 100;
        height: 100vh;
        margin: 0;
      }

      .full-height {
        height: 100vh;
      }

      .flex-center {
        align-items: center;
        display: flex;
        justify-content: center;
      }

      .position-ref {
        position: relative;
      }

      .code {
        border-right: 2px solid;
        font-size: 26px;
        padding: 0 15px 0 15px;
        text-align: center;
      }

      .message {
        font-size: 18px;
        text-align: center;
      }

      .ic {
        max-width: 100%;
        width: 3rem;
        height: 3rem;
        padding: 0 0.875rem 0 0.875rem;
      }

      .helmet .animate-light {
        animation: flickerLight 1s infinite;
      }
      @keyframes flickerLight {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }

    </style>
</head>
<body>
<div class="flex-center position-ref full-height">
    <div>
        <svg class="ic helmet" width="305" height="222" viewBox="0 0 305 222" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.442 159.55L17.4436 159.542C19.804 149.155 23.0279 134.968 26.0908 115.848C26.0908 60.2798 82.1303 15.0254 152.103 13.2676V13.2476C152.253 13.2505 152.402 13.2534 152.551 13.2568C152.701 13.2534 152.85 13.2505 153 13.2476V13.2676C222.973 15.0254 279.012 60.2798 279.012 115.848C282.075 134.968 285.299 149.155 287.659 159.542L287.661 159.548C288.842 164.747 289.807 168.993 290.427 172.43C298.656 176.144 304.383 184.421 304.383 194.035C304.383 207.12 293.775 217.728 280.691 217.728H153H152.103H24.4124C11.3275 217.728 0.720215 207.12 0.720215 194.035C0.720215 184.421 6.4472 176.144 14.6759 172.43C15.296 168.993 16.2608 164.748 17.442 159.55Z" fill="#FF7A01"/>
            <path d="M304.383 194.045C304.383 184.431 298.656 176.154 290.427 172.44L14.6759 172.439C6.4472 176.154 0.720215 184.431 0.720215 194.045H304.383Z" fill="#FFAB14"/>
            <path d="M188.217 79.2621H116.886L123.308 11.9533L123.592 11.516L125.569 10.1473L129.783 8.3729L132.997 7.37538L137.431 6.59961H165.423L171.983 7.41953L177.859 9.23566L181.263 11.6944L181.834 12.366L188.217 79.2621Z" fill="#FFAB16" stroke="#FFA10B" stroke-width="12"/>
            <path d="M14.6829 172.439L16.8554 162.117C16.8554 165.379 80.5611 170.293 107.812 172.439H14.6829Z" fill="#EE5900"/>
            <path d="M290.426 172.441L288.168 161.766C288.817 165.048 224.528 169.896 197.277 172.042L290.426 172.441Z" fill="#EE5900"/>
            <ellipse cx="152.552" cy="130.233" rx="61.9339" ry="62.9958" fill="#FF9302"/>
            <ellipse cx="151.867" cy="129.537" rx="50.9693" ry="51.8433" fill="#EB5A00"/>
            <g>
                <ellipse cx="152.037" cy="130.233" rx="41.1047" ry="41.8095" fill="#BBB032"/>
            </g>
            <g class="animate-light" filter="url(#filter0_d_504_73)">

                <ellipse cx="152.551" cy="130.233" rx="41.1047" ry="41.8095" fill="#F9E71E"/>
            </g>
            <defs class="">
                <filter id="filter0_d_504_73" x="61.9468" y="38.9233" width="181.209" height="182.619" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feMorphology radius="17" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_504_73"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="16.25"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.976471 0 0 0 0 0.905882 0 0 0 0 0.117647 0 0 0 1 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_504_73"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_504_73" result="shape"/>
                </filter>
            </defs>
        </svg>

        <div class="flex-center">
            <div class="code">
                {{--
                @yield('code')
                --}}
                503
            </div>

            <div class="message" style="padding: 0 10px;">
                {{--
                @yield('message')
                --}}
                Estamos em manutenção, voltaremos em breve.
            </div>
        </div>
    </div>
</div>
</body>
</html>