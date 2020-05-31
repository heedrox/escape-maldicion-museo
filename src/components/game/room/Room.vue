<template>
  <div>
    <div class="all-items">
      <div class="items-container">
        <RoomItem v-for="item in itemsInRoom"
                  :key="item.image"
                  :item="item"
                  :is-unlocked="isUnlocked(item.id)"
                  @selectImage="selectImage($event)"
                  @toggleLock="adminToggleLock(item.id)"
        />
      </div>
    </div>
    <SelectedItem v-if="selectedItem"
                  :item="selectedItem"
                  :url="getUrl(selectedItem)"
                  @hide="hideImage()"
    />
  </div>
</template>
<style>
  .all-items {
    padding: 5vh 3vw;
    height: 80vh;
    overflow-y: auto;
  }

  .all-items::-webkit-scrollbar {
    background: #999;
  }

  .all-items::-webkit-scrollbar-thumb {
    background: #a593a7;
    -webkit-border-radius: 0.2ex;
    -webkit-box-shadow: 0px 1px 2px rgba(77, 58, 18, 0.75);
  }

  .items-container {
    display: grid;
    grid-template-columns: 3.3fr 3.3fr 3.3fr;
    grid-column-gap: 2vw;
    grid-row-gap: 5vh;
  }
</style>
<script>
import SelectedItem from './SelectedItem';
import RoomItem from './RoomItem';

export default {
  name: 'Room',
  components: {
    SelectedItem,
    RoomItem,
  },
  props: {
    activeRoom: {
      type: Number,
      default: 0,
    },
    gameConfig: {
      type: Object,
      default: null,
    }
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      roomState: {
        unlockedItems: [],
      },
      selectedItem: null
    }
  },
  computed: {
    itemsInRoom() {
      return this.gameConfig.items.filter(item => (item.roomId === this.activeRoom));
    }
  },
  methods: {
    adminToggleLock(itemId) {
      if (this.isUnlocked(itemId)) {
        this.roomState.unlockedItems.splice(this.roomState.unlockedItems.indexOf(itemId), 1);
      } else {
        this.roomState.unlockedItems.push(itemId);
      }
    },
    getUrl(item) {
      return `${this.publicPath}game/${item.roomId}/${item.image}`
    },
    selectImage(item) {
      this.selectedItem = item;
    },
    hideImage() {
      this.selectedItem = null;
    },
    isUnlocked(itemId) {
      return this.roomState.unlockedItems.indexOf(itemId) >= 0;
    }
  }
}
</script>
