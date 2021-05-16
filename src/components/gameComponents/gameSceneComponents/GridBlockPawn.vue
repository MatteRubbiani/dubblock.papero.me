<template>
<div class="block_pawn_wrapper">
  <img :src="imageUrl" alt="">
</div>
</template>

<script>
export default {
  name: "GridBlockPawn",
  props: {
    shape: Number,
    color: Number,
  },
  computed: {
    imageUrl: function () {
      return require("@/assets/pawns/" + this.shape + "_" + this.color + ".png");
    },
  }
}
</script>

<style scoped lang="scss">
.block_pawn_wrapper{
  grid-column: auto;
  grid-row: auto;
  width: 100%;
  img{
    width: 80%;
    margin: auto;
  }
}

</style>