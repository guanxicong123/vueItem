<template>
    <div>
        <van-sticky >
            <van-nav-bar class="softNav" >
                <span slot="title" class="topTitle">{{$route.name}}</span>
                <van-icon name="arrow-left" slot="left" class="search" @click="$router.go(-1)"/>
            </van-nav-bar>
        </van-sticky>
       <van-card v-for="(item,index) in favoriteLists" :key="index"
            :price="item.price"
            :desc="item.desc"
            :title="item.name"
            :thumb="item.imgUrl"
            @click="$router.push({path:'/details'})"
        />
        <!-- 收藏为空的时候 -->
        <div class="emptyFavorite" v-if="favoriteLists == ''">
          <div class="icon iconfont iconxiaoxikong-shoucangkong"></div>
            <p class="text">您暂时还没有收藏任何商品窝</p>
            <van-button round type="info" to="/index">去首页逛逛把</van-button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            favoriteLists:[
                // {
                //     id:1,
                //     name:"君乐宝1段原白金装乐铂出生婴儿配方奶粉",
                //     desc:"描述信息",
                //     price:"175.00",
                //     num:1, //数量
                //     imgUrl:"https://cbu01.alicdn.com/img/ibank/2019/082/246/10736642280_1224175409.230x230.jpg"
                // },
            ]
        }
    },
    created(){
        this.favoriteLists = this.$store.state.favorite.favoriteLists
    }
}
</script>
<style lang='scss' scoped>
    // 空收藏
  .emptyFavorite{
    position: absolute;
    top: 100px;
    left: 50%;
    margin-left: -75px;
    .icon{
      font-size: 150px;
      
    }
    .text{
      font-size: 20px;
      text-align: center;
      margin-left: -55px;
      margin-bottom: 20px;
    }
    .van-button{
        margin-left: 20px;
    }
  }
</style>