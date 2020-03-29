export default{
    namespaced:true,
    state: {
        list:{},//一张订单
        lists:[], //订单
        orderId:0 //实现不同的订单号
      },
      mutations: {
        getGoods(state,goods){
            //当在购物车点击提交订单的时候就把这商品给到goodsList里面
            state.list.goodsList = goods.filter(item=>{return item.isSelect}) //goodsList也是一个数组
            //这是把这一张订单的商品总数量也放到list里面去
            state.list.totalNum = state.list.goodsList.reduce((total,item)=>{
                return total + parseInt(item.num) 
            },0)
            state.orderId += 1
        },
        //在details的商品规格中直接立即购买,商品只有一种
        getGood(state,good){
            // state.list.goodsList = good
            state.orderId += 1
            state.list.goodsList=[good.selectedSkuComb,] //我就是要传过去的是一个数组
            state.list.totalNum = state.list.goodsList[0].num = good.selectedNum
        },
        //支付订单的时候
        orderAddress(state,fromOrder){
            state.list.address = fromOrder.defaultAddress //订单地址
            state.list.type = fromOrder.type //订单状态
            state.list.allTotal = fromOrder.allTotal //订单总价格
            state.list.orderId = fromOrder.orderId
            state.lists.push(state.list)
            state.list = {}
        },
        //在支付页面点击支付后改变订单组状态
        payed(state,orderId){
            state.lists.filter(item=>item.orderId == orderId)[0].type = 2
        },
        // 待付款中点击支付订单
        pay(state,list){
            var index = state.lists.findIndex(item=>item.orderId == list.orderId)
            state.lists[index].type = 2
        },
        //待收货中,点击确认收货
        receipt(state,list){
            //返回第一个通过判断得元素下标
            var index = state.lists.findIndex(item=>item.orderId == list.orderId)
            state.lists[index].type = 3
        }
      },
      actions: {
      },
      modules: {

      }
}