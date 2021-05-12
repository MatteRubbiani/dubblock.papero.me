<template>
<div class="players_wrapper">
<Player v-for="i in players" :key="i.localId" :you="i.localId===localId" :admin="i.admin" :color="i.color" :username="i.username" :shape="i.shape" @changePawn="$emit('changePawn')"></Player>
</div>
</template>

<script>
import Player from "./Player";
export default {
  name: "Players",
  components: {Player},
  props: {
    players: Array,
    localId: Number
  }
}
</script>

<style scoped lang="scss">
.players_wrapper{
  height: fit-content;
  display: flex;
  flex-flow: row;
  width: fit-content;
  margin: 10vh auto;
  @media (max-width: 850px) {
    @media (orientation: portrait) {
      margin-top: 5vh;
      display: grid;
      grid-template-columns: 30vw 30vw;
      grid-auto-rows: 30vw 30vw 30vw;

    }
    margin: auto;
  }
}
</style>