<script>
  import Dialog from '../../../../components/Dialog';

  export default {
    name: 'Setting',
    extends: Dialog,

    components: {Dialog},

    data: () => ({
      volumeMusic: 1,
      volumeEffect: 1,
      intervalGame: 100,
      intervalBomb: 3000,
    }),


    methods: {
      start(){
        this.hide();
      }
    }
  }
</script>

<template>
    <Dialog>
        <h3 slot="header">Настройки</h3>

        <div slot="body">
            <div class="form-group">
                Music:
                <el-slider v-model="volumeMusic" :min="0" :max="1" :step="0.01"></el-slider>
            </div>

            <div class="form-group">
                Effects:
                <el-slider v-model="volumeEffect" :min="0" :max="1" :step="0.01"></el-slider>
            </div>
        </div>
        <div slot="footer">
            <div class="form-group">
                <button type="submit" class="btn btn-primary" @click.prevent="$emit('start')">
                    Continue
                </button>
            </div>
        </div>
    </Dialog>
</template>