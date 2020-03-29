<template>
    <div>
       <van-panel v-for="(list,indexList) in lists" :key="indexList" :title="`订单号:${list.orderId}`" status="已完成">
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
                </van-col>
                <van-col span="4" class="orderPrice">
                    <div class="onePrice">￥{{goods.price / 100}}</div>
                    <div class="num">x{{goods.num}}</div>
                </van-col>
                </van-row>
            </div>
            <div class="van-panel__footer btmText">共计{{list.totalNum}}个商品,实付<span>¥{{list.allTotal / 100}}</span> </div>
            <div slot="footer" class="van-panel__footer van-hairline--top">
                <van-button round size="small">再次购买</van-button>
                <van-button round size="small" type="danger">评价有礼</van-button>
            </div>
        </van-panel>
    </div>
</template>
<script>
import {createNamespacedHelpers} from "vuex"
const{mapState} = createNamespacedHelpers("myOrder") 
export default {
    data() {
        return {
            // lists:[]
        }
    },
    computed: {
        ...mapState({
            lists:state=>state.lists.filter(item=>{ return item.type == 3 })
        }),
        
    },

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
</style>