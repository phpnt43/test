<script>
  import Dialog from '../../../components/Dialog';

  export default {
    name: 'ProductForm',
    extends: Dialog,

    components: {Dialog},

    props: ['id', 'name', 'image', 'status', 'categories', 'price'],

    data(){
      return {
        model: {
          id: null,
          name: null,
          image: null,
          status: null,
          categories: null,
          price: null
        },
        loading: false,
        options: [],
        url: "/backend/products"
      }
    },


    watch: {
      id: function (newVal, oldVal) {
        this.model.id = newVal;
      },
      name: function (newVal, oldVal) {
        this.model.name = newVal;
      },
      image: function (newVal, oldVal) {
        this.model.image = newVal;
      },
      status: function (newVal, oldVal) {
        this.model.status = newVal;
      },
      categories: function (newVal, oldVal) {
        this.model.categories = newVal.map(item => item.id);
        this.options = newVal;
      },
      price: function (newVal, oldVal) {
        this.model.price = newVal;
      },
    },


    methods: {
      submitted () {
        const method = this.id ? 'patch' : 'post';
        const url = this.id ? `${this.url}/${this.id}` : `${this.url}`;

        axios({
          method: method,
          url: url,
          data: this.$data.model
        }).then((resp) => {
          this.$emit('submitted', resp.data);
        });
      },


      getCategories(query) {
        if (query !== '' ) {
          axios.post(`${this.url}/categories/${query}`)
            .then((resp) => {
              this.options = resp.data;
            });
        }
      }
    }
  }
</script>

<template>
    <Dialog>
        <h3 slot="header">Редактирование Товара</h3>

        <form slot="body">
            <div class="form-group">
                Категории:
                <div>
                    <el-select
                            class="w-100"
                            v-model="model.categories"
                            multiple
                            filterable
                            remote
                            reserve-keyword
                            placeholder="Введите название категории"
                            :remote-method="getCategories"
                            :loading="loading">
                        <el-option v-for="item in options"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id">
                        </el-option>
                    </el-select>
                </div>
            </div>
            <div class="form-group">
                Название:
                <input class="form-control" type="text" v-model="model.name" name="name" required="required"/>
            </div>
            <div class="form-group">
                Статус:
                <BaseSimpleSelect v-model="model.status" required="required">
                    <option
                            v-for="(value, key) in this.$attrs.statuses"
                            :value="key"
                    >{{ value }}
                    </option>
                </BaseSimpleSelect>
            </div>
            <div class="form-group">
                Цена:
                <input class="form-control" v-model="model.price" name="price" type="number" required="required"/>
            </div>
        </form>
        <div slot="footer">
            <button type="submit" class="btn btn-primary" @click="submitted">
                Сохранить
            </button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">
                Отмена
            </button>
        </div>
    </Dialog>
</template>