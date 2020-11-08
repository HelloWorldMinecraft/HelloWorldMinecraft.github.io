<template>
  <div id="app">
    <div id="background">
      <canvas ref="background" id="bacgkround"></canvas>
    </div>
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
    trianglify({
      width: screen.width,
      height: screen.height
    }).toCanvas(this.$refs.background);
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

#background {
  position: fixed;
}
</style>
