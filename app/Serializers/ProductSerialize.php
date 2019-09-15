<?php

namespace App\Serializers;


use App\Models\Shop\Product;
use App\Services\Serialization\Serializer;

class ProductSerialize extends Serializer
{
    /**
     * @var array
     */
    protected $related = [
        'categories' => CategorySerialize::class,
    ];

    /**
     * @param Product $model
     *
     * @return array
     */
    public function serializeData($model)
    {
        return [
            'id'     => $model->getKey(),
            'name'   => $model->getName(),
            'status' => $model->getStatus(),
            'price'  => $model->getPrice(),
        ];
    }
}