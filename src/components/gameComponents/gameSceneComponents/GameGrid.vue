<template>
  <div class="game-grid_wrapper" :style="style">
    <GameGridBlock v-for="i in blocks" :key="i"
                   :row=i.row
                   :column=i.column
                   :shapes="i.shapes"
                   :colors="i.colors"
                   :you="i.you"
                   :obstacle="i.obstacle"
                   :selectedPawn="i.selectedPawn"
                   :selectedObstacle="i.selectedObstacle"
                   :availablePawnMove="availablePawnMoveBlocks.includes(i.row + ',' + i.column)"
                   :obstacleAvailable="obstaclesAvailable"
                   :socket="socket"
                   :finish="false"
                   @selectPawn="selectNewPawn($event)"
                   @selectObstacle="selectNewObstacle($event)"
                   @movePawn="movePawn($event[0], $event[1])"
                   @moveObstacle="moveObstacle($event[0], $event[1])"
    ></GameGridBlock>
    <GameGridBlock v-for="i in finishBlocks" :key="i"
                   :row=i.row
                   :column=i.column
                   :shapes="i.shapes"
                   :colors="i.colors"
                   :you="i.you"
                   :obstacle="i.obstacle"
                   :selectedPawn="i.selectedPawn"
                   :selectedObstacle="i.selectedObstacle"
                   :availablePawnMove="availableFinish"
                   :obstacleAvailable="obstaclesAvailable"
                   :socket="socket"
                   :finish="true"
                   @movePawn="finish($event[0], $event[1])"
    ></GameGridBlock>
  </div>
</template>

<script>
import GameGridBlock from "./GameGridBlock";
import websocketEvents from "../../../constants/websocketEvents";

