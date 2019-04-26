// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store/index'
import 'vue-awesome/icons'
import Amap from 'vue-amap'

import Vant from 'vant'
import VueCookies from 'vue-cookies'

//定制样式
import './a.less'
//移动适配
import Asfe from 'amfe-flexible'


// import 'mint-ui/lib/style.css'
// import MintUI from 'mint-ui'




// Vue.use(MintUI)
Vue.use(VueCookies)
Vue.use(Asfe)
Vue.use(Vant)
Vue.use(Amap)



Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  components: { App},
  template: '<App/>'
})
