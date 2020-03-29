<template>
    <div>
       <!-- 一个吸顶功能 -->
          <!-- top导航栏 -->
        <van-sticky >
            <van-nav-bar class="softNav" >
                <span slot="title" class="topTitle">{{$route.name}}</span>
                <van-icon name="arrow-left" slot="left" class="search" @click="$router.go(-1)"/>
            </van-nav-bar>
        </van-sticky>
        <div class="empty" v-if="this.lists==''">
            <div class="empty_car">
                <span class="iconfont iconkongdegouwuche"></span>
            </div>
            <p>您暂时没有任何商品哦!!</p>
            <van-button round type="info" to="/index">去首页逛逛把</van-button>

            <!-- 猜你喜欢 -->
            <div class="youLike">
                <h1 class="orange">
                    -
                    <span class="heart"><van-icon name="like-o" /></span>
                    你可能会喜欢
                    -
                </h1>
                <div class="content">
                    <ul>
                        <li @click="$router.push('/details')">
                            <div class="img">
                                <img src="https://img.alicdn.com/imgextra/i2/2206688142004/O1CN01GEsMy31QfsI6BIiMI_!!2206688142004.jpg_430x430q90.jpg" alt="">
                            </div>
                            <h2>1-2-3周岁男孩女孩儿童益智拼装婴儿启蒙玩具</h2>
                            <div class="price"><span>￥</span>29</div>
                        </li>
                        <li @click="$router.push('/details')">
                            <div class="img">
                                <img src="https://img.alicdn.com/imgextra/i3/2205590640948/O1CN01eQlDWh1IsE2L0ihkv_!!2205590640948.jpg_430x430q90.jpg" alt="">
                            </div>
                            <h2>洗澡玩具浇花小洒水壶儿童益智沙滩</h2>
                            <div class="price"><span>￥</span>10</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 商品卡片 -->
        <div v-for="(item,index) in lists" :key="index">
            <van-card
                :price="(item.price - item.couponValue) / 100"
                :desc="item.desc"
                :title="item.name"
                :thumb="item.imgUrl"
                >
               <div slot="tags">
                    <!-- 删除按钮 -->
                    <van-icon name="delete" @click="del(index)"  class="del"/>
                </div>
                <!-- 优惠卷 -->
                <!-- <div slot="num" v-if="item.couponValue != 0" class="coupon">
                    <del>{{item.price / 100}}</del>
                </div> -->
                <div slot="footer">
                    <!-- <van-checkbox v-model="isSelect[index]" @click="inputselect(index)" class="checkboxCag"></van-checkbox> -->
                    <div class="btn_">
                        <span class="btn_reduce" @click="subtraction(index)">-</span>
                        <input class="cag_num" type="text" v-model="item.num">
                        <span class="btn_add" @click="addition(index)">+</span>
                    </div>
                    <div class="checkboxbutton" @click="inputselect(index)">
                        <van-icon name="success" v-show="item.isSelect" />
                    </div>  
                    <!-- 删除按钮 -->
                    <!-- <van-icon name="delete" @click="del(index)"  class="del"/> -->
                </div>
            </van-card>
        </div>
        <div style="height:50px"></div>
        <van-submit-bar
            :price="totals"
            button-text="提交订单"
            @submit="onSubmit"
            >
            <van-checkbox @click="checkAll" :value="checked">全选</van-checkbox>
            
            </van-submit-bar>
    </div>
</template>
<script>
import {createNamespacedHelpers} from "vuex"
const{mapState,mapMutations} = createNamespacedHelpers("cart") 
import { Dialog } from 'vant';

