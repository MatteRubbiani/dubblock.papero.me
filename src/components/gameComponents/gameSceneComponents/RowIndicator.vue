<template>
<div class="row-indicator_wrapper" :style="style">
<IndicatorBlock v-for="i in indicatorList" :key="i" :players="i"></IndicatorBlock>
</div>
</template>

<script>
import IndicatorBlock from "./IndicatorBlock";
export default {
  name: "RowIndicator",
  components: {IndicatorBlock},
  props: {
    game: Object
  },
  data(){
    return {
      blockSize: 10
    }
  },
  computed: {
    style: function () {
      return {
        'width': this.blockSize + 'px',
        'height': this.blockSize * this.game.settings.rows + 'px',
        'grid-template-columns': '100%',
        'grid-template-rows': 'repeat(' + this.game.settings.rows + ',' + 100 / this.game.settings.rows + '%)'

      }
    },
    indicatorList: function (){
      let iL = []
      for (let i=0; i<this.game.settings.rows; i++){
        let pls = []
        this.game.players.forEach(p => {
          if (p.row === i && p.column === null){ //controllo che non sia visibile senno sarebbe un doppione
            pls.push({
              shape: p.shape,
              color: p.color
            })
          }
        })
        iL.push(pls)
      }
      console.log(iL)
      return iL
    }
  },
  methods: {
    setSize: function (){
      let blockHeight = document.getElementById("board-container").clientHeight / (this.game.settings.rows + 4)
      let blockWidth = document.getElementById("board-container").clientWidth / (this.game.settings.columns + 1)
      this.blockSize = blockHeight > blockWidth ? parseInt(blockWidth) : parseInt(blockHeight)
    },
  },
  mounted() {
    this.setSize()
    window.addEventListener('resize', ()=>{
      this.setSize()
    })
  }
}
</script>

<style scoped lang="scss">
.row-indicator_wrapper{
  display: grid;
  margin: auto;
  padding-left: 4%;
  grid-gap: 1px;
  @media (max-width: 700px) {
    margin: 5% auto;
  }
}
</style>