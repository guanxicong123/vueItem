<template>
    <div class="tjSwiper">
        <!-- 推荐-轮播图 -->
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in imgs" :key="index">
                <img :src="image"/>
            </van-swipe-item>
        </van-swipe>
        <!-- 推荐-轮播图 end -->
    </div>
</template>
<script>
// https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/27392573fcdca52229bb6b1f44dae5e5.jpg?thumb=1&w=720&h=360
// https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/af6a1aaf908b750bbeacd7e0d1945086.jpg?thumb=1&w=720&h=360
// https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bd7349fbb622ef89d3837327be4b3682.jpg?thumb=1&w=720&h=360

export default {
    data() {
        return {
            
        }
  },
  props:["imgs"] //接收调用这个组件的数据,实现组件复用
}
</script>
<style lang='scss' scoped>
    .tjSwiper{
        width: 100%;
        // height: 100px;
        // margin-top: 20px;
    }
    img{
        width: 100%;
        // height: 300px;
    }
</style>