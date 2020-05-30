<template>
  <div>
    <img v-if="isAdmin() || isUnlocked" :class="adminGetClass()" src="../../../assets/common/round-items.png"
         :style="{ backgroundImage: 'url(' + getUrl(item) + ')' }"
         @click.stop="selectImage(item)"
    />
    <div v-if="item.type=== 'VIDEO'" class="videolink">
      Vídeo
    </div>
    <div v-if="isAdmin()">
      <a v-if="!isUnlocked" href="#" class="adminUnlock" @click="toggleLock">Unlock</a>
      <a v-if="isUnlocked" href="#" class="adminLock" @click="toggleLock">Lock</a>
    </div>
  </div>
</template>
<style>
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
  .adminUnlock {
    font-family: Helvetica,serif;
    color: #555;
  }
  .adminLock {
    font-family: Helvetica,serif;
    color: #efefef;
  }
  .lockedItem {
    opacity: 0.1;
  }
  .videolink {
    color: #efefef;
    font-size: 1.2em;
  }
</style>
<script>
import { isAdmin } from '../../../lib/is-admin';

export default {
  name: 'Room',
  props: {
    item: {
      type: Object,
      default: null,
    },
    isUnlocked: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
    }
  },
  methods: {
    isAdmin() {
      return isAdmin();
    },
    adminGetClass() {
      return {
        "item": true,
        "lockedItem": isAdmin() && !this.isUnlocked
      }
    },
    toggleLock(item) {
      this.$emit('toggleLock', item);
    },
    getUrl(item) {
      return `${this.publicPath}game/${item.roomId}/${item.image}`
    },
    selectImage(item) {
      this.$emit('selectImage', item);
    },
  }
}
</script>
