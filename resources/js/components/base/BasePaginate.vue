<script>
  export default{
    props: {
      pagination: {
        type: Object,
        required: true
      },
    },
    computed: {
      pagesNumber() {
        let pagesArray = [];
        for (let page = 1; page <= this.pagination.last_page; page++) {
          pagesArray.push(page);
        }

        return pagesArray;
      }
    },
    methods: {
      changePage(page) {
        this.pagination.current_page = page;
        this.$emit('paginate');
      }
    }
  }
</script>

<template>
    <div class="row">
        <div class="col-md-9">
            <ul class="pagination">
                <li class="page-item" v-if="pagination.current_page > 1">
                    <a class="page-link" href="javascript:void(0)" aria-label="Previous"
                       v-on:click.prevent="changePage(pagination.current_page - 1)">
                        <span aria-hidden="true">«</span>
                    </a>
                </li>
                <li class="page-item" v-for="page in pagesNumber" :class="{'active': page == pagination.current_page}">
                    <a class="page-link" href="javascript:void(0)" v-on:click.prevent="changePage(page)">{{ page }}</a>
                </li>
                <li class="page-item" v-if="pagination.current_page < pagination.last_page">
                    <a class="page-link" href="javascript:void(0)" aria-label="Next"
                       v-on:click.prevent="changePage(pagination.current_page + 1)">
                        <span aria-hidden="true">»</span>
                    </a>
                </li>
            </ul>

        </div>
        <div class="col-md-3">
            <BaseSimpleSelect
                    v-model="pagination.count_page"
                    @changeSelect="changePage(pagination.current_page)"
            >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
            </BaseSimpleSelect>
        </div>
    </div>
</template>