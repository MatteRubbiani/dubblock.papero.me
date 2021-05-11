<template>
  <div class="change-pawn_wrapper">
    <div class="change-pawn_container">
      <Shapes :selected="selectedShape" :available="availableShapes" @shape="selectedShape=$event"></Shapes>
      <div class="preview-and-color_wrapper">
        <Preview :shape="selectedShape" :color="selectedColor"></Preview>
        <Colors :selected="selectedColor" :available="availableColors" @color="selectedColor=$event"></Colors>
      </div>
      <button class="change-pawn_button" v-if="socket" @click="changePawn">Confirm</button>
    </div>
  </div>
</template>

<script>
import Preview from "./ChangePawnComponents/Preview";
import Shapes from "./ChangePawnComponents/Shapes";
import Colors from "./ChangePawnComponents/Colors";
import websocketEvents from "../../../constants/websocketEvents";

export default {
  name: "ChangePawn",
  components: {Colors, Shapes, Preview},
  props: {
    players: Array,
    localId: Number,
    socket: Object
  },
  data() {
    return {
      selectedShape: 0,
      selectedColor: 0
    }
  },
  methods: {
    changePawn: function(){
      this.socket.emit(websocketEvents.CHANGE_PAWN,
          {
            shape: this.selectedShape,
            color: this.selectedColor
          })
      this.$emit('close')
    }
  },
  computed: {
    taken: function () {
      let t = []
      this.players.forEach(p => {
        t.push([
          p.shape,
          p.color
        ])
      })
      return t
    },
    yourSelection: function () {
      let shape, color
      this.players.forEach(p => {
        if (p.localId === this.localId) {
          shape = p.shape
          color = p.color
        }
      })
      return [shape, color]
    },
    selectionsMapping: function () {
      let map = []
      for (let s = 0; s <= 4; s++) {
        for (let c = 0; c <= 4; c++) {
          let taken = false
          this.players.forEach(p => {
            if (p.shape === s && p.color === c) taken = true
          })
          map.push({
            shape: s,
            color: c,
            taken: taken
          })
        }
      }
      return map
    },
    availableColors: function (){
      let a = []
      for (let i=0; i<4; i++) {
        this.selectionsMapping.forEach(s => {
          if (s.shape === this.selectedShape) {
            if (s.color === i){
              a.push(!s.taken)
            }
          }
        })
      }
      return a
    },
    availableShapes: function (){
      let a = []
      for (let i=0; i<4; i++) {
        this.selectionsMapping.forEach(s => {
          if (s.color === this.selectedColor) {
            if (s.shape === i){
              a.push(!s.taken)
            }
          }
        })
      }
      return a
    }
  },
  mounted() {
    this.selectedShape = this.yourSelection[0]
    this.selectedColor = this.yourSelection[1]

  }
}
</script>

<style scoped lang="scss">
.change-pawn_wrapper {
  position: absolute;
  width: 40%;
  height: fit-content;
  top: 10%;
  left: 30%;
  z-index: 5;

  .change-pawn_container{
    width: fit-content;
    height: fit-content;
    margin: auto;
    .preview-and-color_wrapper {
      display: flex;
      flex-flow: row;
    }
    button{
      margin-top: 5%;
    }
  }
}

</style>