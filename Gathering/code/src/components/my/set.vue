<template>
    <div>
       <van-sticky >
            <van-nav-bar class="softNav" >
                <span slot="title" class="topTitle">{{$route.name}}</span>
                <van-icon name="arrow-left" slot="left" class="search" @click="$router.go(-1)"/>
            </van-nav-bar>
        </van-sticky>
        <!-- content -->
        <div class="user">
            <van-cell title="消息与推送通知" to="/news" is-link />
            <van-cell title="隐私" to="/news" is-link />
            <van-cell title="通用" to="/news" is-link />
        </div>
        <div class="net">
            <van-cell title="清除内存" to="/news" is-link />
            <van-cell title="诊断网络" to="/news" is-link />
        </div>
        <div class="developer">
            <van-cell title="意见反馈" to="/news" is-link />
            <van-cell title="关于我们" to="/news" is-link />
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang='scss' scoped>
    .user,
    .net,
    .developer{
        margin-top: 10px;
        color: #111;
        font-weight: 600;
    }
    
</style>