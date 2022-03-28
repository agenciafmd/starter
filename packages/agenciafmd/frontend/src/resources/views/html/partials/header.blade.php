<header class="header fmd-header">
    <nav class="navbar navbar-expand-md bg-white">
        <div class="container">
            <a href="/html"
               class="navbar-brand"
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
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a href="/html" class="nav-link active">
                                Home
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="/html/quem-somos" class="nav-link">
                                Quem somos
                            </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle"
                               href="#"
                               id="navbarDropdown"
                               role="button"
                               data-bs-toggle="dropdown"
                               data-bs-auto-close="outside"
                               aria-expanded="false">
                                Produtos
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a href="/html/contato" class="nav-link">
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

@push('scripts')
<script type="text/javascript">
  const header = document.querySelector('.header');
  const navbar = header.querySelector('.navbar');
  const myOffcanvas = header.querySelector('.offcanvas');

  function handleHeaderOverflow() {
    const navbarExpandBreakpoint = [...navbar.classList].find(navbarClass => navbarClass.split('navbar-expand-')[1]).split('navbar-expand-')[1];

    // console.log(getThemeVariables().breakpoints[navbarExpandBreakpoint], navbarExpandBreakpoint);

    if (window.innerWidth < getThemeVariables().breakpoints[navbarExpandBreakpoint]) {
      header.style.overflow = 'hidden';

      myOffcanvas.addEventListener('show.bs.offcanvas', function () {
        header.style.overflow = 'visible';
      });

      myOffcanvas.addEventListener('hidden.bs.offcanvas', function () {
        header.style.overflow = 'hidden';
      });
    } else {
      header.style.overflow = 'visible';
    }
  }

  window.addEventListener('load', handleHeaderOverflow);
  window.addEventListener('resize', handleHeaderOverflow);
</script>
@endpush
