<template>
  <div class="menu_wrapper">
    <h2>DUBBLOCK</h2>
    <Players :players="game.players" :localId="game.localId"></Players>
    <PlayingPlayer v-if="playingPlayer"
                   :username="playingPlayer.username"
                   :shape="playingPlayer.shape"
                   :color="playingPlayer.color"
                   :online="playingPlayer.online"
                   :you="playingPlayer.localId === game.localId"></PlayingPlayer>
    <button class="revelation_button" v-if="playingPlayer.localId === game.localId">Reveal</button>
    <button class="earthquake_button" v-if="playingPlayer.localId === game.localId">Earthquake</button>

  </div>
</template>

<script>
import Players from "../gameSceneComponents/MenuComponents/Players";
import PlayingPlayer from "./MenuComponents/PlayingPlayer";

export default {
  name: "Menu",
  components: {PlayingPlayer, Players},
  props: {
    game: Object
  },
  computed: {
    playingPlayer: function () {
      for (let i = 0; i < this.game.players.length; i++) {
        if (this.game.players[i].playing) return this.game.players[i]
      }
      return null
    }
  }
}
</script>

<style scoped lang="scss">
.menu_wrapper {
  height: 100%;
  width: 20%;
  min-width: 250px;
  border-left: 3px solid black;
  position: absolute;
  top: 0;
  right: 0;

  h1{
    color: black;
  }

  button{
    width: 80%;
    margin: 5px auto;
    font-size: 30px;
  }
}
</style>