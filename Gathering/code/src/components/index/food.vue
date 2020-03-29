<template>
    <div>
       <!-- 轮播图组件 -->
       <swiper :imgs="  images"></swiper>

       <!-- 商品列表 -->
        <div class="goodslist">
            <img src="../../assets/images/33.webp" class="hot">
        </div>
        
        <!-- 商品列表 end -->
    </div>
</template>
<script>
import swiper from "../../components/public/swiper.vue"

export default {
    data() {
        return {
            images: [
                'https://cbu01.alicdn.com/img/ibank/2019/356/641/10855146653_1224175409.jpg',
                'https://cbu01.alicdn.com/img/ibank/2018/371/214/9403412173_1224175409.jpg',
                'https://cbu01.alicdn.com/img/ibank/2018/427/283/9403382724_1224175409.jpg'
            ]
        }
    },
    components:{
        swiper, //轮播图
    }
}
</script>
<style lang='scss' scoped>
    .goodslist{
        margin-top: 20px;
        img{
            width: 100%;
            height: 100px;
        }
    }
    .van-card{
        margin-top: 10px;
    }
</style>