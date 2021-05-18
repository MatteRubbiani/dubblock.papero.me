<template>
<div class="game_scene_wrapper">
  <div class="enter_full_screen" @click="changeFullScreen">
    <img src="@/assets/fullScreen.png" alt="">
  </div>
  <GameBoard v-if="socket" :game="game" :socket="socket"></GameBoard>
  <Menu :game="game" :socket="socket"></Menu>
</div>
</template>

<script>
import Menu from "./gameSceneComponents/Menu";
import GameBoard from "./gameSceneComponents/GameBoard";
export default {
  name: "GameScene",
  components: {GameBoard, Menu},
  data(){},
  props: {
    game: Object,
    socket: Object
  },
  methods: {
    changeFullScreen: function (){
      let el = document.getElementById("board-container")
      el.requestFullscreen()
    }
  }
}
</script>

<style scoped lang="scss">
.game_scene_wrapper{
  height: 100%;
  background-color: white;
  scroll-behavior: unset;
  .enter_full_screen{
    height: 40px;
    width: 40px;
    position: absolute;
    cursor: pointer;
    top: 15px;
    right: 15px;
    z-index: 7;
    img{
      width: 100%;
    }
  }
  @media (max-width: 700px){
    height: 200%;
    display: flex;
    flex-flow: column;
  }
}
</style>