<?php

namespace App\Serializers;


use App\Models\Shop\Category;
use App\Services\Serialization\Serializer;

class CategorySerialize extends Serializer
{

    /**
     * @param Category $model
     *
     * @return array
     */
    public function serializeData($model)
    {
        return [
            'id'        => $model->getKey(),
            'name'      => $model->getName(),
            'status'    => $model->getStatus(),
            'parent_id' => $model->getParentId(),
        ];
    }
}