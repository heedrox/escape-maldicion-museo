<template>
  <div>
    <p>{{ title.overTitle }}</p>
    <h1>{{ title.main }}</h1>
    <a class="start" href="#" @click="$emit('start')">{{ title.start }}</a>
  </div>
</template>
<style scoped>
  p {
    padding-top: 10vh;
    font-size: 3em;
    color: white;
  }

  h1 {
    padding-top: 2vh;
    font-size: 9vw;
    color: rgb(212, 1, 47);
    width:60vw;
    margin:auto;
  }

  a.start {
    display: block;
    font-size: 5vw;
    color: rgba(212, 1, 47, 0.58);
    text-decoration: underline;
    position: absolute;
    bottom: 5vh;
    text-align: center;
    width:100%;
  }
</style>
<script>
export default {
  name: 'WelcomeTitle',
  props: {
    title: {
      type: Object,
      default: null,
    },
  },
}
</script>
