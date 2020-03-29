<template>
    <div>
         <van-sticky >
            <van-nav-bar class="softNav" >
                <span slot="title" class="topTitle">{{$route.name}}</span>
                <van-icon name="arrow-left" slot="left" class="search" @click="$router.push({path:'/my'})"/>
            </van-nav-bar>
        </van-sticky>
        <!-- 订单导航 -->
       <van-tabs v-model="active">
            <van-tab title="全部订单" to="/myOrder/all">
              <router-view></router-view>
            </van-tab>
            <!-- <router-link to="./myOrder/all" tag="van-tab" title="全部订单"></router-link> -->
            <van-tab title="待付款" to="/myOrder/pendingPay">
              <router-view></router-view>
            </van-tab>
            <van-tab title="待收货" to="/myOrder/ship">
              <router-view></router-view>
            </van-tab>
            <van-tab title="已完成" to="/myOrder/complete">
              <router-view></router-view>
            </van-tab>
        </van-tabs>
    </div>
</template>
<script>


export default {
  data() {
    return {
      active: 0,
      // lists:[ //一张订单
      //   {
      //     orderId:"SSSSS123123123123", //订单号
      //     goodsList:[ //一张订单里面可以有多个商品
      //         { //商品的信息
      //           id:1,
      //           name:"君乐宝1段原白金装乐铂出生婴儿配方奶粉",
      //           price:"175.00",
      //           num:1, //数量
      //           imgUrl:"https://cbu01.alicdn.com/img/ibank/2019/082/246/10736642280_1224175409.230x230.jpg"
      //         }
      //     ],
      //     address:{ //地址信息
      //         address: "浙江省杭州市拱墅区莫干山路 50 号",
      //         id: "2",
      //         isDefault: true,
      //         name: "李四",
      //         tel: "1310000000",
      //         province: "北京市",
      //         city: "北京市",
      //         county: "东城区",
      //         addressDetail: "21",
      //         postalCode: "528234",
      //         areaCode: "110101"
      //     },
      //     type:1, //状态值  1待支付  2代发货  3已完成
      //     totalNum:2, //总数量
      //     allTotal:170, //实付金额
      //   },
      //   { //第二种订单
      //     orderId:"SSSSS123123123123", //订单号
      //     goodsList:[ //一张订单里面可以有多个商品
      //         { //商品的信息
      //           id:1,
      //           name:"君乐宝1段原白金装乐铂出生婴儿配方奶粉",
      //           price:"175.00",
      //           num:1, //数量
      //           imgUrl:"https://cbu01.alicdn.com/img/ibank/2019/082/246/10736642280_1224175409.230x230.jpg"
      //         }
      //     ],
      //     address:{ //地址信息
      //         address: "浙江省杭州市拱墅区莫干山路 50 号",
      //         id: "2",
      //         isDefault: true,
      //         name: "李四",
      //         tel: "1310000000",
      //         province: "北京市",
      //         city: "北京市",
      //         county: "东城区",
      //         addressDetail: "21",
      //         postalCode: "528234",
      //         areaCode: "110101"
      //     },
      //     type:1, //状态值  1待支付  2代发货  3已完成
      //     totalNum:2, //总数量
      //     allTotal:170, //实付金额
      //   },
      //   // {//每个商品就只有这些信息,,数量,是否选中,不应该加在里面
      //   //     id:1,
      //   //     name:"君乐宝1段原白金装乐铂出生婴儿配方奶粉",
      //   //     price:"175.00",
      //   //     num:1, //数量
      //   //     imgUrl:"https://cbu01.alicdn.com/img/ibank/2019/082/246/10736642280_1224175409.230x230.jpg"
      //   // },
        
      // ],
    }
  },
  methods:{
    del(){
    },
    pay(){
    }
  },
  created(){
    this.active = this.$route.query.active
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
</style>