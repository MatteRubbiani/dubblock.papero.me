<template>
  <div class="colors_wrapper">
    <div class="color 0" :class="{'taken': !available[0], 'selected': selected===0}" @click="available[0] ? $emit('color', 0) : null">
      <img src="@/assets/pawns/1_0.png" alt="">
    </div>
    <div class="color 1" :class="{'taken': !available[1], 'selected': selected===1}" @click="available[1] ? $emit('color', 1) : null">
      <img src="@/assets/pawns/1_1.png" alt="">
    </div>
    <div class="color 2" :class="{'taken': !available[2], 'selected': selected===2}" @click="available[2] ? $emit('color', 2) : null">
      <img src="@/assets/pawns/1_2.png" alt="">
    </div>
    <div class="color 3" :class="{'taken': !available[3], 'selected': selected===3}" @click="available[3] ? $emit('color', 3) : null">
      <img src="@/assets/pawns/1_3.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "Colors",
  props: {
    available: Array,
    selected: Number
  }
}
</script>

<style scoped lang="scss">
.colors_wrapper{
  height: 25vw;
  max-height: 375px;
  display: flex;
  width: fit-content;
  flex-flow: column;
  margin-left: 1%;
  .color{
    height: 20%;
    margin: 10%;
    user-select: none;
    &.taken{
      opacity: .5;
      filter: grayscale(50%);
    }
    &.selected{
      transform: scale(1.2);
    }
    img{
      height: 100%;
    }
  }
}
</style>