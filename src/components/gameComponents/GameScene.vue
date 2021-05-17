<template>
<div class="game_scene_wrapper">
  <Menu :game="game"></Menu>
  <GameBoard :game="game" :socket="socket"></GameBoard>
</div>
</template>

<script>
import Menu from "./gameSceneComponents/Menu";
import GameBoard from "./gameSceneComponents/GameBoard";
export default {
  name: "GameScene",
  components: {GameBoard, Menu},
  props: {
    game: Object,
    socket: Object
  }
}
</script>

<style scoped lang="scss">
.game_scene_wrapper{
  height: 100%;
}
</style>