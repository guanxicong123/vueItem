export default[
    {
        path:"/cart",
        name:"购物车",
        component:()=>import("../views/cart.vue")
         
    },
    {
        path:"/order",
        name:"确认订单",
        component:()=>import("../components/cart/order.vue")
    },
    {
        path:"/checkAddress",
        name:"选择地址",
        component:()=>import("../components/cart/checkAddress.vue")
    },
    {
        path:"/payPage",
        name:"支付页面",
        component:()=>import("../components/cart/payPage.vue")
    }
]