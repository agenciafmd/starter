@extends('frontend::html.master', [
'bodyClass' => '',
'critical' => '',
])

@section('title', 'Tema')
@section('description', 'Página para visualização de todos os componentes')

@section('content')
<main class="py-block">
  <div class="container">
    <div class="row gx-1 gy-block-small">
      <div class="col-md-2">

        <div class="navbar bd-example hstack gap-block-small position-sticky top-0">

          <div>
            <h2 class="fs-xlarge">Components</h2>
            <ul id="nav-links-components"
                class="navbar-nav flex-column">
              @php
              $componentsLinks = [
              (object) ['name' => 'Buttons'],
              (object) ['name' => 'Button Group'],
              (object) ['name' => 'Button Share'],
              (object) ['name' => 'Navbars'],
              (object) ['name' => 'Navs - Tabs'],
              ];
              @endphp

              @foreach($componentsLinks as $link)
              <li class="nav-item">
                <x-frontend::link link="#{{ Str::slug($link->name) }}"
                                  label="{{ $link->name }}"
                                  title="Ir para {{ $link->name }}"
                                  class="px-0 nav-link js-scroll-top"/>
              </li>
              @endforeach
            </ul>
          </div>

          <div>
            <h2 class="fs-xlarge">Content</h2>
            <ul id="nav-links-content"
                class="navbar-nav flex-column">
              @php
              $contentLinks = [
              (object) ['name' => 'Typography'],
              (object) ['name' => 'Tables'],
              ];
              @endphp

              @foreach($contentLinks as $link)
              <li class="nav-item">
                <x-frontend::link link="#{{ Str::slug($link->name) }}"
                                  label="{{ $link->name }}"
                                  title="Ir para {{ $link->name }}"
                                  class="px-0 nav-link js-scroll-top"/>
              </li>
              @endforeach
            </ul>
          </div>

          <div>
            <h2 class="fs-xlarge">Forms</h2>
            <ul id="nav-links-forms"
                class="navbar-nav flex-column">
              @php
              $formsLinks = [
              (object) ['name' => 'Form Control'],
              (object) ['name' => 'Form Select'],
              (object) ['name' => 'Checks / Radios'],
              (object) ['name' => 'Range'],
              (object) ['name' => 'Input Group'],
              (object) ['name' => 'Floating Label'],
              (object) ['name' => 'Validation'],
              (object) ['name' => 'Livewire'],
              ];
              @endphp

              @foreach($formsLinks as $link)
              <li class="nav-item">
                <x-frontend::link link="#{{ Str::slug($link->name) }}"
                                  label="{{ $link->name }}"
                                  title="Ir para {{ $link->name }}"
                                  class="px-0 nav-link js-scroll-top"/>
              </li>
              @endforeach
            </ul>
          </div>

        </div>

      </div>
      <div class="col-md-10">

        <div class="vstack gap-block-small gap-md-block">
          <div class="vstack gap-block-small gap-md-block"
               data-bs-spy="scroll"
               data-bs-target="#nav-links-components"
               data-bs-smooth-scroll="true"
               tabindex="0">

            <div id="buttons"
                 class="bd-example">
              <h2 class="mb-block-small h6">Buttons</h2>
              <div class="vstack gap-1">

                <div>
                  <button type="button"
                          class="btn btn-primary">Primary
                  </button>
                  <button type="button"
                          class="btn btn-secondary">Secondary
                  </button>
                  <button type="button"
                          class="btn btn-success">Success
                  </button>
                  <button type="button"
                          class="btn btn-info">Info
                  </button>
                  <button type="button"
                          class="btn btn-warning">Warning
                  </button>
                  <button type="button"
                          class="btn btn-danger">Danger
                  </button>
                  <button type="button"
                          class="btn btn-light">Light
                  </button>
                  <button type="button"
                          class="btn btn-dark">Dark
                  </button>
                  <button type="button"
                          class="btn btn-link">Link
                  </button>
                </div>

                <div>
                  <button type="button"
                          class="btn btn-primary disabled">Primary
                  </button>
                  <button type="button"
                          class="btn btn-secondary disabled">Secondary
                  </button>
                  <button type="button"
                          class="btn btn-success disabled">Success
                  </button>
                  <button type="button"
                          class="btn btn-info disabled">Info
                  </button>
                  <button type="button"
                          class="btn btn-warning disabled">Warning
                  </button>
                  <button type="button"
                          class="btn btn-danger disabled">Danger
                  </button>
                  <button type="button"
                          class="btn btn-light disabled">Light
                  </button>
                  <button type="button"
                          class="btn btn-dark disabled">Dark
                  </button>
                  <button type="button"
                          class="btn btn-link disabled">Link
                  </button>
                </div>

                <div>
                  <button type="button"
                          class="btn btn-outline-primary">Primary
                  </button>
                  <button type="button"
                          class="btn btn-outline-secondary">Secondary
                  </button>
                  <button type="button"
                          class="btn btn-outline-success">Success
                  </button>
                  <button type="button"
                          class="btn btn-outline-info">Info
                  </button>
                  <button type="button"
                          class="btn btn-outline-warning">Warning
                  </button>
                  <button type="button"
                          class="btn btn-outline-danger">Danger
                  </button>
                  <button type="button"
                          class="btn btn-outline-light">Light
                  </button>
                  <button type="button"
                          class="btn btn-outline-dark">Dark
                  </button>
                </div>

                <div>
                  <button type="button"
                          class="btn btn-primary btn-lg">Large button
                  </button>
                  <button type="button"
                          class="btn btn-primary">Default button
                  </button>
                  <button type="button"
                          class="btn btn-primary btn-sm">Small button
                  </button>
                </div>
              </div>
            </div>

            <div id="button-group"
                 class="bd-example">
              <h2 class="mb-block-small h6">Button Group</h2>
              <div class="vstack gap-1">

                <div>
                  <div class="btn-group"
                       role="group"
                       aria-label="Basic checkbox toggle button group">
                    <input type="checkbox"
                           class="btn-check"
                           id="btncheck1"
                           checked
                           autocomplete="off">
                    <label class="btn btn-primary"
                           for="btncheck1">Checkbox 1
                    </label>
                    <input type="checkbox"
                           class="btn-check"
                           id="btncheck2"
                           autocomplete="off">
                    <label class="btn btn-primary"
                           for="btncheck2">Checkbox 2
                    </label>
                    <input type="checkbox"
                           class="btn-check"
                           id="btncheck3"
                           autocomplete="off">
                    <label class="btn btn-primary"
                           for="btncheck3">Checkbox 3
                    </label>
                  </div>
                </div>

                <div>
                  <div class="btn-group"
                       role="group"
                       aria-label="Basic radio toggle button group">
                    <input type="radio"
                           class="btn-check"
                           name="btnradio"
                           id="btnradio1"
                           autocomplete="off"
                           checked>
                    <label class="btn btn-outline-primary"
                           for="btnradio1">Radio 1
                    </label>
                    <input type="radio"
                           class="btn-check"
                           name="btnradio"
                           id="btnradio2"
                           autocomplete="off"
                           checked>
                    <label class="btn btn-outline-primary"
                           for="btnradio2">Radio 2
                    </label>
                    <input type="radio"
                           class="btn-check"
                           name="btnradio"
                           id="btnradio3"
                           autocomplete="off"
                           checked>
                    <label class="btn btn-outline-primary"
                           for="btnradio3">Radio 3
                    </label>
                  </div>
                </div>

                <div>
                  <div class="btn-group-vertical">
                    <button type="button"
                            class="btn btn-primary">Button
                    </button>
                    <button type="button"
                            class="btn btn-primary">Button
                    </button>
                    <button type="button"
                            class="btn btn-primary">Button
                    </button>
                    <button type="button"
                            class="btn btn-primary">Button
                    </button>
                    <button type="button"
                            class="btn btn-primary">Button
                    </button>
                    <button type="button"
                            class="btn btn-primary">Button
                    </button>
                  </div>
                </div>

                <div>
                  <div class="btn-group"
                       role="group"
                       aria-label="Basic example">
                    <button type="button"
                            class="btn btn-secondary">Left
                    </button>
                    <button type="button"
                            class="btn btn-secondary">Middle
                    </button>
                    <button type="button"
                            class="btn btn-secondary">Right
                    </button>
                  </div>
                </div>

                <div>
                  <div class="btn-toolbar"
                       role="toolbar"
                       aria-label="Toolbar with button groups">
                    <div class="btn-group me-2"
                         role="group"
                         aria-label="First group">
                      <button type="button"
                              class="btn btn-secondary">
                        1
                      </button>
                      <button type="button"
                              class="btn btn-secondary">
                        2
                      </button>
                      <button type="button"
                              class="btn btn-secondary">
                        3
                      </button>
                      <button type="button"
                              class="btn btn-secondary">
                        4
                      </button>
                    </div>
                    <div class="btn-group me-2"
                         role="group"
                         aria-label="Second group">
                      <button type="button"
                              class="btn btn-secondary">
                        5
                      </button>
                      <button type="button"
                              class="btn btn-secondary">
                        6
                      </button>
                      <button type="button"
                              class="btn btn-secondary">
                        7
                      </button>
                    </div>
                    <div class="btn-group"
                         role="group"
                         aria-label="Third group">
                      <button type="button"
                              class="btn btn-secondary">
                        8
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div id="button-share"
                 class="bd-example">
              <h2 class="mb-block-small h6">Button Share</h2>
              <div class="vstack gap-1">
                <div>
                  <x-frontend::link href="#"
                                    role="button"
                                    data-fmd-share-btn-fbidentification="123456789123456"
                                    label="Compartilhar"
                                    class="btn btn-secondary js-btn-share icon-link-hover-scale-center"
                                    icon="ic-share"/>
                </div>
              </div>
            </div>

            <div id="navbars"
                 class="bd-example">
              <h2 class="mb-block-small h6">Navbars</h2>
              <div class="vstack gap-1">
                <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                  <div class="container-fluid">
                    <a class="navbar-brand"
                       href="#">Navbar
                    </a>
                    <button class="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarColor01"
                            aria-controls="navbarColor01"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse"
                         id="navbarColor01">
                      <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                          <a class="nav-link active"
                             href="#">Home
                            <span class="visually-hidden">(current)</span>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link"
                             href="#">Features
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link"
                             href="#">Pricing
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link"
                             href="#">About
                          </a>
                        </li>
                        <li class="nav-item dropdown">
                          <a class="nav-link dropdown-toggle"
                             data-bs-toggle="dropdown"
                             href="#"
                             role="button"
                             aria-haspopup="true"
                             aria-expanded="false">Dropdown
                          </a>
                          <div class="dropdown-menu">
                            <a class="dropdown-item"
                               href="#">Action
                            </a>
                            <a class="dropdown-item"
                               href="#">Another action
                            </a>
                            <a class="dropdown-item"
                               href="#">Something else here
                            </a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item"
                               href="#">Separated link
                            </a>
                          </div>
                        </li>
                      </ul>
                      <form class="d-flex">
                        <input class="form-control me-sm-2"
                               type="text"
                               placeholder="Search">
                        <button class="btn btn-secondary my-2 my-sm-0"
                                type="submit">Search
                        </button>
                      </form>
                    </div>
                  </div>
                </nav>

                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                  <div class="container-fluid">
                    <a class="navbar-brand"
                       href="#">Navbar
                    </a>
                    <button class="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarColor02"
                            aria-controls="navbarColor02"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse"
                         id="navbarColor02">
                      <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                          <a class="nav-link active"
                             href="#">Home
                            <span class="visually-hidden">(current)</span>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link"
                             href="#">Features
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link"
                             href="#">Pricing
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link"
                             href="#">About
                          </a>
                        </li>
                        <li class="nav-item dropdown">
                          <a class="nav-link dropdown-toggle"
                             data-bs-toggle="dropdown"
                             href="#"
                             role="button"
                             aria-haspopup="true"
                             aria-expanded="false">Dropdown
                          </a>
                          <div class="dropdown-menu">
                            <a class="dropdown-item"
                               href="#">Action
                            </a>
                            <a class="dropdown-item"
                               href="#">Another action
                            </a>
                            <a class="dropdown-item"
                               href="#">Something else here
                            </a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item"
                               href="#">Separated link
                            </a>
                          </div>
                        </li>
                      </ul>
                      <form class="d-flex">
                        <input class="form-control me-sm-2"
                               type="text"
                               placeholder="Search">
                        <button class="btn btn-secondary my-2 my-sm-0"
                                type="submit">Search
                        </button>
                      </form>
                    </div>
                  </div>
                </nav>

                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                  <div class="container-fluid">
                    <a class="navbar-brand"
                       href="#">Navbar
                    </a>
                    <button class="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarColor03"
                            aria-controls="navbarColor03"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse"
                         id="navbarColor03">
                      <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                          <a class="nav-link active"
                             href="#">Home
                            <span class="visually-hidden">(current)</span>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link"
                             href="#">Features
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link"
                             href="#">Pricing
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link"
                             href="#">About
                          </a>
                        </li>
                        <li class="nav-item dropdown">
                          <a class="nav-link dropdown-toggle"
                             data-bs-toggle="dropdown"
                             href="#"
                             role="button"
                             aria-haspopup="true"
                             aria-expanded="false">Dropdown
                          </a>
                          <div class="dropdown-menu">
                            <a class="dropdown-item"
                               href="#">Action
                            </a>
                            <a class="dropdown-item"
                               href="#">Another action
                            </a>
                            <a class="dropdown-item"
                               href="#">Something else here
                            </a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item"
                               href="#">Separated link
                            </a>
                          </div>
                        </li>
                      </ul>
                      <form class="d-flex">
                        <input class="form-control me-sm-2"
                               type="text"
                               placeholder="Search">
                        <button class="btn btn-secondary my-2 my-sm-0"
                                type="submit">Search
                        </button>
                      </form>
                    </div>
                  </div>
                </nav>

                @include('frontend::html.partials.header')
              </div>
            </div>

            <div id="navs-tabs"
                 class="bd-example">
              <h2 class="mb-block-small h6">Navs</h2>
              <div class="vstack gap-1">

                <div>
                  <ul class="nav">
                    <li class="nav-item">
                      <x-frontend::link link="#"
                                        aria-current="page"
                                        label="Active"
                                        class="nav-link active"/>
                    </li>
                    <li class="nav-item">
                      <x-frontend::link link="#"
                                        aria-current="page"
                                        label="Link"
                                        class="nav-link"/>
                    </li>
                    <li class="nav-item">
                      <x-frontend::link link="#"
                                        aria-current="page"
                                        label="Link"
                                        class="nav-link"/>
                    </li>
                    <li class="nav-item">
                      <x-frontend::link link="#"
                                        aria-current="page"
                                        label="Link"
                                        class="nav-link disabled"/>
                    </li>
                  </ul>
                </div>

                <div>
                  <ul class="nav justify-content-center">
                    <li class="nav-item">
                      <x-frontend::link link="#"
                                        aria-current="page"
                                        label="Active"
                                        class="nav-link active"/>
                    </li>
                    <li class="nav-item">
                      <x-frontend::link link="#"
                                        aria-current="page"
                                        label="Link"
                                        class="nav-link"/>
                    </li>
                    <li class="nav-item">
                      <x-frontend::link link="#"
                                        aria-current="page"
                                        label="Link"
                                        class="nav-link"/>
                    </li>
                    <li class="nav-item">
                      <x-frontend::link link="#"
                                        aria-current="page"
                                        label="Link"
                                        class="nav-link disabled"/>
                    </li>
                  </ul>
                </div>

                <div>
                  <ul class="nav justify-content-end">
                    <li class="nav-item">
                      <x-frontend::link link="#"
                                        aria-current="page"
                                        label="Active"
                                        class="nav-link active"/>
                    </li>
                    <li class="nav-item">
                      <x-frontend::link link="#"
                                        aria-current="page"
                                        label="Link"
                                        class="nav-link"/>
                    </li>
                    <li class="nav-item">
                      <x-frontend::link link="#"
                                        aria-current="page"
                                        label="Link"
                                        class="nav-link"/>
                    </li>
                    <li class="nav-item">
                      <x-frontend::link link="#"
                                        aria-current="page"
                                        label="Link"
                                        class="nav-link disabled"/>
                    </li>
                  </ul>
                </div>

                <div>
                  <ul class="nav vstack align-content-start">
                    <li class="nav-item">
                      <x-frontend::link link="#"
                                        aria-current="page"
                                        label="Active"
                                        class="nav-link active"/>
                    </li>
                    <li class="nav-item">
                      <x-frontend::link link="#"
                                        aria-current="page"
                                        label="Link"
                                        class="nav-link"/>
                    </li>
                    <li class="nav-item">
                      <x-frontend::link link="#"
                                        aria-current="page"
                                        label="Link"
                                        class="nav-link"/>
                    </li>
                    <li class="nav-item">
                      <x-frontend::link link="#"
                                        aria-current="page"
                                        label="Link"
                                        class="nav-link disabled"/>
                    </li>
                  </ul>
                </div>

                <div>
                  <hr>
                  <h2 class="fs-xlarge">Example nav-tabs</h2>

                  <ul class="nav nav-tabs">
                    <li class="nav-item">
                      <x-frontend::link link="#"
                                        aria-current="page"
                                        label="Active"
                                        class="nav-link active"/>
                    </li>
                    <li class="nav-item">
                      <x-frontend::link link="#"
                                        aria-current="page"
                                        label="Link"
                                        class="nav-link"/>
                    </li>
                    <li class="nav-item">
                      <x-frontend::link link="#"
                                        aria-current="page"
                                        label="Link"
                                        class="nav-link"/>
                    </li>
                    <li class="nav-item">
                      <x-frontend::link link="#"
                                        aria-current="page"
                                        label="Link"
                                        class="nav-link disabled"/>
                    </li>
                  </ul>
                </div>

                <div>
                  <hr>
                  <h2 class="fs-xlarge">Example nav-tabs with dropdown</h2>

                  <ul class="nav nav-tabs">
                    <li class="nav-item">
                      <x-frontend::link link="#"
                                        aria-current="page"
                                        label="Active"
                                        class="nav-link active"/>
                    </li>
                    <li class="nav-item dropdown">
                      <x-frontend::link link="#"
                                        title="Ir para Contato"
                                        aria-label="Link para Contato"
                                        label="Produtos"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        class="nav-link dropdown-toggle"/>
                      <ul class="dropdown-menu">
                        <li>
                          <x-frontend::link link="/html/"
                                            title="Ir para Produto 1"
                                            aria-label="Link para Produto 1"
                                            label="Produto 1"
                                            class="dropdown-item"/>
                        </li>
                        <li>
                          <x-frontend::link link="/html/"
                                            title="Ir para Produto 2"
                                            aria-label="Link para Produto 2"
                                            label="Produto 2"
                                            class="dropdown-item"/>
                        </li>
                        <li>
                          <x-frontend::link link="/html/"
                                            title="Ir para Produto 3"
                                            aria-label="Link para Produto 3"
                                            label="Produto 3"
                                            class="dropdown-item"/>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item">
                      <x-frontend::link link="#"
                                        aria-current="page"
                                        label="Link"
                                        class="nav-link"/>
                    </li>
                    <li class="nav-item">
                      <x-frontend::link link="#"
                                        aria-current="page"
                                        label="Link"
                                        class="nav-link"/>
                    </li>
                    <li class="nav-item">
                      <x-frontend::link link="#"
                                        aria-current="page"
                                        label="Link"
                                        class="nav-link disabled"/>
                    </li>
                  </ul>
                </div>

                <div>
                  <hr>
                  <h2 class="fs-xlarge">Example nav-pills</h2>

                  <ul class="nav nav-pills">
                    <li class="nav-item">
                      <x-frontend::link link="#"
                                        aria-current="page"
                                        label="Active"
                                        class="nav-link active"/>
                    </li>
                    <li class="nav-item">
                      <x-frontend::link link="#"
                                        aria-current="page"
                                        label="Link"
                                        class="nav-link"/>
                    </li>
                    <li class="nav-item">
                      <x-frontend::link link="#"
                                        aria-current="page"
                                        label="Link"
                                        class="nav-link"/>
                    </li>
                    <li class="nav-item">
                      <x-frontend::link link="#"
                                        aria-current="page"
                                        label="Link"
                                        class="nav-link disabled"/>
                    </li>
                  </ul>

                </div>

                <div>
                  <hr>
                  <h2 class="fs-xlarge">Example nav-pills with dropdown</h2>

                  <ul class="nav nav-pills">
                    <li class="nav-item">
                      <x-frontend::link link="#"
                                        aria-current="page"
                                        label="Active"
                                        class="nav-link active"/>
                    </li>
                    <li class="nav-item">
                      <x-frontend::link link="#"
                                        aria-current="page"
                                        label="Link"
                                        class="nav-link"/>
                    </li>
                    <li class="nav-item">
                      <x-frontend::link link="#"
                                        aria-current="page"
                                        label="Link"
                                        class="nav-link"/>
                    </li>
                    <li class="nav-item dropdown">
                      <x-frontend::link link="#"
                                        title="Ir para Contato"
                                        aria-label="Link para Contato"
                                        label="Produtos"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        class="nav-link dropdown-toggle"/>
                      <ul class="dropdown-menu">
                        <li>
                          <x-frontend::link link="/html/"
                                            title="Ir para Produto 1"
                                            aria-label="Link para Produto 1"
                                            label="Produto 1"
                                            class="dropdown-item"/>
                        </li>
                        <li>
                          <x-frontend::link link="/html/"
                                            title="Ir para Produto 2"
                                            aria-label="Link para Produto 2"
                                            label="Produto 2"
                                            class="dropdown-item"/>
                        </li>
                        <li>
                          <x-frontend::link link="/html/"
                                            title="Ir para Produto 3"
                                            aria-label="Link para Produto 3"
                                            label="Produto 3"
                                            class="dropdown-item"/>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item">
                      <x-frontend::link link="#"
                                        aria-current="page"
                                        label="Link"
                                        class="nav-link disabled"/>
                    </li>
                  </ul>

                </div>

                <div>
                  <hr>
                  <h2 class="fs-xlarge">Example nav-underline</h2>

                  <ul class="nav nav-underline">
                    <li class="nav-item">
                      <x-frontend::link link="#"
                                        aria-current="page"
                                        label="Active"
                                        class="nav-link active"/>
                    </li>
                    <li class="nav-item">
                      <x-frontend::link link="#"
                                        aria-current="page"
                                        label="Link"
                                        class="nav-link"/>
                    </li>
                    <li class="nav-item">
                      <x-frontend::link link="#"
                                        aria-current="page"
                                        label="Link"
                                        class="nav-link"/>
                    </li>
                    <li class="nav-item">
                      <x-frontend::link link="#"
                                        aria-current="page"
                                        label="Link"
                                        class="nav-link disabled"/>
                    </li>
                  </ul>

                </div>

                <div>
                  <hr>
                  <h2 class="fs-xlarge">Example nav-pills fill and justify</h2>

                  <ul class="nav nav-pills nav-fill">
                    <li class="nav-item">
                      <x-frontend::link link="#"
                                        aria-current="page"
                                        label="Active"
                                        class="nav-link active"/>
                    </li>
                    <li class="nav-item">
                      <x-frontend::link link="#"
                                        aria-current="page"
                                        label="Link"
                                        class="nav-link"/>
                    </li>
                    <li class="nav-item">
                      <x-frontend::link link="#"
                                        aria-current="page"
                                        label="Link"
                                        class="nav-link"/>
                    </li>
                    <li class="nav-item">
                      <x-frontend::link link="#"
                                        aria-current="page"
                                        label="Link"
                                        class="nav-link disabled"/>
                    </li>
                  </ul>

                </div>

                <div>
                  <hr>
                  <h2 class="fs-xlarge">Example nav-pills justify</h2>

                  <ul class="nav nav-pills nav-justified">
                    <li class="nav-item">
                      <x-frontend::link link="#"
                                        aria-current="page"
                                        label="Active"
                                        class="nav-link active"/>
                    </li>
                    <li class="nav-item">
                      <x-frontend::link link="#"
                                        aria-current="page"
                                        label="Link"
                                        class="nav-link"/>
                    </li>
                    <li class="nav-item">
                      <x-frontend::link link="#"
                                        aria-current="page"
                                        label="Link"
                                        class="nav-link"/>
                    </li>
                    <li class="nav-item">
                      <x-frontend::link link="#"
                                        aria-current="page"
                                        label="Link"
                                        class="nav-link disabled"/>
                    </li>
                  </ul>

                </div>

              </div>
            </div>

          </div>

          <div class="vstack gap-block-small gap-md-block"
               data-bs-spy="scroll"
               data-bs-target="#nav-links-content"
               data-bs-smooth-scroll="true"
               tabindex="0">

            <div id="typography"
                 class="bd-example">
              <h2 class="mb-block-small h6">Typography</h2>
              <div class="vstack gap-1">

                <div>
                  <h1>Heading 1</h1>
                  <h2>Heading 2</h2>
                  <h3>Heading 3</h3>
                  <h4>Heading 4</h4>
                  <h5>Heading 5</h5>
                  <h6>Heading 6</h6>
                </div>

                <div>
                  <hr>
                  <h2 class="fs-xlarge">Example text-muted and lead</h2>
                  <h3>
                    Heading
                    <small class="text-muted">with muted text</small>
                  </h3>
                  <p class="lead">
                    Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                    dolor auctor.
                  </p>
                </div>

                <div>
                  <hr>
                  <h2 class="fs-xlarge">Example body text</h2>
                  <p>Nullam quis risus eget
                    <x-frontend::link link="#"
                                      label="urna mollis ornare"/>
                     vel eu leo. Cum sociis natoque
                     penatibus et magnis dis parturient montes, nascetur
                     ridiculus mus. Nullam id dolor id nibh
                     ultricies vehicula.
                  </p>
                  <p>
                    <small>This line of text is meant to be treated as fine
                           print.
                    </small>
                  </p>
                  <p>The following is <strong>rendered as bold text</strong>.
                  </p>
                  <p>The following is <em>rendered as italicized text</em>.
                  </p>
                  <p>An abbreviation of the word attribute is
                    <abbr title="attribute">attr</abbr>.
                  </p>
                </div>

                <div>
                  <hr>
                  <h2 class="fs-xlarge">Example list-unstyled</h2>
                  <ul class="list-unstyled">
                    <li>This is a list.</li>
                    <li>It appears completely unstyled.</li>
                    <li>Structurally, it's still a list.</li>
                    <li>However, this style only applies to immediate child
                        elements.
                    </li>
                    <li>Nested lists:
                      <ul>
                        <li>are unaffected by this style</li>
                        <li>will still show a bullet</li>
                        <li>and have appropriate left margin</li>
                      </ul>
                    </li>
                    <li>This may still come in handy in some situations.</li>
                  </ul>
                </div>

                <div>
                  <hr>
                  <h2 class="fs-xlarge">Example list-inline</h2>
                  <ul class="list-inline">
                    <li class="list-inline-item">This is a list item.</li>
                    <li class="list-inline-item">And another one.</li>
                    <li class="list-inline-item">But they're displayed inline.
                    </li>
                  </ul>
                </div>

                <div>
                  <hr>
                  <h2 class="fs-xlarge">Example blockquotes</h2>
                  <div class="row gy-block-small">
                    <div class="col-md-4">
                      <figure>
                        <blockquote class="blockquote">
                          <p class="mb-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Integer posuere
                            erat a ante.
                          </p>

                        </blockquote>
                        <figcaption class="blockquote-footer">
                          Someone famous in <cite title="Source Title">
                          Source Title</cite>
                        </figcaption>
                      </figure>
                    </div>
                    <div class="col-md-4">
                      <figure class="text-center">
                        <blockquote class="blockquote">
                          <p class="mb-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Integer posuere
                            erat a ante.
                          </p>

                        </blockquote>
                        <figcaption class="blockquote-footer">
                          Someone famous in <cite title="Source Title">
                          Source Title</cite>
                        </figcaption>
                      </figure>
                    </div>
                    <div class="col-md-4">
                      <figure class="text-end">
                        <blockquote class="blockquote">
                          <p class="mb-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Integer posuere
                            erat a ante.
                          </p>

                        </blockquote>
                        <figcaption class="blockquote-footer">
                          Someone famous in <cite title="Source Title">
                          Source Title</cite>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div id="tables"
                 class="bd-example">
              <h2 class="mb-block-small h6">Tables</h2>
              <div class="vstack gap-1">
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
              </div>
            </div>

          </div>

          <div class="vstack gap-block-small gap-md-block"
               data-bs-spy="scroll"
               data-bs-target="#nav-links-forms"
               data-bs-smooth-scroll="true"
               tabindex="0">

            <div id="form-control"
                 class="bd-example">

              <h2 class="mb-block-small h6">Form Control</h2>
              <div class="vstack gap-1">

                <div>
                  <div class="row gy-block-small">
                    <div class="col-md-6">
                      <label for="exampleFormControlInput1"
                             class="form-label">Example input
                      </label>
                      <input type="text"
                             class="form-control"
                             id="exampleFormControlInput1"
                             placeholder="">
                    </div>
                    <div class="col-md-6">
                      <label for="exampleFormControlTextarea1"
                             class="form-label">Example textarea
                      </label>
                      <textarea class="form-control"
                                id="exampleFormControlTextarea1"
                                rows="3"></textarea>
                    </div>
                  </div>
                </div>

                <div>
                  <hr>
                  <h2 class="fs-xlarge">Example Sizing</h2>

                  <div class="row gy-block-small">
                    <div class="col-md-4">
                      <label class="col-form-label col-form-label-sm"
                             for="inputSmall">Small input
                      </label>
                      <input class="form-control form-control-sm"
                             type="text"
                             placeholder=".form-control-sm"
                             id="inputSmall">
                    </div>
                    <div class="col-md-4">
                      <label class="col-form-label"
                             for="inputDefault">Default input
                      </label>
                      <input type="text"
                             class="form-control"
                             placeholder="Default input"
                             id="inputDefault">
                    </div>
                    <div class="col-md-4">
                      <label class="col-form-label col-form-label-lg"
                             for="inputLarge">Large input
                      </label>
                      <input class="form-control form-control-lg"
                             type="text"
                             placeholder=".form-control-lg"
                             id="inputLarge">
                    </div>
                  </div>
                </div>

                <div>
                  <hr>
                  <h2 class="fs-xlarge">Example Form text</h2>

                  <div class="row align-items-center">
                    <div class="col-12">
                      <label for="inputPassword6"
                             class="col-form-label">Password
                      </label>
                    </div>
                    <div class="col-12">
                      <input type="password"
                             id="inputPassword6"
                             class="form-control"
                             aria-describedby="passwordHelpInline">
                    </div>
                    <div class="col-12">
                      <span id="passwordHelpInline"
                            class="form-text">
                        Must be 8-20 characters long.
                      </span>
                    </div>
                  </div>

                </div>

                <div>
                  <hr>
                  <h2 class="fs-xlarge">Example Disabled Input</h2>

                  <div>
                    <label class="form-label"
                           for="disabledInput">Disabled input
                    </label>
                    <input class="form-control"
                           id="disabledInput"
                           type="text"
                           placeholder="Disabled input here..."
                           disabled>
                  </div>
                </div>

                <div>
                  <hr>
                  <h2 class="fs-xlarge">Example Readonly Input</h2>

                  <div>
                    <label class="form-label"
                           for="readOnlyInput">Readonly input
                    </label>
                    <input class="form-control"
                           id="readOnlyInput"
                           type="text"
                           placeholder="Readonly input here..."
                           readonly>
                  </div>
                </div>

                <div>
                  <hr>
                  <h2 class="fs-xlarge">Example File Input</h2>

                  <div class="row gy-1">
                    <div class="col-md-6">
                      <label for="formFileSm"
                             class="form-label">Small file input example
                      </label>
                      <input class="form-control form-control-sm"
                             id="formFileSm"
                             type="file">
                    </div>
                    <div class="col-md-6">
                      <label for="formFile"
                             class="form-label">Default file input example
                      </label>
                      <input class="form-control"
                             type="file"
                             id="formFile">
                    </div>
                    <div class="col-md-6">
                      <label for="formFileLg"
                             class="form-label">Large file input example
                      </label>
                      <input class="form-control form-control-lg"
                             id="formFileLg"
                             type="file">
                    </div>
                    <div class="col-md-6">
                      <label for="formFileMultiple"
                             class="form-label">Multiple files input example
                      </label>
                      <input class="form-control"
                             type="file"
                             id="formFileMultiple"
                             multiple>
                    </div>
                    <div class="col-md-6">
                      <label for="formFileDisabled"
                             class="form-label">Disabled file input example
                      </label>
                      <input class="form-control"
                             type="file"
                             id="formFileDisabled"
                             disabled>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            <div id="form-select"
                 class="bd-example">

              <h2 class="h6">Form Select</h2>
              <div class="vstack gap-1">

                <div>
                  <div class="row gy-block-small">
                    <div class="col-md-6">
                      <label for="defaultSelect"
                             class="form-label mt-1h">Example select
                      </label>
                      <select class="form-select"
                              id="defaultSelect"
                              aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div class="col-md-6">
                      <label for="multipleSelect"
                             class="form-label mt-1h">Example multiple select
                      </label>
                      <select class="form-select"
                              id="multipleSelect"
                              multiple
                              aria-label="Multiple select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <hr>
                  <h2 class="fs-xlarge">Example Sizing</h2>

                  <div class="row gy-block-small">
                    <div class="col-md-4">
                      <label class="col-form-label col-form-label-sm"
                             for="selectDefault">Small select
                      </label>
                      <select class="form-select form-select-sm"
                              aria-label="Small select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div class="col-md-4">
                      <label class="col-form-label"
                             for="selectDefault">Default select
                      </label>
                      <select class="form-select"
                              id="selectDefault"
                              aria-label="Large select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div class="col-md-4">
                      <label class="col-form-label col-form-label-lg"
                             for="selectLarge">Large select
                      </label>
                      <select class="form-select form-select-lg"
                              id="selectLarge"
                              aria-label="Large select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <hr>
                  <h2 class="fs-xlarge">Example Disabled Input</h2>

                  <div>
                    <label for="disabledSelect"
                           class="form-label mt-1h">Disabled select
                    </label>
                    <select class="form-select"
                            id="disabledSelect"
                            aria-label="Disabled select example"
                            disabled>
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>

              </div>

            </div>

            <div id="checks-radios"
                 class="bd-example">

              <h2 class="h6">Checkbox</h2>
              <div class="vstack gap-1">

                <div>
                  <div class="form-check">
                    <input class="form-check-input"
                           type="checkbox"
                           value=""
                           id="flexCheckDefault">
                    <label class="form-check-label"
                           for="flexCheckDefault">
                      Default checkbox
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input"
                           type="checkbox"
                           value=""
                           id="flexCheckChecked"
                           checked>
                    <label class="form-check-label"
                           for="flexCheckChecked">
                      Checked checkbox
                    </label>
                  </div>
                </div>

                <div>
                  <hr>
                  <h2 class="fs-xlarge">Example Disabled Checkbox</h2>

                  <div class="form-check">
                    <input class="form-check-input"
                           type="checkbox"
                           value=""
                           id="flexCheckDisabled"
                           disabled>
                    <label class="form-check-label"
                           for="flexCheckDisabled">
                      Disabled checkbox
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input"
                           type="checkbox"
                           value=""
                           id="flexCheckCheckedDisabled"
                           checked
                           disabled>
                    <label class="form-check-label"
                           for="flexCheckCheckedDisabled">
                      Disabled checked checkbox
                    </label>
                  </div>
                </div>

                <div>
                  <hr>
                  <h2 class="fs-xlarge">Example Radio</h2>

                  <div class="form-check">
                    <input class="form-check-input"
                           type="radio"
                           name="flexRadioDefault"
                           id="flexRadioDefault1">
                    <label class="form-check-label"
                           for="flexRadioDefault1">
                      Default radio
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input"
                           type="radio"
                           name="flexRadioDefault"
                           id="flexRadioDefault2"
                           checked>
                    <label class="form-check-label"
                           for="flexRadioDefault2">
                      Default checked radio
                    </label>
                  </div>
                </div>

                <div>
                  <hr>
                  <h2 class="fs-xlarge">Example Disabled Radio</h2>

                  <div class="form-check">
                    <input class="form-check-input"
                           type="radio"
                           name="flexRadioDisabled"
                           id="flexRadioDisabled"
                           disabled>
                    <label class="form-check-label"
                           for="flexRadioDisabled">
                      Disabled radio
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input"
                           type="radio"
                           name="flexRadioDisabled"
                           id="flexRadioCheckedDisabled"
                           checked
                           disabled>
                    <label class="form-check-label"
                           for="flexRadioCheckedDisabled">
                      Disabled checked radio
                    </label>
                  </div>
                </div>

                <div>
                  <hr>
                  <h2 class="fs-xlarge">Example switches</h2>

                  <div class="form-check form-switch">
                    <input class="form-check-input"
                           type="checkbox"
                           role="switch"
                           id="flexSwitchCheckDefault">
                    <label class="form-check-label"
                           for="flexSwitchCheckDefault">
                      Default switch checkbox input
                    </label>
                  </div>
                  <div class="form-check form-switch">
                    <input class="form-check-input"
                           type="checkbox"
                           role="switch"
                           id="flexSwitchCheckChecked"
                           checked>
                    <label class="form-check-label"
                           for="flexSwitchCheckChecked">
                      Checked switch checkbox input
                    </label>
                  </div>
                  <div class="form-check form-switch">
                    <input class="form-check-input"
                           type="checkbox"
                           role="switch"
                           id="flexSwitchCheckDisabled"
                           disabled>
                    <label class="form-check-label"
                           for="flexSwitchCheckDisabled">
                      Disabled switch checkbox input
                    </label>
                  </div>
                  <div class="form-check form-switch">
                    <input class="form-check-input"
                           type="checkbox"
                           role="switch"
                           id="flexSwitchCheckCheckedDisabled"
                           checked
                           disabled>
                    <label class="form-check-label"
                           for="flexSwitchCheckCheckedDisabled">
                      Disabled checked switch checkbox input
                    </label>
                  </div>

                </div>

                <div>
                  <hr>
                  <h2 class="fs-xlarge">Example checkbox inline</h2>

                  <div class="form-check form-check-inline">
                    <input class="form-check-input"
                           type="checkbox"
                           id="inlineCheckbox1"
                           value="option1">
                    <label class="form-check-label"
                           for="inlineCheckbox1">1
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input"
                           type="checkbox"
                           id="inlineCheckbox2"
                           value="option2">
                    <label class="form-check-label"
                           for="inlineCheckbox2">2
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input"
                           type="checkbox"
                           id="inlineCheckbox3"
                           value="option3"
                           disabled>
                    <label class="form-check-label"
                           for="inlineCheckbox3">3 (disabled)
                    </label>
                  </div>

                </div>

                <div>
                  <hr>
                  <h2 class="fs-xlarge">Example radio inline</h2>

                  <div class="form-check form-check-inline">
                    <input class="form-check-input"
                           type="radio"
                           name="inlineRadioOptions"
                           id="inlineRadio1"
                           value="option1">
                    <label class="form-check-label"
                           for="inlineRadio1">1
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input"
                           type="radio"
                           name="inlineRadioOptions"
                           id="inlineRadio2"
                           value="option2">
                    <label class="form-check-label"
                           for="inlineRadio2">2
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input"
                           type="radio"
                           name="inlineRadioOptions"
                           id="inlineRadio3"
                           value="option3"
                           disabled>
                    <label class="form-check-label"
                           for="inlineRadio3">3 (disabled)
                    </label>
                  </div>

                </div>

                <div>
                  <hr>
                  <h2 class="fs-xlarge">Example checkbox toggle buttons</h2>

                  <input type="checkbox"
                         class="btn-check"
                         id="btn-check"
                         autocomplete="off">
                  <label class="btn btn-primary"
                         for="btn-check">Single toggle
                  </label>

                  <input type="checkbox"
                         class="btn-check"
                         id="btn-check-2"
                         checked
                         autocomplete="off">
                  <label class="btn btn-primary"
                         for="btn-check-2">Checked
                  </label>

                  <input type="checkbox"
                         class="btn-check"
                         id="btn-check-3"
                         autocomplete="off"
                         disabled>
                  <label class="btn btn-primary"
                         for="btn-check-3">Disabled
                  </label>

                  <input type="checkbox"
                         class="btn-check"
                         id="btn-check-4"
                         autocomplete="off">
                  <label class="btn"
                         for="btn-check-4">Single toggle
                  </label>

                  <input type="checkbox"
                         class="btn-check"
                         id="btn-check-5"
                         checked
                         autocomplete="off">
                  <label class="btn"
                         for="btn-check-5">Checked
                  </label>

                  <input type="checkbox"
                         class="btn-check"
                         id="btn-check-6"
                         autocomplete="off"
                         disabled>
                  <label class="btn"
                         for="btn-check-6">Disabled
                  </label>

                </div>

                <div>
                  <hr>
                  <h2 class="fs-xlarge">Example radio toggle buttons</h2>

                  <input type="radio"
                         class="btn-check"
                         name="options"
                         id="option1"
                         autocomplete="off"
                         checked>
                  <label class="btn btn-secondary"
                         for="option1">Checked
                  </label>

                  <input type="radio"
                         class="btn-check"
                         name="options"
                         id="option2"
                         autocomplete="off">
                  <label class="btn btn-secondary"
                         for="option2">Radio
                  </label>

                  <input type="radio"
                         class="btn-check"
                         name="options"
                         id="option3"
                         autocomplete="off"
                         disabled>
                  <label class="btn btn-secondary"
                         for="option3">Disabled
                  </label>

                  <input type="radio"
                         class="btn-check"
                         name="options"
                         id="option4"
                         autocomplete="off">
                  <label class="btn btn-secondary"
                         for="option4">Radio
                  </label>

                  <input type="radio"
                         class="btn-check"
                         name="options-base"
                         id="option5"
                         autocomplete="off"
                         checked>
                  <label class="btn"
                         for="option5">Checked
                  </label>

                  <input type="radio"
                         class="btn-check"
                         name="options-base"
                         id="option6"
                         autocomplete="off">
                  <label class="btn"
                         for="option6">Radio
                  </label>

                  <input type="radio"
                         class="btn-check"
                         name="options-base"
                         id="option7"
                         autocomplete="off"
                         disabled>
                  <label class="btn"
                         for="option7">Disabled
                  </label>

                  <input type="radio"
                         class="btn-check"
                         name="options-base"
                         id="option8"
                         autocomplete="off">
                  <label class="btn"
                         for="option8">Radio
                  </label>

                </div>

                <div>
                  <hr>
                  <h2 class="fs-xlarge">Example outlined styles</h2>

                  <input type="checkbox"
                         class="btn-check"
                         id="btn-check-outlined"
                         autocomplete="off">
                  <label class="btn btn-outline-primary"
                         for="btn-check-outlined">Single toggle
                  </label>

                  <input type="checkbox"
                         class="btn-check"
                         id="btn-check-2-outlined"
                         checked
                         autocomplete="off">
                  <label class="btn btn-outline-secondary"
                         for="btn-check-2-outlined">Checked
                  </label>

                  <input type="radio"
                         class="btn-check"
                         name="options-outlined"
                         id="success-outlined"
                         autocomplete="off"
                         checked>
                  <label class="btn btn-outline-success"
                         for="success-outlined">Checked success radio
                  </label>

                  <input type="radio"
                         class="btn-check"
                         name="options-outlined"
                         id="danger-outlined"
                         autocomplete="off">
                  <label class="btn btn-outline-danger"
                         for="danger-outlined">Danger radio
                  </label>

                </div>

              </div>

            </div>

            <div id="range"
                 class="bd-example">

              <h2 class="h6">Range</h2>
              <div class="vstack gap-1">

                <div>
                  <label for="customRange1"
                         class="form-label">Example range
                  </label>
                  <input type="range"
                         class="form-range"
                         id="customRange1">
                </div>

                <div>
                  <hr>
                  <h2 class="fs-xlarge">Example Disabled Range</h2>

                  <label for="disabledRange"
                         class="form-label">Disabled range
                  </label>
                  <input type="range"
                         class="form-range"
                         id="disabledRange"
                         disabled>

                </div>

                <div>
                  <hr>
                  <h2 class="fs-xlarge">Example Min and max Range</h2>

                  <label for="customRange2"
                         class="form-label">Example range
                  </label>
                  <input type="range"
                         class="form-range"
                         min="0"
                         max="5"
                         id="customRange2">

                </div>

                <div>
                  <hr>
                  <h2 class="fs-xlarge">Example Steps Range</h2>

                  <label for="customRange3"
                         class="form-label">Example range
                  </label>
                  <input type="range"
                         class="form-range"
                         min="0"
                         max="5"
                         step="0.5"
                         id="customRange3">

                </div>

              </div>
            </div>

            <div id="input-group"
                 class="bd-example">

              <h2 class="h6">Input Group</h2>
              <div class="vstack gap-1">

                <div class="input-group">
                  <span class="input-group-text"
                        id="basic-addon1">@
                  </span>
                  <input type="text"
                         class="form-control"
                         placeholder="Username"
                         aria-label="Username"
                         aria-describedby="basic-addon1">
                </div>

                <div class="input-group">
                  <input type="text"
                         class="form-control"
                         placeholder="Recipient's username"
                         aria-label="Recipient's username"
                         aria-describedby="basic-addon2">
                  <span class="input-group-text"
                        id="basic-addon2">@example.com
                  </span>
                </div>

                <div class="">
                  <label for="basic-url"
                         class="form-label">
                    Your vanity URL
                  </label>
                  <div class="input-group">
                    <span class="input-group-text"
                          id="basic-addon3">https://example.com/users/
                    </span>
                    <input type="text"
                           class="form-control"
                           id="basic-url"
                           aria-describedby="basic-addon3 basic-addon4">
                  </div>
                  <div class="form-text"
                       id="basic-addon4">
                    Example help text goes outside the input group.
                  </div>
                </div>

                <div class="input-group">
                  <span class="input-group-text">$</span>
                  <input type="text"
                         class="form-control"
                         aria-label="Amount (to the nearest dollar)">
                  <span class="input-group-text">.00</span>
                </div>

                <div class="input-group">
                  <input type="text"
                         class="form-control"
                         placeholder="Username"
                         aria-label="Username">
                  <span class="input-group-text">@</span>
                  <input type="text"
                         class="form-control"
                         placeholder="Server"
                         aria-label="Server">
                </div>

                <div class="input-group">
                  <span class="input-group-text">With textarea</span>
                  <textarea class="form-control"
                            aria-label="With textarea"></textarea>
                </div>

              </div>
            </div>

            <div id="floating-label"
                 class="bd-example">

              <h2 class="h6">Floating label</h2>
              <div class="vstack gap-1">

                <div>
                  <div class="row g-1">
                    <div class="col-md-6">
                      <div class="form-floating">
                        <input type="email"
                               class="form-control"
                               id="floatingInput"
                               placeholder="name@example.com">
                        <label for="floatingInput">Email address</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-floating">
                        <input type="password"
                               class="form-control"
                               id="floatingPassword"
                               placeholder="Password">
                        <label for="floatingPassword">Password</label>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <hr>
                  <h2 class="fs-xlarge">Example Textarea</h2>
                  <div class="form-floating">
                    <textarea class="form-control"
                              placeholder="Leave a comment here"
                              id="floatingTextarea2"></textarea>
                    <label for="floatingTextarea2">Comments</label>
                  </div>
                </div>

                <div>
                  <hr>
                  <h2 class="fs-xlarge">Example Select</h2>

                  <div class="form-floating">
                    <select class="form-select"
                            id="floatingSelect"
                            aria-label="Floating label select example">
                      <option selected></option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <label for="floatingSelect">Works with selects</label>
                  </div>

                </div>

                <div>
                  <hr>
                  <h2 class="fs-xlarge">Example Disabled</h2>

                  <div class="row g-1">
                    <div class="col-md-6">
                      <div class="form-floating">
                        <input type="email"
                               class="form-control"
                               id="floatingInputDisabled"
                               placeholder="name@example.com"
                               disabled>
                        <label for="floatingInputDisabled">Email address</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-floating">
                        <textarea class="form-control"
                                  placeholder="Leave a comment here"
                                  id="floatingTextareaDisabled"
                                  disabled></textarea>
                        <label for="floatingTextareaDisabled">Comments</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-floating">
                        <textarea class="form-control"
                                  placeholder="Leave a comment here"
                                  id="floatingTextarea2Disabled"
                                  style="height: 100px"
                                  disabled>Disabled textarea with some text inside</textarea>
                        <label for="floatingTextarea2Disabled">Comments</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-floating">
                        <select class="form-select"
                                id="floatingSelectDisabled"
                                aria-label="Floating label disabled select example"
                                disabled>
                          <option selected>Open this select menu</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                        <label for="floatingSelectDisabled">Works with selects
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            <div id="validation"
                 class="bd-example">

              <h2 class="h6">Validation</h2>
              <div class="vstack gap-1">

                <form class="needs-validation"
                      novalidate>
                  <div class="row g-1">
                    <div class="col-md-4">
                      <label for="validationCustom01"
                             class="form-label">First name
                      </label>
                      <input type="text"
                             class="form-control"
                             id="validationCustom01"
                             value="Mark"
                             required>
                      <div class="valid-feedback">
                        Looks good!
                      </div>
                    </div>
                    <div class="col-md-4">
                      <label for="validationCustom02"
                             class="form-label">Last name
                      </label>
                      <input type="text"
                             class="form-control"
                             id="validationCustom02"
                             value="Otto"
                             required>
                      <div class="valid-feedback">
                        Looks good!
                      </div>
                    </div>
                    <div class="col-md-4">
                      <label for="validationCustomUsername"
                             class="form-label">Username
                      </label>
                      <div class="input-group has-validation">
                        <span class="input-group-text"
                              id="inputGroupPrepend">@
                        </span>
                        <input type="text"
                               class="form-control"
                               id="validationCustomUsername"
                               aria-describedby="inputGroupPrepend"
                               required>
                        <div class="invalid-feedback">
                          Please choose a username.
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <label for="validationCustom03"
                             class="form-label">City
                      </label>
                      <input type="text"
                             class="form-control"
                             id="validationCustom03"
                             required>
                      <div class="invalid-feedback">
                        Please provide a valid city.
                      </div>
                    </div>
                    <div class="col-md-3">
                      <label for="validationCustom04"
                             class="form-label">State
                      </label>
                      <select class="form-select"
                              id="validationCustom04"
                              required>
                        <option selected
                                disabled
                                value="">Choose...
                        </option>
                        <option>...</option>
                      </select>
                      <div class="invalid-feedback">
                        Please select a valid state.
                      </div>
                    </div>
                    <div class="col-md-3">
                      <label for="validationCustom05"
                             class="form-label">Zip
                      </label>
                      <input type="text"
                             class="form-control"
                             id="validationCustom05"
                             required>
                      <div class="invalid-feedback">
                        Please provide a valid zip.
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-check">
                        <input class="form-check-input"
                               type="checkbox"
                               value=""
                               id="invalidCheck"
                               required>
                        <label class="form-check-label"
                               for="invalidCheck">
                          Agree to terms and conditions
                        </label>
                        <div class="invalid-feedback">
                          You must agree before submitting.
                        </div>
                      </div>
                    </div>
                    <div class="col-12">
                      <button class="btn btn-primary"
                              type="submit">Submit form
                      </button>
                    </div>
                  </div>
                </form>

                <div>

                  <hr>
                  <h2 class="fs-xlarge">Example validation invalid</h2>

                  <form class="was-validated">
                    <div class="row g-1">
                      <div class="col-12">
                        <label for="validationTextarea"
                               class="form-label">Textarea
                        </label>
                        <textarea class="form-control"
                                  id="validationTextarea"
                                  placeholder="Required example textarea"
                                  required></textarea>
                        <div class="invalid-feedback">
                          Please enter a message in the textarea.
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-check">
                          <input type="checkbox"
                                 class="form-check-input"
                                 id="validationFormCheck1"
                                 required>
                          <label class="form-check-label"
                                 for="validationFormCheck1">
                            Check this checkbox
                          </label>
                          <div class="invalid-feedback">
                            Example invalid feedback text
                          </div>
                        </div>
                        <div class="form-check">
                          <input type="radio"
                                 class="form-check-input"
                                 id="validationFormCheck2"
                                 name="radio-stacked"
                                 required>
                          <label class="form-check-label"
                                 for="validationFormCheck2">
                            Toggle this radio
                          </label>
                        </div>
                        <div class="form-check">
                          <input type="radio"
                                 class="form-check-input"
                                 id="validationFormCheck3"
                                 name="radio-stacked"
                                 required>
                          <label class="form-check-label"
                                 for="validationFormCheck3">
                            Or toggle this other radio
                          </label>
                          <div class="invalid-feedback">
                            More example invalid feedback text
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <select class="form-select"
                                required
                                aria-label="select example">
                          <option value="">Open this select menu</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                        <div class="invalid-feedback">
                          Example invalid select feedback
                        </div>
                      </div>
                      <div class="col-md-6">
                        <input type="file"
                               class="form-control"
                               aria-label="file example"
                               required>
                        <div class="invalid-feedback">
                          Example invalid form file feedback
                        </div>
                      </div>
                      <div class="col-md-4">
                        <button class="btn btn-primary"
                                type="submit"
                                disabled>Submit form
                        </button>
                      </div>
                    </div>

                  </form>
                </div>

              </div>

            </div>

            <div id="livewire"
                 class="bd-example">

              <h2 class="h6">Livewire</h2>
              <div class="vstack gap-1">

                <form wire:submit.prevent="submit"
                      novalidate>
                  <div class="row gx-1 gy-1h">
                    <div class="col-12">
                      <div class="form-floating">
                        <input wire:model.lazy="name"
                               type="text"
                               id="name"
                               placeholder="Seu nome"
                               required
                               aria-label="nome"
                               class="@error('name') is-invalid @enderror form-control">
                        <label for="name"
                               class="form-label">Seu nome
                        </label>
                        @error('name')
                        <span class="invalid-feedback">
                          {{ $message }}
                        </span>
                        @enderror
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-floating">
                        <input wire:model.lazy="email"
                               type="email"
                               id="email"
                               placeholder="Seu e-mail"
                               required
                               aria-label="email"
                               class="@error('email') is-invalid @enderror form-control">
                        <label for="email"
                               class="form-label">Seu e-mail
                        </label>
                        @error('email')
                        <span class="invalid-feedback">
                          {{ $message }}
                        </span>
                        @enderror
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-floating">
                        <input wire:model.lazy="phone"
                               type="tel"
                               id="phone"
                               placeholder="Seu celular"
                               required
                               aria-label="telefone"
                               class="@error('phone') is-invalid @enderror js-mask-phone form-control">
                        <label for="phone"
                               class="form-label">Seu celular
                        </label>
                        @error('phone')
                        <span class="invalid-feedback">
                          {{ $message }}
                        </span>
                        @enderror
                      </div>
                    </div>
                    <div class="col-12 col-md-5">
                      <div class="form-floating">
                        <select wire:model.lazy="state"
                                id="state"
                                required
                                aria-label="estado"
                                class="@error('state') is-invalid @enderror form-select">
                          <option value=""></option>
                          @php $states = ['SP' => 'SP'] @endphp
                          @foreach($states as $value => $text)
                          <option value="{{ $value }}">{{ $text }}</option>
                          @endforeach
                        </select>
                        <label for="state"
                               class="form-label">Seu estado
                        </label>
                        @error('state')
                        <span class="invalid-feedback">
                          {{ $message }}
                        </span>
                        @enderror
                      </div>
                    </div>
                    <div class="col-12 col-md-7">
                      <div class="form-floating">
                        <select wire:model.lazy="city"
                                id="city"
                                required
                                aria-label="city"
                                class="@error('city') is-invalid @enderror form-select">
                          <option value=""></option>
                          @php $cities = ['São Paulo' => 'São Paulo'] @endphp
                          @foreach($cities as $value => $text)
                          <option value="{{ $value }}">{{ $text }}</option>
                          @endforeach
                        </select>
                        <label for="city"
                               class="form-label">Sua cidade
                        </label>
                        @error('city')
                        <span class="invalid-feedback">
                          {{ $message }}
                        </span>
                        @enderror
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-floating">
                        <textarea wire:model.lazy="message"
                                  id="message"
                                  placeholder="Sua mensagem"
                                  required
                                  aria-label="mensagem"
                                  rows="5"
                                  class="@error('message') is-invalid @enderror form-control"></textarea>
                        <label for="message"
                               class="form-label">Sua mensagem
                        </label>
                        @error('message')
                        <span class="invalid-feedback">
                          {{ $message }}
                        </span>
                        @enderror
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-check">
                        <input wire:model.lazy="terms"
                               type="checkbox"
                               name="privacy-terms"
                               required
                               class="form-check-input @error('terms') is-invalid @enderror"
                               id="privacy-terms">
                        <label class="form-check-label text-reset"
                               for="privacy-terms">
                          <x-frontend::privacy-terms-message/>
                        </label>

                        @error('terms')
                        <span class="d-block invalid-feedback">
                          {{ $message }}
                        </span>
                        @enderror
                      </div>
                    </div>
                    <div class="col-12">
                      <button type="submit"
                              wire:loading.attr="disabled"
                              wire:target="submit"
                              aria-label="enviar formulário"
                              class="btn btn-secondary w-100">
                        <span wire:loading.remove
                              wire:target="submit">Enviar
                        </span>
                        <span wire:loading
                              wire:target="submit">
                          Enviando...
                          <span class="spinner-grow spinner-grow-sm ms-0h"
                                role="status"
                                aria-hidden="true"></span>
                        </span>
                      </button>
                    </div>
                    <div class="mt-1 hstack gap-0hq fs-small justify-content-center align-items-center">
                      <x-frontend-icon name="ic-shield"
                                       class="ic-xs"/>
                      Seus dados estão seguros!
                    </div>
                  </div>
                </form>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  </div>
</main>
@endsection

@push('head')
<style>
  .bd-example {
    padding: 1rem;
    border: 1px solid #dee2e6;
    border-radius: .375rem;
  }

  .bd-example-code {
    padding: 1rem;
    border: 1px solid #dee2e6;
    border-radius: .375rem;
    background: #f8f9fa;
  }
</style>
@endpush

@section('footer') @endsection

@push('scripts')

@vite('resources/js/pages/theme.js')

@endpush
