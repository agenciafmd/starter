@extends('agenciafmd/frontend::html.master')

@section('title', 'Tema')
@section('description', 'Página para visualização de todos os componentes')

@push('head')
<style>
    iframe {
        overflow: hidden;
        border: none
    }

    @media (min-width: 768px) {
        body > .navbar-transparent {
            box-shadow: none
        }

        body > .navbar-transparent .navbar-nav > .open > a {
            box-shadow: none
        }
    }

    .navbar .fa, .navbar .fab {
        margin-right: .25rem;
        font-size: 1rem
    }

    #home .navbar, #help .navbar {
        background: #375ee3;
        background: linear-gradient(145deg, #375ee3 0%, #6543e0 80%);
        transition: box-shadow 200ms ease-in
    }

    #home .navbar-brand .nav-link, #help .navbar-brand .nav-link {
        display: inline-block;
        margin-right: -30px
    }

    #home {
        padding-top: 0
    }

    #home .btn {
        padding: .5rem .9rem
    }

    .bs-docs-section:not(:first-child) {
        margin-top: 4em
    }

    .bs-docs-section .page-header h1 {
        padding: 2rem 0;
        font-size: 3rem
    }

    .dropdown-menu.show[aria-labelledby="themes"] {
        display: -ms-flexbox;
        display: flex;
        width: 420px;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap
    }

    .dropdown-menu.show[aria-labelledby="themes"] .dropdown-item {
        width: 33.333%
    }

    .dropdown-menu.show[aria-labelledby="themes"] .dropdown-item:first-child {
        width: 100%
    }

    .bs-component {
        position: relative
    }

    .bs-component + .bs-component {
        margin-top: 1rem
    }

    .bs-component .card {
        margin-bottom: 1rem
    }

    .bs-component .modal {
        position: relative;
        top: auto;
        right: auto;
        left: auto;
        bottom: auto;
        z-index: 1;
        display: block
    }

    .bs-component .modal-dialog {
        width: 90%
    }

    .bs-component .popover {
        position: relative;
        display: inline-block;
        width: 220px;
        margin: 20px
    }

    .source-button {
        display: none;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 100;
        font-weight: 700
    }

    .source-button:hover {
        cursor: pointer
    }

    .bs-component:hover .source-button {
        display: block
    }

    #source-modal pre {
        max-height: calc(100vh - 11rem)
    }

    .nav-tabs {
        margin-bottom: 15px
    }

    .progress {
        margin-bottom: 10px
    }

    #footer {
        margin: 5em 0
    }

    #footer li {
        float: left;
        margin-right: 1.5em;
        margin-bottom: 1.5em
    }

    #footer p {
        clear: left;
        margin-bottom: 0
    }

    .splash {
        position: relative;
        padding: 12em 0 6em;
        background-color: #375ee3;
        background-image: url("../img/splash.svg"), linear-gradient(145deg, #375ee3 0%, #6543e0 80%);
        background-size: cover;
        background-repeat: no-repeat;
        color: #fff;
        text-align: center
    }

    .splash .logo {
        width: 160px
    }

    .splash h1 {
        font-size: 3em;
        color: #fff
    }

    .splash #social {
        margin: 2em 0 3em
    }

    .splash .alert {
        margin: 2em 0;
        border: none
    }

    .splash .sponsor a {
        color: #fff
    }

    .section-tout {
        padding: 6em 0 1em;
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        background-color: #eaf1f1;
        text-align: center
    }

    .section-tout .icon {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
        width: 80px;
        height: 80px;
        margin: 0 auto 1rem;
        background: #375ee3;
        background: linear-gradient(145deg, #375ee3 0%, #6543e0 80%);
        border-radius: 50%;
        font-size: 2rem;
        color: rgba(255, 255, 255, 0.9)
    }

    .section-tout p {
        margin-bottom: 5em
    }

    .section-preview {
        padding: 4em 0
    }

    .section-preview .preview {
        margin-bottom: 4em;
        background-color: #eaf1f1
    }

    .section-preview .preview .image {
        position: relative
    }

    .section-preview .preview .image img {
        width: 100%;
        height: auto
    }

    .section-preview .preview .options {
        padding: 2em;
        border-top: 1px solid rgba(0, 0, 0, 0.125);
        text-align: center
    }

    .section-preview .preview .options p {
        margin-bottom: 2em
    }

    .section-preview .dropdown-menu {
        text-align: left
    }

    .section-preview .lead {
        margin-bottom: 2em
    }

    .sponsor a {
        text-decoration: none
    }

    .sponsor #carbonads {
        max-width: 240px;
        margin: 0 auto
    }

    .sponsor .carbon-text {
        display: block;
        margin-top: 1em;
        font-size: 12px
    }

    .sponsor .carbon-poweredby {
        float: right;
        margin-top: 1em;
        font-size: 10px
    }

    @media (max-width: 767px) {
        .splash {
            padding-top: 8em
        }

        .splash .logo {
            width: 100px
        }

        .splash h1 {
            font-size: 2em
        }

        #banner {
            margin-bottom: 2em;
            text-align: center
        }
    }

    @media (max-width: 991px) {
        .navbar .fa {
            display: none
        }
    }

    @media (min-width: 992px) {
        .navbar-transparent {
            background: none !important;
            box-shadow: none
        }
    }

    code[class*="language-"],
    pre[class*="language-"] {
        user-select: all;
        color: #f8f8f2;
        background: none;
        text-shadow: 0 1px rgba(0, 0, 0, 0.3);
        font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
        font-size: 1em;
        text-align: left;
        white-space: pre;
        word-spacing: normal;
        word-break: normal;
        word-wrap: normal;
        line-height: 1.5;

        -moz-tab-size: 4;
        -o-tab-size: 4;
        tab-size: 4;

        -webkit-hyphens: none;
        -moz-hyphens: none;
        -ms-hyphens: none;
        hyphens: none;
    }

    /* Code blocks */
    pre[class*="language-"] {
        padding: 1em;
        margin: .5em 0;
        overflow: auto;
        border-radius: 0.3em;
    }

    :not(pre) > code[class*="language-"],
    pre[class*="language-"] {
        background: #272822;
    }

    /* Inline code */
    :not(pre) > code[class*="language-"] {
        padding: .1em;
        border-radius: .3em;
        white-space: normal;
    }

    .token.comment,
    .token.prolog,
    .token.doctype,
    .token.cdata {
        color: #8292a2;
    }

    .token.punctuation {
        color: #f8f8f2;
    }

    .token.namespace {
        opacity: .7;
    }

    .token.property,
    .token.tag,
    .token.constant,
    .token.symbol,
    .token.deleted {
        color: #f92672;
    }

    .token.boolean,
    .token.number {
        color: #ae81ff;
    }

    .token.selector,
    .token.attr-name,
    .token.string,
    .token.char,
    .token.builtin,
    .token.inserted {
        color: #a6e22e;
    }

    .token.operator,
    .token.entity,
    .token.url,
    .language-css .token.string,
    .style .token.string,
    .token.variable {
        color: #f8f8f2;
    }

    .token.atrule,
    .token.attr-value,
    .token.function,
    .token.class-name {
        color: #e6db74;
    }

    .token.keyword {
        color: #66d9ef;
    }

    .token.regex,
    .token.important {
        color: #fd971f;
    }

    .token.important,
    .token.bold {
        font-weight: bold;
    }

    .token.italic {
        font-style: italic;
    }

    .token.entity {
        cursor: help;
    }
</style>
@endpush

@section('content')

