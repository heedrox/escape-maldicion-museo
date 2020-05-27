<template>
  <div class="pergamino">
    <div class="container">
      <div class="close" @click="$emit('start')">
        X
      </div>
      <scrolling-text>
        <slot></slot>
      </scrolling-text>
    </div>
  </div>
</template>
<style scoped>
    .pergamino {
        background-image: url('./pergamino.png');
        background-repeat: no-repeat;
        width: 479px;
        height: 640px;
        margin: auto;
        top: 40px;
        position: relative;
    }

    .pergamino .container {
        padding: 10%;
        margin: auto;
    }

    .close {
        text-align: right;
        padding-right: 25px;
        font-family: "Arial Black", serif;
        font-weight: bolder;
        color: darkred;
        text-decoration: underline;
        cursor: pointer;
    }
</style>
<script>
import ScrollingText from './ScrollingText';

export default {
  name: 'WelcomeScroll',
  components: {
    ScrollingText,
  }
}
</script>
