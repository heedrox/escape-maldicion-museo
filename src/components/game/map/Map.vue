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
        <div class="room box room1"></div>
        <div class="separator horizontal"></div>
        <div class="room box room2"></div>
        <div class="separator horizontal"></div>
        <div class="room box room3"></div>
        <div class="separator"></div>

        <div class="separator"></div>
        <div class="separator vertical"></div>
        <div class="separator"></div>
        <div class="separator vertical"></div>
        <div class="separator"></div>
        <div class="separator vertical"></div>
        <div class="separator"></div>

        <div class="separator"></div>
        <div class="room box room4 active"></div>
        <div class="separator horizontal"></div>
        <div class="room box room5"></div>
        <div class="separator horizontal"></div>
        <div class="room box room6"></div>
        <div class="separator"></div>

        <div class="separator"></div>
        <div class="separator vertical"></div>
        <div class="separator"></div>
        <div class="separator"></div>
        <div class="separator"></div>
        <div class="separator vertical"></div>
        <div class="separator"></div>


        <div class="separator"></div>
        <div class="room box room7"></div>

        <div class="room box room8"></div>
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
  name: 'Map'

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
