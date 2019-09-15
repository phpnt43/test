<?php

namespace App\Services\Serialization;

use Carbon\Carbon;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;

/**
 * @property  serializer
 */
abstract class Serializer
{

    /**
     * @var array
     */
    protected $with = [];

    /**
     * @var array
     */
    protected $related;

    /**
     * @param $model
     *
     * @return array
     */
    abstract public function serializeData($model);

    /**
     * @return mixed
     */
    public static function getSerializer()
    {
        return app()->make(static::class);
    }

    /**
     * @param       $collection
     * @param array $with
     *
     * @return array
     */
    public static function collection($collection, $with = [])
    {
        return collect($collection)
            ->map(function ($item) use ($with) {
                return self::serializeDataWith($item, $with);
            })
            ->all();
    }

    /**
     * @param       $model
     * @param array $with
     *
     * @return array|null
     */
    public static function serialize($model, $with = []): array
    {
        if (is_null($model)) {
            return null;
        }

        if (is_array($model) || $model instanceof Collection) {
            return self::collection($model, $with);
        }

        return self::serializeDataWith($model, $with);
    }

    /**
     * @param $model
     * @param $with
     *
     * @return array
     */
    public static function serializeDataWith($model, $with)
    {
        $serializer = self::getSerializer();

        $result = $serializer->serializeData($model);

        foreach ($with as $related) {
            $result[$related] = $serializer->serializeRelated($model, $related);
        }

        return $result;
    }


    /**
     * @param $model
     * @param $related
     *
     * @return null
     */
    protected  function serializeRelated($model, $related)
    {
        if(isset($this->related[$related])){
            $serialize = new $this->related[$related];
            return $serialize::collection($model->$related);
        }

        return null;
    }

    /**
     * @param       $data
     * @param array $with
     *
     * @return string
     */
    public static function json($data, $with = [])
    {
        return json_encode(static::serialize($data, $with));
    }
}