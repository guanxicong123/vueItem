<template>
    <div class="payPage">
       <van-sticky >
           <div class="top">
                <van-nav-bar class="softNav" >
                    <span slot="title" class="topTitle">你需要支付</span>
                    <van-icon name="arrow-left" slot="left" class="search" @click="$router.push({path:'/myOrder/all'})"/>
                </van-nav-bar>
                <h1>¥ {{allTotal / 100}}</h1>
           </div>
        </van-sticky>
        <h5>选择支付方式</h5>
        <ul>
            <li @click="zhiPay">
                <span class="icon icon_zhi iconfont iconumidd17"></span>
                <span class="text">支付宝</span>
            </li>
            <li @click="wxPay">
                <span class="icon icon_wei iconfont iconweixin2"></span>
                <span class="text">微信支付</span>
            </li>
            <li @click="appPay">
                <span class="icon icon_app iconfont iconapple"></span>
                <span class="text">Apple Pay支付</span>
            </li>
            
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            allTotal:0,
            orderId:''
        }
    },
    methods:{
        //支付宝的
        zhiPay(){
            this.pay()
        },
        wxPay(){
            this.pay()
        },
        appPay(){
            this.pay()
        },
        
        // 订单改为已支付
        pay(){
            this.$store.commit("myOrder/payed",this.orderId)
            this.$router.push({
                path:"/myOrder/all"
            })
        }
    },
    created(){
        this.orderId = this.$route.query.orderId //order页面传过来的
        // 找到与当前订单号匹配的哪一张订单
        this.allTotal = this.$store.state.myOrder.lists.filter(item=>item.orderId == this.orderId)[0].allTotal

    }
}
</script>
<style lang='scss' scoped>
    .payPage{
        .topTitle{
            font-size: 20px;
            color: #fff;
        }
        .top{
            background-color: #f9cc9d;
        }
        .van-nav-bar{
            background-color: #f9cc9d;

        }
        h1{
            font-size: 50px;
            text-align: center;
            color: #ffd;
            font-weight: 500;
            padding: 30px 0;
        }
        h5{
            color: #aaa;
            padding: 20px;
        }
        ul {
            padding: 0px 30px;
            li{
            border: 1px solid #ebebec;
            padding: 20px 10px;
            line-height: 24px;
            background-color: #fff;
            margin-top: 20px;
            span.text{
                display: inline-block;
                font-size: 20px;
            }
            .icon{
                font-size: 40px;
                color: #01a8f7;
                margin-right: 20px;
                vertical-align:text-bottom;
            }
            .icon_wei{
                color: #3cb034;
            }
            .icon_app{
                color: #191919;
            }
        }
        }
    }
    
</style>