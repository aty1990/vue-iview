<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
    import './assets/css/base/common.css';
    import './assets/css/base/global.css';
   
    export default {
      
    }
</script>

<style>
  html,body{
      height: 100%;
      overflow: hidden;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #2c3e50;
    /*margin-top: 60px;*/
  }
</style>
