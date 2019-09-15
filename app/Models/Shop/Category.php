<?php

namespace App\Models\Shop;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class Category extends Model
{
    const S_DRAFT = 0;
    const S_MODERATION = 1;
    const S_ACTIVE = 2;
    const S_DISABLED = -2;

    const STATUSES = [
        self::S_DRAFT      => 'Черновик',
        self::S_MODERATION => 'На модерации',
        self::S_ACTIVE     => 'Активный',
        self::S_DISABLED   => 'Отключен',
    ];

    /**
     * @return Category
     */
    public static function newDraft()
    {
        $instance = new self;

        return $instance;
    }

    /**
     * @param String $query
     *
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public static function giveOnRequest(String $query)
    {
        return Category::query()
            ->select(['id', 'name'])
            ->where('name', 'LIKE' , "%$query%")
            ->limit(10)
            ->get()
            ->toArray();
    }

    /**
     * @param Request $request
     * @param array   $columns
     *
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public static function allPaginate(Request $request, $columns = ['*'])
    {
        return self::query()
            ->select($columns)
            ->orderBy('id')
            ->paginate($request->get('count_page', 10));
    }

    /**
     * @param string $value
     *
     * @return Category
     */
    public function setName(string $value): self
    {
        $this->attributes['name'] = $value;
        return $this;
    }

    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->getAttributeFromArray('name');
    }

    /**
     * @param int $value
     *
     * @return Category
     */
    public function setStatus(int $value): self
    {
        $this->attributes['status'] = $value;
        return $this;
    }

    /**
     * @return int
     */
    public function getStatus(): int
    {
        return $this->getAttributeFromArray('status');
    }

    /**
     * @param int $value
     *
     * @return Category
     */
    public function setParentId(?int $value): self
    {
        $this->attributes['parent_id'] = $value;
        return $this;
    }

    /**
     * @return int
     */
    public function getParentId(): ?int
    {
        return $this->getAttributeFromArray('parent_id');
    }

}
