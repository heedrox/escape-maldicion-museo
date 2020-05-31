<template>
  <div>
    <input
      :value="input"
      class="input"
      placeholder="Tap on the virtual keyboard to start"
      @input="onInputChange"
    >
    <div class="keyboard">
      <SimpleKeyboard :input="input" @onChange="onChange" @onKeyPress="onKeyPress" />
    </div>
  </div>
</template>
<style scoped>
  input {
    margin-top: 5vh;
    height: 5vh;
    width: 20vw;
    margin-bottom: 5vh;
    text-align: center;
    font-family: Consolas, Courier, serif;
    text-transform: uppercase;
    background-color: #111111;
    border: solid 0.5vh rgb(212, 1, 47);
    border-radius: 2vh;
    color: white;
  }
  .keyboard {
    width:30vw;
    margin: auto;
  }
</style>
<script>
import SimpleKeyboard from './SimpleKeyboard';

export default {
  name: 'CodeBreaker',
  components: {
    SimpleKeyboard,
  },
  data: () => ({
    input: 'x'
  }),
  methods: {
    onChange(input) {
      console.log('input changed', input)
    },
    onKeyPress(button) {
      console.log('button pressed', button)
    },
    onInputChange(input) {
      this.input = input.target.value;
    }
  }
}
</script>
