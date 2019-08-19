<?php

if (!friendly_textarea('image')) {
    function friendly_textarea($value, $tags = [])
    {
        foreach ($tags as $tag => $css) {
            $value = str_replace("<{$tag}>", "<{$tag} class=\"{$css}\">", $value);
        }

        return $value;
    }
}
