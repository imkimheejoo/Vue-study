import Vue from 'vue'
// ./App.vue에 있는 것을 가져와서 App에 넣는다 라는 뜻
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
