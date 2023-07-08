import App from './App'
import AV from '@/assets/js/av.js'

Vue.prototype.$av = AV


// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
Vue.prototype.$AV = AV;
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif



// token
// MpnfR2CR3ksPNpOfK3yfdQmO54eUt3IDPVxDrDoNtD9twynuJfC1U4F6FELzPxtn-cn-n1