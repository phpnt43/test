<script>

  export default {
    name: 'CategoryList',

    props: {
      items: Array | Object,
      statuses: Object,
      itemActive: Number
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
        <table class="table table-hover table-sm">
            <tbody>
            <tr :class="itemActive == item.id ? 'table-info' : ''" v-for="item in items" @click.prevent="$emit('active', item)">
                <td>
                    <a href="" @click.prevent="$emit('edit', item)">
                        {{ item.name }}
                    </a>
                </td>
                <td class="body">
                    {{ statuses[item.status] }}
                </td>

                <td class="text-right">
                    <button class="btn btn-danger btn-sm" @click.prevent="$emit('remove', item)">
                        <i class="mdi mdi-delete"></i>
                    </button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>