export default[
    {
        path:"/guidepage",
        name:"引导页面",
        component:()=>import("../components/public/guidepage.vue")
    },
    {
        path:"/advertpage",
        name:"广告页",
        component:()=>import("../components/public/advertpage.vue"),
        //独享的路由守卫
        beforeEnter: (to, from,next) => {
            next()
            //通过存储过程,判断存储中是否存在数据
            if(localStorage.advertpage){
                next()
            }else{
                //没有参数就进入引导页
                localStorage.advertpage = true
                next('/guidepage')
            }
        }
    },
    
]