<template>
    <div>
       <van-sticky >
            <van-nav-bar class="softNav" >
                <span slot="title" class="topTitle">{{$route.name}}</span>
                <van-icon name="arrow-left" slot="left" class="search" @click="$router.push({path:'/my'})"/>
            </van-nav-bar>
        </van-sticky>
        <div class="van-coupon">
            <div class="van-coupon__content">
                <div class="van-coupon__head">
                    <h2 class="van-coupon__amount">1.5<span>元</span></h2>
                    <p class="van-coupon__condition">无使用门槛最多优惠12元</p>
                </div>
                <div class="van-coupon__body">
                    <p class="van-coupon__name">优惠券名称</p>
                    <p class="van-coupon__valid">2017.03.10 - 2017.12.30</p>
                </div>
            </div>
            <p class="van-coupon__description">描述信息</p>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang='scss' scoped>
    .van-coupon{
        margin-top: 20px;
    }
  
</style>