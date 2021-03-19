<template>
  <div class="welcome">
    <welcome-title v-if="state === 'SHOW_WELCOME'" :title="title" @start="showScroll()"></welcome-title>
    <welcome-scroll v-if="state === 'SHOW_SCROLL'" @start="doStart()">
      {{ scrollText }}
    </welcome-scroll>
  </div>
</template>

<script>
import WelcomeScroll from './WelcomeScroll';
import WelcomeTitle from './WelcomeTitle';
import gameConfigFactory from '@/lib/game-config-factory';

const gameConfig = gameConfigFactory.get();

const STATES = {
  SHOW_WELCOME: 'SHOW_WELCOME',
  SHOW_SCROLL: 'SHOW_SCROLL',
};

export default {
  name: 'Welcome',
  components: {
    WelcomeTitle,
    WelcomeScroll
  },
  data() {
    return {
      state: STATES.SHOW_WELCOME,
    }
  },
  computed: {
    scrollText() {
      return gameConfig.welcomeText;
    },
    title() {
      return gameConfig.title;
    },
  },
  mounted() {
  },
  methods: {
    showScroll() {
      this.state = STATES.SHOW_SCROLL;
    },
    doStart() {
      this.$emit('start');
    }
  }
}
</script>

<style scoped>
</style>
