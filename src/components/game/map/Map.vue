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
        <div class="room box room1" :class="getClassForRoom(1)" @click="changeRoom(1)"></div>
        <div class="separator" :class="getClassForSeparator('horizontal', 1,2)"></div>
        <div class="room box room2" :class="getClassForRoom(2)" @click="changeRoom(2)"></div>
        <div class="separator" :class="getClassForSeparator('horizontal', 2,3)"></div>
        <div class="room box room3" :class="getClassForRoom(3)" @click="changeRoom(3)"></div>
        <div class="separator"></div>

        <div class="separator"></div>
        <div class="separator" :class="getClassForSeparator('vertical', 1,4)"></div>
        <div class="separator"></div>
        <div class="separator" :class="getClassForSeparator('vertical', 2,5)"></div>
        <div class="separator"></div>
        <div class="separator" :class="getClassForSeparator('vertical', 3,6)"></div>
        <div class="separator"></div>

        <div class="separator"></div>
        <div class="room box room4" :class="getClassForRoom(4)" @click="changeRoom(4)"></div>
        <div class="separator" :class="getClassForSeparator('horizontal', 4,5)"></div>
        <div class="room box room5" :class="getClassForRoom(5)" @click="changeRoom(5)"></div>
        <div class="separator" :class="getClassForSeparator('horizontal', 5,6)"></div>
        <div class="room box room6" :class="getClassForRoom(6)" @click="changeRoom(6)"></div>
        <div class="separator"></div>

        <div class="separator"></div>
        <div class="separator" :class="getClassForSeparator('vertical', 4,7)"></div>
        <div class="separator"></div>
        <div class="separator"></div>
        <div class="separator"></div>
        <div class="separator" :class="getClassForSeparator('vertical', 6,8)"></div>
        <div class="separator"></div>


        <div class="separator"></div>
        <div class="room box room7" :class="getClassForRoom(7)" @click="changeRoom(7)"></div>

        <div class="room box room8" :class="getClassForRoom(8)" @click="changeRoom(8)"></div>
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
      mapState: {
        unlockedRooms: [2, 5]
      }
    };
  },
  methods: {
    changeRoom(room) {
      if (this.isUnlocked(room)) {
        this.activeRoom = room;
      }
    },
    getClassForRoom(room) {
      return {
        'active': (this.activeRoom === room),
        'unlocked': this.isUnlocked(room),
        'locked': !this.isUnlocked(room)
      };
    },
    getClassForSeparator(classname, roomA, roomB) {
      return {
        [classname]: this.isUnlocked(roomA) && this.isUnlocked(roomB)
      };
    },
    isUnlocked(room) {
      return this.mapState.unlockedRooms.indexOf(room) >= 0;
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

    .room.unlocked {
        border: solid 0.5vh #fff;
    }

    .room.locked {
        border: solid 0.5vh #000;
    }

    .room.active {
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
