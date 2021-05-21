<template>
  <div class="game_scene_wrapper" :class="{'in-game': game.localId !== null}">
    <div class="enter_full_screen" @click="changeFullScreen">
      <img src="@/assets/fullScreen.png" alt="">
    </div>
    <GameBoard v-if="socket" :game="game" :socket="socket"></GameBoard>
    <Menu :game="game" :socket="socket" v-if="game.localId !== null"></Menu>
    <div class="scroll-to-menu_wrapper" v-if="game.localId !== null">
      <div class="scroll_to_menu" @click="scrollToBottom">
        <p>Scroll for menu</p>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "./gameSceneComponents/Menu";
import GameBoard from "./gameSceneComponents/GameBoard";

export default {
  name: "GameScene",
  components: {GameBoard, Menu},
  data() {
  },
  props: {
    game: Object,
    socket: Object
  },
  methods: {
    changeFullScreen: function () {
      let el = document.getElementById("board-container")
      el.requestFullscreen()
    },
    scrollToBottom(){
      let elmnt = document.getElementById('menu');
      elmnt.scrollIntoView(true);
    }
  },
  mounted() {
  }
}
</script>

<style scoped lang="scss">
.game_scene_wrapper {
  height: 100%;
  background-color: white;

  .enter_full_screen {
    height: 40px;
    width: 40px;
    position: absolute;
    cursor: pointer;
    top: 15px;
    right: 15px;
    z-index: 7;

    img {
      width: 100%;
    }
  }

  .scroll-to-menu_wrapper {
    display: none;
    @media (max-width: 700px) {
      display: flex;
      width: 100%;
      height: 40px;
      position: absolute;
      bottom: 0;
      z-index: 0;
      flex-flow: row;
      .scroll_to_menu {
        height: 100%;
        width: 100%;
        margin: auto;
      }
    }
  }

  @media (max-width: 700px) {
    height: 200%;
    display: flex;
    flex-flow: column;
    overflow: hidden;
    .in-game{
    }
  }
}
</style>