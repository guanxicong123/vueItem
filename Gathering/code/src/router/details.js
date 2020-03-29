export default[
    {
        path:"/details",
        name:"详情页",
        component:()=>import("../components/details/details.vue")
    },
    {
        path:"/detailsFool",
        name:"美食详情页",
        component:()=>import("../components/details/detailsFool.vue")
    },
    {
        path:"/specifications",
        name:"商品规格组件",
        component:()=>import("../components/details/specifications.vue")
    }
]