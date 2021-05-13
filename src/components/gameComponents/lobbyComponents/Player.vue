<template>
  <div class="player_wrapper" @click="you ? $emit('changePawn') : null">
    <div class="player_pawn">
      <img :src="imageUrl" alt="">
    </div>
    <div class="username_wrapper" :class="{'you': you, 'admin': admin}">
      <div class="username_wrapper">
        <p class="username">{{ username }}</p>
      </div>
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
    username: String
  },
  computed: {
    imageUrl: function () {
      return require("@/assets/pawns/" + this.shape + "_" + this.color + ".png");
    }
  },
  mounted() {
    console.log("sdfdsf")
  }
}
</script>

<style scoped lang="scss">
.player_wrapper {
  height: 150px;
  width: 150px;
  display: flex;
  flex-flow: column;
  position: relative;
  @media (max-width: 850px) {
    height: 15vw;
    width: 15vw;
    @media (orientation: portrait) {
      height: 30vw;
      width: 30vw;
      grid-column: auto;
      grid-row: auto;
    }
  }

  .player_pawn {
    img {
      width: 70%;
    }
  }

  .username_wrapper {
    text-align: center;
    display: flex;
    flex-flow: column;

    &.you {
      font-weight: bold;
    }

    &.admin{
      color: red;
    }

    .username_wrapper {
      width: 100%;
      display: flex;
      flex-flow: row;

      .username {
        width: 100%;
        text-align: center;
      }
    }
  }

}

</style>