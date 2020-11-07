<template>
  <div id="app">
    <canvas id="background"></canvas>
    <MainPage/>
  </div>
</template>

<script>
import MainPage from './components/MainPage.vue'
const trianglify = require('trianglify')

export default {
  name: 'App',
  components: {
    MainPage
  },
  mounted: function() {
    document.body.style.background = "url(" + trianglify({
      width: screen.width,
      height: screen.height
    }).toCanvas().toDataURL() + ")"
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
}
</style>
