<template>
  <div>
    <p>{{ minutes }}:{{ seconds }}</p>
  </div>
</template>
<style scoped>
  p {
    width: 100%;
    height: 100%;
    font-family: 'Digital7', serif;
    font-size: 10vh;
    vertical-align: middle;
    color:#fff;
    letter-spacing: 1vw;
  }
</style><script>
const asCounterWithPadding = (number, padding) => number < 10 ? (padding + number) : (number + '')
import { addHours, diffMinutes, diffSeconds } from '../../../lib/dates'

export default {
  name: 'Counter',
  data () {
    return {
      endTime: null,
      now: new Date(),
      paused: true
    }
  },
  computed: {
    minutes: function () {
      return this.endTime ? asCounterWithPadding(diffMinutes(this.endTime, this.now), '0') : '-'
    },
    seconds: function () {
      return this.endTime ? asCounterWithPadding(diffSeconds(this.endTime, this.now), '0') : '-'
    }
  },
  mounted() {

  },
  destroyed() {
    this.clearTimer();
  },
  methods: {
    clearTimer () {
      if (this.intervalTimer) {
        window.clearInterval(this.intervalTimer)
      }
    },
    startTimer () {
      this.clearTimer()
      this.intervalTimer = window.setInterval(() => {
        this.now = new Date()
      }, 500)
    }
  }
}
</script>
