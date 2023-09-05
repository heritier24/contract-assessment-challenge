import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VModal from 'vue-js-modal'
import axios from 'axios'

Vue.use(VModal, {
  dynamicDefaults: {
    draggable: true,
    resizable: true,
    height: 500
  }
}, { dialog: true })

axios.defaults.baseURL = process.env.VUE_APP_API_URL
axios.defaults.headers.post['Content-Type'] = 'application/json'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
