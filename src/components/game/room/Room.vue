<template>
  <div>
    <div class="all-items">
      <div class="items-container">
        <img v-for="item in unlockedItemsInRoom"
             :key="item.image"
             src="../../../assets/common/round-items.png"
             class="item"
             :style="{ backgroundImage: 'url(' + getUrl(item) + ')' }"
             @click="showImage(item)"
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

  .item {
    width: 100%;
    background-size: cover;
    background-position: center;
  }

  .item:before {
    content: "";
    display: block;
    padding-top: 100%;
  }
</style>
<script>
import { isAdmin } from '../../../lib/is-admin';
import SelectedItem from './SelectedItem';

const anItem = (id, roomId, image) => ({ id, roomId, image });

export default {
  name: 'Room',
  components: {
    SelectedItem,
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
        unlockedItems: [201, 203, 401, 402, 403, 404, 405, 501, 502, 503, 504, 506]
      },
      selectedItem: null
    }
  },
  computed: {
    itemsInRoom() {
      return this.items.filter(item => (item.roomId === this.activeRoom));
    },
    unlockedItemsInRoom() {
      return this.items.filter(item => this.isUnlocked(item.id) && (item.roomId === this.activeRoom));
    }
  },
  methods: {
    isAdmin() {
      return isAdmin();
    },
    adminGetClassFor(item) {

    },
    adminUnlock(item) {

    },
    getUrl(item) {
      return `${this.publicPath}game/${item.roomId}/${item.image}`
    },
    showImage(item) {
      this.selectedItem = item;
    },
    hideImage() {
      this.selectedItem = null;
    },
    isUnlocked(item) {
      return this.roomState.unlockedItems.indexOf(item) >= 0;
    }
  }
}
</script>
