<?php

namespace App\Serializers;


use App\Models\Shop\Category;
use App\Services\Serialization\Serializer;

class PaginateSerialize extends Serializer
{
    /**
     * @var \App\Services\Serialization\Serializer
     */
    protected $itemsSerializer;

    /**
     * PaginateSerialize constructor.
     *
     * @param       $itemsSerializer
     * @param array $with
     */
    public function __construct($itemsSerializer, $with = [])
    {
        $this->itemsSerializer = is_string($itemsSerializer) ? app()->make($itemsSerializer) : $itemsSerializer;
        $this->with = $with;
    }

    /**
     * @param $data
     *
     * @return array
     */
    public function serializeData($data)
    {
        return [
            'current_page' => $data->currentPage(),
            'last_page'    => $data->lastPage(),
            'total'        => $data->total(),
            'count_page'   => $data->perPage(),
            'items'        => $this->itemsSerializer::collection($data->getCollection(), $this->with),
        ];
    }
}