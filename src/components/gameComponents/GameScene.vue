<template>
<div>
  <Menu :game="game"></Menu>
</div>
</template>

<script>
import Menu from "./gameSceneComponents/Menu";
export default {
  name: "GameScene",
  components: {Menu},
  props: {
    game: Object
  }
}
</script>

<style scoped>

</style>