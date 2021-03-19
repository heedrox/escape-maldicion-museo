<template>
  <div id="app">
    <div v-if="!gameState && isSuperAdmin">
      <input class="no-state-btn" type="button" :value="`NO GAME STATE - CREATE ${gameCode}`" @click="createCode">
    </div>
    <Welcome v-if="state === 'WELCOME'" @start="doPlay()" />
    <Game v-if="state === 'GAME'"></Game>
  </div>
</template>

<script>
import Welcome from './components/welcome/Welcome.vue'
import Game from './components/game/Game';
import './assets/common/normalize.css'
import './assets/common/common.css'
import firebaseUtil from '@/lib/firebase-util';
import { getGameCode } from '@/lib/get-game-code';
import gameConfigFactory from '@/lib/game-config-factory';
import { isSuperAdmin } from '@/lib/is-admin';

const STATES = {
  WELCOME: 'WELCOME',
  GAME: 'GAME',
};

const gameConfig = gameConfigFactory.get();

const BLANK_FIREBASE_GAME = {
  ready: false,
  unlockedItems: gameConfig.defaultUnlockedItems,
  unlockedRooms: gameConfig.defaultUnlockedRooms,
};

export default {
  name: 'App',
  components: {
    Welcome,
    Game
  },
  data() {
    return {
      state: STATES.WELCOME,
      gameState: null,
    }
  },
  computed: {
    gameCode: () => getGameCode(),
    isSuperAdmin: () => isSuperAdmin(),
  },
  firestore: {
    gameState: firebaseUtil.doc('/')
  },
  methods: {
    createCode() {
      if (!this.gameState) {
        this.$firestoreRefs.gameState.set(BLANK_FIREBASE_GAME);
      }
    },
    doPlay() {
      this.state = STATES.GAME;
    }
  }
}
</script>

<style>
@font-face {
  font-family: 'FaceYourFears';
  src: url('./assets/common/FaceYourFears.ttf')  format('truetype')
}
@font-face {
  font-family: 'Digital7';
  src: url('./assets/common/digital-7.ttf')  format('truetype')
}
#app {
  font-family: 'FaceYourFears', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  background-image: url('./assets/common/background.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow:hidden;
}
.no-state-btn {
  font-family: 'Arial',serif
}
</style>
