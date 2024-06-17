<header class="header fmd-header">
  <nav class="navbar navbar-expand-md">
    <div class="container">
      <a href="/html"
         class="navbar-brand"
         aria-label="{{ config('app.name') }}"
         title="{{ config('app.name') }}">
        <svg role="img">
          <use xlink:href="/svg/sprite.svg#fmd-logo"></use>
        </svg>
      </a>
      <div class="offcanvas offcanvas-end align-items-md-end"
           tabindex="-1"
           id="offcanvasNavbar"
           aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-body">
          <ul class="navbar-nav nav-underline">
            @php
              $headerLinks = [
                  [
                      'title' => 'Home',
                      'descriptionLink' => 'Link para Home',
                      'link' => '/html',
                  ],
                  [
                      'title' => 'Quem Somos',
                      'descriptionLink' => 'Link para Quem Somos',
                      'link' => '/quem-somos',
                  ],
                  [
                      'title' => 'Contato',
                      'descriptionLink' => 'Link para Contato',
                      'link' => '/Contato',
                  ],
              ];
            @endphp
            @foreach ($headerLinks as $item)
            <li class="nav-item">
                <a href="{{ $item['link'] }}"
                   aria-label="{{ $item['descriptionLink'] }}"
                   title="{{ $item['title'] }}"
                   class="nav-link"
                   data-bs-dismiss="offcanvas"
                   data-bs-target="#offcanvasNavbar">
                      {{ $item['title'] }}
                </a>
            </li>
            @endforeach
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle"
                 aria-label="Produtos"
                 title="Produtos"
                 href="#"
                 id="navbarDropdown"
                 role="button"
                 data-bs-toggle="dropdown"
                 data-bs-auto-close="outside"
                 aria-expanded="false">
                Produtos
              </a>
              <ul class="dropdown-menu">
                @php
                  $productsLinks = [
                  [
                      'title' => 'Starter',
                      'descriptionLink' => 'Link para produto Starter',
                      'link' => 'https://github.com/agenciafmd/starter',
                  ],
                  [
                      'title' => 'DCode',
                      'descriptionLink' => 'Link para produto DCode',
                      'link' => 'https://dcode.link/',
                  ],
                  ];
                  @endphp
                @foreach ($productsLinks as $item)
                  <li class="nav-item">
                      <a href="{{ $item['link'] }}"
                         aria-label="{{ $item['descriptionLink'] }}"
                         title="{{ $item['title'] }}"
                         class="dropdown-item"
                         data-bs-dismiss="offcanvas"
                         data-bs-target="#offcanvasNavbar">
                          {{ $item['title'] }}
                      </a>
                  </li>
               @endforeach
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <x-frontend::light-dark-toggle/>
      <button class="navbar-toggler"
              type="button"
              title="Menu"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Menu">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
</header>
