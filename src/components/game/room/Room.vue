<template>
  <div>
    <div class="all-items">
      <div class="items-container">
        <img v-for="item in items"
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

import SelectedItem from './SelectedItem';

const anItem = (roomId, image) => ({ roomId, image });

export default {
  name: 'Room',
  components: {
    SelectedItem,
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      items: [
        anItem(4, 'frame-qo.jpg'),
        anItem(4, 'frames-more-generic.jpg'),
        anItem(4, 'frame-generic.jpg'),
        anItem(4, 'piano.jpg'),
      ],
      selectedItem: null
    }
  },
  methods: {
    getUrl(item) {
      return `${this.publicPath}game/${item.roomId}/${item.image}`
    },
    showImage(item) {
      this.selectedItem = item;
    },
    hideImage() {
      this.selectedItem = null;
    }
  }
}
</script>
