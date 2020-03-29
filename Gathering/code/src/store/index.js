import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import indexsy from "./indexsy.js"
import cart from "./cart"
import my from "./my"
import myOrder from "./myOrder"
import favorite from "./favorite"
import area from "../assets/js/area.js" //地区区号文件
export default new Vuex.Store({
  state: {
    // topNav:,//顶部栏的显示
    btmNav:false,//底部栏的显示
    username:[],//用户信息
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    indexsy,
    cart,
    my,
    area,
    myOrder,
    favorite,
  }
})
