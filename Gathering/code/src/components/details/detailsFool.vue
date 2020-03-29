<template>
    <div class="detail">
        <!-- 返回按钮 -->
        <van-button icon="arrow-left" class="icon-back" @click="$router.go(-1)"/>
       <!-- 轮播图 -->
       <swiper :imgs="images"></swiper>
       <!-- 商品介绍 -->
       <div class="int">
           
           <van-row>
                <van-col span="20">
                    <h1>{{list.name}}</h1>
                </van-col>
                <van-col span="2" offset="2">
                    <span class="iconfont iconfenxiang share"></span>
                </van-col>
            </van-row>
           <p>&nbsp;&nbsp;&nbsp;线上专供乐点宝宝婴儿纸尿裤 男女宝适用尿不湿 尿不湿厂家OEMC</p>
           <div class="price">￥{{list.price}}</div>
           <van-row class="intBtm">
                <van-col span="8">
                    <span>快递:0 ~ 6</span>
                </van-col>
                <van-col span="7" offset="1">
                    <span>销量:816件</span>
                </van-col>
                <van-col span="5" offset="3">
                    <span>四川成都</span>
                </van-col>
            </van-row>
       </div>
       <!-- 优惠券 -->
       <coupon></coupon>
        <div class="activity">
            <van-cell is-link>
                <!-- 使用 title 插槽来自定义标题 -->
                <template slot="title">
                    <div class="custom-title fl activity">活动</div>
                    <div class="label fl" >
                        <div>
                            <van-tag type="danger">满减</van-tag>
                            全场满
                        </div>
                        <div>
                            <van-tag type="danger">包邮</van-tag>
                            全场满¥200包邮
                        </div>
                    </div>
                </template>
            </van-cell>
       </div>
       <!-- 优惠券 end -->
       <!-- 选择规格 -->
       <div class="specification">
            <van-cell title="请选择商品规格" is-link @click="showSpecifications = true"/>
            <van-sku
            v-model="showSpecifications"
            :sku="sku"
            :goods="goods"
            close-on-click-overlay
            preview-on-click-image
            @add-cart="addBuyS"
            @buy-clicked="buy"
                />
       </div>
       <!-- 选择规格 end -->
        <!-- 图文详情 -->
        <van-tabs class="mt-10" line-width="70px">
            <van-tab title="图文详情"  class="mt-10" >
                <img src="https://cbu01.alicdn.com/img/ibank/2019/958/778/12229877859_1224175409.jpg" alt="">
                <img src="https://cbu01.alicdn.com/img/ibank/2019/889/751/10710157988_1224175409.jpg" alt="">
            </van-tab>
            
            <van-tab title="宝贝评价" class="evaluation">
                    <van-panel>
                        <div slot="header">
                            <van-image
                                round
                                width="20px"
                                height="20px"
                                src="https://img.yzcdn.cn/vant/cat.jpeg"
                            />
                            <span class="username">安慕希**</span>
                        </div>
                        <div>嗯嗯,口感很好，纯天然感觉很新鲜，没有防腐剂，抱抱很喜欢吃</div>
                    </van-panel>
                    <van-panel>
                        <div slot="header">
                            <van-image
                                round
                                width="20px"
                                height="20px"
                                src="https://cbu01.alicdn.com/img/ibank/2019/889/751/10710157988_1224175409.jpg"
                            />
                            <span class="username">安慕希**</span>
                        </div>
                        <div>饼干没有什么特殊的味道 ，口味还可以吧！虽然店家很贴心的用泡沫纸包的，还是有一些破碎的，性价比不是很高</div>
                    </van-panel>
                    <van-panel>
                        <div slot="header">
                            <van-image
                                round
                                width="20px"
                                height="20px"
                                src="https://cbu01.alicdn.com/img/ibank/2019/958/778/12229877859_1224175409.jpg"
                            />
                            <span class="username">安慕希**</span>
                        </div>
                        <div>味道不错，有老饼干的味道，就是有很多碎了</div>
                    </van-panel>
                </van-tab>
        </van-tabs>
       <!-- 商品导航 -->
       <van-goods-action>
            <van-goods-action-icon icon="wap-home" color="#07c160" to="/index" />
            <van-goods-action-icon icon="cart-o"  :info="num" to="/cart"/>
            <van-goods-action-icon icon="icon iconfont iconshoucang" color="#ff5000" v-show="!favorite" @click="addFavorite"/>
            <van-goods-action-icon icon="star" color="#ff5000" v-show="favorite" @click="delFavorite"/>
            <van-goods-action-button type="warning" text="加入购物车" @click="showSpecifications = true"/>
            <van-goods-action-button type="danger" text="立即购买" @click="showSpecifications = true"/>
        </van-goods-action>
    </div>
