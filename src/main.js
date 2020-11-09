import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'

Vue.config.productionTip = false

import servers from './servers.json'
import images from './images.json'

new Vue({
  render: h => h(App),
  data: {
    servers: servers,
    images: images
  }
}).$mount('#app')
