<?php

namespace App\Services\Editors;


use App\Models\Shop\Category;
use App\Models\Shop\Product;
use Illuminate\Http\Request;

class ProductEditService
{
    /**
     * @var Category
     */
    protected $product;

    /**
     * ProductEditService constructor.
     *
     * @param Product $product
     */
    public function __construct(Product $product)
    {
        $this->product = $product;
    }

    /**
     * @param Request $request
     */
    public function fill(Request $request)
    {
        $this->product
            ->setName($request->get('name'))
            ->setStatus($request->get('status'))
            ->setPrice($request->get('price'));

        $this->product->save();

        $this->syncCategories($request);
    }


    /**
     * @param $request
     */
    public function syncCategories($request)
    {
        $categories = collect($request->json('categories'))
            ->map(function ($item) {
                return [
                    'category_id' => $item
                ];
            });

        if ($categories->count()) {
            $this->product->categories()->sync($categories);
        }
    }

}