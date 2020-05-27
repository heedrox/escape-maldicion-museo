<template>
  <p id="scrolltext" v-html="content">
    <VNodeToHtml :vnode="$slots.default" @html="setContentFrom($event)" />
  </p>
</template>
<style scoped>
    p {
        text-align: left;
        vertical-align: middle;
        font-size: 1.2em;
        overflow-x: hidden;
        overflow-y: scroll;
        height: 512px;
        width: 375px;
        line-height: 1.5em;
        font-family: Courier, serif;
        animation: typing 3.5s steps(40, end),
        blink-caret .75s step-end infinite;
    }

    p::-webkit-scrollbar {
        background: #f1e1ca;
    }

    p::-webkit-scrollbar-thumb {
        background: #e2b564;
        -webkit-border-radius: 0.2ex;
        -webkit-box-shadow: 0px 1px 2px rgba(77, 58, 18, 0.75);
    }
</style>
<script>
import VNodeToHtml from './VNodeToHtml';

const END_MARKER = '#';
const BR_MARKER = '·';

export default {
  name: 'ScrollingText',
  components: {
    VNodeToHtml
  },
  data() {
    return {
      fullContent: '',
      startDate: new Date().getTime(),
      now: new Date().getTime(),
      timer: null,
    }
  },
  computed: {
    content() {
      const numLetters = ((this.now - this.startDate) / 1000) * 15;
      const letters = this.fullContent.substring(0, numLetters);
      const newContent = letters.replace(new RegExp(BR_MARKER, 'g'), '<br>');
      if (newContent.indexOf(END_MARKER) > 0) {
        clearInterval(this.timer);
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.timer = null;
      } else if (this.timer !== null) {
        const objDiv = document.getElementById('scrolltext');
        objDiv.scrollTop = objDiv.scrollHeight;
      }
      return newContent.replace(END_MARKER, '');
    }
  },
  mounted() {
    this.startDate = new Date().getTime();
    this.timer = setInterval(() => {
      this.now = new Date().getTime();
    }, 50)
  }
  ,
  methods: {
    setContentFrom($event) {
      this.fullContent = $event.replace(new RegExp(`<br[^<]*>`, 'g'), BR_MARKER) + END_MARKER;
    }
  }
}
</script>
