<template>
  <div id="app">
    <div id="background">
      <canvas ref="background" id="bacgkround"></canvas>
    </div>
    <MainPage :servers="this.$root.servers" :images="this.$root.images"/>
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
    this.generateBackground();
  },

  created: function() {
    window.addEventListener("resize", this.generateBackground);
  },
  destroyed: function() {
    window.removeEventListener("resize", this.generateBackground);
  },

  methods: {
    generateBackground() {
      trianglify({
        width: screen.width,
        height: screen.height,
        seed: 12345
      }).toCanvas(this.$refs.background);
    }
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
