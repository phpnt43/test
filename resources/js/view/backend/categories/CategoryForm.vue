<script>
  import Dialog from '../../../components/Dialog';

  export default {
    name: 'CategoryForm',
    extends: Dialog,

    components: {Dialog},

    props: ['id', 'name', 'image', 'status', 'parent_id'],

    data(){
      return {
        model: {
          id: null,
          name: null,
          image: null,
          status: null,
          parent_id: null
        },
        url: "/backend/categories"
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
      parent_id: function (newVal, oldVal) {
        this.model.parent_id = newVal;
      },
    },


    methods: {
      submitted (e) {
        console.log(e);
        const method = this.id ? 'patch' : 'post';
        const url = this.id ? `${this.url}/${this.id}` : `${this.url}`;

        axios({
          method: method,
          url: url,
          data: this.model,
        }).then((resp) => {
          this.$emit('submitted', resp.data);
        }).catch((resp) => {
          console.log(resp);
        });

        return false;
      },
      uploadFile(event) {
        console.log(event.url);
        this.$emit('update:model.image', event.url);
        this.model.image = event.target.files[0];
      }
    }
  }
</script>

<template>
    <Dialog>
        <h3 slot="header">Редактирование категории</h3>

        <form slot="body" enctype="multipart/form-data" v-on:submit.prevent="submitted">
            <div class="form-group">
                Название:
                <input class="form-control" type="text" v-model="model.name" name="name" required="required"/>
            </div>
            <div class="form-group">
                Статус:
                <BaseSimpleSelect v-model="model.status" required="required" name="status">
                    <option v-for="(value, key) in this.$attrs.statuses" :value="key">
                        {{ value }}
                    </option>
                </BaseSimpleSelect>
            </div>

            <div class="form-group">
                <button type="submit" class="btn btn-primary">
                    Сохранить
                </button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">
                    Отмена
                </button>
            </div>
        </form>
    </Dialog>
</template>