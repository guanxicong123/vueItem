export default[
    {
        path:"/my",
        name:"我的",
        component:()=>import("../views/my.vue")
    },
    {
        path:'/login',
        name:"登陆",
        component:()=>import("../components/my/login.vue")
    },
    {
        path:'/register',
        name:"注册",
        component:()=>import("../components/my/register.vue")
    },
    {
        path:'/address',
        name:"我的地址",
        component:()=>import("../components/my/address.vue")
    },
    {
        path:'/addAddress',
        name:"新增地址",
        component:()=>import("../components/my/addAddress.vue"),
    },
    {
        path:'/editAddress',
        name:"修改地址",
        component:()=>import("../components/my/editAddress.vue")
    },
    {
        path:'/favorite',
        name:"我的收藏",
        component:()=>import("../components/my/favorite.vue")
    },
    {
        path:'/coupon',
        name:"优惠券",
        component:()=>import("../components/my/coupon.vue")
    },
    {
        path:'/set',
        name:"设置",
        component:()=>import("../components/my/set.vue")
    },
    {
        path:'/news',
        name:"消息与推送通知",
        component:()=>import("../components/my/sets/news.vue")
    },
    

]