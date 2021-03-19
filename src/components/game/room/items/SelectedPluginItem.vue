<template>
  <div class="zoomed-item box" @click.stop="">
    <span class="helper"></span>
    <component :is="item.pluginVue" :key="item.id" v-bind="item.args" class="the-plugin"></component>
  </div>
</template>
<style scoped lang="scss">
  .zoomed-item {
    position: fixed;
    top: 10vh;
    left: 10vw;
    height:80vh;
    width:80vw;
    background-image: url('../../../../assets/common/screen-background.jpg');
    background-repeat: repeat;
    white-space: nowrap; /* This is required unless you put the helper span closely near the img */
    text-align: center;
    border-color: $primary-color;
    border-width: 2vh;
  }
  .helper {
    display: inline-block;
    height: 100%;
    vertical-align:middle;
  }

  .the-plugin {
    display: inline;
    vertical-align:middle;
  }
</style>
<script>
export default {
  name: 'SelectedPluginItem',
  props: {
    item: {
      type: Object,
      default: null,
    },
  },
}
</script>
