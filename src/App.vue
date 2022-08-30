<template>
 <div id="app">
   <img alt="Vue logo" src="./assets/logo.png">
   <HeaderComp></HeaderComp>
   <router-view></router-view>
 </div>
</template>

<script>

import HeaderComp from "@/components/Header/HeaderComp";
export default {
  name: 'App',
  components: {
    HeaderComp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
