<template>
  <div class="zoomed-mask" @click="$emit('hide')">
    <div class="zoomed-item box">
      <span class="helper"></span><img :src="url">
    </div>
  </div>
</template>
<style scoped>
  .zoomed-mask {
    position:fixed;
    top: 0;
    left:0;
    height:100vh;
    width:100vw;
    background: rgba(165,147,167,0.5);
  }
  .zoomed-item {
    position: fixed;
    top: 10vh;
    left: 10vw;
    height:80vh;
    width:80vw;
    background:black;
    white-space: nowrap; /* This is required unless you put the helper span closely near the img */
    text-align: center;
  }
  .zoomed-item img {
    max-height:80vh;
    width:auto;
    vertical-align:middle;
  }
  .helper {
    display: inline-block;
    height: 100%;
    vertical-align:middle;
  }
</style>
<script>
export default {
  name: 'SelectedItem',
  props: {
    selectedItem: {
      type: Object,
      default: null
    },
    url: {
      type: String,
      default: null
    }

  }
}
</script>
