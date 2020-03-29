export default{
    namespaced:true,
    state: {
        lists:[], //这是购物车,一开始为空,通过addCart方法来为其添加
        num:0, //购物测小标数量
        arrItem:[],//暂时存着提交订单的商品数据
        couponValue:0 //优惠卷的金额,初始值为0
  },
  mutations: {
      //加入单一的商品.没有规格的时候
    //   addCart(state,obj){
    //     //   state.lists.push(obj)
    //     //findIndex 返回索引值,或者-1
    //     let index = state.lists.findIndex(val=>val.id == obj.id)
    //     state.num += 1 
    //     if(index != -1){

    //         state.lists[index].num += 1  
    //     }else{
    //         obj.isSelect = true
    //         state.lists.push(obj)
    //     }
    //   },
      check(state,index){
         state.lists[index].isSelect = !state.lists[index].isSelect   
      },
      
      //在购物车中的商品删除 
      del(state,index){
          state.num -= state.lists[index].num
          state.lists.splice(index,1)

      },
        //在购物车中的商品数量加法   
      addition(state,index){
          state.lists[index].num += 1
          state.num += 1
      },
      //在购物车中的商品数量减法 
      subtraction(state,index){
          state.lists[index].num = state.lists[index].num <=1 ?1:state.lists[index].num - 1
          state.num -= 1
      },
      //在提交订单后删除订单中选中的商品
      submitOrder(state,arrItem){
        state.arrItem = arrItem
      },
      //在确认订单页面销毁的时候触发删除这里的已经提交订单的数据
      delSubmitOrder(state){
        for(let i = 0 ; i < state.lists.length; i++){
            for(let j = 0 ; j < state.arrItem.length; j++){
                if(state.lists[i].id == state.arrItem[j].id){
                    state.lists.splice(i,1)
                }
            }
        }
        let orderNum = state.arrItem.reduce((total,item)=>{
            return total + item.num
        },0)
        state.num -= orderNum
        state.arrItem = []
      },
    
      //在商品规格中的点击加入购物车
      addBuyS(state,item){
          let obj = {}
          obj.num = item.selectedNum
          obj.price = item.selectedSkuComb.price
          obj.id = item.selectedSkuComb.id
          obj.name = item.selectedSkuComb.name
          obj.imgUrl = item.selectedSkuComb.imgUrl
          obj.desc = item.selectedSkuComb.desc
          obj.isSelect = true
          obj.couponValue = state.couponValue
          state.lists.push(obj)
          state.num += item.selectedNum
      },
      //加入优惠卷的方法
      addCoupon(state,couponValue){
        state.couponValue = couponValue

      }
  },
  actions: {
  },
  modules: {
  }
}