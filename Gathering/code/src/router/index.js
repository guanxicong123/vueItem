import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import indexsy from "./indexsy.js"
import cart from "./cart.js"
import soft from "./soft.js"
import my from "./my.js"
import details from './details.js'
import publics from './public.js'
import myOrder from './myOrder.js'
const routes = [
  {
    path: '/',
    redirect:"/advertpage", //默认跳转到广告页
    
  },

  ...indexsy,
  ...cart,
  soft,
  ...my,
  ...details,
  ...publics,
  ...myOrder,
  
  {
    path:"/search",
    name:"搜索",
    component:()=>import("../components/search/search.vue")
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
