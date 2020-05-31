<template>
  <div>
    <Map class="left-top box" :active-room="activeRoom" @changeRoom="changeRoom($event)"></Map>
    <CodeBreaker class="left-bottom box" :game-config="gameConfig"></CodeBreaker>
    <Room class="right box" :active-room="activeRoom" :game-config="gameConfig"></Room>
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
import GAME_CONFIG from '../../config/game-config.js';
import CodeBreaker from './code-breaker/CodeBreaker';

export default {
  name: 'Game',
  components: {
    CodeBreaker,
    Map,
    Room
  },
  data() {
    return {
      activeRoom: GAME_CONFIG.defaultActiveRoom,
      gameConfig: GAME_CONFIG
    }
  },
  methods: {
    changeRoom(room) {
      this.activeRoom = room;
    }
  }
}
</script>
