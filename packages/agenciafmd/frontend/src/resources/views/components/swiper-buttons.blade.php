@props([
'class' => '',
'paginationClass' => '',
'pagination' => false,
'classButtonNext' => '',
'classButtonPrev' => '',
])

<div class="swiper-button-prev {{ $classButtonPrev }} {{ $class }}"></div>
<div class="swiper-button-next {{ $classButtonNext }} {{ $class }}"></div>

@if($pagination)
<div class="{{ $paginationClass }} swiper-pagination"></div>
@endif
