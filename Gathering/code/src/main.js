import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';//vant
import "./assets/css/reset.css"//初始化移动端样式
import "./assets/font/iconfont.css" //啊里图标
// swiper 插件
import "swiper/css/swiper.min.css";
import { Lazyload } from 'vant';

import "animate.css";
//axios
import axios from "axios";
//配置默认请求url前缀
axios.defaults.baseURL = 'http://127.0.0.1:3000/';
Vue.use(Lazyload);

Vue.use(Vant);
Vue.config.productionTip = false
Vue.prototype.$axios = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
