<template>
<div class="home_wrapper">
  <UserHamburgerMenu :show="showHamburgerMenu"
                     :src="require('@/assets/hamburger_icon_dark.png')"
                     @toggle-show="showHamburgerMenu=$event"/>
  <div class="home-header_wrapper">
    <div class="home-header-title_wrapper">
      Dubblock
    </div>
  </div>

  <div class="home-content_wrapper">
    <input :placeholder="'insert lobby name'" id="input">
    <button class="go-button" @click="letsGo" id="go-button">Let's go</button>
  </div>

</div>
</template>

<script>
import {urls} from "../constants/constants";
import axios from "axios";
import store from "../store";
import UserHamburgerMenu from "../components/UserHamburgerMenu";
export default {
  name: "Home",
  components: {UserHamburgerMenu},
  data() {
    return {
      showHamburgerMenu: false
    }
  },
  methods: {
    letsGo: function (){
      let content = document.getElementById("input").value
      if (!content) content = null
      if (content){
        window.location.href = content;
      }

    }
  },
  mounted() {
    let input = document.getElementById("input")
    input.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("go-button").click();
      }
    });
  },
  beforeRouteEnter(to, from, next){
    if (store.state.logged === -1 || store.state.username === "") {
      axios.get(urls.getLoginInfoUrl)
          .then(response => {
            if (response.data) {
              store.dispatch("setLogged", response.data.google_signed_in);
              store.dispatch("setUsername", response.data.username);
              next();
            } else {
              store.dispatch("setLogged", false);
              store.dispatch("setUsername", null);
              next();
            }
          })
          .catch(() => {
            location.href = location.origin + "/error?from=" + location.pathname;
          });
    } else next();
  }
}
</script>

<style scoped lang="scss">
.home_wrapper{
  .home-header_wrapper{
    .home-header-title_wrapper{
      font-size: 300%;
      margin-top: 20px;
    }
  }

  .home-content_wrapper{
    display: flex;
    flex-flow: column;
    width: fit-content;
    margin: 80px auto auto;
    @media (max-width: 700px) {
      width: 90%;
    }
    button{
      margin-top: 40px;
    }

    input{
      background: none;
      outline: none;
      border: none;
      border-bottom: 2px solid white;
      font-size: 200%;
      text-align: center;
      color: black;
      margin: auto;
      @media (max-width: 700px){
        width: 80%;
      }
      transition: all .5s;
      &:focus{
        border-bottom-color: black;
      }
    }
  }
}
</style>