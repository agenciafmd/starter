<header class="header fmd-header">
  <nav class="navbar navbar-expand-md">
    <div class="container">
      <x-frontend::link link="/html"
                        title="{{ config('app.name') }}"
                        aria-label="{{ config('app.name') }}"
                        icon="logo-fmd"
                        class="navbar-brand icon-link-hover-none"/>
      <div class="offcanvas offcanvas-end align-items-md-end"
           tabindex="-1"
           id="offcanvasNavbar"
           aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-body">
          <ul class="navbar-nav">
            <li class="nav-item">
              <x-frontend::link link="/html"
                                title="Ir para Home"
                                aria-label="Link para Home"
                                label="Home"
                                class="nav-link active"/>
            </li>
            <li class="nav-item">
              <x-frontend::link link="/html/quem-somos"
                                title="Ir para Quem somos"
                                aria-label="Link para Quem somos"
                                label="Quem somos"
                                class="nav-link"/>
            </li>
            <li class="nav-item dropdown">
              <x-frontend::link link="#"
                                title="Ir para Contato"
                                aria-label="Link para Contato"
                                label="Produtos"
                                role="button"
                                data-bs-toggle="dropdown"
                                data-bs-auto-close="outside"
                                aria-expanded="false"
                                class="nav-link dropdown-toggle"/>
              <ul class="dropdown-menu">
                <li>
                  <x-frontend::link link="/html/"
                                    title="Ir para Produto 1"
                                    aria-label="Link para Produto 1"
                                    label="Produto 1"
                                    class="dropdown-item"/>
                </li>
                <li>
                  <x-frontend::link link="/html/"
                                    title="Ir para Produto 2"
                                    aria-label="Link para Produto 2"
                                    label="Produto 2"
                                    class="dropdown-item"/>
                </li>
                <li>
                  <x-frontend::link link="/html/"
                                    title="Ir para Produto 3"
                                    aria-label="Link para Produto 3"
                                    label="Produto 3"
                                    class="dropdown-item"/>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <x-frontend::link link="/html/contato"
                                title="Ir para Contato"
                                aria-label="Link para Contato"
                                label="Contato"
                                class="nav-link"/>
            </li>
            {{-- Exemplo para o modal
            <li class="nav-item">
              <x-frontend::link link="#"
                                data-bs-dismiss="offcanvas"
                                data-bs-target="#offcanvasNavbar"
                                title="Ir para Modal"
                                aria-label="Link para Modal"
                                label="Modal"
                                class="nav-link js-scroll-top"/>
            </li>
            --}}
          </ul>
        </div>
      </div>
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
