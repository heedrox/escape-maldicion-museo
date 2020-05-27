<template>
  <div class="welcome">
    <welcome-title v-if="state === 'SHOW_WELCOME'" @start="showScroll()"></welcome-title>
    <welcome-scroll v-if="state === 'SHOW_SCROLL'" @start="doStart()">
      A quien corresponda,<br /><br />
      La desesperación nos invade. Una vez más, la maldición del museo ha vuelto a atacar, y se ha llevado
      cuatro nuevas
      víctimas. Todo ocurrió anoche, cuando las doce campanadas repicaron por toda la ciudad.<br /><br />
      A nuestros oídos han llegado vuestras hazañas, y con humildad y desolación, acudimos a pediros
      ayuda.
      Os rogamos que atendáis nuestras plegarias, acudiendo al museo, investigando los
      extraños sucesos que allá acontecen, y librándonos así, de una vez por todas, de esta escalofriante
      condena que nos acosa.<br /><br />
      Atentamente.
    </welcome-scroll>
  </div>
</template>

<script>
import WelcomeScroll from './WelcomeScroll';
import WelcomeTitle from './WelcomeTitle';

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
