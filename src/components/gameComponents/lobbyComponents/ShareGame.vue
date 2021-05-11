<template>
  <div class="share-content_wrapper">

    <div class="share-link-url_wrapper"  v-clipboard="link">
      <p class="share-link_url" >{{ link }}</p>
      <div class="copy-url"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShareGame",
  computed: {
    link: function () {
      return window.location.href
    },
  }
}
</script>

<style scoped lang="scss">

.share-content_wrapper {
  .share-link-url_wrapper {
    display: flex;
    flex-flow: row;
    cursor: pointer;
    width: fit-content;
    float: right;
    margin-right: 10%;

    .share-link_url {
      padding: 0 2% 0 2%;
      width: fit-content;
      font-size: 20px;
      user-select: none;
    }

    .copy-url {
      width: 40px;
      margin: auto;
      height: 40px;
      background-image: url("../../../assets/copy.png") ;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }

    &:hover {
      .copy-url {
        transition: transform .5s;
        transform: scale(1.2);
      }
    }

    &:active{
      .copy-url{
        //background-image: url("../../../assets/copyLight.png");
        transition: transform 0s;
        transform: scale(1.1);
      }
    }
  }
}
</style>