<main id="banner" class="bg-white">

    <div class="container">
        <!-- Navbar
        ================================================== -->
        <div class="bs-docs-section clearfix">
            <div class="row">
                <div class="col-lg-12">
                    <div class="page-header">
                        <h1 id="navbars">Navbars</h1>
                    </div>

                    <div class="bs-component">
                        <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
                            <div class="container-fluid">
                                <a class="navbar-brand" href="#" aria-label="Navbar" title="Navbar">Navbar</a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>

                                <div class="collapse navbar-collapse" id="navbarColor01">
                                    <ul class="navbar-nav me-auto">
                                        <li class="nav-item">
                                            <a class="nav-link active" href="#" aria-label="Home" title="Home">Home
                                                <span class="visually-hidden">(current)</span>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#" aria-label="Features" title="Features">Features</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#" aria-label="Pricing" title="Pricing">Pricing</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#" aria-label="About" title="About">About</a>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" aria-label="Dropdown" title="Dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item" href="#" aria-label="Action" title="Action">Action</a>
                                                <a class="dropdown-item" href="#" aria-label="Another action" title="Another action">Another action</a>
                                                <a class="dropdown-item" href="#" aria-label="Something else here" title="Something else here">Something else here</a>
                                                <div class="dropdown-divider"></div>
                                                <a class="dropdown-item" href="#" aria-label="Separated link" title="Separated link">Separated link</a>
                                            </div>
                                        </li>
                                    </ul>
                                    <form class="d-flex">
                                        <input class="form-control me-sm-2" type="search" placeholder="Search">
                                        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                                    </form>
                                </div>
                            </div>
                        </nav>
                        <button class="source-button btn btn-primary btn-xs" type="button" tabindex="0"><i class="bi bi-code"></i></button></div>

                    <div class="bs-component">
                        <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                            <div class="container-fluid">
                                <a class="navbar-brand" href="#" aria-label="Navbar" title="Navbar">Navbar</a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>

                                <div class="collapse navbar-collapse" id="navbarColor02">
                                    <ul class="navbar-nav me-auto">
                                        <li class="nav-item">
                                            <a class="nav-link active" href="#" aria-label="Home" title="Home">Home
                                                <span class="visually-hidden">(current)</span>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#" aria-label="Features" title="Features">Features</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#" aria-label="Pricing" title="Pricing">Pricing</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#" aria-label="About" title="About">About</a>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" aria-label="Dropdown" title="Dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item" href="#" aria-label="Action" title="Action">Action</a>
                                                <a class="dropdown-item" href="#" aria-label="Another action" title="Another action">Another action</a>
                                                <a class="dropdown-item" href="#" aria-label="Something else here" title="Something else here">Something else here</a>
                                                <div class="dropdown-divider"></div>
                                                <a class="dropdown-item" href="#" aria-label="Separated link" title="Separated link">Separated link</a>
                                            </div>
                                        </li>
                                    </ul>
                                    <form class="d-flex">
                                        <input class="form-control me-sm-2" type="search" placeholder="Search">
                                        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                                    </form>
                                </div>
                            </div>
                        </nav>
                        <button class="source-button btn btn-primary btn-xs" type="button" tabindex="0"><i class="bi bi-code"></i></button></div>

                    <div class="bs-component">
                        <nav class="navbar navbar-expand-lg bg-light" data-bs-theme="light">
                            <div class="container-fluid">
                                <a class="navbar-brand" href="#" aria-label="Navbar" title="Navbar">Navbar</a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>

                                <div class="collapse navbar-collapse" id="navbarColor03">
                                    <ul class="navbar-nav me-auto">
                                        <li class="nav-item">
                                            <a class="nav-link active" href="#" aria-label="Home" title="Home">Home
                                                <span class="visually-hidden">(current)</span>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#" aria-label="Features" title="Features">Features</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#" aria-label="Pricing" title="Pricing">Pricing</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#" aria-label="About" title="About">About</a>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" aria-label="Dropdown" title="Dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item" href="#" aria-label="Action" title="Action">Action</a>
                                                <a class="dropdown-item" href="#" aria-label="Another action" title="Another action">Another action</a>
                                                <a class="dropdown-item" href="#" aria-label="Something else here" title="Something else here">Something else here</a>
                                                <div class="dropdown-divider"></div>
                                                <a class="dropdown-item" href="#" aria-label="Separated link" title="Separated link">Separated link</a>
                                            </div>
                                        </li>
                                    </ul>
                                    <form class="d-flex">
                                        <input class="form-control me-sm-2" type="search" placeholder="Search">
                                        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                                    </form>
                                </div>
                            </div>
                        </nav>
                        <button class="source-button btn btn-primary btn-xs" type="button" tabindex="0"><i class="bi bi-code"></i></button></div>

                </div>
            </div>
        </div>

        <!-- Buttons
        ================================================== -->
        <div class="bs-docs-section">
            <div class="page-header">
                <div class="row">
                    <div class="col-lg-12">
                        <h1 id="buttons">Buttons</h1>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-7">
                    <p class="bs-component">
                        <button type="button" class="btn btn-primary">Primary</button>
                        <button type="button" class="btn btn-secondary">Secondary</button>
                        <button type="button" class="btn btn-success">Success</button>
                        <button type="button" class="btn btn-info">Info</button>
                        <button type="button" class="btn btn-warning">Warning</button>
                        <button type="button" class="btn btn-danger">Danger</button>
                        <button type="button" class="btn btn-light">Light</button>
                        <button type="button" class="btn btn-dark">Dark</button>
                        <button type="button" class="btn btn-link">Link</button>
                        <button class="source-button btn btn-primary btn-xs" type="button" tabindex="0"><i class="bi bi-code"></i></button></p>

                    <p class="bs-component">
                        <button type="button" class="btn btn-primary disabled">Primary</button>
                        <button type="button" class="btn btn-secondary disabled">Secondary</button>
                        <button type="button" class="btn btn-success disabled">Success</button>
                        <button type="button" class="btn btn-info disabled">Info</button>
                        <button type="button" class="btn btn-warning disabled">Warning</button>
                        <button type="button" class="btn btn-danger disabled">Danger</button>
                        <button type="button" class="btn btn-light disabled">Light</button>
                        <button type="button" class="btn btn-dark disabled">Dark</button>
                        <button type="button" class="btn btn-link disabled">Link</button>
                        <button class="source-button btn btn-primary btn-xs" type="button" tabindex="0"><i class="bi bi-code"></i></button></p>

                    <p class="bs-component">
                        <button type="button" class="btn btn-outline-primary">Primary</button>
                        <button type="button" class="btn btn-outline-secondary">Secondary</button>
                        <button type="button" class="btn btn-outline-success">Success</button>
                        <button type="button" class="btn btn-outline-info">Info</button>
                        <button type="button" class="btn btn-outline-warning">Warning</button>
                        <button type="button" class="btn btn-outline-danger">Danger</button>
                        <button type="button" class="btn btn-outline-light">Light</button>
                        <button type="button" class="btn btn-outline-dark">Dark</button>
                        <button class="source-button btn btn-primary btn-xs" type="button" tabindex="0"><i class="bi bi-code"></i></button></p>

                    <div class="bs-component">
                        <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
                            <button type="button" class="btn btn-primary">Primary</button>
                            <div class="btn-group" role="group">
                                <button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                                <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                    <a class="dropdown-item" href="#">Dropdown link</a>
                                    <a class="dropdown-item" href="#">Dropdown link</a>
                                </div>
                            </div>
                        </div>

                        <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
                            <button type="button" class="btn btn-success">Success</button>
                            <div class="btn-group" role="group">
                                <button id="btnGroupDrop2" type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                                <div class="dropdown-menu" aria-labelledby="btnGroupDrop2">
                                    <a class="dropdown-item" href="#">Dropdown link</a>
                                    <a class="dropdown-item" href="#">Dropdown link</a>
                                </div>
                            </div>
                        </div>

                        <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
                            <button type="button" class="btn btn-info">Info</button>
                            <div class="btn-group" role="group">
                                <button id="btnGroupDrop3" type="button" class="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                                <div class="dropdown-menu" aria-labelledby="btnGroupDrop3">
                                    <a class="dropdown-item" href="#">Dropdown link</a>
                                    <a class="dropdown-item" href="#">Dropdown link</a>
                                </div>
                            </div>
                        </div>

                        <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
                            <button type="button" class="btn btn-danger">Danger</button>
                            <div class="btn-group" role="group">
                                <button id="btnGroupDrop4" type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                                <div class="dropdown-menu" aria-labelledby="btnGroupDrop4">
                                    <a class="dropdown-item" href="#">Dropdown link</a>
                                    <a class="dropdown-item" href="#">Dropdown link</a>
                                </div>
                            </div>
                        </div>
                        <button class="source-button btn btn-primary btn-xs" type="button" tabindex="0"><i class="bi bi-code"></i></button></div>

                    <div class="bs-component">
                        <button type="button" class="btn btn-primary btn-lg">Large button</button>
                        <button type="button" class="btn btn-primary">Default button</button>
                        <button type="button" class="btn btn-primary btn-sm">Small button</button>
                        <button class="source-button btn btn-primary btn-xs" type="button" tabindex="0"><i class="bi bi-code"></i></button></div>
                </div>
                <div class="col-lg-5">
                    <div class="bs-component">
                        <div class="d-grid gap-2">
                            <button class="btn btn-lg btn-primary" type="button">Block button</button>
                            <button class="btn btn-lg btn-primary" type="button">Block button</button>
                        </div>
                        <button class="source-button btn btn-primary btn-xs" type="button" tabindex="0"><i class="bi bi-code"></i></button></div>

                    <div class="bs-component mb-3">
                        <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                            <input type="checkbox" class="btn-check" id="btncheck1" checked="" autocomplete="off">
                            <label class="btn btn-primary" for="btncheck1">Checkbox 1</label>
                            <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off">
                            <label class="btn btn-primary" for="btncheck2">Checkbox 2</label>
                            <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off">
                            <label class="btn btn-primary" for="btncheck3">Checkbox 3</label>
                        </div>
                        <button class="source-button btn btn-primary btn-xs" type="button" tabindex="0"><i class="bi bi-code"></i></button></div>

                    <div class="bs-component mb-3">
                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked="">
                            <label class="btn btn-outline-primary" for="btnradio1">Radio 1</label>
                            <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" checked="">
                            <label class="btn btn-outline-primary" for="btnradio2">Radio 2</label>
                            <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" checked="">
                            <label class="btn btn-outline-primary" for="btnradio3">Radio 3</label>
                        </div>
                        <button class="source-button btn btn-primary btn-xs" type="button" tabindex="0"><i class="bi bi-code"></i></button></div>

                    <div class="bs-component">
                        <div class="btn-group-vertical">
                            <button type="button" class="btn btn-primary">Button</button>
                            <button type="button" class="btn btn-primary">Button</button>
                            <button type="button" class="btn btn-primary">Button</button>
                            <button type="button" class="btn btn-primary">Button</button>
                            <button type="button" class="btn btn-primary">Button</button>
                            <button type="button" class="btn btn-primary">Button</button>
                        </div>
                        <button class="source-button btn btn-primary btn-xs" type="button" tabindex="0"><i class="bi bi-code"></i></button></div>

                    <div class="bs-component mb-3">
                        <div class="btn-group" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-secondary">Left</button>
                            <button type="button" class="btn btn-secondary">Middle</button>
                            <button type="button" class="btn btn-secondary">Right</button>
                        </div>
                        <button class="source-button btn btn-primary btn-xs" type="button" tabindex="0"><i class="bi bi-code"></i></button></div>

                    <div class="bs-component mb-3">
                        <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                            <div class="btn-group me-2" role="group" aria-label="First group">
                                <button type="button" class="btn btn-secondary">1</button>
                                <button type="button" class="btn btn-secondary">2</button>
                                <button type="button" class="btn btn-secondary">3</button>
                                <button type="button" class="btn btn-secondary">4</button>
                            </div>
                            <div class="btn-group me-2" role="group" aria-label="Second group">
                                <button type="button" class="btn btn-secondary">5</button>
                                <button type="button" class="btn btn-secondary">6</button>
                                <button type="button" class="btn btn-secondary">7</button>
                            </div>
                            <div class="btn-group" role="group" aria-label="Third group">
                                <button type="button" class="btn btn-secondary">8</button>
                            </div>
                        </div>
                        <button class="source-button btn btn-primary btn-xs" type="button" tabindex="0"><i class="bi bi-code"></i></button></div>
                </div>
            </div>
        </div>

        <!-- Typography
        ================================================== -->
        <div class="bs-docs-section">
            <div class="row">
                <div class="col-lg-12">
                    <div class="page-header">
                        <h1 id="typography">Typography</h1>
                    </div>
                </div>
            </div>

            <!-- Headings -->

            <div class="row">
                <div class="col-lg-4">
                    <div class="bs-component">
                        <h1>Heading 1</h1>
                        <h2>Heading 2</h2>
                        <h3>Heading 3</h3>
                        <h4>Heading 4</h4>
                        <h5>Heading 5</h5>
                        <h6>Heading 6</h6>
                        <h3>
                            Heading
                            <small class="text-body-secondary">with faded secondary text</small>
                        </h3>
                        <p class="lead">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                        <button class="source-button btn btn-primary btn-xs" type="button" tabindex="0"><i class="bi bi-code"></i></button></div>
                </div>
                <div class="col-lg-4">
                    <div class="bs-component">
                        <h2>Example body text</h2>
                        <p>Nullam quis risus eget <a aria-label="urna mollis ornare" title="urna mollis ornare" href="#">urna mollis ornare</a> vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>
                        <p><small>This line of text is meant to be treated as fine print.</small></p>
                        <p>The following is <strong>rendered as bold text</strong>.</p>
                        <p>The following is <em>rendered as italicized text</em>.</p>
                        <p>An abbreviation of the word attribute is <abbr title="attribute">attr</abbr>.</p>
                        <button class="source-button btn btn-primary btn-xs" type="button" tabindex="0"><i class="bi bi-code"></i></button></div>
                </div>
                <div class="col-lg-4">
                    <div class="bs-component">
                        <h2>Emphasis classes</h2>
                        <p class="text-primary">.text-primary</p>
                        <p class="text-primary-emphasis">.text-primary-emphasis</p>
                        <p class="text-secondary">.text-secondary</p>
                        <p class="text-secondary-emphasis">.text-secondary-emphasis</p>
                        <p class="text-success">.text-success</p>
                        <p class="text-success-emphasis">.text-success-emphasis</p>
                        <p class="text-danger">.text-danger</p>
                        <p class="text-danger-emphasis">.text-danger-emphasis</p>
                        <p class="text-warning">.text-warning</p>
                        <p class="text-warning-emphasis">.text-warning-emphasis</p>
                        <p class="text-info">.text-info</p>
                        <p class="text-info">.text-info-emphasis</p>
                        <p class="text-light">.text-light</p>
                        <p class="text-light">.text-light-emphasis</p>
                        <p class="text-dark">.text-dark</p>
                        <p class="text-dark">.text-dark-emphasis</p>
                        <p class="text-body">.text-body</p>
                        <p class="text-body">.text-body-emphasis</p>
                        <p class="text-body-secondary">.text-body-secondary</p>
                        <p class="text-body-tertiary">.text-body-tertiary</p>
                        <button class="source-button btn btn-primary btn-xs" type="button" tabindex="0"><i class="bi bi-code"></i></button></div>
                </div>
            </div>

            <!-- Blockquotes -->

            <div class="row">
                <div class="col-lg-12">
                    <h2 id="type-blockquotes">Blockquotes</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4">
                    <div class="bs-component">
                        <figure>
                            <blockquote class="blockquote">
                                <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>

                            </blockquote>
                            <figcaption class="blockquote-footer">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </figcaption>
                        </figure>
                        <button class="source-button btn btn-primary btn-xs" type="button" tabindex="0"><i class="bi bi-code"></i></button></div>
                </div>
                <div class="col-lg-4">
                    <div class="bs-component">
                        <figure class="text-center">
                            <blockquote class="blockquote">
                                <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>

                            </blockquote>
                            <figcaption class="blockquote-footer">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </figcaption>
                        </figure>
                        <button class="source-button btn btn-primary btn-xs" type="button" tabindex="0"><i class="bi bi-code"></i></button></div>
                </div>
                <div class="col-lg-4">
                    <div class="bs-component">
                        <figure class="text-end">
                            <blockquote class="blockquote">
                                <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>

                            </blockquote>
                            <figcaption class="blockquote-footer">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </figcaption>
                        </figure>
                        <button class="source-button btn btn-primary btn-xs" type="button" tabindex="0"><i class="bi bi-code"></i></button></div>
                </div>
            </div>
        </div>

        <!-- Tables
        ================================================== -->
        <div class="bs-docs-section">
            <div class="row">
                <div class="col-lg-12">
                    <div class="page-header">
                        <h1 id="tables">Tables</h1>
                    </div>

                    <div class="bs-component">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Type</th>
                                    <th scope="col">Column heading</th>
                                    <th scope="col">Column heading</th>
                                    <th scope="col">Column heading</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="table-active">
                                    <th scope="row">Active</th>
                                    <td>Column content</td>
                                    <td>Column content</td>
                                    <td>Column content</td>
                                </tr>
                                <tr>
                                    <th scope="row">Default</th>
                                    <td>Column content</td>
                                    <td>Column content</td>
                                    <td>Column content</td>
                                </tr>
                                <tr class="table-primary">
                                    <th scope="row">Primary</th>
                                    <td>Column content</td>
                                    <td>Column content</td>
                                    <td>Column content</td>
                                </tr>
                                <tr class="table-secondary">
                                    <th scope="row">Secondary</th>
                                    <td>Column content</td>
                                    <td>Column content</td>
                                    <td>Column content</td>
                                </tr>
                                <tr class="table-success">
                                    <th scope="row">Success</th>
                                    <td>Column content</td>
                                    <td>Column content</td>
                                    <td>Column content</td>
                                </tr>
                                <tr class="table-danger">
                                    <th scope="row">Danger</th>
                                    <td>Column content</td>
                                    <td>Column content</td>
                                    <td>Column content</td>
                                </tr>
                                <tr class="table-warning">
                                    <th scope="row">Warning</th>
                                    <td>Column content</td>
                                    <td>Column content</td>
                                    <td>Column content</td>
                                </tr>
                                <tr class="table-info">
                                    <th scope="row">Info</th>
                                    <td>Column content</td>
                                    <td>Column content</td>
                                    <td>Column content</td>
                                </tr>
                                <tr class="table-light">
                                    <th scope="row">Light</th>
                                    <td>Column content</td>
                                    <td>Column content</td>
                                    <td>Column content</td>
                                </tr>
                                <tr class="table-dark">
                                    <th scope="row">Dark</th>
                                    <td>Column content</td>
                                    <td>Column content</td>
                                    <td>Column content</td>
                                </tr>
                            </tbody>
                        </table>
                        <button class="source-button btn btn-primary btn-xs" type="button" tabindex="0"><i class="bi bi-code"></i></button></div><!-- /example -->
                </div>
            </div>
        </div>

        <!-- Forms
        ================================================== -->
        <div class="bs-docs-section">
            <div class="row">
                <div class="col-lg-12">
                    <div class="page-header">
                        <h1 id="forms">Forms</h1>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-6">
                    <div class="bs-component">
                        <form>
                            <fieldset>
                                <legend>Legend</legend>
                                <div class="form-group row">
                                    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                                    <div class="col-sm-10">
                                        <input type="text" readonly="" class="form-control-plaintext" id="staticEmail" value="email@example.com">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1" class="form-label mt-4">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1" class="form-label mt-4">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                                </div>
                                <div class="form-group">
                                    <label for="exampleSelect1" class="form-label mt-4">Example select</label>
                                    <select class="form-select" id="exampleSelect1">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="exampleSelect1" class="form-label mt-4">Example disabled select</label>
                                    <select class="form-select" id="exampleDisabledSelect1" disabled="">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="exampleSelect2" class="form-label mt-4">Example multiple select</label>
                                    <select multiple="" class="form-select" id="exampleSelect2">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="exampleTextarea" class="form-label mt-4">Example textarea</label>
                                    <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
                                </div>
                                <div class="form-group">
                                    <label for="formFile" class="form-label mt-4">Default file input example</label>
                                    <input class="form-control" type="file" id="formFile">
                                </div>
                                <fieldset class="form-group">
                                    <legend class="mt-4">Radio buttons</legend>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked="">
                                        <label class="form-check-label" for="optionsRadios1">
                                            Option one is this and that—be sure to include why it's great
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
                                        <label class="form-check-label" for="optionsRadios2">
                                            Option two can be something else and selecting it will deselect option one
                                        </label>
                                    </div>
                                    <div class="form-check disabled">
                                        <input class="form-check-input" type="radio" name="optionsRadios" id="optionsRadios3" value="option3" disabled="">
                                        <label class="form-check-label" for="optionsRadios3">
                                            Option three is disabled
                                        </label>
                                    </div>
                                </fieldset>
                                <fieldset class="form-group">
                                    <legend class="mt-4">Checkboxes</legend>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Default checkbox
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked="">
                                        <label class="form-check-label" for="flexCheckChecked">
                                            Checked checkbox
                                        </label>
                                    </div>
                                </fieldset>
                                <fieldset class="form-group">
                                    <legend class="mt-4">Switches</legend>
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                                        <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
                                    </div>
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="">
                                        <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
                                    </div>
                                </fieldset>
                                <fieldset class="form-group">
                                    <legend class="mt-4">Ranges</legend>
                                    <label for="customRange1" class="form-label">Example range</label>
                                    <input type="range" class="form-range" id="customRange1">
                                    <label for="disabledRange" class="form-label">Disabled range</label>
                                    <input type="range" class="form-range" id="disabledRange" disabled="">
                                    <label for="customRange3" class="form-label">Example range</label>
                                    <input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3">
                                </fieldset>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </fieldset>
                        </form>
                        <button class="source-button btn btn-primary btn-xs" type="button" tabindex="0"><i class="bi bi-code"></i></button></div>
                </div>
                <div class="col-lg-4 offset-lg-1">
                    <form class="bs-component">
                        <div class="form-group">
                            <fieldset disabled="">
                                <label class="form-label" for="disabledInput">Disabled input</label>
                                <input class="form-control" id="disabledInput" type="text" placeholder="Disabled input here..." disabled="">
                            </fieldset>
                        </div>

                        <div class="form-group">
                            <fieldset>
                                <label class="form-label mt-4" for="readOnlyInput">Readonly input</label>
                                <input class="form-control" id="readOnlyInput" type="text" placeholder="Readonly input here..." readonly="">
                            </fieldset>
                        </div>

                        <div class="form-group has-success">
                            <label class="form-label mt-4" for="inputValid">Valid input</label>
                            <input type="text" value="correct value" class="form-control is-valid" id="inputValid">
                            <div class="valid-feedback">Success! You've done it.</div>
                        </div>

                        <div class="form-group has-danger">
                            <label class="form-label mt-4" for="inputInvalid">Invalid input</label>
                            <input type="text" value="wrong value" class="form-control is-invalid" id="inputInvalid">
                            <div class="invalid-feedback">Sorry, that username's taken. Try another?</div>
                        </div>

                        <div class="form-group">
                            <label class="col-form-label col-form-label-lg mt-4" for="inputLarge">Large input</label>
                            <input class="form-control form-control-lg" type="text" placeholder=".form-control-lg" id="inputLarge">
                        </div>

                        <div class="form-group">
                            <label class="col-form-label mt-4" for="inputDefault">Default input</label>
                            <input type="text" class="form-control" placeholder="Default input" id="inputDefault">
                        </div>

                        <div class="form-group">
                            <label class="col-form-label col-form-label-sm mt-4" for="inputSmall">Small input</label>
                            <input class="form-control form-control-sm" type="text" placeholder=".form-control-sm" id="inputSmall">
                        </div>

                        <div class="form-group">
                            <label class="form-label mt-4">Input addons</label>
                            <div class="form-group">
                                <div class="input-group mb-3">
                                    <span class="input-group-text">$</span>
                                    <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                                    <span class="input-group-text">.00</span>
                                </div>
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
                                    <button class="btn btn-primary" type="button" id="button-addon2">Button</button>
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="form-label mt-4">Floating labels</label>
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div class="form-floating">
                                <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                                <label for="floatingPassword">Password</label>
                            </div>
                        </div>
                        <button class="source-button btn btn-primary btn-xs" type="button" tabindex="0"><i class="bi bi-code"></i></button></form>

                </div>
            </div>
        </div>

        <!-- Livewire example
          ================================================== -->
        <div class="bs-docs-section">
            <div class="page-header">
                <h1 id="livewireExample">Livewire Example</h1>
            </div>
            <livewire:frontend::contact/>
        </div>

        <!-- Navs
        ================================================== -->
        <div class="bs-docs-section">
            <div class="row">
                <div class="col-lg-12">
                    <div class="page-header">
                        <h1 id="navs">Navs</h1>
                    </div>
                </div>
            </div>

            <div class="row mb-5">
                <div class="col-lg-6">
                    <h2 id="nav-tabs">Tabs</h2>
                    <div class="bs-component">
                        <ul class="nav nav-tabs" role="tablist">
                            <li class="nav-item" role="presentation">
                                <a class="nav-link active" data-bs-toggle="tab" aria-label="Home" title="Home" href="#home" aria-selected="true" role="tab">Home</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" data-bs-toggle="tab" aria-label="Profile" title="Profile" href="#profile" aria-selected="false" tabindex="-1" role="tab">Profile</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link disabled" aria-label="Disabled" title="Disabled" href="#" aria-selected="false" tabindex="-1" role="tab">Disabled</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-label="Dropdown" title="Dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" aria-label="Action" title="Action" href="#">Action</a>
                                    <a class="dropdown-item" aria-label="Another action" title="Another action" href="#" >Another action</a>
                                    <a class="dropdown-item" aria-label="Something else here" title="Something else here" href="#">Something else here</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" aria-label="Separated link" title="Separated link" href="#">Separated link</a>
                                </div>
                            </li>
                        </ul>
                        <div id="myTabContent" class="tab-content">
                            <div class="tab-pane fade show active" id="home" role="tabpanel">
                                <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
                            </div>
                            <div class="tab-pane fade" id="profile" role="tabpanel">
                                <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit.</p>
                            </div>
                            <div class="tab-pane fade" id="dropdown1">
                                <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork.</p>
                            </div>
                            <div class="tab-pane fade" id="dropdown2">
                                <p>Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater.</p>
                            </div>
                        </div>
                        <button class="source-button btn btn-primary btn-xs" type="button" tabindex="0"><i class="bi bi-code"></i></button></div>
                </div>

                <div class="col-lg-6">
                    <h2 id="nav-pills">Pills</h2>
                    <div class="bs-component">
                        <ul class="nav nav-pills">
                            <li class="nav-item">
                                <a class="nav-link active" aria-label="Active" title="Active" href="#">Active</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-label="Dropdown" title="Dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" aria-label="Action" title="Action" href="#">Action</a>
                                    <a class="dropdown-item" aria-label="Another action" title="Another action" href="#" >Another action</a>
                                    <a class="dropdown-item" aria-label="Something else here" title="Something else here" href="#">Something else here</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" aria-label="Separated link" title="Separated link" href="#">Separated link</a>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-label="Link" title="Link" href="#">Link</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" aria-label="Disabled" title="Disabled" href="#">Disabled</a>
                            </li>
                        </ul>
                        <button class="source-button btn btn-primary btn-xs" type="button" tabindex="0"><i class="bi bi-code"></i></button></div>
                    <br>
                    <div class="bs-component">
                        <ul class="nav nav-pills flex-column">
                            <li class="nav-item">
                                <a class="nav-link active" aria-label="Active" title="Active" href="#">Active</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-label="Dropdown" title="Dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" aria-label="Action" title="Action" href="#">Action</a>
                                    <a class="dropdown-item" aria-label="Another action" title="Another action" href="#" >Another action</a>
                                    <a class="dropdown-item" aria-label="Something else here" title="Something else here" href="#">Something else here</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" aria-label="Separated link" title="Separated link" href="#">Separated link</a>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-label="Link" title="Link" href="#">Link</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" aria-label="Disabled" title="Disabled" href="#">Disabled</a>
                            </li>
                        </ul>
                        <button class="source-button btn btn-primary btn-xs" type="button" tabindex="0"><i class="bi bi-code"></i></button></div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-6">
                    <h2 id="nav-breadcrumbs">Breadcrumbs</h2>
                    <div class="bs-component">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item active">Home</li>
                        </ol>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a aria-label="Home" title="Home" href="#">Home</a></li>
                            <li class="breadcrumb-item active">Library</li>
                        </ol>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a aria-label="Home" title="Home" href="#">Home</a></li>
                            <li class="breadcrumb-item"><a aria-label="Library" title="Library" href="#">Library</a></li>
                            <li class="breadcrumb-item active">Data</li>
                        </ol>
                        <button class="source-button btn btn-primary btn-xs" type="button" tabindex="0"><i class="bi bi-code"></i></button></div>
                </div>

                <div class="col-lg-6">
                    <h2 id="pagination">Pagination</h2>
                    <div class="bs-component">
                        <div>
                            <ul class="pagination">
                                <li class="page-item disabled">
                                    <a class="page-link" aria-label="«" title="«" href="#">«</a>
                                </li>
                                <li class="page-item active">
                                    <a class="page-link" aria-label="1" title="1" href="#">1</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" aria-label="2" title="2" href="#">2</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" aria-label="3" title="3" href="#">3</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" aria-label="4" title="4" href="#">4</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" aria-label="5" title="5" href="#">5</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" aria-label="»" title="»" href="#">»</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <ul class="pagination pagination-lg">
                                <li class="page-item disabled">
                                    <a class="page-link" aria-label="«" title="«" href="#">«</a>
                                </li>
                                <li class="page-item active">
                                    <a class="page-link" aria-label="1" title="1" href="#">1</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" aria-label="2" title="2" href="#">2</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" aria-label="3" title="3" href="#">3</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" aria-label="4" title="4" href="#">4</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" aria-label="5" title="5" href="#">5</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" aria-label="»" title="»" href="#">»</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <ul class="pagination pagination-sm">
                                <li class="page-item disabled">
                                    <a class="page-link" aria-label="«" title="«" href="#">«</a>
                                </li>
                                <li class="page-item active">
                                    <a class="page-link" aria-label="1" title="1" href="#">1</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" aria-label="2" title="2" href="#">2</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" aria-label="3" title="3" href="#">3</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" aria-label="4" title="4" href="#">4</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" aria-label="5" title="5" href="#">5</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" aria-label="»" title="»" href="#">»</a>
                                </li>
                            </ul>
                        </div>
                        <button class="source-button btn btn-primary btn-xs" type="button" tabindex="0"><i class="bi bi-code"></i></button></div>
                </div>
            </div>
        </div>

        <!-- Indicators
        ================================================== -->
        <div class="bs-docs-section">
            <div class="row">
                <div class="col-lg-12">
                    <div class="page-header">
                        <h1 id="indicators">Indicators</h1>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-12">
                    <h2>Alerts</h2>
                    <div class="bs-component">
                        <div class="alert alert-dismissible alert-warning">
                            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                            <h4 class="alert-heading">Warning!</h4>
                            <p class="mb-0">Best check yo self, you're not looking too good. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, <a aria-label="" title="" href="#" class="alert-link">vel scelerisque nisl consectetur et</a>.</p>
                        </div>
                        <button class="source-button btn btn-primary btn-xs" type="button" tabindex="0"><i class="bi bi-code"></i></button></div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4">
                    <div class="bs-component">
                        <div class="alert alert-dismissible alert-danger">
                            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                            <strong>Oh snap!</strong> <a aria-label="" title="" href="#" class="alert-link">Change a few things up</a> and try submitting again.
                        </div>
                        <button class="source-button btn btn-primary btn-xs" type="button" tabindex="0"><i class="bi bi-code"></i></button></div>
                </div>
                <div class="col-lg-4">
                    <div class="bs-component">
                        <div class="alert alert-dismissible alert-success">
                            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                            <strong>Well done!</strong> You successfully read <a aria-label="" title="" href="#" class="alert-link">this important alert message</a>.
                        </div>
                        <button class="source-button btn btn-primary btn-xs" type="button" tabindex="0"><i class="bi bi-code"></i></button></div>
                </div>
                <div class="col-lg-4">
                    <div class="bs-component">
                        <div class="alert alert-dismissible alert-info">
                            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                            <strong>Heads up!</strong> This <a aria-label="" title="" href="#" class="alert-link">alert needs your attention</a>, but it's not super important.
                        </div>
                        <button class="source-button btn btn-primary btn-xs" type="button" tabindex="0"><i class="bi bi-code"></i></button></div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4">
                    <div class="bs-component">
                        <div class="alert alert-dismissible alert-primary">
                            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                            <strong>Oh snap!</strong> <a aria-label="" title="" href="#" class="alert-link">Change a few things up</a> and try submitting again.
                        </div>
                        <button class="source-button btn btn-primary btn-xs" type="button" tabindex="0"><i class="bi bi-code"></i></button></div>
                </div>
                <div class="col-lg-4">
                    <div class="bs-component">
                        <div class="alert alert-dismissible alert-secondary">
                            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                            <strong>Well done!</strong> You successfully read <a aria-label="" title="" href="#" class="alert-link">this important alert message</a>.
                        </div>
                        <button class="source-button btn btn-primary btn-xs" type="button" tabindex="0"><i class="bi bi-code"></i></button></div>
                </div>
                <div class="col-lg-4">
                    <div class="bs-component">
                        <div class="alert alert-dismissible alert-light">
                            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                            <strong>Heads up!</strong> This <a aria-label="" title="" href="#" class="alert-link">alert needs your attention</a>, but it's not super important.
                        </div>
                        <button class="source-button btn btn-primary btn-xs" type="button" tabindex="0"><i class="bi bi-code"></i></button></div>
                </div>
            </div>
            <div>
                <h2>Badges</h2>
                <div class="bs-component mb-4">
                    <span class="badge bg-primary">Primary</span>
                    <span class="badge bg-secondary">Secondary</span>
                    <span class="badge bg-success">Success</span>
                    <span class="badge bg-danger">Danger</span>
                    <span class="badge bg-warning">Warning</span>
                    <span class="badge bg-info">Info</span>
                    <span class="badge bg-light">Light</span>
                    <span class="badge bg-dark">Dark</span>
                    <button class="source-button btn btn-primary btn-xs" type="button" tabindex="0"><i class="bi bi-code"></i></button></div>
                <div class="bs-component">
                    <span class="badge rounded-pill bg-primary">Primary</span>
                    <span class="badge rounded-pill bg-secondary">Secondary</span>
                    <span class="badge rounded-pill bg-success">Success</span>
                    <span class="badge rounded-pill bg-danger">Danger</span>
                    <span class="badge rounded-pill bg-warning">Warning</span>
                    <span class="badge rounded-pill bg-info">Info</span>
                    <span class="badge rounded-pill bg-light">Light</span>
                    <span class="badge rounded-pill bg-dark">Dark</span>
                    <button class="source-button btn btn-primary btn-xs" type="button" tabindex="0"><i class="bi bi-code"></i></button></div>
            </div>
        </div>

        <!-- Progress
        ================================================== -->
        <div class="bs-docs-section">
            <div class="row">
                <div class="col-lg-12">
                    <div class="page-header">
                        <h1 id="progress">Progress</h1>
                    </div>

                    <h3 id="progress-basic">Basic</h3>
                    <div class="bs-component">
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <button class="source-button btn btn-primary btn-xs" type="button" tabindex="0"><i class="bi bi-code"></i></button></div>

                    <h3 id="progress-alternatives">Contextual alternatives</h3>
                    <div class="bs-component">
                        <div class="progress">
                            <div class="progress-bar bg-success" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div class="progress">
                            <div class="progress-bar bg-info" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div class="progress">
                            <div class="progress-bar bg-warning" role="progressbar" style="width: 75%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div class="progress">
                            <div class="progress-bar bg-danger" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <button class="source-button btn btn-primary btn-xs" type="button" tabindex="0"><i class="bi bi-code"></i></button></div>

                    <h3 id="progress-multiple">Multiple bars</h3>
                    <div class="bs-component">
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style="width: 15%;" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                            <div class="progress-bar bg-success" role="progressbar" style="width: 30%;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                            <div class="progress-bar bg-info" role="progressbar" style="width: 20%;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <button class="source-button btn btn-primary btn-xs" type="button" tabindex="0"><i class="bi bi-code"></i></button></div>

                    <h3 id="progress-striped">Striped</h3>
                    <div class="bs-component">
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 10%;" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 75%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <button class="source-button btn btn-primary btn-xs" type="button" tabindex="0"><i class="bi bi-code"></i></button></div>

                    <h3 id="progress-animated">Animated</h3>
                    <div class="bs-component">
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%;"></div>
                        </div>
                        <button class="source-button btn btn-primary btn-xs" type="button" tabindex="0"><i class="bi bi-code"></i></button></div>
                </div>
            </div>
        </div>

        <!-- Containers
        ================================================== -->
        <div class="bs-docs-section">
            <div class="row">
                <div class="col-lg-12">
                    <div class="page-header">
                        <h1 id="containers">Containers</h1>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-12">
                    <h2>List groups</h2>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-4">
                    <div class="bs-component">
                        <ul class="list-group">
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Cras justo odio
                                <span class="badge bg-primary rounded-pill">14</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Dapibus ac facilisis in
                                <span class="badge bg-primary rounded-pill">2</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Morbi leo risus
                                <span class="badge bg-primary rounded-pill">1</span>
                            </li>
                        </ul>
                        <button class="source-button btn btn-primary btn-xs" type="button" tabindex="0"><i class="bi bi-code"></i></button></div>
                    <div class="bs-component">
                        <ul class="list-group">
                            <li class="list-group-item list-group-item-primary d-flex justify-content-between align-items-center">
                                Cras justo odio
                                <span class="badge bg-primary rounded-pill">14</span>
                            </li>
                            <li class="list-group-item list-group-item-secondary d-flex justify-content-between align-items-center">
                                Dapibus ac facilisis in
                                <span class="badge bg-primary rounded-pill">2</span>
                            </li>
                            <li class="list-group-item list-group-item-success d-flex justify-content-between align-items-center">
                                Morbi leo risus
                                <span class="badge bg-primary rounded-pill">1</span>
                            </li><li class="list-group-item list-group-item-info d-flex justify-content-between align-items-center">
                            Cras justo odio
                            <span class="badge bg-primary rounded-pill">5</span>
                        </li>
                            <li class="list-group-item list-group-item-warning d-flex justify-content-between align-items-center">
                                Dapibus ac facilisis in
                                <span class="badge bg-primary rounded-pill">4</span>
                            </li>
                            <li class="list-group-item list-group-item-danger d-flex justify-content-between align-items-center">
                                Morbi leo risus
                                <span class="badge bg-primary rounded-pill">9</span>
                            </li>
                            <li class="list-group-item list-group-item-light d-flex justify-content-between align-items-center">
                                Morbi leo risus
                                <span class="badge bg-primary rounded-pill">8</span>
                            </li>
                            <li class="list-group-item list-group-item-dark d-flex justify-content-between align-items-center">
                                Morbi leo risus
                                <span class="badge bg-primary rounded-pill">0</span>
                            </li>
                        </ul>
                        <button class="source-button btn btn-primary btn-xs" type="button" tabindex="0"><i class="bi bi-code"></i></button></div>
                </div>
                <div class="col-lg-4">
                    <div class="bs-component">
                        <div class="list-group">
                            <a aria-label="Cras justo odio" title="Cras justo odio" href="#" class="list-group-item list-group-item-action active">Cras justo odio</a>
                            <a aria-label="Dapibus ac facilisis in" title="Dapibus ac facilisis in" href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
                            <a aria-label="Morbi leo risus" title="Morbi leo risus" href="#" class="list-group-item list-group-item-action disabled">Morbi leo risus</a>
                        </div>
                        <button class="source-button btn btn-primary btn-xs" type="button" tabindex="0"><i class="bi bi-code"></i></button></div>
                </div>
                <div class="col-lg-4">
                    <div class="bs-component">
                        <div class="list-group">
                            <a aria-label="List group item heading" title="List group item heading" href="#" class="list-group-item list-group-item-action flex-column align-items-start active">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">List group item heading</h5>
                                    <small>3 days ago</small>
                                </div>
                                <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                <small>Donec id elit non mi porta.</small>
                            </a>
                            <a aria-label="List group item heading" title="List group item heading" href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">List group item heading</h5>
                                    <small class="text-muted">3 days ago</small>
                                </div>
                                <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                <small class="text-muted">Donec id elit non mi porta.</small>
                            </a>
                        </div>
                        <button class="source-button btn btn-primary btn-xs" type="button" tabindex="0"><i class="bi bi-code"></i></button></div>
                </div>
            </div>

            <div class="row mt-5">
                <div class="col-lg-12">
                    <h2>Cards</h2>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-4">
                    <div class="bs-component">
                        <div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
                            <div class="card-header">Header</div>
                            <div class="card-body">
                                <h4 class="card-title">Primary card title</h4>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div class="card text-white bg-secondary mb-3" style="max-width: 20rem;">
                            <div class="card-header">Header</div>
                            <div class="card-body">
                                <h4 class="card-title">Secondary card title</h4>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div class="card text-white bg-success mb-3" style="max-width: 20rem;">
                            <div class="card-header">Header</div>
                            <div class="card-body">
                                <h4 class="card-title">Success card title</h4>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div class="card text-white bg-danger mb-3" style="max-width: 20rem;">
                            <div class="card-header">Header</div>
                            <div class="card-body">
                                <h4 class="card-title">Danger card title</h4>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div class="card bg-warning mb-3" style="max-width: 20rem;">
                            <div class="card-header">Header</div>
                            <div class="card-body">
                                <h4 class="card-title">Warning card title</h4>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div class="card text-white bg-info mb-3" style="max-width: 20rem;">
                            <div class="card-header">Header</div>
                            <div class="card-body">
                                <h4 class="card-title">Info card title</h4>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div class="card bg-light mb-3" style="max-width: 20rem;">
                            <div class="card-header">Header</div>
                            <div class="card-body">
                                <h4 class="card-title">Light card title</h4>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div class="card text-white bg-dark mb-3" style="max-width: 20rem;">
                            <div class="card-header">Header</div>
                            <div class="card-body">
                                <h4 class="card-title">Dark card title</h4>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <button class="source-button btn btn-primary btn-xs" type="button" tabindex="0"><i class="bi bi-code"></i></button></div>
                </div>
                <div class="col-lg-4">
                    <div class="bs-component">
                        <div class="card border-primary mb-3" style="max-width: 20rem;">
                            <div class="card-header">Header</div>
                            <div class="card-body">
                                <h4 class="card-title">Primary card title</h4>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div class="card border-secondary mb-3" style="max-width: 20rem;">
                            <div class="card-header">Header</div>
                            <div class="card-body">
                                <h4 class="card-title">Secondary card title</h4>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div class="card border-success mb-3" style="max-width: 20rem;">
                            <div class="card-header">Header</div>
                            <div class="card-body">
                                <h4 class="card-title">Success card title</h4>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div class="card border-danger mb-3" style="max-width: 20rem;">
                            <div class="card-header">Header</div>
                            <div class="card-body">
                                <h4 class="card-title">Danger card title</h4>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div class="card border-warning mb-3" style="max-width: 20rem;">
                            <div class="card-header">Header</div>
                            <div class="card-body">
                                <h4 class="card-title">Warning card title</h4>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div class="card border-info mb-3" style="max-width: 20rem;">
                            <div class="card-header">Header</div>
                            <div class="card-body">
                                <h4 class="card-title">Info card title</h4>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div class="card border-light mb-3" style="max-width: 20rem;">
                            <div class="card-header">Header</div>
                            <div class="card-body">
                                <h4 class="card-title">Light card title</h4>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div class="card border-dark mb-3" style="max-width: 20rem;">
                            <div class="card-header">Header</div>
                            <div class="card-body">
                                <h4 class="card-title">Dark card title</h4>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <button class="source-button btn btn-primary btn-xs" type="button" tabindex="0"><i class="bi bi-code"></i></button></div>
                </div>

                <div class="col-lg-4">
                    <div class="bs-component">
                        <div class="card mb-3">
                            <h3 class="card-header">Card header</h3>
                            <div class="card-body">
                                <h5 class="card-title">Special title treatment</h5>
                                <h6 class="card-subtitle text-muted">Support card subtitle</h6>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" class="d-block user-select-none" width="100%" height="200" aria-label="Placeholder: Image cap" focusable="false" role="img" preserveAspectRatio="xMidYMid slice" viewBox="0 0 318 180" style="font-size:1.125rem;text-anchor:middle">
                                <rect width="100%" height="100%" fill="#868e96"></rect>
                                <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text>
                            </svg>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Cras justo odio</li>
                                <li class="list-group-item">Dapibus ac facilisis in</li>
                                <li class="list-group-item">Vestibulum at eros</li>
                            </ul>
                            <div class="card-body">
                                <a aria-label="Card link" title="Card link" href="#" class="card-link">Card link</a>
                                <a aria-label="Another link" title="Another link" href="#" class="card-link">Another link</a>
                            </div>
                            <div class="card-footer text-muted">
                                2 days ago
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Card title</h4>
                                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a aria-label="Card link" title="Card link" href="#" class="card-link">Card link</a>
                                <a aria-label="Another link" title="Another link" href="#" class="card-link">Another link</a>
                            </div>
                        </div>
                        <button class="source-button btn btn-primary btn-xs" type="button" tabindex="0"><i class="bi bi-code"></i></button></div>
                </div>
            </div>

            <div class="row mt-5">
                <div class="col-lg-12">
                    <h2>Accordions</h2>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-4">
                    <div class="bs-component">
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Accordion Item #1
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Accordion Item #2
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Accordion Item #3
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="source-button btn btn-primary btn-xs" type="button" tabindex="0"><i class="bi bi-code"></i></button></div>
                </div>
            </div>

        </div>

        <!-- Dialogs
        ================================================== -->
        <div class="bs-docs-section">
            <div class="row">
                <div class="col-lg-12">
                    <div class="page-header">
                        <h1 id="dialogs">Dialogs</h1>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <h2>Modals</h2>
                    <div class="bs-component">
                        <div class="modal">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title">Modal title</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true"></span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <p>Modal body text goes here.</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-primary">Save changes</button>
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="source-button btn btn-primary btn-xs" type="button" tabindex="0"><i class="bi bi-code"></i></button></div>
                    <h2>Offcanvas</h2>
                    <div class="bs-component">
                        <a class="btn btn-primary" data-bs-toggle="offcanvas" aria-label="Link with href" title="Link with href" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                            Link with href
                        </a>
                        <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                            Button with data-bs-target
                        </button>

                        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <div>
                                    Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                                </div>
                                <div class="dropdown mt-3">
                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
                                        Dropdown button
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <button class="source-button btn btn-primary btn-xs" type="button" tabindex="0"><i class="bi bi-code"></i></button></div>
                </div>
                <div class="col-lg-6">
                    <h2>Popovers</h2>
                    <div class="bs-component mb-5">
                        <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-bs-original-title="Popover Title">Left</button>

                        <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-bs-original-title="Popover Title">Top</button>

                        <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-bs-original-title="Popover Title">Bottom</button>

                        <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="right" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-bs-original-title="Popover Title">Right</button>
                        <button class="source-button btn btn-primary btn-xs" type="button" tabindex="0"><i class="bi bi-code"></i></button></div>
                    <h2>Tooltips</h2>
                    <div class="bs-component mb-5">
                        <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-original-title="Tooltip on left">Left</button>

                        <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Tooltip on top">Top</button>

                        <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-original-title="Tooltip on bottom">Bottom</button>

                        <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Tooltip on right">Right</button>
                        <button class="source-button btn btn-primary btn-xs" type="button" tabindex="0"><i class="bi bi-code"></i></button></div>
                    <h2>Toasts</h2>
                    <div class="bs-component">
                        <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                            <div class="toast-header">
                                <strong class="me-auto">Bootstrap</strong>
                                <small>11 mins ago</small>
                                <button type="button" class="btn-close ms-2 mb-1" data-bs-dismiss="toast" aria-label="Close">
                                    <span aria-hidden="true"></span>
                                </button>
                            </div>
                            <div class="toast-body">
                                Hello, world! This is a toast message.
                            </div>
                        </div>
                        <button class="source-button btn btn-primary btn-xs" type="button" tabindex="0"><i class="bi bi-code"></i></button></div>
                </div>
            </div>
        </div>

        <!-- Ícones do projeto
        ================================================== -->
        <div class="bs-docs-section">
            <h2>
                Ícones
            </h2>
            <div class="row g-1 mb-2 bg-light">
                <div class="col-auto">
                    <div class="bs-component">
                        <x-frontend::icon class="ic-lg text-primary" name="fmd-logo"/>
                    </div>
                </div>
            </div>
        </div>

        <!-- Imagens para trocar
        ================================================== -->
        <div class="bs-docs-section">

            <div class="row">
                <div class="col-lg-12">
                    <div class="page-header">
                        <h1 id="dialogs">
                            <a href="https://realfavicongenerator.net/"
                               class="text-black"
                               title="Images"
                               aria-label="Images"
                               target="_blank">Images
                            </a>
                        </h1>
                        <div class="d-flex align-items-center mb-1">
                            <div class="bg-danger mr-0h"
                                 style="width: 20px; height: 20px;"></div>
                            Missing <kbd class="ml-0h">alt=""</kbd>
                        </div>
                        <div class="d-flex align-items-center mb-2">
                            <div class="bg-warning mr-0h"
                                 style="width: 20px; height: 20px"></div>
                            Missing <kbd class="ml-0h">loading=""</kbd>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="page-header">
                        <h1 id="links-warnings">
                            <a href="https://realfavicongenerator.net/"
                               class="text-black"
                               target="_blank">Links
                            </a>
                        </h1>
                        <div class="d-flex align-items-center mb-1">
                            <div class="bg-danger mr-0h"
                                 style="width: 20px; height: 20px;"></div>
                            Missing <kbd class="ml-0h">aria-label=""</kbd>
                        </div>
                        <div class="d-flex align-items-center mb-2">
                            <div class="bg-warning mr-0h"
                                 style="width: 20px; height: 20px"></div>
                            Missing <kbd class="ml-0h">title=""</kbd>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <div class="p-3 mb-2 bg-light">
                        <figure class="figure mb-0">
                            <img src="/images/logo.png"
                                 class="figure-img img-fluid"
                                 alt="200x70 - logo.png (1,8 KB)"
                                 loading="lazy"
                                 width="200"
                                 height="70">
                            <figcaption class="figure-caption">200x70 - logo.png (1,8 KB)
                            </figcaption>
                        </figure>
                    </div>
                </div>
                <div class="col-6">
                    <div class="p-3 mb-2 bg-light">
                        <figure class="figure mb-0">
                            <img src="/images/logo-email.png"
                                 class="figure-img img-fluid"
                                 alt="200x70 - logo-email.png (1,8 KB)"
                                 loading="lazy"
                                 width="200"
                                 height="70">
                            <figcaption class="figure-caption">200x70 - logo-email.png (1,8
                                                               KB)
                            </figcaption>
                        </figure>
                    </div>
                </div>
                <div class="col-6">
                    <div class="p-3 mb-2 bg-light">
                        <figure class="figure mb-0">
                            <img src="/images/favicon.ico"
                                 class="figure-img img-fluid"
                                 alt="48x48 - favicon.ico (15,09 KB)"
                                 loading="lazy"
                                 width="48"
                                 height="48">
                            <figcaption class="figure-caption">48x48 - favicon.ico (15,09
                                                               KB)
                            </figcaption>
                        </figure>
                    </div>
                </div>
                <div class="col-6">
                    <div class="p-3 mb-2 bg-light">
                        <figure class="figure mb-0">
                            <img src="/images/logo-amp.png"
                                 class="figure-img img-fluid"
                                 alt="60x60 - logo-amp.png (1 KB)"
                                 loading="lazy"
                                 width="60"
                                 height="60">
                            <figcaption class="figure-caption">60x60 - logo-amp.png (1 KB)
                            </figcaption>
                        </figure>
                    </div>
                </div>
                <div class="col-12">
                    <div class="p-3 mb-2 bg-light">
                        <figure class="figure mb-0">
                            <img src="/images/mstile-150x150.png"
                                 class="figure-img img-fluid"
                                 alt="150x150 - mstile-150x150.png (1,7 KB)"
                                 loading="lazy"
                                 loading="lazy"
                                 width="150"
                                 height="150">
                            <figcaption class="figure-caption">150x150 - mstile-150x150.png
                                                               (1,7
                                                               KB)
                            </figcaption>
                        </figure>
                    </div>
                </div>
                <div class="col-6">
                    <div class="p-3 mb-2 bg-light">
                        <figure class="figure mb-0">
                            <img src="/images/safari-pinned-tab.svg"
                                 class="figure-img img-fluid"
                                 alt="192x192 - safari-pinned-tab.svg (5 KB)"
                                 loading="lazy"
                                 width="192"
                                 height="192">
                            <figcaption class="figure-caption">192x192 -
                                                               safari-pinned-tab.svg
                                                               (5 KB)
                            </figcaption>
                        </figure>
                    </div>
                </div>
                <div class="col-6">
                    <div class="p-3 mb-2 bg-light">
                        <figure class="figure mb-0">
                            <img src="/images/apple-touch-icon.png"
                                 class="figure-img img-fluid"
                                 alt="192x192 - apple-touch-icon.png (3,51 KB)"
                                 loading="lazy"
                                 width="192"
                                 height="192">
                            <figcaption class="figure-caption">192x192 -
                                                               apple-touch-icon.png
                                                               (3,51 KB)
                            </figcaption>
                        </figure>
                    </div>
                </div>
                <div class="col-12">
                    <div class="p-3 mb-2 bg-light">
                        <figure class="figure mb-0">
                            <img src="/images/icon-192x192.png"
                                 class="figure-img img-fluid"
                                 alt="192x192 - icon-192x192.png (5,28 KB)"
                                 loading="lazy"
                                 width="192"
                                 height="192">
                            <figcaption class="figure-caption">192x192 - icon-192x192.png
                                                               (5,28
                                                               KB)
                            </figcaption>
                        </figure>
                    </div>
                </div>
                <div class="col-12">
                    <div class="p-3 mb-2 bg-light">
                        <figure class="figure mb-0">
                            <img src="/images/icon-512x512.png"
                                 class="figure-img img-fluid"
                                 alt="512x512 - icon-512x512.png (13,55 KB)"
                                 loading="lazy"
                                 width="512"
                                 height="512">
                            <figcaption class="figure-caption">
                                512x512 - icon-512x512.png (13,55 KB)
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>

        <!--Inifinte Scroll Loading Icon-->
        <h2>Ícone do Infinite Scroll</h2>
        <div class="ic-infinite-scroll-loading"></div>

        <div id="source-modal" class="modal fade" tabindex="-1">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Source Code</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-hidden="true"></button>
                    </div>
                    <div class="modal-body">
                        <pre class="language-html"><code></code></pre>
                    </div>
                </div>
            </div>
        </div>

        <footer id="footer">
            <div class="row">
                <div class="col-lg-12">
                    <ul class="list-unstyled">
                        <li class="float-end"><a aria-label="Back to top" title="Back to top" href="#top">Back to top</a></li>
                        <li><a aria-label="Blog" title="Blog" href="https://blog.bootswatch.com/">Blog</a></li>
                        <li><a aria-label="RSS" title="RSS" href="https://blog.bootswatch.com/rss/">RSS</a></li>
                        <li><a aria-label="Twitter" title="Twitter" href="https://twitter.com/bootswatch">Twitter</a></li>
                        <li><a aria-label="GitHub" title="GitHub" href="https://github.com/thomaspark/bootswatch">GitHub</a></li>
                        <li><a aria-label="API" title="API" href="../help/#api">API</a></li>
                        <li><a aria-label="Donate" title="Donate" href="../help/#donate">Donate</a></li>
                    </ul>
                    <p>Made by <a aria-label="Thomas Park" title="Thomas Park" href="https://thomaspark.co/">Thomas Park</a>.</p>
                    <p>Code released under the <a aria-label="MIT License" title="MIT License" href="https://github.com/thomaspark/bootswatch/blob/master/LICENSE">MIT License</a>.</p>
                    <p>Based on <a aria-label="Bootstrap" title="Bootstrap" href="https://getbootstrap.com/" rel="nofollow">Bootstrap</a>. Icons from <a aria-label="Bootstrap Icons" title="Bootstrap Icons" href="https://icons.getbootstrap.com/" rel="nofollow">Bootstrap Icons</a>. Web fonts from <a aria-label="Google" title="Google" href="https://fonts.google.com/" rel="nofollow">Google</a>.</p>

                </div>
            </div>
        </footer>
    </div>