</template>
<script>
import {createNamespacedHelpers} from "vuex"
const{mapState,mapMutations} = createNamespacedHelpers("cart")
import swiper from "../public/swiper"
import coupon from "./coupon.vue"
export default {
    components:{
        swiper,
        coupon
    },
    data() {
        return {

            images:[
                "https://gd1.alicdn.com/imgextra/i4/2206616935494/O1CN01dqju5l1qSIZBWehem_!!2206616935494.jpg_400x400.jpg",
                "https://gd3.alicdn.com/imgextra/i3/2206616935494/O1CN01KY06ST1qSIZeyfolx_!!2206616935494.jpg_400x400.jpg",
                "https://gd3.alicdn.com/imgextra/i3/2206616935494/O1CN01wrt0l21qSIZa1UUjB_!!2206616935494.jpg_400x400.jpg",
                "https://gd2.alicdn.com/imgextra/i2/2206616935494/O1CN017CqQbP1qSIZdNNeOx_!!2206616935494.jpg_400x400.jpg",
                "https://gd2.alicdn.com/imgextra/i2/2206616935494/O1CN01ET0gPt1qSIZcM4Z0E_!!2206616935494.jpg_400x400.jpg",
            ],
            list:
                {//每个商品就只有这些信息,,数量,是否选中,不应该加在里面
                    id:2,
                    name:"台湾农纯乡宝宝粥副食品婴儿宝宝辅食体验组方便即食随机口味6包",
                    price:"125.00",
                    desc:"商品描述信息",
                    num:1, //数量
                    imgUrl:"https://gd1.alicdn.com/imgextra/i4/2206616935494/O1CN01dqju5l1qSIZBWehem_!!2206616935494.jpg_400x400.jpg"
                },
            favorite:false, //收藏

            //商品规格
            showSpecifications:false,
            sku: {
                // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
                // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
                tree: [
                    {
                        k: '口味', // skuKeyName：规格类目名称
                        v: [
                            {
                                id: '2221', // skuValueId：规格值 id
                                name: '草莓味', // skuValueName：规格值名称
                                imgUrl: 'https://gd3.alicdn.com/imgextra/i3/2206616935494/O1CN01KY06ST1qSIZeyfolx_!!2206616935494.jpg_400x400.jpg', // 规格类目图片，只有第一个规格类目可以定义图片
                                previewImgUrl: 'https://gd3.alicdn.com/imgextra/i3/2206616935494/O1CN01wrt0l21qSIZa1UUjB_!!2206616935494.jpg_400x400.jpg', // 用于预览显示的规格类目图片
                            },
                            {
                                id: '2223',
                                name: '苹果味',
                                imgUrl: 'https://gd2.alicdn.com/imgextra/i2/2206616935494/O1CN017CqQbP1qSIZdNNeOx_!!2206616935494.jpg_400x400.jpg',
                                previewImgUrl: 'https://gd2.alicdn.com/imgextra/i2/2206616935494/O1CN017CqQbP1qSIZdNNeOx_!!2206616935494.jpg_400x400.jpg',
                            }
                        ],
                        k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
                    },
                    {
                        k: '重量', // skuKeyName：规格类目名称
                        v: [
                            {
                            id: '3331', // skuValueId：规格值 id
                            name: '500g', // skuValueName：规格值名称
                            // imgUrl: 'https://img.yzcdn.cn/1.jpg', // 规格类目图片，只有第一个规格类目可以定义图片
                            // previewImgUrl: 'https://img.yzcdn.cn/1p.jpg', // 用于预览显示的规格类目图片
                            },
                            {
                            id: '3332',
                            name: '2000g',
                            // imgUrl: 'https://img.yzcdn.cn/2.jpg',
                            // previewImgUrl: 'https://img.yzcdn.cn/2p.jpg',
                            }
                        ],
                        k_s: 's2' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
                    }
                ],
                // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
                list: [//每一个规格组合对应一个商品id
                    {
                        id: 2300, // skuId，下单时后端需要
                        price: 1500, // 价格（单位分）
                        s1: '2221', // 规格类目 k_s 为 s1 的对应规格值 id
                        s2:'3331',
                        stock_num: 110, // 当前 sku 组合对应的库存
                        desc:'草莓味 500g',
                        name:"台湾农纯乡宝宝粥副食品婴儿宝宝辅食体验组方便即食随机口味6包",
                        imgUrl:"https://gd1.alicdn.com/imgextra/i4/2206616935494/O1CN01dqju5l1qSIZBWehem_!!2206616935494.jpg_400x400.jpg"
                    },
                    {
                        id: 2301, // skuId，下单时后端需要
                        price: 1500, // 价格（单位分）
                        s1: '2221', // 规格类目 k_s 为 s1 的对应规格值 id
                        s2:'3332',
                        stock_num: 112, // 当前 sku 组合对应的库存
                        desc:'草莓味 2000g',
                        name:"台湾农纯乡宝宝粥副食品婴儿宝宝辅食体验组方便即食随机口味6包",
                        imgUrl:"https://gd1.alicdn.com/imgextra/i4/2206616935494/O1CN01dqju5l1qSIZBWehem_!!2206616935494.jpg_400x400.jpg"

                    },
                    {
                        id: 2302, // skuId，下单时后端需要
                        price: 1500, // 价格（单位分）
                        s1: '2222', // 规格类目 k_s 为 s1 的对应规格值 id
                        s2:'3331',
                        desc:'苹果味 500g',
                        stock_num: 113, // 当前 sku 组合对应的库存
                        name:"台湾农纯乡宝宝粥副食品婴儿宝宝辅食体验组方便即食随机口味6包",
                        imgUrl:"https://gd1.alicdn.com/imgextra/i4/2206616935494/O1CN01dqju5l1qSIZBWehem_!!2206616935494.jpg_400x400.jpg"

                    },
                    {
                        id: 2303, // skuId，下单时后端需要
                        price: 1500, // 价格（单位分）
                        s1: '2222', // 规格类目 k_s 为 s1 的对应规格值 id
                        s2:'3332',
                        desc:'苹果味 2000g',
                        stock_num: 113, // 当前 sku 组合对应的库存
                        name:"台湾农纯乡宝宝粥副食品婴儿宝宝辅食体验组方便即食随机口味6包",
                        imgUrl:"https://gd1.alicdn.com/imgextra/i4/2206616935494/O1CN01dqju5l1qSIZBWehem_!!2206616935494.jpg_400x400.jpg"

                    },
                   
                ],
                price: '15.00', // 默认价格（单位元）
                stock_num: 227, // 商品总库存
                none_sku: false, // 是否无规格商品
                messages: [
                    {
                    // 商品留言
                    datetime: '0', // 留言类型为 time 时，是否含日期。'1' 表示包含
                    multiple: '0', // 留言类型为 text 时，是否多行文本。'1' 表示多行
                    name: '留言', // 留言名称
                    type: 'text', // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
                    required: '0', // 是否必填 '1' 表示必填
                    placeholder: '' // 可选值，占位文本
                    }
                ],
                hide_stock: false // 是否隐藏剩余库存
            },
            goods: {
                //商品默认没有规格时候的图片
                picture: 'https://gd1.alicdn.com/imgextra/i4/2206616935494/O1CN01dqju5l1qSIZBWehem_!!2206616935494.jpg_400x400.jpg'
            },

        }
    },
    methods:{
        // 收藏的商品
        
        ...mapMutations([
            'addCart',
        ]),
        addFavorite(){
            this.favorite = !this.favorite
            this.$store.commit("favorite/addFavorite",this.list)
        },
        delFavorite(){
            this.favorite = !this.favorite
            this.$store.commit("favorite/delFavorite",this.list)
        },
        // 规格选择的加入购物车
        addBuyS(item){
            this.$store.commit("cart/addBuyS",item)
            this.showSpecifications = false
        },
        //规格中的立即购买
        buy(good){
            this.$store.commit("myOrder/getGood",good)
            this.$router.push({
                path:"/order"
            })
        }

    },
    computed:{
        ...mapState({
            num:state=>state.num
        })
    },
    created(){
        this.$store.state.btmNav = false
    },
    destroyed(){
        this.$store.state.btmNav = true
    }
}
</script>
<style lang='scss' scoped>  
    .clearfix::after,
    .clearfix::before{
        content:""; 
        display: block; 
        clear:both; 
    }
    .fl{
        float: left;
    }
    .mt-10{
        margin-top: 10px;
    }
    .detail{
        background-color: #f2f2f2;
    }
    .van-button.icon-back{
        margin: 0;
        position: absolute;
        z-index: 200;
        border-radius: 50%;
        
    }
    .van-swipe{
        img[data-v-062923fe]{
            width: 100%;
            height: 450px;
        }
    }
    .icon-back{
        background-color: #eee;
    }
    .int{
        padding-top: 20px;
        padding-left: 10px;
        background-color: #fff;
        margin-bottom: 10px;
        h1{
            font-size: 18px;
            font-weight: 400;
        }
        p{
            font-size: 16px;
            color: #999;
            letter-spacing: .1em;
            line-height: 1.5em;
            padding: 20px;
        }
        .price{
            font-size: 30px;
            color: #ff5555;
        }
        .intBtm{
            color: #999;
            font-size: 14px;
        }
    }
    // 活动
    .activity{
        .van-cell{
            color: #999;
            .van-cell__right-icon{
                line-height: 47px;
            }
        }
    }
    .custom-title.activity{
        line-height: 45px;
    }
    .label{
        margin-left: 5px;
    }
    //规格
    .specification{
        margin-top: 10px;
       .van-cell{
           color: #666;
       }
    }
    .van-goods-action-icon__icon{
        font-size: 20px;
        
    }
    .van-goods-action-icon__icon{
        font-size: 24px !important;
    }
    .van-goods-action{
        z-index: 100;
    }
     //宝贝评价
    .evaluation{
        .van-cell-group{
            padding: 10px;
        }
        .van-image{
            vertical-align: bottom;
        }
        .username{
            display: inline-block;
            line-height: 1px;
            margin-left: 5px;
            color: #999;

        }
        .van-panel__content{
            margin-top: 10px;
            letter-spacing: 2px;
        }
    }
    .van-row{
        // 分享按钮
        .share{
            color: #ff7402;
            font-size: 26px;

        }
    }
</style>