<template>
  <div>
    <input
      :value="input"
      :class="inputClass"
      placeholder="ESCRIBE EN EL TECLADO"
      readonly
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
    font-size: 3vh;
    font-family: Consolas, Courier, serif;
    text-transform: uppercase;
    background-color: #111111;
    border: solid 0.5vh rgb(212, 1, 47);
    border-radius: 2vh;
    color: white;
  }

  .right-code {
    border: solid 0.5vh rgb(47, 212, 1);
    animation: blink-right .2s step-end infinite alternate;
  }

  .wrong-code {
    border: solid 0.5vh rgb(212, 1, 47);
    animation: blink-wrong .2s step-end infinite alternate;
  }

  .keyboard {
    width:30vw;
    margin: auto;
  }

  @keyframes blink-right {
    50% { background-color: rgba(47, 212, 1, 0.2); }
  }
  @keyframes blink-wrong {
    50% { background-color: rgba(212, 1, 47, 0.2); }
  }
</style>
<script>
import SimpleKeyboard from './SimpleKeyboard';

export default {
  name: 'CodeBreaker',
  components: {
    SimpleKeyboard,
  },
  props: {
    gameConfig: {
      type: Object,
      default: null,
    }
  },
  data: () => ({
    input: '',
    isRightCode: false,
    isWrongCode: false,
  }),
  computed: {
    inputClass() {
      return {
        'input': true,
        'right-code': this.isRightCode,
        'wrong-code': this.isWrongCode,
      };
    },
  },
  methods: {
    onChange(input) {
      console.log('input changed', input);
      this.input = input;
    },
    onKeyPress(button) {
      if (button === '{enter}') {
        if (this.isValidCode(this.input)) {
          this.showValidCode();
        } else {
          this.showWrongCode(this.input);
        }
      }

    },
    onInputChange(input) {
      this.input = input.target.value;
    },
    isValidCode(value) {
      return this.gameConfig.codes.indexOf(value) >= 0;
    },
    showValidCode() {
      this.isRightCode = true;
      setTimeout(() => {
        this.isRightCode = false;
        this.input = '';
      }, 3000);
    },
    showWrongCode() {
      this.isWrongCode = true;
      setTimeout(() => {
        this.isWrongCode = false;
        this.input = '';
      }, 3000);
    }
  }
}
</script>
