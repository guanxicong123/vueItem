<template>
    <div id="index">
        <van-sticky>
            <div class="bg-f2">
                <!-- 头部搜索框 -->
                <van-row>
                    <van-col span="3" class="col_left">
                        <div class="iconfont iconyinger logo"></div>
                    </van-col>
                    <van-col span="21" class="inp">
                        <van-search placeholder="请输入搜索关键词" @focus="toSearch" background="#f2f2f2" class="inp" />
                    </van-col>
                </van-row>
            </div>
        </van-sticky>
        <!-- 轮播图 -->
        <swiper :imgs="swiperUrl"></swiper>
        <!-- 宫格分类 -->
        <div id="googge">
            <van-grid square icon-size="40" :column-num="3">
                <van-grid-item
                    v-for="value in 6"
                    :key="value"
                    :icon="urlImg[value-1]"
                    :text="text[value-1]"
                    to="/details"
                />
                    <!-- :to="path[value-1]" -->
            </van-grid>
        </div>
                
        <!-- <transition mode="out-in" name="transitionIndex">
            <router-view></router-view>
        </transition> -->
        <!-- 商品列表 -->
        <div class="goodslist">
            <img src="../assets/images/33.webp" class="hot">
        </div>
        <router-link to="/details">
            <van-card
                
                price="49.50"
                desc="线上专供乐点宝宝婴儿纸尿裤 男女宝适用尿不湿 尿不湿厂家OEM"
                title="乐点宝宝婴儿纸尿裤"
                thumb="https://cbu01.alicdn.com/img/ibank/2019/986/361/10710163689_1224175409.jpg"
            />
        </router-link>
        <router-link to="/details">
            <van-card
                price="79.00"
                desc="描述信息"
                title="乐点宝宝竹炭因子柔薄金装宝宝纸尿裤"
                thumb="https://cbu01.alicdn.com/img/ibank/2019/559/897/10913798955_1224175409.400x400.jpg"
            />
        </router-link>
        <router-link to="/details">
            <van-card
                price="49.50"
                desc="线上专供乐点宝宝婴儿纸尿裤 男女宝适用尿不湿 尿不湿厂家OEM"
                title="乐点宝宝婴儿纸尿裤"
                thumb="https://cbu01.alicdn.com/img/ibank/2019/986/361/10710163689_1224175409.jpg"
            />
        </router-link>
        <!-- 商品列表 end -->
        <!-- 商品列表 -->
        <div class="goodslist">
            <img src="../assets/images/33.webp" class="hot">
        </div>
        <router-link to="/details">
            <van-card
                
                price="49.50"
                desc="线上专供乐点宝宝婴儿纸尿裤 男女宝适用尿不湿 尿不湿厂家OEM"
                title="乐点宝宝婴儿纸尿裤"
                thumb="https://cbu01.alicdn.com/img/ibank/2019/986/361/10710163689_1224175409.jpg"
            />
        </router-link>
        <router-link to="/details">
            <van-card
                price="79.00"
                desc="描述信息"
                title="乐点宝宝竹炭因子柔薄金装宝宝纸尿裤"
                thumb="https://cbu01.alicdn.com/img/ibank/2019/559/897/10913798955_1224175409.400x400.jpg"
            />
        </router-link>
        <router-link to="/details">
            <van-card
                price="49.50"
                desc="线上专供乐点宝宝婴儿纸尿裤 男女宝适用尿不湿 尿不湿厂家OEM"
                title="乐点宝宝婴儿纸尿裤"
                thumb="https://cbu01.alicdn.com/img/ibank/2019/986/361/10710163689_1224175409.jpg"
            />
        </router-link>
        <!-- 商品列表 end -->
        <!-- 食品类专场 -->
        <div class="fool">
            <div class="top"><span>食品类专场</span></div>
            <router-link v-for="(item,index) in foolLists" :key="index" to="/detailsFool">
                <van-card 
                    :price="item.price"
                    :desc="item.desc"
                    :title="item.name"
                    :thumb="item.imgUrl"
                />
            </router-link>
        </div>
        
    </div>
