<template>
    <div>
        <Map class="left-top box"></Map>
        <div class="left-bottom box"></div>
        <div class="right box"></div>
    </div>
</template>
<style scoped>
    .left-top {
        position: absolute;
        top: 5vh;
        left: 3vw;
        background-color: #000;
        width: 33vw;
        height: 43vh;
     }
    .left-bottom {
        position: absolute;
        top: 52vh;
        left: 3vw;
        background-color: #000;
        width: 33vw;
        height: 43vh;
    }
    .right {
        position: absolute;
        top: 5vh;
        left: 38vw;
        background-color: #000;
        width: 58vw;
        height: 90vh;
    }
</style>
<script>
import Map from './map/Map';

export default {
  name: 'Game',
  components: {
    Map
  }
}
</script>
