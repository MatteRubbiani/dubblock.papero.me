<template>
  <UserHamburgerMenu :show="showHamburgerMenu"
                   :src="require('@/assets/hamburger_icon_dark.png')"
                   @toggle-show="showHamburgerMenu=$event"/>
  <Lobby v-if="socket  && status === 0" :gameId="gameId" :socket="socket" :game="game"></Lobby>
  <GameScene  v-if="socket  && status === 1" :game="game" :socket="socket" ></GameScene>
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
import axios from "axios";
import store from "../store";

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
    /*return {
      socket: 1,
      showHamburgerMenu: false,
      game: game,
      status: 1 //TODO: change
    }*/
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
  },
  beforeRouteEnter(to, from, next){
    //next();
    const createLocalAccount = ()=>{
      axios
          .get(urls.createLocalAccountUrl)
          .then((response) => {
            store.dispatch("setUsername", response.data.username);
            store.dispatch("setLogged", false);
            next();
          })
          .catch(() => {
            location.href = location.origin+"/error?from="+location.pathname;
          });
    }
    if(store.state.username === "" && store.state.logged === -1) { //se non è ancora stato trovato il logged
      axios
          .get(urls.getLoginInfoUrl)
          .then((response) => {
            if (response.data) { //se è loggato in qualche modo
              store.dispatch("setLogged", response.data.google_signed_in);
              store.dispatch("setUsername", decodeURIComponent(response.data.username));

              next(); //se è loggato in qualche modo può andare dove vuole

            } else { //se non è loggato
              createLocalAccount();
            }
          })
          .catch(() => {
            location.href = location.origin+"/error?from="+location.pathname;
          });
    } else {
      if(store.state.username === null){ //se non è loggato
        createLocalAccount();
      } else next(); //se è loggato
    }
  },
}
</script>

<style scoped lang="scss">
template{
  height: 100%;
}

</style>