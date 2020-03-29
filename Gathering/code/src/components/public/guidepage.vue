<template>
    <div class="guidepage">
        <!-- 引导页 -->
        <!-- Swiper -->
        <div class="swiper-container containerguidepage">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div >
                        <img class="animated bounceInUp" src="../../assets/images/guidepage4.jpg" alt="">
                        <h1 class="animated bounceInUp delay-1s">婴儿用品商城</h1>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div v-show="flag">
                        <img class="animated bounceInUp" src="../../assets/images/guidepage5.jpg" alt="">
                        <h1  class="animated bounceInUp delay-1s">纸尿裤,纸尿片,服装,奶粉..............</h1>
                        <h3 class="animated bounceInUp delay-1s">-只要你需要,这里都能找的到</h3>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div v-show="flag1">
                        <img class="animated bounceInUp" src="../../assets/images/guidepage3.png" alt="">
                        <h1 class="animated bounceInUp delay-1s">支持各种登录</h1>
                        <van-button class="animated bounceInUp delay-2s" plain hairline type="primary" size="small" to="/index">点击体验</van-button>
                    </div>
                </div>
                
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination paginationguidepage"></div>
        </div>
    </div>
</template>
<script>
import Swiper from "swiper"
export default {
    data() {
        return {
            flag:false,//第二页的
            flag1:false //第三页的
        }
    },
    mounted() {
        let _this = this
        new Swiper('.containerguidepage', {
            //必须要给这样才有导航带你的效果,,
            //  pagination: '.swiper-pagination',
            // paginationClickable: true
            // 没有效果
            pagination: {
                    el: '.paginationguidepage',
            },
            on: {
                //达到,切换轮播图的时候也有animate的动画显示
                slideChangeTransitionStart:function (){
                    // _this.flag = false //隐藏
                    _this.flag = true
                    // this.activeIndex 告诉我现在是第几个slide
                    if(this.activeIndex == 2){
                        _this.flag1 = true
                    }
                },
            
            },
        })
       
    },
    created(){
        this.$store.state.btmNav = false;
    },
    destroyed() {
        // 当组件被销毁时候，修改导航数据
        this.$store.state.btmNav = true;
    },
}
</script>
<style lang='scss' scoped>
    
    .swiper-container {
        position: fixed;
        top: 0;
        left: 0;
        // 让其全屏,给一个定位,就会相对于body
        width: 100%;
        height: 100%;
        background-color: #f6f6f6;
    }
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;

        img{
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 100%;
            height: 300px;
            margin-top: 100px;
        }
        
    }
    h1{
        margin-top: 30px;
        color: #31bbee;
    }
    h3{
        font-size: 14px;
        color: #999;
        letter-spacing: .3em;
    }

</style>