<script>
  import Categories from "./categories/Categories";
  import Products from "./products/Products";

  export default {
    name: 'Home',
    components: {
      Categories,
      Products,
    },

    props: {
      statuses: {
        type: Object,
      },
      statuses_product: {
        type: Object,
      },
    },


    data () {
      return {
        category: {
          type: Object,
        },
      }
    },

    methods: {
      setCategory(item){
        this.category = item;
      }
    }
  }
</script>


<template>
    <div class="row justify-content-center">
        <div class="col-md-4">
            <Categories
                    @active="setCategory"
                    :category="category"
                    :statuses="statuses"
            ></Categories>
        </div>

        <div class="col-md-8">
            <Products
                    :category="category"
                    :statuses="statuses_product"
            ></Products>
        </div>
    </div>
</template>