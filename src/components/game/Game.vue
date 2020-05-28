<template>
  <div>
    <Map class="left-top box" :active-room="activeRoom" @changeRoom="changeRoom($event)"></Map>
    <div class="left-bottom box"></div>
    <Room class="right box" :active-room="activeRoom"></Room>
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
        position: fixed;
        top: 5vh;
        left: 38vw;
        background-color: #000;
        width: 58vw;
        height: 90vh;
    }
</style>
<script>
import Map from './map/Map';
import Room from './room/Room';

export default {
  name: 'Game',
  components: {
    Map,
    Room
  },
  data() {
    return {
      activeRoom: 5,
    }
  },
  methods: {
    changeRoom(room) {
      this.activeRoom = room;
    }
  }
}
</script>
