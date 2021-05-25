<template>
<router-view/>
</template>

<script>


export default {
  name: 'App',
}
</script>

<style lang="scss">
html{
  overflow-x: hidden;
  width: 100%;
  height: 100%;
  background-color: #87ceeb;
  scroll-behavior: smooth;
}

body{
  margin: 0;
  width: 100%;
  height: 100%;
  background-color:  #87ceeb;
  overflow-x: hidden;

  scroll-behavior: smooth;
}

h1{
  font-size: 500%;
  margin: 2% 0 0 0;
  color: white;
}

button{
  font-size: 300%;
  padding: 2%;
  border-radius: 10px;
  outline: none;
  color: black;
  background: none;
  border: 2px solid black;
  transition: all 0.5s;
  margin: 10px;

  &:hover{
     background-color: black;
     color: white;
   }
}

#app {
  width: 100%;
  height: 100%;
  font-family: "Comic Sans MS", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

::-webkit-scrollbar {
  width: 0;
}
</style>
