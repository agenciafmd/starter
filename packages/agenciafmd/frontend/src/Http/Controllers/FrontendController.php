<?php

namespace Agenciafmd\Frontend\Http\Controllers;

use Agenciafmd\SocialMeta\Services\OpenGraphImage;
use App\Http\Controllers\Controller;

class FrontendController extends Controller
{
    public function index()
    {
//        return (new OpenGraphImage)->generate();


//        $width = 510;
//        $height = 270;
//        $centerX = intval($width / 2);
//        $centerY = intval($height - ($height / 4));
//        $maxLen = 42;
//        $fontSize = 24;
//        $fontHeight = 15;
//
//        $centerImageY = intval($height / 5);
//
//        $text = "The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog?";
//
//        $lines = explode("\n", wordwrap($text, $maxLen));
//        $y = $centerY - ((count($lines) - 1) * $fontHeight);
//        $img = Image::canvas($width, $height, '#f7f7f7');
//
//        $img->fill(storage_path('og-image-generator/patterns/01.png'));
//
//        foreach ($lines as $line) {
//            $img->text($line, $centerX, $y, function ($font) use ($fontSize) {
//                $font->file(storage_path('og-image-generator/fonts/helvetica-bold.ttf'));
//                $font->size($fontSize);
//                $font->color('#191919');
//                $font->align('center');
//                $font->valign('center');
//            });
//
//            $y += $fontHeight * 2;
//        }
//
//        $img->insert(public_path('images/logo.png'), 'top', 0, $centerImageY);
//
//        return $img->response('png');
//
//
//        $width = 800;
//        $height = 600;
//        $text = 'The quick brown fox jumps over the lazy dog.';
//
//        // create a new image resource
//        $img = Image::canvas($width, $height, '#ffffff');
//        #$img->text('The quick brown fox jumps over the lazy dog.');
//        $img->text($text, $width / 2, $height / 2, function ($font) {
//            $font->file(storage_path('og-image-generator/helvetica.ttf'));
//            $font->size(24);
//            $font->color('#000000');
//            $font->align('center');
//            $font->valign('middle');
//        });
//        // send HTTP header and output image data
//        return $img->response('png');


//        $img = Image::canvas(800, 600);

        // create a new empty image resource with red background
//        $img = Image::canvas(32, 32, '#ff0000');


        $view = [];

        return view('agenciafmd/frontend::pages.index', $view);
    }
}