</template>
<script>
// import Swiper from "swiper";
// import navDrop from "../components/index/indexCom/navDrop.vue"
import swiper from "../components/public/swiper"
export default {
    data() {
        return {
            swiperUrl:[
                'https://cbu01.alicdn.com/img/ibank/2018/867/414/9701414768_1224175409.jpg',
                'https://cbu01.alicdn.com/img/ibank/2018/756/438/9518834657_1224175409.jpg'

            ],
            // 宫格的数据
            urlImg:[
                'https://img.alicdn.com/imgextra/i2/2206835735880/O1CN019cVBub1tJ5RWpQhEE_!!0-item_pic.jpg_430x430q90.jpg',
                'https://img.alicdn.com/imgextra/i3/2274291319/O1CN017t8RM01Lc8x7enZ5o_!!2274291319.jpg_430x430q90.jpg',
                'https://img.alicdn.com/imgextra/i4/1974617359/O1CN01rdRNjZ24ETE9DFGeg_!!0-item_pic.jpg_430x430q90.jpg',
                'https://img.alicdn.com/imgextra/i4/2370430007/O1CN01IxAX5c1BvFMMlkkMf_!!2370430007.jpg_430x430q90.jpg',
                'https://img.alicdn.com/imgextra/i3/3296592548/TB23RarnyOYBuNjSsD4XXbSkFXa_!!3296592548.jpg_430x430q90.jpg',
                'https://img.alicdn.com/imgextra/i1/307368690/TB21fikdJuO.eBjSZFCXXXULFXa_!!307368690.jpg_430x430q90.jpg',
            ],
            text:[
                '食品类',
                '食具类',
                '启智类',
                '服装及布类',
                '家具类',
                '电子电器类',
            ],
            path:[
                '/food',
                '/tableware',
                '/enlightened',
                '/cloth',
                '/furniture',
                '/electronic'
            ],
            // 食品类数据
            foolLists:[
                {
                    id:1,
                    name:"台湾农纯乡宝宝粥副食品婴儿宝宝辅食体验组方便即食随机口味6包",
                    desc:"描述信息",
                    price:"125.00",
                    num:1, //数量
                    imgUrl:"https://gd1.alicdn.com/imgextra/i4/2206616935494/O1CN01dqju5l1qSIZBWehem_!!2206616935494.jpg_400x400.jpg"
                },
                {
                    id:1,
                    name:"爱婴淘小花面颗粒粒面营养儿童面条面食辅食无添加盐送婴儿辅食品",
                    desc:"描述信息",
                    price:"32.80",
                    num:1, //数量
                    imgUrl:"https://img.alicdn.com/imgextra/i2/3012865502/O1CN01qnR0EW1qVxhNcoOUr_!!0-item_pic.jpg_430x430q90.jpg"
                },
                {
                    id:1,
                    name:"功夫小鸭KFDUCK棒棒形饼干宝宝零食炭烧棒儿童小孩儿辅食磨牙230g",
                    desc:"描述信息",
                    price:"19.90",
                    num:1, //数量
                    imgUrl:"https://img.alicdn.com/imgextra/i1/4041235400/TB2t7njX3TqK1RjSZPhXXXfOFXa_!!4041235400.jpg_430x430q90.jpg"
                },
            ]
        }
    },
    methods: {
        toSearch(){
            this.$router.push({
                path:"/search"
            })
        },

    },
    components:{
        swiper
    },
    created(){
        this.$store.state.btmNav = true
    },
    destroyed() {
        this.$store.state.btmNav = false
    },
}
</script>
<style lang="scss" scoped>
        
    #index{
        // overflow: hidden;  //解决滚动条效果
        background-color: #f2f2f2;
        .bg-f2{
            background-color: #f2f2f2;
        }
        .swiper-slide{
            width: 100px;
        }
        .van-card{
            margin-top: 10px;
        }
        .col_left{
            text-align: center;
            height: 44px;
            line-height: 54px;
            .iconfont{
                font-size: 50px;
                
                &.logo{
                    font-size: 30px;
                    color: #fca04d;
                }
            }
        }
        // 搜索框样式
        .van-field__body{
            font-size: 14px;
        }
      
        .van-field__control{
            font-size: 10px;
            background-color: #ccc;
        }
        
        .van-icon{
            font-size: 30px 
        }
       .van-cell{
           background-color: #fff;
           height: 35px;
           font-size: 14px;
           line-height: 24px;
       }
       

        
        .swiper-container {
            width: 100%;
            padding-top: 20px;
        }
        .swiper-slide {
            // text-align: center;
            font-size: 20px;
            background-color: #f2f2f2;

            
            /* Center slide text vertically */
            display: -webkit-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            -webkit-align-items: center;
            align-items: center;
        }
        .drop{
            height: 42px;
            line-height: 78px;
            color: #999;
        }
        .router-link-active{
            color: #ff6b00;
            font-size: 21px;
        }
        //商品卡片
        .van-card{
            
            font-size: 12px;
        }
        .van-card__title{
            font-size: 13px;
            margin-bottom: 10px;
        }
    }
    // 路由过渡效果
    .transitionIndex-enter,
    .transitionIndex-leave-to{
        opacity: 0;
        transform: translateX(200px);
    }
    .transitionIndex-enter-active,
    .transitionIndex-leave-active{
        opacity: 1;
        transition: all 1s ease;
    }
    // 食品类专场
    .fool{
        margin-top: 10px;
        .top{
            width: 100%;
            height: 50px;
            background-color: #fca04d;
            text-align: left;
            padding-left: 10px;
            box-sizing: border-box;
            line-height: 50px;
            font-size: 20px;
            letter-spacing: 2px;
        }
    }


</style>