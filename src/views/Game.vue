<template>
  <UserHamburgerMenu :show="showHamburgerMenu"
                   :src="require('@/assets/hamburger_icon_dark.png')"
                   @toggle-show="showHamburgerMenu=$event"/>
  <Lobby v-if="socket  && game.status === 0" :gameId="gameId" :socket="socket" :game="game"></Lobby>
  <GameScene  v-if="socket  && game.status === 1"></GameScene>
</template>


<script>
import io from "socket.io-client";

import UserHamburgerMenu from "../components/UserHamburgerMenu";
import Lobby from "../components/gameComponents/Lobby";
import GameScene from "../components/gameComponents/GameScene";
import {urls} from "../constants/constants";
import websocketEvents from "../constants/websocketEvents";
export default {
  name: "Game",
  components: {GameScene, Lobby, UserHamburgerMenu},
  data() {
    return {
      socket: null,
      showHamburgerMenu: false,
      game: null
    }
  },
  computed: {
    gameId: function (){
      return this.$route.params.gameId;
    }
  },
  mounted() {
    this.socket = io(urls.baseUrl, {
      path: urls.socketPath,
      autoConnect: true
    })

    this.socket.on("connect", () => {
      this.socket.emit(websocketEvents.CONNECT_TO_GAME, {gameId: this.gameId});
    })

    this.socket.on(websocketEvents.LOBBY_MODIFIED, data => {
      console.log("lobby modified ", data)
      this.game = data
    })

    this.socket.on(websocketEvents.GAME_MODIFIED, data => {
      this.game = data
    })
  }
}
</script>

<style scoped>

</style>