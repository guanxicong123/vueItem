<template>
    <div class="my">
        <div class="top">
            <van-row>
                <van-col span="6">
                    <van-image
                        round
                        width="50px"
                        height="50px"
                        src="https://img.yzcdn.cn/vant/cat.jpeg"
                        />
                </van-col>
                <van-col span="18">
                    <div v-if="username == ''">
                        <router-link to="/login" >登录/</router-link>                
                        <router-link to="/register" >注册</router-link>                
                    </div>
                    <div v-else class="username">
                        {{username}}
                    </div>
                </van-col>
            </van-row>
        </div>
        <div class="myOrder">
            <van-cell-group>
                <van-cell title="我的订单" icon="icon iconfont icondingdan" @click="checkLogin('/myOrder/all')" is-link/>
                
                <van-grid :column-num="3" icon-size="35">
                    <van-grid-item icon="icon iconfont iconweichentubiao_" @click="toPendingPage" text="待付款" />
                    <van-grid-item icon="icon iconfont icondaifahuo" @click="toShip" text="代收货" />
                    <van-grid-item icon="icon iconfont iconicon-anxinqiao-" @click="toComplete" text="待评价" />
                </van-grid>
            </van-cell-group>
        </div>
        <div class="other">
            <van-cell title="我的收藏" icon="icon iconfont iconshoucang" @click="checkLogin('/favorite')" is-link />
            <van-cell title="我的地址" icon="icon iconfont iconwodedizhi" @click="checkLogin('/address')" is-link />
            <van-cell title="优惠卷" icon="icon iconfont iconwodedizhi" @click="checkLogin('/coupon')" is-link />
            <van-cell title="设置" icon="icon iconfont iconshezhi" to="/set" is-link />
        </div>
    </div>
</template>
<script>
import { Dialog } from 'vant';
export default {
    data() {
        return {
            username:''
        }
    },
    methods:{
        toPendingPage(){
            if(this.$store.state.username == ""){
                Dialog.confirm({ message: '您还没有登陆呀!' }).then(()=>{
                    this.$router.push({
                        path:"/login",
                        query:{
                            path:"/order"
                        }
                    })
                }).catch(()=>{
    
                })
            }else{
                this.$router.push({
                    path:"/myOrder/pendingPay",
                    query:{
                        active:1
                    }
                })
            }
        },
        toShip(){
            if(this.$store.state.username == ""){
                Dialog.confirm({ message: '您还没有登陆呀!' }).then(()=>{
                    this.$router.push({
                        path:"/login",
                        query:{
                            path:"/order"
                        }
                    })
                }).catch(()=>{
    
                })
            }else{
                this.$router.push({
                    path:"/myOrder/ship",
                    query:{
                        active:2
                    }
                })
            }
        },
        toComplete(){
            if(this.$store.state.username == ""){
                Dialog.confirm({ message: '您还没有登陆呀!' }).then(()=>{
                    this.$router.push({
                        path:"/login",
                        query:{
                            path:"/order"
                        }
                    })
                }).catch(()=>{
    
                })
            }else{
                this.$router.push({
                    path:"/myOrder/complete",
                    query:{
                        active:3
                    }
                })
            }
        },
        //判断是否已经登陆
        checkLogin(path){
            if(this.$store.state.username == ""){
                Dialog.confirm({ message: '您还没有登陆呀!' }).then(()=>{
                    this.$router.push({
                        path:"/login",
                        query:{
                            path:"/my"
                        }
                    })
                }).catch(()=>{
    
                })
            }else{
                this.$router.push({
                    path:path
                })
            }
        }
    },
    created(){
    this.$store.state.btmNav = true
    this.username = this.$store.state.username
    },
    destroyed() {
        this.$store.state.btmNav = false
    },
}
</script>
<style lang='scss' scoped>
.my{
    background: #eee;
}
    .top{
        background-image: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584527080832&di=8625b3767447f62d85f522984d12067b&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Fback_pic%2F05%2F18%2F01%2F3159be65af900d8.jpg);
        width: 100%;
        height: 100px;
        background-color: #f37d0f;
        line-height: 80px;
        padding: 10px;
        box-sizing: border-box;
        color: #f15a49;
        
        .van-image{
            vertical-align: middle;
            line-height: 80px;

        }
        .van-col a{
            cursor: pointer;
            font-size: 16px;
            color: #f15a49;
        }
        .username{
            font-size: 16px;
        }
    }
    .myOrder{
        .van-cell{
            padding:25px  40px;
            font-size: 16px;
            color: #333;
            .van-icon-icon{
                font-size: 20px;
            }
        }
        .van-grid-item{
            padding: 20px;
        }
        
    }
    .other{
        margin-top: 20px;
        font-size: 16px;
        .van-cell{
            padding: 20px 16px;
            background-color: #fff;
            .van-cell__title{
                font-size: 16px;
            }
        }
    }
</style>