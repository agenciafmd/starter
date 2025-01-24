<?php

namespace Agenciafmd\Frontend\View\Components;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;
use Illuminate\View\Component;

class CriticalCss extends Component
{
    public string $content;

    public function __construct(
        public ?string $critical = null,
    ) {
        $this->content = Cache::rememberForever('critical-css-' . $critical, static function () {
            $criticalCss = Str::of($filename)->beforeLast('.css')->append('_critical.min.css');

            return @file_get_contents(public_path('/css/critical/' . $criticalCss));
        });
    }

    public function render(): string
    {
        if (!$this->content) {
            return '';
        }

        return <<<'blade'
        <style>
            {!! $content !!}
        </style>
        blade;
    }
}
