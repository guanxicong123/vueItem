<template>
    <div class="login">
        <img class="bgImage" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584458100385&di=1c6c67d696efaad2cb74b459ca96ae16&imgtype=0&src=http%3A%2F%2Fimg.jk51.com%2Fimg_jk51%2F77266984.jpeg" alt="">
        <!-- <van-nav-bar
        :title="$route.name"
        left-text="返回"
        left-arrow
        @click-left="$router.push({path:'/index'})"
        /> -->
        <div class="back" @click="$router.push('/my')">
            <van-icon name="cross" />
        </div>
        <div class="headImg">
            <img class="head" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584275341785&di=dd19e4ea31d73bfe60a3ef00b5f674e2&imgtype=0&src=http%3A%2F%2Fpic09.babytreeimg.com%2F2020%2F0206%2FFg415gcgQMyQwcIpzeUwd8K747QQ_mb.jpg" alt="">
        </div>
        <!-- @submit="onSubmit" -->
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
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">
                登陆
                </van-button>
                <van-button round block type="info" @click="$router.push({path:'/register'})">
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
            };
        },
        methods: {
            onSubmit(params){
                let _this = this
                let path = "/my"
                if("path" in _this.$route.query){
                    path = _this.$route.query.path
                }
                this.$axios.get("login",{params}).then((res)=>{
                    if(res.data == "200"){
                        //提示
                        Toast({
                            message:"登陆成功",
                            //提示得回调
                            onOpened(){
                                //设置store中添加用户名
                                _this.$store.state.username = _this.username
                                _this.$router.push(path)//跳转到my里面
                            }
                        })
                        
                    }else{
                        Toast("登陆失败")
                    }
                })
            }
        },
    
        created(){
            this.$store.state.btmNav = false;
        },
        // 生命周期钩子，最后销毁函数
        destroyed() {
            // 当组件被销毁时候，修改导航数据
            this.$store.state.btmNav = true;
        },
    };
</script>

<style lang="scss" scoped>
    .login{
        .back{
            position: absolute;
            left: 30px;
            top: 30px;
            font-size: 20px;
        }
        .bgImage{
            width: 100%;
            height: 100%;
            filter: blur(15px);
            position: absolute;
            z-index: -1;
        }
        .headImg{
            position: absolute;
            top: 150px;
            left: 50%;
            margin-left: -50px;
        }
        .head{
            width: 100px;
            height: 100px;
            border-radius: 50%;
        }
        .van-cell{
            background-color: transparent;
            padding: 10px 40px;
        }
        .van-form{
            width: 100%;
            position: absolute;
            background-color:transparent;
            top: 50%;

        }


        .van-button--block{
            width: 80%;
            margin: 20px auto;
            background-color: #58bdc7;
            border: 1px solid #58bdc7;
        }


    }
</style>