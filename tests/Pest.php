<?php

/*
|--------------------------------------------------------------------------
| Test Case
|--------------------------------------------------------------------------
|
| The closure you provide to your test functions is always bound to a specific PHPUnit test
| case class. By default, that class is "PHPUnit\Framework\TestCase". Of course, you may
| need to change it using the "uses()" function to bind a different classes or traits.
|
*/

use Agenciafmd\Admix\Models\User;
use Tests\TestCase;

uses(
    Tests\TestCase::class,
    Illuminate\Foundation\Testing\RefreshDatabase::class,
)->in('Feature');

uses(
    Tests\TestCase::class,
    Illuminate\Foundation\Testing\RefreshDatabase::class,
)->in('../packages/agenciafmd/*/tests/Feature');

//uses(
//    Tests\TestCase::class,
//    Illuminate\Foundation\Testing\RefreshDatabase::class,
//)->in('../vendor/agenciafmd/*/tests/Feature');

/*
|--------------------------------------------------------------------------
| Expectations
|--------------------------------------------------------------------------
|
| When you're writing tests, you often need to check that values meet certain conditions. The
| "expect()" function gives you access to a set of "expectations" methods that you can use
| to assert different things. Of course, you may extend the Expectation API at any time.
|
*/

//expect()->extend('toBeOne', function () {
//    return $this->toBe(1);
//});

/*
|--------------------------------------------------------------------------
| Functions
|--------------------------------------------------------------------------
|
| While Pest is very powerful out-of-the-box, you may have some testing code specific to your
| project that you don't want to repeat in every file. Here you can also expose helpers as
| global functions to help you to reduce the number of lines of code in your test files.
|
*/

// Prepare your test first (creating models from factories, other setup)
// Act – do the test, execute the code that is being tested
// Assert that the 'Act' step has had the intended consequences

/* https://medium.com/@wanmigs/laravel-common-php-unit-testing-crud-made-easy-8bd8d20f5c92 */
function create($class, $attributes = [], $times = null)
{
    return $class::factory()
        ->count($times)
        ->create($attributes);
}

function make($class, $attributes = [], $times = null)
{
    return $class::factory()
        ->count($times)
        ->make($attributes);
}

function raw($class, $attributes = [], $times = null)
{
    return $class::factory()
        ->count($times)
        ->raw($attributes);
}

function table($model)
{
    return (new $model)->getTable();
}

function asAdmix(): TestCase
{
    $user = User::factory()
        ->create();

    return test()->actingAs($user, 'admix-web');
}
