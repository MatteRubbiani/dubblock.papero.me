<template>
  <div class="shapes_wrapper">
    <div class="shape 0" :class="{'taken': !available[0], 'selected': selected===0}" @click="$emit('shape', 0)">
      <img src="@/assets/pawns/shape_0.png" alt="">
    </div>
    <div class="shape 1" :class="{'taken': !available[1], 'selected': selected===1}" @click="$emit('shape', 1)">
      <img src="@/assets/pawns/shape_1.png" alt="">
    </div>
    <div class="shape 2" :class="{'taken': !available[2], 'selected': selected===2}" @click="$emit('shape', 2)">
      <img src="@/assets/pawns/shape_2.png" alt="">
    </div>
    <div class="shape 3" :class="{'taken': !available[3], 'selected': selected===3}" @click="$emit('shape', 3)">
      <img src="@/assets/pawns/shape_3.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "Shapes",
  props: {
    selected: Number,
    available: Array
  }
}
</script>

<style scoped lang="scss">
.shapes_wrapper{
  display: flex;
  flex-flow: row;
  width: 25vw;
  max-width: 375px;
  .shape{
    width: 20%;
    margin: 2.5%;
    user-select: none;
    &.taken{
      visibility: hidden;
    }
    &.selected{
      transform: scale(1.3);
    }
    img{
      width: 100%;
    }
  }
}

</style>