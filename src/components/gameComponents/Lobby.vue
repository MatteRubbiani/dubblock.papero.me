<template>
<div class="lobby_wrapper" id="lobby_wrapper">
  <div class="enter_full_screen" @click="changeFullScreen">
    <img src="@/assets/fullScreen.png" alt="" v-if="!fullScreen">
    <img src="@/assets/exitFullScreen.png" alt="" v-if="fullScreen">
  </div>
  <div class="lobby-header_wrapper"><img src="@/assets/title.png" alt=""></div>
  <div class="settings_wrapper">
    <p class="difficulty_text">Difficulty: </p>
    <div class="difficulty-setting_wrapper">
      <img src="@/assets/upArrow.png" alt="" v-if="isAdmin && game && game.settings.difficulty > 0" @click="changeDifficulty(-1)">
      <div class="difficulty-level">{{game.settings.difficulty}}</div>
      <img src="@/assets/downArrow.png" alt="" v-if="isAdmin && game && game.settings.difficulty < 6" @click="changeDifficulty(1)">
    </div>
  </div>

  <ShareGame></ShareGame>
  <Players :players="game.players" :localId="game.localId" @changePawn="showChangePawn=true"></Players>

  <div class="buttons_wrapper">
    <button class="join" v-if="game.localId === null" @click="join">Join</button>
    <button class="change_pawn" v-if="game.localId !== null" @click="showChangePawn=true">Change Pawn</button>
    <button class="quit" v-if="game.localId !== null && game.players.length > 1" @click="quit">Quit</button>
    <button class="start" v-if="game.localId !== null && isAdmin" @click="start">Start</button>
  </div>
  <div class="change-pawn_background" @click="showChangePawn=false" v-if="showChangePawn"></div>
  <ChangePawn :players="game.players" :localId="game.localId" :socket="socket" v-if="showChangePawn && socket" @close="showChangePawn=false"></ChangePawn>
</div>
</template>

<script>
import ShareGame from "./lobbyComponents/ShareGame";
import Players from "./lobbyComponents/Players";
import ChangePawn from "./lobbyComponents/ChangePawn";
import websocketEvents from "../../constants/websocketEvents";
export default {
  name: "Lobby",
  components: {ChangePawn, Players, ShareGame},
  props: {
    gameId: String,
    socket: Object,
    game: Object
  },
  data(){
    return {
      showChangePawn: false,
      fullScreen: false
    }
  },
  computed: {
    isAdmin: function (){
      let a = false
      this.game.players.forEach(p => {
        if (p.admin && p.localId === this.game.localId) a = true
      })
      return a
    }
  },
  methods: {
    quit: function (){
      this.socket.emit(websocketEvents.QUIT_GAME)
    },
    join: function (){
      this.socket.emit(websocketEvents.JOIN_GAME)
    },
    start: function (){
      this.socket.emit(websocketEvents.START_GAME)
    },
    changeDifficulty: function (quantity){
      this.socket.emit(websocketEvents.CHANGE_DIFFICULTY, (this.game.settings.difficulty + quantity))
    },
    changeFullScreen: function (){
      if (!this.fullScreen){
        let el = document.getElementById("app")
        el.requestFullscreen()
      }else{
        document.exitFullscreen()
      }
      this.fullScreen = !this.fullScreen
    }
  },
}
</script>

<style scoped lang="scss">
.lobby_wrapper {
  width: 100%;
  margin: auto;
  max-width: 1500px;
  height: 100%;
  overflow: hidden;
  background-color:  #87ceeb;
  position: relative;

  .enter_full_screen{
    height: 40px;
    width: 40px;
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
    img{
      width: 100%;
    }
  }

  .lobby-header_wrapper {
    width: 50%;
    margin: auto;
    max-width: 1000px;
    img{
      width: 100%;
    }
    @media (max-width: 700px) {
      width: 70%;
    }
  }

  .settings_wrapper {
    width: fit-content;
    display: flex;
    flex-flow: row;
    margin: auto;

    .difficulty_text {
      font-size: 170%;
      margin: auto;
    }

    .difficulty-setting_wrapper {
      display: flex;
      flex-flow: row;
      margin-top: 5px;

      .difficulty-level {
        margin: auto;
        font-size: 40px;
      }

      img {
        height: 40px;
        margin: auto;
      }
    }

    @media (max-width: 700px) {
      flex-flow: row;
      .difficulty_text{
        font-size: 150%;
      }
      .difficulty-setting_wrapper{
        font-size: 100%;
        margin-left: 5px;
        margin-top: 2px;
        .difficulty-level {
          margin: auto;
          font-size: 30px;
        }
      }
    }
  }

  .buttons_wrapper {
    width: 100%;
    max-width: 1500px;
    position: absolute;
    bottom: 2%;
    height: fit-content;
    background-color:  #87ceeb;

    button {
      width: 30%;
      max-width: 300px;
      font-size: 150%;
    }
    @media (max-width: 500px) {
      display: flex;
      flex-flow: column;
      button{
        width: 70%;
        margin: 1% auto;
      }
    }
  }

  .change-pawn_background {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #cbcbcb;
    opacity: .9;
    @media (max-width: 500px) {
      opacity: 1;
      background-color: white;
    }

  }
}
</style>
