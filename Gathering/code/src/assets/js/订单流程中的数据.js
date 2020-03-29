export default{
    data() {
        return {
            lists:[ //一张订单
                {
                orderId:"SSSSS123123123123", //订单号
                goodsList:[ //一张订单里面可以有多个商品
                    { //商品的信息
                        id:1,
                        name:"君乐宝1段原白金装乐铂出生婴儿配方奶粉",
                        price:"175.00",
                        num:1, //数量
                        imgUrl:"https://cbu01.alicdn.com/img/ibank/2019/082/246/10736642280_1224175409.230x230.jpg"
                    }
                ],
                address:{ //地址信息
                    address: "浙江省杭州市拱墅区莫干山路 50 号",
                    id: "2",
                    isDefault: true,
                    name: "李四",
                    tel: "1310000000",
                    province: "北京市",
                    city: "北京市",
                    county: "东城区",
                    addressDetail: "21",
                    postalCode: "528234",
                    areaCode: "110101"
                },
                type:1, //状态值  0待支付  1代发货  2已完成
                typeText:['待支付','待收货','已完成'],
                totalNum:2, //总数量
                allTotal:170, //实付金额
                },
                { //第二种订单
                orderId:"SSSSS123123123123", //订单号
                goodsList:[ //一张订单里面可以有多个商品
                    { //商品的信息
                        id:1,
                        name:"君乐宝1段原白金装乐铂出生婴儿配方奶粉",
                        price:"175.00",
                        num:1, //数量
                        imgUrl:"https://cbu01.alicdn.com/img/ibank/2019/082/246/10736642280_1224175409.230x230.jpg"
                    }
                ],
                address:{ //地址信息
                    address: "浙江省杭州市拱墅区莫干山路 50 号",
                    id: "2",
                    isDefault: true,
                    name: "李四",
                    tel: "1310000000",
                    province: "北京市",
                    city: "北京市",
                    county: "东城区",
                    addressDetail: "21",
                    postalCode: "528234",
                    areaCode: "110101"
                },
                type:1, //状态值  1待支付  2代发货  3已完成
                typeText:['待支付','待收货','已完成'],
                totalNum:2, //总数量
                allTotal:170, //实付金额
                },
                // {//每个商品就只有这些信息,,数量,是否选中,不应该加在里面
                //     id:1,
                //     name:"君乐宝1段原白金装乐铂出生婴儿配方奶粉",
                //     price:"175.00",
                //     num:1, //数量
                //     imgUrl:"https://cbu01.alicdn.com/img/ibank/2019/082/246/10736642280_1224175409.230x230.jpg"
                // },
            ],
        }
    },
}