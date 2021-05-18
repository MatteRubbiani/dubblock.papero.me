<template>
  <UserHamburgerMenu :show="showHamburgerMenu"
                   :src="require('@/assets/hamburger_icon_dark.png')"
                   @toggle-show="showHamburgerMenu=$event"/>
  <Lobby v-if="socket  && status === 0" :gameId="gameId" :socket="socket" :game="game"></Lobby>
  <GameScene  v-if="socket  && status === 1" :game="game" :socket="socket"></GameScene>
  <Loading v-if="!socket || status === null"></Loading>
</template>


<script>
import io from "socket.io-client";

import UserHamburgerMenu from "../components/UserHamburgerMenu";
import Lobby from "../components/gameComponents/Lobby";
import GameScene from "../components/gameComponents/GameScene";
import {urls} from "../constants/constants";
import websocketEvents from "../constants/websocketEvents";
import Loading from "../components/Loading";
export default {
  name: "Game",
  components: {Loading, GameScene, Lobby, UserHamburgerMenu},
  data() {
    return {
      socket: null,
      showHamburgerMenu: false,
      game: null,
      status: null //TODO: change
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
      console.log(data)
      this.status = data.status
      this.game = data
    })

    this.socket.on(websocketEvents.GAME_MODIFIED, data => {
      this.game = data
      console.log(data)
      this.status = data.status
    })
  }
}
</script>

<style scoped lang="scss">
template{
  height: 100%;
}

</style>