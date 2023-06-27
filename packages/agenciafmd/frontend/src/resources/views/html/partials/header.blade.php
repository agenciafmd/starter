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
            <li class="nav-item">
              <a href="/html"
                 aria-label="Home"
                 title="Home"
                 aria-current="page"
                 class="nav-link active">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a href="/html/quem-somos"
                 aria-label="Quem somos"
                 title="Quem somos"
                 class="nav-link">
                Quem somos
              </a>
            </li>
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
                <li>
                  <a class="dropdown-item"
                     aria-label="Action"
                     title="Action"
                     href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item"
                     aria-label="Another action"
                     title="Another action"
                     href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item"
                     aria-label="Something else here"
                     title="Something else here"
                     href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a href="/html/contato"
                 aria-label="Contato"
                 title="Contato"
                 data-bs-dismiss="offcanvas"
                 data-bs-target="#offcanvasNavbar"
                 class="nav-link js-scroll-top">
                Contato
              </a>
            </li>
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
