<template>
<div class="playing-player_wrapper">
  <p class="text">Playing:</p>
  <div class="pawn_wrapper" :class="{'offline': !online}">
    <img :src="imageUrl" alt="">
  </div>
</div>
</template>

<script>
export default {
  name: "PlayingPlayer",
  props:{
    username: String,
    you: Boolean,
    shape: Number,
    color: Number,
    online: Boolean
  },
  computed: {
    imageUrl: function () {
      return require("@/assets/pawns/" + this.shape + "_" + this.color + ".png");
    }
  }
}
</script>

<style scoped lang="scss">
.playing-player_wrapper{
  width: 100%;
  display: flex;
  flex-flow: row;
  height: fit-content;
  padding: 10px;
  .text{
    font-size: 20px;
  }
  .pawn_wrapper{
    width: 40px;
    margin: auto 20px;
    img{
      width: 100%;
    }
    &.offline{
      -webkit-filter: grayscale(100%);
      filter: grayscale(100%);
    }
  }
}
</style>