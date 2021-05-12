<template>
  <div class="player_wrapper" @click="you ? $emit('changePawn') : null">
    <div class="player_pawn">
      <img :src="imageUrl" alt="">
    </div>
    <div class="username_wrapper" :class="{'you': you}">
      <div class="username_wrapper">
        <p class="username">{{ username }}</p>
        <div class="admin_image-wrapper" v-if="admin"><img src="@/assets/admin.png" alt=""></div>
      </div>
      
      <p class="admin" v-if="admin">Admin</p>
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
    .username_wrapper{
      width: 100%;
      display: flex;
      flex-flow: row;
      .username{
        width: 80%;
        text-align: left;
      }
      .admin_image-wrapper{
        width: 30px;
        height: 30px;
      }
      img{
        width: 100%;
      }

    }
    .admin{
      color: red;
      margin: 0;
      position: absolute;
      top: 10px;
      width: 100%;
      text-align: center;
    }
  }

}

</style>