export default {
    data() {
        return {
            checked:true, //默认全选
            totals:0, //总价格
            // lists:[] //商品数据
        }
    },
    components:{
        [Dialog.Component.name]: Dialog.Component
    },
    methods: {
        ...mapMutations([
            'del',
            'addition',
            'subtraction',
            'check'
            ]),
        onSubmit(){
            let _this = this
            let chooseList = this.lists.filter(item=>item.isSelect)
            if(chooseList == ''){
                Dialog({ message: '您还没有选择你需要买的商品!' });
                return
            }else{
                _this.$store.commit("myOrder/getGoods",_this.lists)
                if(this.$store.state.username != ""){
                    _this.$router.push({
                        path:"/order"
                    })
                    _this.$store.commit("cart/submitOrder",chooseList)
                }else{
                    Dialog.confirm({ message: '您还没有登陆呀!' }).then(()=>{
                        this.$router.push({
                            path:"/login",
                            query:{
                                path:"/order"
                            }
                        })
                    }).catch(()=>{
    
                    })
                }
            }
            
            
        },
        // 控制全选与反选
        checkAll(){
            this.lists.forEach((data)=>{
                data.isSelect = !this.checked;
            })
            this.checked = !this.checked;
            this.sum()
        },
        checkboxclick(){
            //第一次页面加载过程中，判断数据中isSelet状态，如果全部为true，那么返回true
            this.checked =  this.lists.every((item)=>{
                return item.isSelect; //只有选项中全部为true，返回true。只要有一个false，返回false
            }) 
        },
        // 单击商品列表选项操作
        inputselect(index){
            // 修改商品列表数据
            this.lists[index].isSelect = !this.lists[index].isSelect;
            this.checkboxclick();
            this.sum();
        },

        sum(){
            // 计算价格
            //reduce()返回计算总价格
            //total 总价格累加
            //item 数据中的对象
            this.totals = this.lists.reduce((total,item)=>{
                if(!item.isSelect) return total
                return total + parseFloat(item.price) * parseInt(item.num) - item.couponValue
            },0)
        }
    },
    computed:{
        ...mapState({ //把数据从cart.js传
            lists:state=>state.lists,
        }),
    },
    created(){
        this.$store.state.btmNav = false
        this.checkboxclick()
        this.sum()
    },
    updated(){
        this.sum()
    },
}
</script>
<style lang='scss' scoped>
.btn_{
    width: 60px;
    height: 18px;
    border: 1px solid #999;
    position: absolute;
    bottom: 10px;
    right: 10px;
    .cag_num{
        float: left;
        width: 22px;
        height: 18px;
        text-align: center;
    }
    .btn_add,.btn_reduce{
        text-align: center;
        line-height: 16px;
        float: left;
        width: 18px;
        height: 18px;
        font-size: 18px;
    }
    .btn_add{
        border-left: 1px solid #999;
    }
    .btn_reduce{
        border-right: 1px solid #999;
    }
}
//  空购物车的时候
.empty{
    margin-top: 100px;
    .empty_car{
        margin:20px auto;
        width: 150px;
        height: 150px;
        border-radius: 50%;
        background-color: #e4e4e4;
        line-height: 150px;
        text-align: center;
        span{
            font-size: 80px;    
            color: #999;
        }
    }
    p{
        text-align: center;
        letter-spacing: 2px;
        font-size: 18px;
    }
    .van-button{
        margin-top: 10px;
        left: 50%;
        margin-left: -58px;
    }
    .youLike{
        margin-top: 40px;
        text-align: center;
        h1{
            color: #fe5b33;
            font-size: 14px;
            font-weight: 600;
            .heart{
                line-height: 15px;
                display: inline-block;
                width: 15px;
                height: 15px;
                text-align: center;
                background-color: #fe5b33;
                border-radius: 50%;
            }
            .van-icon{
                line-height: 15px;
                font-size: 10px;
                color: #fff;
            }
        }
        .content{
            padding: 10px;
            ul{
                overflow: hidden;
                li{
                    width: 45%;
                    background-color: #fff;
                    margin-left: 10px;
                    float: left;
                    .img{
                        width: 100%;
                        height: 150px;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    h2{
                        font-weight: 400;
                        margin-top: 10px;
                    }
                    
                    .price{
                        text-align: left;
                        font-size: 16px;
                        color: #ff7200;
                        span{
                            font-size: 8px;
                        }
                    }
                }
            }
        }
    }

}
 .checkboxbutton{
        position: absolute;
        top:50%;
        left:5px;
        margin-top:-25px;
        border: 1px solid #cdced1;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        line-height: 15px;
        .van-icon-success{
            display: block;
            width: 15px;
            height: 15px;
            border: 2px solid #1989fa;
            margin-top: 0px;
            margin-left: -1px;
            border-radius: 50%;
            text-align: center;
            line-height: 16px;
            background-color: #1989fa;
            color: #fff;
        }
    }
    // .softNav{
    //     background-color: #f2f2f2;
    //     font-size: 40px;
    //     color: #999;
    //     .search{
    //         font-size: 40px;
    //         color: #999;
    //     }
    //     .topTitle{
    //         font-size: 16px;
    //     }
    // }
    .van-tag{
        padding: 0 10px;
    }

    .van-card{
        margin-top: 10px;
        padding: 8px 40px;
        background-color: #fff;
    }
    .van-card__title{
        display: inline-block;
        font-size: 14px;
        font-weight: 500;
        width: 70%;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        white-space:norrow;
        -webkit-line-clamp: 2; //表示2行.
        -webkit-box-orient: vertical;
        margin-bottom: 10px;

    }
    // 优惠卷的
    // .coupon{
    //     font-size: 16px;
    //     position: absolute;
    //     left: 55%;
    //     bottom: 4px;
    // }
    .van-card__price-integer,
    .van-card__price-currency{
        display: inline-block;
        padding-top: 20px;
        font-size: 20px;
        color: #f01225;
    }
    .checkboxCag{
        position:absolute;
        left: 5px;
        top: 50%;
        margin-top: -45px;
    }
    .del{
        position: absolute;
        font-size: 18px;
        top: 0px;
        right: -30px;
    }
</style>