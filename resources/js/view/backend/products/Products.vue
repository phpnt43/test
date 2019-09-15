<script>
  import ProductList from "./ProductList";
  import ProductForm from "./ProductForm";

  export default {
    name: 'Products',
    components: {
      ProductForm,
      ProductList
    },

    props: {
      statuses: {
        type: Object,
      },
      category: {
        type: Object,
      },
      url: {
        type: String,
        default: '/backend/products/'
      },
    },

    data: () => ({
      itemEdit: {
        type: Object,
        default: null,
      },
      paginate: {
        total: 0,
        last_page: 0,
        current_page: 0,
        count_page: 10,
        items: Array
      },
      offset: 0,
    }),

    watch: {
      category: function(newVal, oldVal) {
        if(oldVal.id && oldVal.id !== this.category.id){
          this.list();
        }
      }
    },

    methods: {
      list() {
        axios.get(`${this.url}?category_id=${this.category.id ? this.category.id : 0}&page=${this.paginate.current_page}&count_page=${this.paginate.count_page}`).then((resp) => {
          this.paginate = resp.data;
        });
      },

      createNode () {
        this.editNode(null);
      },

      editNode (item) {
        this.itemEdit = item;
        this.$refs.form.show();
      },

      formSubmit (resp) {
        this.$refs.form.hide();
        this.list();
      },


      edit (item) {
        this.editNode(item);
      },

      remove (item) {
        axios.delete(`${this.url}${item.id}`).then((resp) => {
          this.list();
        });
      },
    },

    mounted() {
      this.list();
    }
  }
</script>


<template>
    <div class="card">
        <div class="card-header">
            Товары  {{ category.name ? "( Категория : " + category.name + " )" : '' }}
            <button class="btn btn-dark float-right" @click="createNode()">+</button>
            <ProductForm
                    :category_id="category.id"
                    :url="url"
                    v-bind="itemEdit"
                    ref="form"
                    :statuses="statuses"
                    @submitted="formSubmit()"
            ></ProductForm>
        </div>

        <div class="card-body">
            <ProductList
                    :items="paginate.items"
                    @edit="edit"
                    @remove="remove"
                    :statuses="statuses"
            ></ProductList>
        </div>

        <div class="card-footer">
            <BasePaginate :pagination="paginate"
                          @paginate="list()"
                          :offset="0">
            </BasePaginate>
        </div>

    </div>
</template>