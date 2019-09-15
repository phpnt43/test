<?php

namespace App\Services\Editors;


use App\Models\Shop\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CategoryEditService
{
    /**
     * @var Category
     */
    protected $category;

    /**
     * CategoryEditService constructor.
     *
     * @param Category $category
     */
    public function __construct(Category $category)
    {
        $this->category = $category;
    }

    /**
     * @param Request $request
     */
    public function fill(Request $request)
    {
        $this->category
            ->setName($request->json('name'))
            ->setStatus($request->json('status'))
            ->setParentId($request->json('parent_id'));


        $this->category->save();
    }

}