<template>
    <div :key="shuaxin">
        <div v-for="(list,indexList) in lists" :key="indexList">
            <van-panel :title="`订单号:${list.orderId}`" :status="typeLists[list.type-1]">
                <!-- 商品卡片 -->
                <div class="commodity">
                    <van-cell title="婴儿商城" icon="gold-coin-o" />
                    <van-row v-for="(goods,indexGoods) in list.goodsList" :key="indexGoods">
                    <van-col span="6">
                        <img :src="goods.imgUrl">
                    </van-col>
                    <van-col span="14" class="text">
                        <h1>{{goods.name}}</h1>
                        <span>所选商品的介绍</span>
                        <div v-if="goods.couponValue != 0" class="coupon">使用优惠卷: -{{goods.couponValue / 100}}</div>
                    </van-col>
                    <van-col span="4" class="orderPrice">
                        <div class="onePrice">￥{{goods.price / 100}}</div>
                        <div class="num">x{{goods.num}}</div>
                    </van-col>
                    </van-row>
                </div>
                <div class="van-panel__footer btmText">共计{{list.totalNum}}个商品,实付<span>¥{{list.allTotal / 100}}</span> </div>
                    <div v-if="list.type == 1" slot="footer" class="van-panel__footer van-hairline--top">
                        <van-button round size="small" >取消订单</van-button>
                        <van-button round size="small" type="danger" @click="pay(indexList)">支付订单</van-button>
                    </div>
                    <div v-else-if="list.type == 2" slot="footer" class="van-panel__footer van-hairline--top">
                        <van-button round size="small" >退款</van-button>
                        <van-button round size="small" type="danger" >查看物流</van-button>
                        <van-button round size="small" type="danger" @click="receipt(indexList)">确认收货</van-button>
                    </div>
                    <div v-else-if="list.type == 3" slot="footer" class="van-panel__footer van-hairline--top">
                        <van-button round size="small">再次购买</van-button>
                        <van-button round size="small" type="danger">评价有礼</van-button>
                    </div>
            </van-panel>
        </div>
        <!-- 订单为空的时候 -->
        <div class="emptyOrder" v-if="lists == ''">
          <div class="icon iconfont iconkongdingdan"></div>
            <p class="text">您暂时还没有订单窝</p>
            <van-button round type="info" to="/index">去首页逛逛把</van-button>
        </div>
       
    </div>
</template>
<script>
import {createNamespacedHelpers} from "vuex"
const{mapState} = createNamespacedHelpers("myOrder") 
export default {
    data() {
        return {
           typeLists:['待付款','待收货','已完成'],
            shuaxin:100,
        }
    },
    methods:{
        //待收货
      receipt(indexList){
        let chooseOrder = this.lists[indexList]
        this.$store.commit("myOrder/receipt",chooseOrder)
        this.shuaxin +=1
      },
    //   待付款得
      pay(indexList){
            let chooseOrder = this.lists[indexList]
            this.$router.push({
              path:'/payPage',
              query:{orderId:chooseOrder.orderId}
        })
      }
    },
    computed: {
        ...mapState({
            lists:state=>state.lists
        }),
        
    },
    created(){
    }
}
</script>
<style lang='scss' scoped>
    .van-cell__title span{
      // width: 60%;
      white-space: nowrap;
    }
    .van-tab__pane{
      padding-top: 10px;
    }
    .van-panel{
      margin-top: 10px;
    }
    .van-panel__footer{
      text-align: right;
    }
    .van-button{
      margin-left: 10px;
    }
    //商品卡片
    .commodity{
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: #fff;
  }
  .img{
    img{
      width: 120px;
      height: 120px;
    }
  }
  .text{
    padding: 10px;
  }
  .orderPrice{
    padding-top: 20px;
  }
  .btmText{
    letter-spacing: 2px;
  }
  .coupon{
    color: #ff0000;
  }
  // 空订单
  .emptyOrder{
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
      margin-left: -30px;
    }
  }
</style>