<template>
    <div>
        <van-nav-bar class="softNav" >
            <span slot="title" class="topTitle">{{$route.name}}</span>
            <van-icon name="arrow-left" slot="left" class="search" @click="$router.go(-1)"/>
        </van-nav-bar>
        <div class="title">消息</div>
       <van-cell-group>
            <van-cell title="用户消息提醒" label="点赞、回复、好友动态消息" >
                <van-switch slot="right-icon" v-model="checked" size="24px" />
            </van-cell>
        </van-cell-group>
        <div class="title">推送通知</div>
        <van-cell-group>
            <van-cell title="活动推送" label="点评促销优惠活动以及精选内容" >
                <van-switch slot="right-icon" v-model="checked1" size="24px" />
            </van-cell>
        </van-cell-group>
        <van-cell-group>
            <van-cell title="首页活动提醒" label="关闭后不再收到首页弹窗活动提醒" >
                <van-switch slot="right-icon" v-model="checked2" size="24px" />
            </van-cell>
        </van-cell-group>
        <van-cell-group>
            <van-cell title="附近推荐" label="基于地理位置向您推荐附近优质商户" >
                <van-switch slot="right-icon" v-model="checked3" size="24px" />
            </van-cell>
        </van-cell-group>
    </div>
</template>
<script>
export default {
    data() {
        return {
            checked:true,
            checked1:true,
            checked2:true,
            checked3:true
        }
    },
}
</script>
<style lang='scss' scoped>
    .title{
        padding: 5px 10px;
    }
    .van-cell__label{
        letter-spacing: 1.5px;
    }
</style>