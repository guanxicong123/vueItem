<template>
    <div>
        <van-nav-bar
        :title="$route.name"
        left-text="返回"
        left-arrow
        @click-left="$router.push('/my')"
        />
        <div class="logo">
            <div class="iconfont iconyinger logo"></div>
        </div>
        <van-form @submit="onSubmit">
            <van-field
                v-model="username"
                name="username"
                label="用户名"
                placeholder="用户名"
            />
            <van-field
                v-model="password"
                type="password"
                name="password"
                label="密码"
                placeholder="密码"
            />
            <van-field
                v-model="password1"
                type="password"
                name="password1"
                label="确认密码"
                placeholder="确认密码"
            />
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">
                注册
                </van-button>
            </div>
        </van-form>
    </div>
</template>

<script>
import { Toast } from 'vant';
export default {
        data() {
            return {
            username: '',
            password: '',
            password1:''
            };
        },
        methods: {
            onSubmit(params){
                let _this = this

                this.$axios.get("register",{params}).then((res)=>{
                    if(res.data == '200'){
                        Toast({
                            message:"注册成功",
                            onOpened(){
                                _this.$router.push("/login")
                            }
                        })
                    }else{
                        Toast("注册失败")
                    }
                })
            }
        },
            
        created(){
            this.$store.state.vanTabbar = false;
        },
        // 生命周期钩子，最后销毁函数
        destroyed() {
            // 当组件被销毁时候，修改导航数据
            this.$store.state.vanTabbar = true;
        },
    };
</script>

<style lang="scss" scoped>
    .logo{
        font-size: 100px;
        color: #fca04d;
        position: absolute;
        top: 50px;
        left: 50%;
        margin-left: -30px;
        z-index: 100;
    }
    .van-form{
            width: 80%;
            position: absolute;
            background-color:transparent;
            top: 40%;
            left: 50%;
            margin-left: -40%;
        }
        .van-cell{
            margin: 20px auto;
            

        }
        .van-button--block{
            width: 80%;
            margin: 20px auto;
            background-color: #58bdc7;
            border: 1px solid #58bdc7;
        }

</style>