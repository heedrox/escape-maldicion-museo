<template>
  <div class="zoomed-mask" @click="$emit('hide')">
    <div class="close" @click="$emit('hide')">
      X
    </div>
    <SelectedViewItem v-if="item.type === 'VIDEO'" :src="url" />
    <SelectedPdfItem v-if="item.type === 'PDF'" :src="url" />
    <SelectedPianoItem v-else-if="item.type === 'PIANO'" :alt="item.image" :src="url" />
    <div v-else class="zoomed-item box" @click.stop="">
      <span class="helper"></span>
      <img :alt="item.image" :src="url">
    </div>
  </div>
</template>
<style scoped>
  .close {
    position: fixed;
    top:8.5vh;
    left: 90vw;
    height: 5vh;
    width: 5vh;
    background-color: rgb(212, 1, 47);
    color:#fff;
    border-radius: 50%;
    display: inline-block;
    font-size:5vh;
    z-index:2;
  }
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
    border-color: rgb(212, 1, 47);
    border-width: 2vh;
  }
  .zoomed-item img {
    max-height:80vh;
    max-width:80vw;
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
import SelectedViewItem from './SelectedViewItem';
import SelectedPdfItem from './SelectedPdfItem';
import SelectedPianoItem from './SelectedPianoItem';

export default {
  name: 'SelectedItem',
  components: {
    SelectedPianoItem,
    SelectedPdfItem,
    SelectedViewItem,
  },
  props: {
    url: {
      type: String,
      default: null
    },
    item: {
      type: Object,
      default: null
    }
  },
}
</script>
