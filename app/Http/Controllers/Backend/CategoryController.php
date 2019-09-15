<?php

namespace App\Http\Controllers\Backend;


use App\Serializers\PaginateSerialize;
use App\Services\Editors\CategoryEditService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\Shop\Category;
use Illuminate\Support\Facades\DB;
use App\Serializers\CategorySerialize;

class CategoryController extends BackendController
{
    /**
     * @param Request $request
     *
     * @return JsonResponse
     */
    public function index(Request $request)
    {
        $serializer = new PaginateSerialize(CategorySerialize::class);

        return new JsonResponse($serializer->serializeData(Category::allPaginate($request)));
    }

    /**
     * @param Request $request
     *
     * @return array|null
     */
    public function store(Request $request)
    {
        $category = Category::newDraft();

        DB::transaction(function () use ($category, $request) {
            (new CategoryEditService($category))->fill($request);
        });

        return CategorySerialize::serialize($category);
    }


    /**
     * @param Request  $request
     * @param Category $category
     *
     * @return array|null
     */
    public function update(Request $request, Category $category)
    {

        DB::transaction(function () use ($category, $request) {
            (new CategoryEditService($category))->fill($request);
        });

        return CategorySerialize::serialize($category);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Shop\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        //
    }

}