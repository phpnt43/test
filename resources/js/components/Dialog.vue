<script>
  export default {
  name: 'Modal',


  methods: {
    modal () {
      const modal = $(this.$el);

      modal.modal.apply(modal, arguments);
    },

    show () {
      this.modal('show');
    },

    hide () {
      this.modal('hide');
    },
  },
}
</script>

<template>
  <div class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <slot name="header">
          </slot>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <slot name="body">
          </slot>
        </div>
        <div class="modal-footer">
          <slot name="footer">
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>