</main>

@endsection
@push('scripts')
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/prism.min.js" data-manual></script>

<script>
    (function () {
        'use strict';

        $(window).scroll(function () {
            var top = $(document).scrollTop();
            if (top > 50) {
                $('#home > .navbar').removeClass('navbar-transparent');
            } else {
                $('#home > .navbar').addClass('navbar-transparent');
            }
        });

        $('a[href="#"]').click(function (event) {
            event.preventDefault();
        });

        $('.bs-component').each(function () {
            var $component = $(this);
            var $button = $('<button class="source-button btn btn-primary btn-xs" role="button" tabindex="0">&lt; &gt;</button>');
            $component.append($button);

            if ($component.find('[data-bs-toggle="tooltip"]').length > 0) {
                $component.attr('data-html', $component.html().trim());
            }
        });

        var popoverTriggerList = [].slice.call(document.querySelectorAll(
            '[data-bs-toggle="popover"]'));
        var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
            return new bootstrap.Popover(popoverTriggerEl);
        });

        var tooltipTriggerList = [].slice.call(document.querySelectorAll(
            '[data-bs-toggle="tooltip"]'));
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });

        var sourceModalElem = document.getElementById('source-modal');
        if (sourceModalElem) {
            var sourceModal = new bootstrap.Modal(document.getElementById('source-modal'));
        }

        $('body').on('click', '.source-button', function (event) {
            event.preventDefault();

            var component = $(this).parent();
            var html = component.attr('data-html') ? component.attr('data-html') : component.html();

            html = cleanSource(html);
            html = Prism.highlight(html, Prism.languages.html, 'html');
            $('#source-modal code').html(html);
            sourceModal.show();
        });

        function cleanSource(html) {
            html = html.replace(/×/g, '&times;')
                       .replace(/«/g, '&laquo;')
                       .replace(/»/g, '&raquo;')
                       .replace(/←/g, '&larr;')
                       .replace(/→/g, '&rarr;');

            var lines = html.split(/\n/);

            lines.shift();
            lines.splice(-1, 1);

            var indentSize = lines[0].length - lines[0].trim().length;
            var re = new RegExp(' {' + indentSize + '}');

            lines = lines.map(function (line) {
                if (line.match(re)) {
                    line = line.slice(Math.max(0, indentSize));
                }

                return line;
            });

            lines = lines.join('\n');

            return lines;
        }
    })();
</script>
@endpush
