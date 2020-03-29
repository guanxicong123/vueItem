export default[
    {
        path:'/myOrder',
        name:"全部订单",
        component:()=>import("../views/myOrder.vue"),
        children:[
            
            {
                path:"all",
                name:"全部订单",
                component:()=>import("../components/myOrder/all.vue")
            },
            {
                path:"pendingPay",
                name:"待付款",
                component:()=>import("../components/myOrder/pendingPay.vue")
            },
            {
                path:"ship",
                name:"待收货",
                component:()=>import("../components/myOrder/ship.vue")
            },
            {
                path:"complete",
                name:"已完成",
                component:()=>import("../components/myOrder/complete.vue")
            },
            
        ]
    },
]