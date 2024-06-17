@php
$faqs = [
[
"title" => "Titulo 1",
"description" => "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
],
[
"title" => "Titulo 2",
"description" => "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
],
[
"title" => "Titulo 2",
"description" => "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
],
];
@endphp

<x-frontend::accordions.accordion id="accordionFaq"
                                  :accordions="$faqs"></x-frontend::accordions.accordion>
