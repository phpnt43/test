@extends('layouts.app')

@section('content')
    <div class="">
        <div class="col-md-12">
            <home
                    :statuses="{{ json_encode(\App\Models\Shop\Category::STATUSES) }}"
                    :statuses_product="{{ json_encode(\App\Models\Shop\Product::STATUSES) }}"
            ></home>
        </div>
    </div>
@endsection
