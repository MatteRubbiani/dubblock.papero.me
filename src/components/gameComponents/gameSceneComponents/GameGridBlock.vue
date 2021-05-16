<template>
<div class="grid-block_wrapper" :class="{'available-pawn-move': availablePawnMove}">
  <div class="pawn_wrapper"
       v-if="shapes.length !== 0 && shapes.length !== 0"
       :class="{'selected': selectedPawn && you}"
       :style="style"
       @click="selectPawn">
    <GridBlockPawn v-for="i in pawns" :key="i" :shape="i[0]" :color="i[1]" :customWidth="pawnPercentageWidth"></GridBlockPawn>
  </div>
  <div class="obstacle_wrapper"
       v-if="obstacle"
       :class="{'selected': selectedObstacle}"
        @click="selectObstacle">
    <img src="@/assets/obstacle.png" alt="">
  </div>
  <div class="move-obstacle-here_wrapper"
       v-if="obstacleAvailable && !obstacle"
       @click="clickedObstacleMove">
    <div class="move-obstacle-here"></div>
  </div>
</div>
</template>

<script>
import GridBlockPawn from "./GridBlockPawn";
export default {
  name: "GameGridBlock",
  components: {GridBlockPawn},
  props: {
    column: Number,
    row: Number,
    shapes: Array,
    colors: Array,
    you: Boolean,
    obstacle: Boolean,
    selectedPawn: Boolean,
    selectedObstacle: Boolean,
    availablePawnMove: Boolean,
    obstacleAvailable: Boolean
  },
  computed: {
    pawns: function(){
      let p = []
      for (let i=0; i<this.shapes.length; i++){
        p.push([this.shapes[i], this.colors[i]])
      }
      return p
    },
    pawnPercentageWidth: function() {
      return 100 / this.pawns.length
    },
    style: function (){
      let cols = this.colors.length === 1 ? 1 : 2
      return {
        'grid-template-columns': 'repeat(' + cols + ',' + 100/cols + '%)',
        'grid-template-rows': 'repeat(3, 33%)'
      }
    }
  },
  methods: {
    selectPawn: function (){
      console.log(this.you)
      if (this.you){
        this.$emit("selectPawn", [this.row, this.column])
      }
    },
    selectObstacle: function (){
      this.$emit("selectObstacle", [this.row, this.column])
    },
    clickedPawnMove: function (){
      if(this.availablePawnMove){
        this.$emit("movePawn", [this.row, this.column])
        console.log("move pawn here")
      }
    },
    clickedObstacleMove: function (){
        this.$emit("moveObstacle", [this.row, this.column])
        console.log("move obstacle here")
    },
  }
}
</script>

<style scoped lang="scss">
.grid-block_wrapper{
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid black;
  //border-left: 1px solid black;
  //border-right: 1px solid black;
  .pawn_wrapper{
    width: 60%;
    height: 80%;
    margin-top: 10%;
    margin-left: 20%;
    display: grid;
    &.selected{
      //border: 1px solid red;
    }
  }
  .obstacle_wrapper{
    width: 90%;
    margin-left: 5%;
    height: fit-content;
    position: absolute;
    bottom: 0;
    img{
      width: 100%;
    }
  }
  &.available-pawn-move{
    background-color: yellow;
    .pawn_wrapper{
      opacity: .2;
    }
  }

  .move-obstacle-here_wrapper{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 30%;
    cursor: pointer;
    .move-obstacle-here{
      width: 80%;
      height: 70%;
      margin: auto;
      border: 2px dotted red;
      border-spacing: 5px;
    }
  }
}
</style>