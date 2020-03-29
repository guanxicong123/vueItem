<template>
    <div id="order">
         <van-sticky >
            <van-nav-bar class="softNav" >
                <span slot="title" class="topTitle">{{$route.name}}</span>
                <!-- @click="$router.push({path:'/my'})" -->
                <van-icon name="arrow-left" slot="left" class="search" @click="backMy"/>
            </van-nav-bar>
        </van-sticky>
        <!-- 当前地址 -->
      <van-cell-group @click="checkAddress">
        <van-cell icon="location-o" :label="defaultAddress.address">
            <span slot="title">{{defaultAddress.name}}  {{defaultAddress.tel}}</span>
        </van-cell>
      </van-cell-group>
      <!-- 当前购物车中的商品 -->
      <div class="commodity">
        <van-cell title="婴儿商城" icon="gold-coin-o" />
        <van-row v-for="(item,index) in list" :key="index">
          <van-col span="6">
            <img :src="item.imgUrl" alt="">
          </van-col>
          <van-col span="14" class="text">
            <h1>{{item.name}}</h1>
            <span>{{item.desc}}</span>
          </van-col>
          <van-col span="4" class="orderPrice">
            <div class="onePrice">￥{{(item.price - item.couponValue) / 100}}</div>
            <div class="num">x {{item.num}}</div>
          </van-col>
        </van-row>
      </div>
      <!-- 卖家留言 -->
      <van-field
        v-model="message"
        rows="1"
        autosize
        label="买家留言"
        type="textarea"
        placeholder="请输入留言"
      />
      <!-- 商品小计 -->
      <van-cell-group>
          <van-cell title="商品小计">
              <span slot="default">¥ {{this.commodityTotal / 100}}</span>
          </van-cell>
          <van-cell title="运费">
              <span slot="default">¥ {{this.freight}}</span>
          </van-cell>
      </van-cell-group>
      <!-- 支付 -->
      <van-submit-bar
        :price="allTotal"
        button-text="支付订单"
        @submit="onSubmit"
      />
    </div>
</template>
<script>
import {createNamespacedHelpers} from "vuex"
const{mapState} = createNamespacedHelpers("myOrder") 
//用了vuex的my.js和cart.js的数据方法
export default {
  data() {
    return {
      chosenAddressId:"1",
      defaultAddress:{}, //默认的地址
      message:"",//买家留言
      commodityTotal: 0, //商品小计
      freight: 0,//运费
      allTotal:0, //订单总价格
      orderId:'ssssss99999' //订单号的前缀 orderId+id
      
    }
  },
  methods:{
    backMy(){
      //点击返回的时候,要把默认地址的数据给到myOrder
      this.$store.commit("myOrder/orderAddress",{defaultAddress:this.defaultAddress,type:1,allTotal:this.allTotal,orderId:this.orderId+this.id})
      this.$router.push({
        path:"/my",
      })
    },
    onSubmit(){
      this.$router.push({
        path:"/payPage",
        query:{orderId:this.orderId+this.id}
      })
      this.$store.commit("myOrder/orderAddress",{defaultAddress:this.defaultAddress,type:1,allTotal:this.allTotal,orderId:this.orderId+this.id})
      //所以传一个true进去,type = 1
    },
    checkAddress(){
      this.$router.push({
        path:"/checkAddress"
      })
    }
  },
  computed:{
    ...mapState({
      //list的数据都是在购物车中呗勾选中的
      // list:state=>state.lists.filter(item=>{return item.isSelect})
      list:state=>state.list.goodsList,
      id:state=>state.orderId

    }),
  },
      
    created(){
      this.defaultAddress = this.$store.state.my.defaultAddress
      // this.list.forEach(item=>{item.price /= 100;console.log(item)})
        this.commodityTotal =(this.list.reduce((total,item)=>{
                return total + parseFloat(item.price) * parseInt(item.num) - item.couponValue
            },0))
        this.allTotal = this.commodityTotal + this.freight
        this.$store.state.btmNav = false;
    },
    
    destroyed() {
        // 当组件被销毁时候，修改导航数据
        this.$store.commit('cart/delSubmitOrder')
    },
};

</script>
<style lang='scss' scoped>
  #order{
    background-color: #f7f7f7;
  }
  .van-cell-group{
    margin-top: 10px;
    .van-cell__left-icon, 
    .van-cell__right-icon{
      font-size: 20px;
      line-height: 47px;
    }
  }
  .fl{
    float: left;
  }
  .fr{
    float: right;
  }
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
</style>