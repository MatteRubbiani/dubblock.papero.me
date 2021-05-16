<template>
<div class="indicator-block_wrapper">
  <div class="indicator-block_container" :style="style">
    <GridBlockPawn v-for="i in players" :key="i" :shape="i.shape" :color="i.color"></GridBlockPawn>
  </div>
</div>
</template>

<script>
import GridBlockPawn from "./GridBlockPawn";
export default {
  name: "IndicatorBlock",
  components: {GridBlockPawn},
  props: {
    players: Array
  },
  computed: {
    style: function (){
      let c = this.players.length
      if (c === 1) c = 2
      return {
        'grid-template-columns': 'repeat(' + c + ',' + 100/c + '%)',
        'grid-template-rows': '30%'
      }
    },
  }
}
</script>

<style scoped lang="scss">
.indicator-block_wrapper{
  width: 100%;
  height: 100%;
  grid-row: auto;
  grid-column: auto;
  .indicator-block_container{
    height: fit-content;
    margin-top: 20%;
    display: grid;
  }
}
</style>