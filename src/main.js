import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mockNotes from './mock-data.js'

Vue.config.productionTip = false

let data = {
    notes: mockNotes,
    tags: []
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')

// you can now get to data via this.$root.$data
