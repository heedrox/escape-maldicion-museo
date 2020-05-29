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

const anItem = (id, roomId, image) => ({ id, roomId, image });

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
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      items: [
        anItem(203, 2, 'library.jpg'),
        anItem(201, 2, 'book-catalog.jpg'),
        anItem(202, 2, 'book-disney.jpg'),
        anItem(205, 2, 'door-to-egypt.jpg'),
        anItem(204, 2, 'lock-to-3.jpg'),
        anItem(401, 4, 'frame-qo.jpg'),
        anItem(402, 4, 'frames-more-generic.jpg'),
        anItem(403, 4, 'frame-generic.jpg'),
        anItem(404, 4, 'piano.jpg'),
        anItem(405, 4, 'door.jpg'),
        anItem(406, 4, 'lock-door.jpg'),
        anItem(503, 5, 'felpudo.jpg'),
        anItem(506, 5, 'cuadros.jpg'),
        anItem(504, 5, 'q-o-hint.jpg'),
        anItem(501, 5, 'book-on-table.jpg'),
        anItem(502, 5, 'door-to-dimension.jpg'),
        anItem(505, 5, 'lock-door-dimension.jpg'),
      ],
      roomState: {
        // unlockedItems: [201, 203, 401, 402, 403, 404, 405, 501, 502, 503, 504, 506]
        unlockedItems: [],
      },
      selectedItem: null
    }
  },
  computed: {
    itemsInRoom() {
      return this.items.filter(item => (item.roomId === this.activeRoom));
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
