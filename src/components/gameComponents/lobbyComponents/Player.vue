<template>
  <div class="player_wrapper" @click="you ? $emit('changePawn') : null">
    <div class="player_pawn">
      <img :src="imageUrl" alt="">
    </div>
    <div class="username_wrapper" :class="{'you': you}">
      <p class="username">{{ username }}</p>
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
    .username{
      width: 100%;
      text-align: center;
    }
    .admin{
      color: red;
      margin: 0;
    }
  }

}

</style>