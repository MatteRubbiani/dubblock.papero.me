<template>
<div class="preview_wrapper">
  <img :src="imageUrl" alt="">
</div>
</template>

<script>
export default {
  name: "Preview",
  props: {
    color: Number,
    shape: Number
  },
  computed: {
    imageUrl: function (){
      return require("@/assets/pawns/" + this.shape + "_" + this.color + ".png");
    }
  }
}
</script>

<style scoped lang="scss">
.preview_wrapper{
  width: 25vw;
  @media (max-width: 500px) {
    width: 50vw;
  }
  max-width: 375px;
  height: fit-content;
  user-select: none;
  img{
    width: 60%;
    margin: 20%;
  }
}

</style>