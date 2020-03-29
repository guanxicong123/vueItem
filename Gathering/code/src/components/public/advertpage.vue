<template>
    <div class="advertpage">
       <h1><van-button round type="info" to="/index">进入</van-button><font style="fontSize='20px'">{{num}}</font></h1>
       <div class="img">
           <img src="../../assets/images/guidepage.gif" alt="">
       </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            num:3,//显示3秒
            cleardata:null //清除定时器
        }
    },
    
    created(){
        this.cleardata = setInterval(()=>{
            if(this.num == 0){
                this.$router.push({
                    path:"/index"
                })
            }else{
                this.num -= 1
            }
        },1000)
        this.$store.state.btmNav = false;
    },
    beforeDestroy(){ //销毁的是vue的数据和方法.
        //定时器属于浏览器的对象,属于window的,,
        clearInterval(this.cleardata)
    },
    destroyed() {
        // 当组件被销毁时候，修改导航数据
        this.$store.state.btmNav = true;

    },
}
</script>
<style lang='scss' scoped>
.advertpage{
    position: relative;
    // overflow: hidden;
    width: 100%;
}
    h1{
        font-size: 16px;
        position: fixed;
        top: 0;
        right: 0;
        z-index: 1000;
    }
    .img{
        width: 100%;
        height: 100%;
        // background-image: url(../../assets/images/guidepage.gif);
        
        // background-size:400px 600px;
        // background-position: -30px 0;
        // background-repeat: no-repeat;
        height: 600px;

    }
    img{
        width: 100%;
        height: 500px;
        display: block;
        height: 600px;
        // transform: scale(1.5);
        // position: absolute;
        // position: relative;
        // top: 0;
        // z-index: 100;
        
    }
    
    .van-button{
        float: right;
        font-size: 12px;
        line-height: 20px;
        background-color: #96e4ea;
        border: 1px solid #b5fff5;
        // padding: 0px 10px;
        height: 25px;
    }
    div{
        // background-color: #B5FFF5;
    }
</style>