import Vue from 'vue'
import App from './App'
import store from './store/vuex.js'

Vue.config.productionTip = false

App.mpType = 'app'
//在app上也能使用 就这样写
Vue.prototype.$store = store

const app = new Vue({
	store,
    ...App
	
})
app.$mount()
