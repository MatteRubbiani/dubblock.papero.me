<template>
  <div class="board_wrapper">
    <div class="board_container" id="board-container">
      <GameGrid v-if="socket" :game="game" :socket="socket"></GameGrid>
      <RowIndicator :game="game"></RowIndicator>
    </div>
  </div>
</template>

<script>
import GameGrid from "./GameGrid";
import RowIndicator from "./RowIndicator";

export default {
  name: "GameBoard",
  components: {RowIndicator, GameGrid},
  props: {
    game: Object,
    socket: Object
  }
}
</script>

<style scoped lang="scss">
.board_wrapper {
  width: min(80%, calc(100% - 250px));
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  //background-image: url("../../../assets/grass_background.png");
  background-size: 40px;
  background-repeat: repeat;
  background-position: bottom;

  .board_container {
    width: 50%;
    height: 100%;
    margin: auto;
    display: flex;
    flex-flow: row;
    //background-image: url("../../../assets/grass_background.png");
    background-size: 40px;
    background-repeat: repeat;
    background-position: bottom;
  }
  @media (max-width: 700px) {
    width: 90%;
    height: 50%;
    position: relative;
    margin: 0 auto;
    .board_container{
      width: 100%;
      height: 100%;
    }
  }
}
</style>