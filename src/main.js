import Vue from 'vue'
import App from './App.vue'
import APlayer from '@moefe/vue-aplayer';

export const EventBus = new Vue();

Vue.config.productionTip = false

Vue.use(APlayer, {
  defaultCover: 'https://gdurl.com/aiWh',
  productionTip: false,
});

new Vue({
  render: h => h(App)
}).$mount('#app')
