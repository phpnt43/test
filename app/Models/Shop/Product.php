<?php

namespace App\Models\Shop;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Http\Request;

class Product extends Model
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
     * @return Product
     */
    public static function newDraft()
    {
        $instance = new self;

        return $instance;
    }


    /**
     * @param Request $request
     * @param array   $columns
     *
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public static function allPaginate(Request $request, $columns = ['products.*'])
    {
        $query = self::query()
            ->select($columns)
            ->orderBy('id');

        if ($request->get('category_id')) {
            $query->join('products_categories', function($query) use ($request){
                $query->on('products_categories.product_id', '=', 'products.id');
                $query->where('category_id', '=',$request->get('category_id'));
            });
        }

        return $query->paginate($request->get('count_page', 10));
    }

    /**
     * @param string $value
     *
     * @return Product
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
     * @return Product
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
     * @param int|null $value
     *
     * @return Product
     */
    public function setPrice(int $value): self
    {
        $this->attributes['price'] = $value;
        return $this;
    }

    /**
     * @return int
     */
    public function getPrice(): int
    {
        return $this->getAttributeFromArray('price');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(Category::class, 'products_categories', 'product_id', 'category_id', 'id', 'id');
    }

}
