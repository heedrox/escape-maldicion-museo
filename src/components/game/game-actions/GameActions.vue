<template>
  <div v-if="isAdmin()">
    <select v-if="pluginsExist" v-model="selectedPlugin">
      <option selected></option>
      <option v-for="(plugin,idx) in plugins" :key="`plugin-${idx}`" :value="plugin">
        {{ plugin.name }}
      </option>
    </select>
    <button v-if="pluginsExist" @click="showPlugin()">
      SHOW PLUGIN
    </button>
    <button v-if="pluginsExist" @click="hidePlugin()">
      HIDE PLUGIN
    </button>
    &nbsp;
    <select v-if="audiosExist" v-model="selectedAudio">
      <option selected></option>
      <option v-for="audio in audios" :key="audio.image" :value="audio">
        {{ audio.image }}
      </option>
    </select>
    <button v-if="audiosExist" @click="sendAudio()">
      Send audio
    </button>
  </div>
</template>
<style scoped>

</style>
<script type="javascript">
import { audioAction } from './audio';
import firebaseUtil from '../../../lib/firebase-util';
import { isAdmin } from '@/lib/is-admin';
import gameActions from '../../../lib/game-actions-lib';
import gameConfigFactory from '@/lib/game-config-factory';

const gameConfig = gameConfigFactory.get();

export default {
  name: 'GameActions',
  emits: [ 'show-plugin', 'hide-plugin' ],
  data() {
    return {
      gameState: {},
      selectedAudio: '',
      selectedPlugin: '',
      publicPath: process.env.BASE_URL,
    };
  },
  firestore: {
    gameState: firebaseUtil.doc('/')
  },
  computed: {
    audios() {
      return gameConfig.items.filter(gc => gc.type === 'MP3');
    },
    audiosExist() {
      return this.audios && this.audios.length > 0;
    },
    plugins() {
      return gameConfig.fullScreenPlugins;
    },
    pluginsExist() {
      return this.plugins && this.plugins.length > 0;
    }
  },
  watch: {
    gameState() {
      if (!this.gameState.action) return;
      console.log('ACTION RECEIVED', this.gameState.action);

      if (this.gameState.action.id === 'SHOWPLUGIN') {
        this.$emit('show-plugin', { name: this.gameState.action.argId });
      } else if (this.gameState.action.id === 'HIDEPLUGIN') {
        this.$emit('hide-plugin', { name: this.gameState.action.argId });
      } else if (isAdmin()) {
        console.log('ignoring as Im admin');
      } else if ((this.gameState.action.id === 'AUDIO')) {
        audioAction(this.publicPath, this.gameState.action.argId);
      }
    }
  },
  methods: {
    showPlugin() {
      if (window.confirm('Mostramos el plugin, ¿qué tal está yendo?')) {
        gameActions.send(this.$firestoreRefs.gameState, { id: 'SHOWPLUGIN', argId: this.selectedPlugin.name })
      }
    },
    hidePlugin() {
      if (window.confirm('Ocultamos el plugin')) {
        gameActions.send(this.$firestoreRefs.gameState, { id: 'HIDEPLUGIN', argId: this.selectedPlugin.name })
      }
    },
    sendAudio() {
      this.$firestoreRefs.gameState.update( { action: { id: 'AUDIO', argId: this.selectedAudio.id } });
      setTimeout(() => {
        this.$firestoreRefs.gameState.update( { action: null });
      }, 1000);
    },
    isAdmin() {
      return isAdmin();
    }
  },
}
</script>
