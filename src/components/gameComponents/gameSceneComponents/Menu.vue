<template>
  <div class="menu_wrapper" id="menu">
    <div class="title_wrapper"><img src="@/assets/title.png" alt=""></div>
    <Players :players="game.players" :localId="game.localId"></Players>
    <PlayingPlayer v-if="playingPlayer"
                   :username="playingPlayer.username"
                   :shape="playingPlayer.shape"
                   :color="playingPlayer.color"
                   :online="playingPlayer.online"
                   :you="playingPlayer.localId === game.localId"></PlayingPlayer>
    <button class="revelation_button"
            v-if="playingPlayer.localId === game.localId && game.settings.revelation < 2"
            @click="revelation">Reveal</button>
    <button class="earthquake_button"
            v-if="playingPlayer.localId === game.localId && game.settings.earthquake < 1"
            @click="earthquake">Earthquake</button>

  </div>
</template>

<script>
import Players from "../gameSceneComponents/MenuComponents/Players";
import PlayingPlayer from "./MenuComponents/PlayingPlayer";
import websocketEvents from "../../../constants/websocketEvents";

export default {
  name: "Menu",
  components: {PlayingPlayer, Players},
  props: {
    game: Object,
    socket: Object
  },
  computed: {
    playingPlayer: function () {
      for (let i = 0; i < this.game.players.length; i++) {
        if (this.game.players[i].playing) return this.game.players[i]
      }
      return null
    }
  },
  methods: {
    earthquake: function() {
      this.socket.emit(websocketEvents.EARTHQUAKE, "")
    },
    revelation: function (){
      this.socket.emit(websocketEvents.REVELATION, "")
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
  background-color:  #87ceeb;
  @media (max-width: 700px) {
    width: 100%;
    position: relative;
    height: 50%;
    border-left: none;
    border-top: 5px solid black;
    margin: 0;
    z-index: 1;
  }
  .title_wrapper{
    width: 80%;
    margin: 5% auto;
    img{
      width: 100%;
    }
  }
  button{
    width: 80%;
    margin: 5px auto;
    font-size: 30px;
  }
}
</style>