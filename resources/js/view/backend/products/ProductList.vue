<script>

  export default {
    name: 'ProductList',

    props: {
      items: Array | Object,
      statuses: Object,
    },

    methods: {
      editUrl (item) {
      },
    },

    mounted() {
    }
  }
</script>


<template>
    <div>
        <table class="table table-sm">
            <tr v-for="item in items">
                <td>
                    <a href="javascript:void(0)" @click.prevent="$emit('edit', item)">
                        {{ item.name }}
                    </a>
                </td>

                <td class="text-right">
                    <button class="btn btn-danger btn-sm" @click.prevent="$emit('remove', item)">
                        <i class="mdi mdi-delete"></i>
                    </button>
                </td>
            </tr>
        </table>
    </div>
</template>