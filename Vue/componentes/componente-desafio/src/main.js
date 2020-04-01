import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Nav from './components/Navbar.vue'

Vue.config.productionTip = false
Vue.component('navbar', Nav)

new Vue({
  render: h => h(App),
}).$mount('#app')
