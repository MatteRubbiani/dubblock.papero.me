<template>
  <div class="player_wrapper">

    <div class="pawn_wrapper" :class="{'you': you, 'offline': !online}">
      <img :src="imageUrl" alt="pawn">
    </div>
  </div>
</template>

<script>
export default {
  name: "Player",
  props: {
    admin: Boolean,
    you: Boolean,
    color: Number,
    shape: Number,
    username: String,
    playing: Boolean,
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
.player_wrapper {
  grid-row: auto;
  grid-column: auto;
  display: flex;
  flex-flow: row;
  width: fit-content;
  height: fit-content;
  margin: 20px;

  .pawn_wrapper {
    width: 30px;

    img {
      width: 100%;
    }

    &.offline {
      -webkit-filter: grayscale(100%);
      filter: grayscale(100%);
    }
  }
}

</style>