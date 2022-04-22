import Vue from 'vue'
import App from './App.vue'
import XlUi from '../packages'
Vue.use(XlUi)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
