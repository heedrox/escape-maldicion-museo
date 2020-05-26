<template>
    <div class="room-container">
        <div class="separator"></div>
        <div class="separator"></div>
        <div class="separator"></div>
        <div class="separator"></div>
        <div class="separator"></div>
        <div class="separator"></div>
        <div class="separator"></div>

        <div class="separator"></div>
        <div class="room box room1" :class="getClassIfActive(1)" @click="changeRoom(1)"></div>
        <div class="separator horizontal"></div>
        <div class="room box room2" :class="getClassIfActive(2)" @click="changeRoom(2)"></div>
        <div class="separator horizontal"></div>
        <div class="room box room3" :class="getClassIfActive(3)" @click="changeRoom(3)"></div>
        <div class="separator"></div>

        <div class="separator"></div>
        <div class="separator vertical"></div>
        <div class="separator"></div>
        <div class="separator vertical"></div>
        <div class="separator"></div>
        <div class="separator vertical"></div>
        <div class="separator"></div>

        <div class="separator"></div>
        <div class="room box room4" :class="getClassIfActive(4)" @click="changeRoom(4)"></div>
        <div class="separator horizontal"></div>
        <div class="room box room5" :class="getClassIfActive(5)" @click="changeRoom(5)"></div>
        <div class="separator horizontal"></div>
        <div class="room box room6" :class="getClassIfActive(6)" @click="changeRoom(6)"></div>
        <div class="separator"></div>

        <div class="separator"></div>
        <div class="separator vertical"></div>
        <div class="separator"></div>
        <div class="separator"></div>
        <div class="separator"></div>
        <div class="separator vertical"></div>
        <div class="separator"></div>


        <div class="separator"></div>
        <div class="room box room7" :class="getClassIfActive(7)" @click="changeRoom(7)"></div>

        <div class="room box room8" :class="getClassIfActive(8)" @click="changeRoom(8)"></div>
        <div class="separator"></div>

        <div class="separator"></div>
        <div class="separator"></div>
        <div class="separator"></div>
        <div class="separator"></div>
        <div class="separator"></div>
        <div class="separator"></div>
        <div class="separator"></div>
    </div>
</template>
<script>
export default {
  name: 'Map',
  data() {
    return {
      activeRoom: 5,
    };
  },
  methods: {
    changeRoom(room) {
      this.activeRoom = room;
    },
    getClassIfActive(room) {
      return (this.activeRoom === room)?'active':'';
    }
  }
}
</script>
<style scoped>
    .room-container {
        display: grid;
        grid-template-columns: 10% 20% 10% 20% 10% 20% 10%;
        grid-template-rows: 10% 20% 10% 20% 10% 20% 10%;
    }

    .room {
        border: solid 0.5vh #fff;
    }

    .active {
        border: solid 1vh rgb(212, 1, 47);
    }

    .room8 {
        grid-column-start: 6;
    }

    .separator {
    }

    .horizontal:before {
        content: '';
        position: relative;
        display: block;
        top: 50%;
        left: 0;
        border-top: 3px solid white;
        background: transparent;
        width: 100%;
    }

    .vertical:before {
        content: '';
        position: relative;
        display: block;
        top: 0;
        left: 50%;
        border-left: 3px solid white;
        background: transparent;
        width: 100%;
        height: 100%;
    }
</style>
