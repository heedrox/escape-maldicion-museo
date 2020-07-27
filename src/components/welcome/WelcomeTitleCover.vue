<template>
  <div>
    <p>&nbsp;</p>
    <h1>Escape from<br />the museum</h1>
    <p>&nbsp;</p>
    <p>Something sinister is beneath this museum.<br/><br/>Please, help us find what's going on!</p>
    <p class="small">A collaborative puzzle fun game</p>
    <!--<a class="start" href="#" @click="$emit('start')">Empezar</a>-->
  </div>
</template>
<style scoped>
  p {
    padding-top: 10vh;
    font-size: 4em;
    color: white;
  }

  p.small
  {
    padding-top: 10vh;
    font-size: 2em;
    color: rgb(255, 1, 47);
  }

  h1 {
    padding-top: 2vh;
    font-size: 11em;
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
