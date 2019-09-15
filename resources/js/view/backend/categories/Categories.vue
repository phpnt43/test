<script>
  import CategoryList from "./CategoryList";
  import CategoryForm from "./CategoryForm";

  export default {
    components: {
      CategoryForm,
      CategoryList
    },
    name: 'Categories',

    props: {
      statuses: {
        type: Object,
      },
      url: {
        type: String,
        default: '/backend/categories/'
      },
    },

    data: () => ({
      itemEdit: {
        type: Object,
        default: null,
      },
      itemActive: 0,
      paginate: {
        total: 0,
        last_page: 0,
        current_page: 0,
        count_page: 10,
        items: Array
      },
      offset: 0,
    }),


    methods: {
      list() {
        axios.get(`${this.url}?page=${this.paginate.current_page}&count_page=${this.paginate.count_page}`).then((resp) => {
          this.paginate = resp.data;
          this.active(resp.data.items[0]);
        });
      },

      active(item) {
        this.itemActive = item.id;
        this.$emit('active', item);
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
            Категории
            <button class="btn btn-dark float-right" @click="createNode()">+</button>
            <CategoryForm :url="url" v-bind="itemEdit" ref="form" @submitted="formSubmit()" :statuses="statuses"></CategoryForm>
        </div>

        <div class="card-body">
            <CategoryList
                    :itemActive="itemActive"
                    :statuses="statuses"
                    :items="paginate.items"
                    @edit="edit"
                    @active="active"
                    @remove="remove"
            ></CategoryList>
        </div>

        <div class="card-footer">
            <BasePaginate :pagination="paginate"
                          @paginate="list()"
                          :offset="0">
            </BasePaginate>
        </div>

    </div>
</template>