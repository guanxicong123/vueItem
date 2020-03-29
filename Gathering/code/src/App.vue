<template>
  <div id="app">


    <van-tabbar v-model="active" v-show="$store.state.btmNav" :route="routeTrue">
      <van-tabbar-item to="/index" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/soft" icon="search">分类</van-tabbar-item>
      <van-tabbar-item to="/cart" icon="friends-o">购物车</van-tabbar-item>
      <van-tabbar-item to="/my" icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
    <transition mode="out-in" :duration="{ enter: 500, leave: 500 }" enter-active-class="animated fadeIn"  leave-active-class="animated fadeOut">
        <router-view/>
    </transition>
    <!-- 控制底部显示 -->
    <div class="bottomnull" v-show="$store.state.btmNav"></div>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      active:0,
      routeTrue:true
    }
  },
}
</script>
<style lang="scss">

  .bottomnull{
    height: 50px;
    width: 100%;
  }

  .softNav{
        background-color: #f2f2f2;
        font-size: 16px;
        color: #999;
       
        .topTitle{
            font-size: 16px;
        }
    }
</style>
