<template>
<div class="players_wrapper">
  <Player v-for="i in players" :key="i.localId"
          :you="i.localId===localId"
          :admin="i.admin"
          :color="i.color"
          :username="i.username"
          :shape="i.shape"
          :online="i.online"
          @changePawn="$emit('changePawn')"></Player>

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
  width: 100%;
  height: 100px;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: 50% 50%;
}
</style>