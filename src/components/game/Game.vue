<template>
  <div>
    <GameActions @show-plugin="showPlugin" @hide-plugin="hidePlugin"></GameActions>
    <Counter class="left-top box"></Counter>
    <Map class="left-middle box" :active-room="activeRoom" @change-room="changeRoom($event)"></Map>
    <CodeBreaker class="left-bottom box" :game-config="gameConfig"></CodeBreaker>
    <Room class="right box" :active-room="activeRoom" :game-config="gameConfig"></Room>
    <component :is="plugin" v-for="(plugin, idx) in configuredEnabledPlugins" :key="`plugin-${idx}`"></component>
  </div>
</template>
<style scoped>
.left-top {
  position: absolute;
  top: 5vh;
  left: 3vw;
  background-color: #000;
  width: 33vw;
  height: 9vh;
}
.left-middle {
  position: absolute;
  top: 18vh;
  left: 3vw;
  background-color: #000;
  width: 33vw;
  height: 37vh;
}
.left-bottom {
  position: absolute;
  top: 59vh;
  left: 3vw;
  background-color: #000;
  width: 33vw;
  height: 37vh;
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
import gameConfigFactory from '@/lib/game-config-factory';
import CodeBreaker from './code-breaker/CodeBreaker';
import Counter from './counter/Counter';
import GameActions from './game-actions/GameActions';
import { isAdmin } from '@/lib/is-admin';
import firebaseUtil from '@/lib/firebase-util';

const addPlugin = (plugins, plugin) => plugins.indexOf(plugin) >= 0 ? plugins : plugins.concat(plugin);
const removePlugin = (plugins, plugin) => plugins.indexOf(plugin) === -1 ? plugins :
    plugins.slice(0,plugins.indexOf(plugin)).concat(plugins.slice(plugins.indexOf(plugin)+1));

const GAME_CONFIG = gameConfigFactory.get();

export default {
  name: 'Game',
  components: {
    GameActions,
    Counter,
    CodeBreaker,
    Map,
    Room
  },
  data() {
    return {
      activeRoom: GAME_CONFIG.defaultActiveRoom,
      gameConfig: GAME_CONFIG,
      gameState: {
        pluginsEnabled: []
      },
    }
  },
  firestore: {
    gameState: firebaseUtil.doc('/')
  },
  computed: {
    configuredEnabledPlugins() {
      const pluginNames = (this.gameState && this.gameState.pluginsEnabled) ?
          this.gameState.pluginsEnabled : [];
      return this.gameConfig.fullScreenPlugins ?
          this.gameConfig.fullScreenPlugins.filter(fp => pluginNames.indexOf(fp.name) >=0)
          : [];
    },
  },
  methods: {
    changeRoom(room) {
      this.activeRoom = room;
    },
    isAdmin() {
      return isAdmin();
    },
    showPlugin(plugin) {
      const pluginsEnabled = addPlugin(
          this.gameState && this.gameState.pluginsEnabled ? this.gameState.pluginsEnabled : [],
          plugin.name);
      if (isAdmin()) {
        setTimeout(() => {
          //Super hack: update gamestate after 1 secs so it does not change, and does not interpret a new action again
          this.$firestoreRefs.gameState.update( { pluginsEnabled });
        }, 1000);

      }
    },
    hidePlugin(plugin) {
      const pluginsEnabled = removePlugin(
          this.gameState && this.gameState.pluginsEnabled ? this.gameState.pluginsEnabled : [],
          plugin.name);
      if (isAdmin()) {
        setTimeout(() => {
          //Super hack: update gamestate after 1 secs so it does not change, and does not interpret a new action again
          this.$firestoreRefs.gameState.update( { pluginsEnabled });
        }, 1000);
      }
    },
  }
}
</script>
