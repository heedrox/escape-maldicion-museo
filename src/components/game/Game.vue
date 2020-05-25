<template>
    <div>
        <div class="left-top"></div>
        <div class="left-bottom"></div>
        <div class="right"></div>
    </div>
</template>
<style scoped>
    .left-top {
        position: absolute;
        top: 5vh;
        left: 3vw;
        background-color: #000;
        box-shadow: 20px 38px 34px -26px hsla(0,0%,0%,.2);
        border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
        border: solid 1vh #a593a7;
        width: 33vw;
        height: 43vh;
        float:right;
        background-repeat: no-repeat;
        background-size: auto;
     }
    .left-bottom {
        position: absolute;
        top: 52vh;
        left: 3vw;
        background-color: #000;
        box-shadow: 20px 38px 34px -26px hsla(0,0%,0%,.2);
        border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
        border: solid 1vh #a593a7;
        width: 33vw;
        height: 43vh;
        float:right;
        background-repeat: no-repeat;
        background-size: auto;
    }
    .right {
        position: absolute;
        top: 5vh;
        left: 38vw;
        background-color: #000;
        box-shadow: 20px 38px 34px -26px hsla(0,0%,0%,.2);
        border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
        border: solid 1vh #a593a7;
        width: 58vw;
        height: 90vh;
        float:right;
        background-repeat: no-repeat;
        background-size: auto;
    }
</style>
<script>
export default {
  name: 'Game'
}
</script>
