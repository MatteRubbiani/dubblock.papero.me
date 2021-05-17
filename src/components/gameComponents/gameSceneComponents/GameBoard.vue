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
  },
  mounted() {
    console.log("mounted game board, socket: ", this.socket)
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

  .board_container {
    width: 40%;
    height: 70%;
    margin: 10% auto;
    display: flex;
    flex-flow: row;
  }
}
</style>