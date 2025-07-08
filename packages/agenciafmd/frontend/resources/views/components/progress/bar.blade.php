@props([
'progress' => [],
'progressHeight' => '4px',
'theme' => 'bg-primary',
'percentageEmbedded' => false,
])

@if(!$percentageEmbedded)
<div class="hstack gap-1 mb-0hq justify-content-between">
  <p class="mb-0 fs-small fs-xl-base">{{ $progress->name }}</p>
  <p class="fs-small fs-xl-base fw-bold">{{ $progress->percentage }}</p>
</div>
@endif
<div class="progress rounded"
     role="progressbar"
     aria-label="{{ $progress->name }}"
     aria-valuenow="{{ $progress->percentage }}"
     aria-valuemin="0"
     aria-valuemax="100"
     style="height: {{ $progressHeight }}">
  <div class="progress-bar {{ $theme }}"
       style="width: {{ $progress->percentage }}">{{ ($percentageEmbedded) ? $progress->percentage : '' }}</div>
</div>