export default {
  name: "GameGrid",
  components: {GameGridBlock},
  props: {
    game: Object,
    socket: Object
  },
  data() {
    return {
      blockSize: 10,
      selectedPawn: {row: null, column: null},
      selectedObstacle: {row: null, column: null},
      blocks: [],
      finishBlocks: []
    }
  },
  computed: {
    style: function () {
      return {
        'width': this.blockSize * this.game.settings.columns + 'px',
        'height': this.blockSize * this.game.settings.rows + 'px',
        'grid-template-columns': 'repeat(' + this.game.settings.columns + ',' + 100 / this.game.settings.columns + '%)',
        'grid-template-rows': 'repeat(' + (this.game.settings.rows + 1) + ',' + 100 / this.game.settings.rows + '%)'

      }
    },
    availablePawnMoveBlocks: function () {
      if (this.selectedPawn.row === null || this.selectedPawn.column === null) return []
      let av = []
      for (let c = 0; c < this.game.settings.columns; c++) {
        if (this.selectedPawn.column !== c) {
          av.push(this.selectedPawn.row + "," + c)
        }
      }
      let nextAvailable = true
      this.game.obstacles.forEach(o => {
        if (o.row === this.selectedPawn.row && o.column === this.selectedPawn.column) nextAvailable = false
      })
      if (nextAvailable) {
        av.push(
            (this.selectedPawn.row + 1) + "," + this.selectedPawn.column
        )
      }
      //controlla se puo andare alla fine...
      return av

    },
    obstaclesAvailable: function () {
      if (this.selectedObstacle.row === null || this.selectedObstacle.column === null) return false
      return true
    },
    availableFinish: function (){
      if (this.selectedPawn.row === this.game.settings.rows - 1){
        let nextAvailable = true
        this.game.obstacles.forEach(o => {
          if (o.row === this.selectedPawn.row && o.column === this.selectedPawn.column) nextAvailable = false
        })
        return nextAvailable
      }
      return false
    },
    playing: function () {
      let playing = false
      this.game.players.forEach(p => {
        if (p.localId === this.game.localId && p.playing) {
          playing = true
        }
      })
      return playing
    }
  },
  methods: {
    setSize: function () {
      let blockHeight = document.getElementById("board-container").clientHeight / (this.game.settings.rows + 4)
      let blockWidth = document.getElementById("board-container").clientWidth / (this.game.settings.columns + 1)
      this.blockSize = blockHeight > blockWidth ? parseInt(blockWidth) : parseInt(blockHeight)
    },
    selectNewPawn(pawn) {
      this.selectedObstacle.row = null;
      this.selectedObstacle.column = null
      if (!this.playing || pawn[0] === -1) return null
      this.selectedPawn.row = pawn[0];
      this.selectedPawn.column = pawn[1]
      this.blocks = this.generateBlocks()
    },
    selectMyPawn() {
      this.game.players.forEach(p => {
        if (p.localId === this.game.localId && p.row !== -1) {
          this.selectedPawn.row = p.row
          this.selectedPawn.column = p.column
        }
      })
    },
    selectNewObstacle(obstacle) {
      this.selectedPawn.row = null;
      this.selectedPawn.column = null
      if (!this.playing) return null
      this.selectedObstacle.row = obstacle[0];
      this.selectedObstacle.column = obstacle[1]
      this.blocks = this.generateBlocks()
    },
    movePawn(row, column) {
      this.socket.emit(websocketEvents.MOVE_PAWN, {row: row, column: column})
      this.selectNewPawn({row: null, column: null})
    },
    moveObstacle(row, column) {
      this.socket.emit(
          websocketEvents.MOVE_BLOCK,
          {
            from_row: this.selectedObstacle.row,
            from_column: this.selectedObstacle.column,
            to_row: row,
            to_column: column
          })
      this.selectedObstacle.row = null;
      this.selectedObstacle.column = null
    },
    generateBlocks() {
      let b = []
      for (let r = 0; r < this.game.settings.rows; r++) {
        for (let c = 0; c < this.game.settings.columns; c++) {
          let colors = []
          let shapes = []
          let you = false
          this.game.players.forEach(player => {
            if (player.row === r && player.column === c) {
              colors.push(player.color)
              shapes.push(player.shape)
              if (player.localId === this.game.localId) you = true
            }
          })
          let obstacle = false
          this.game.obstacles.forEach(o => {
            if (o.row === r && o.column === c) obstacle = true
          })
          b.push({
            row: r,
            column: c,
            colors: colors,
            shapes: shapes,
            you: you,
            obstacle: obstacle,
            selectedPawn: (this.selectedPawn.row === r && this.selectedPawn.column === c),
            selectedObstacle: (this.selectedObstacle.row === r && this.selectedObstacle.column === c)
          })
        }
      }
      return b
    },
    generateFinishBlocks(){
      let fBlocks = []
      for (let i=0; i< this.game.settings.columns; i++){
        let shapes = []
        let colors = []
        this.game.players.forEach(player => {
          if (player.row === -1 && player.column === i){
            shapes.push(player.shape)
            colors.push(player.color)
          }
        })
        fBlocks.push({
          shapes,
          colors,
          column: i
        })
      }
      console.log(fBlocks)
      return fBlocks
    },
    finish(row, column){
      this.movePawn(-1, column)
    }
  },
  mounted() {
    this.setSize()
    window.addEventListener('resize', () => {
      this.setSize()
    })
    this.blocks = this.generateBlocks()
    this.finishBlocks = this.generateFinishBlocks()
    this.socket.on(websocketEvents.MOVE_PAWN, () => {
      this.blocks = this.generateBlocks()
      this.finishBlocks = this.generateFinishBlocks()
    })
    this.socket.on(websocketEvents.MOVE_BLOCK, () => {
      this.blocks = this.generateBlocks()
    })
    this.socket.on(websocketEvents.YOUR_TURN, () => {
      console.log("my turnnnn")
      this.selectMyPawn()
    })
    this.socket.on(websocketEvents.EARTHQUAKE, () => {
      this.blocks = this.generateBlocks()
      //avvisa in qualche modo che è stato fatto terremoto
    })
  }
}
</script>

<style scoped lang="scss">
.game-grid_wrapper {
  display: grid;
  margin: auto;
  user-select: none;
  //grid-column-gap: 1px;
  //grid-gap: 2px;
  @media (max-width: 700px) {
    margin: 10% auto;
  }
}
</style>