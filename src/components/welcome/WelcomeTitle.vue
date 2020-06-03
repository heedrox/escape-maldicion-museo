<template>
  <div>
    <p>Escape de...</p>
    <h1>La maldición<br />del museo</h1>
    <a class="start" href="#" @click="$emit('start')">Empezar</a>
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
    font-size: 8em;
    color: rgb(212, 1, 47);
  }

  a.start {
    display: block;
    font-size: 4em;
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
  name: 'WelcomeTitle'
}
</script>
