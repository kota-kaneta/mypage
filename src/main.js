import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { KinesisContainer, KinesisElement } from 'vue-kinesis'
import vuetify from './plugins/vuetify';
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: { dark: true },
})

Vue.component('kinesis-container', KinesisContainer)
Vue.component('kinesis-element', KinesisElement)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')
