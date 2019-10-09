@can('view', '\Agenciafmd\Products\Product')
    <li class="nav-item">
        <a class="nav-link {{ (admix_is_active(route('admix.products.index'))) ? 'active' : '' }}"
           href="{{ route('admix.products.index') }}"
           aria-expanded="{{ (admix_is_active(route('admix.products.index'))) ? 'true' : 'false' }}">
        <span class="nav-icon">
            <i class="icon {{ config('local-products.icon') }}"></i>
        </span>
            <span class="nav-text">
            {{ config('local-products.name') }}
        </span>
        </a>
    </li>
@endcan
