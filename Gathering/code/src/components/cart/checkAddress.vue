<template>
    <div>
       <van-sticky >
            <van-nav-bar class="softNav" >
                <span slot="title" class="topTitle">{{$route.name}}</span>
                <van-icon name="arrow-left" slot="left" class="search" @click="$router.push({path:'/my'})"/>
            </van-nav-bar>
        </van-sticky>
        <!-- 地址选择 -->
      <van-cell-group v-for="(item,index) in addressLists" :key="index" @click="determine(item)">
        <van-cell icon="location-o" :label="item.address">
            <span slot="title">{{item.name}}  {{item.tel}}</span>
        </van-cell>
      </van-cell-group>
      <!-- 增加地址 -->
      <van-button type="primary" size="large" class="mt-20" to="/addAddress">添加地址</van-button>
    </div>
</template>
<script>
export default {
 data() {
    return {
      addressLists:[]
    }
  },
  methods: {
    determine(item) {
        this.$router.push({
            path:"/order"
        })
        this.$store.commit("my/editDefault",item)
    },
    
  },
  created(){
      this.addressLists = this.$store.state.my.addressLists
  }
}
</script>
<style lang='scss' scoped>
    .mt-20{
        margin-top: 20px;
    }
    .van-cell-group{
        margin-top: 10px;
        padding: 15px 16px;
    }
</style>