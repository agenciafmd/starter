<?php

namespace Agenciafmd\Products\Http\Controllers;

use Agenciafmd\Products\Http\Requests\ProductRequest;
use Agenciafmd\Products\Product;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Spatie\QueryBuilder\QueryBuilder;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        session()->put('backUrl', request()->fullUrl());

        $query = QueryBuilder::for(Product::class)
            ->defaultSorts(config('local-products.default_sort'))
            ->allowedFilters((($request->filter) ? array_keys($request->get('filter')) : []));

        if ($request->is('*/trash')) {
            $query->onlyTrashed();
        }

        $view['items'] = $query->paginate($request->get('per_page', 50));

        return view('agenciafmd/products::index', $view);
    }

    public function create(Product $product)
    {
        $view['model'] = $product;

        return view('agenciafmd/products::form', $view);
    }

    public function store(ProductRequest $request)
    {
        if (Product::create($request->all())) {
            flash('Item inserido com sucesso.', 'success');
        } else {
            flash('Falha no cadastro.', 'danger');
        }

        return ($url = session()->get('backUrl')) ? redirect($url) : redirect()->route('admix.products.index');
    }

    public function show(Product $product)
    {
        $view['model'] = $product;

        return view('agenciafmd/products::form', $view);
    }

    public function edit(Product $product)
    {
        $view['model'] = $product;

        return view('agenciafmd/products::form', $view);
    }

    public function update(Product $product, ProductRequest $request)
    {
        if ($product->update($request->all())) {
            flash('Item atualizado com sucesso.', 'success');
        } else {
            flash('Falha na atualização.', 'danger');
        }

        return ($url = session()->get('backUrl')) ? redirect($url) : redirect()->route('admix.products.index');
    }

    public function destroy(Product $product)
    {
        if ($product->delete()) {
            flash('Item removido com sucesso.', 'success');
        } else {
            flash('Falha na remoção.', 'danger');
        }

        return ($url = session()->get('backUrl')) ? redirect($url) : redirect()->route('admix.products.index');
    }

    public function restore($id)
    {
        $product = Product::onlyTrashed()
            ->find($id);

        if (!$product) {
            flash('Item já restaurado.', 'danger');
        } elseif ($product->restore()) {
            flash('Item restaurado com sucesso.', 'success');
        } else {
            flash('Falha na restauração.', 'danger');
        }

        return ($url = session()->get('backUrl')) ? redirect($url) : redirect()->route('admix.products.index');
    }

    public function batchDestroy(Request $request)
    {
        if (Product::destroy($request->get('id', []))) {
            flash('Item removido com sucesso.', 'success');
        } else {
            flash('Falha na remoção.', 'danger');
        }

        return ($url = session()->get('backUrl')) ? redirect($url) : redirect()->route('admix.products.index');
    }

    public function batchRestore(Request $request)
    {
        $product = Product::onlyTrashed()
            ->whereIn('id', $request->get('id', []))
            ->restore();

        if ($product) {
            flash('Item restaurado com sucesso.', 'success');
        } else {
            flash('Falha na restauração.', 'danger');
        }

        return ($url = session()->get('backUrl')) ? redirect($url) : redirect()->route('admix.products.index');
    }
}
