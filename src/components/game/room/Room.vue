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
    <div v-if="selectedItem" class="zoomed-mask" @click="hideImage()">
      <div class="zoomed-item box">
        <span class="helper"></span><img :src="getUrl(selectedItem)">
      </div>
    </div>
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
  .zoomed-mask {
    position:fixed;
    top: 0;
    left:0;
    height:100vh;
    width:100vw;
    background: rgba(165,147,167,0.5);
  }
  .zoomed-item {
    position: fixed;
    top: 10vh;
    left: 10vw;
    height:80vh;
    width:80vw;
    background:black;
    white-space: nowrap; /* This is required unless you put the helper span closely near the img */
    text-align: center;
  }
  .zoomed-item img {
    max-height:80vh;
    width:auto;
    vertical-align:middle;
  }
  .helper {
    display: inline-block;
    height: 100%;
    vertical-align:middle;
  }
</style>
<script>

const anItem = (roomId, image) => ({ roomId, image });

export default {
  name: 'Room',
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
