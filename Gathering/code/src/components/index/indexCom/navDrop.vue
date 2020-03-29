<template>
    <div class="indexDrop">
       <div class="top">
           <van-row>
                <van-col span="4" offset="1">
                    <span class="all">全部</span>
                </van-col>
                <van-col span="2" offset="17">
                    <van-icon name="arrow-up" @click="dropShow" class="iconUp"/>
                </van-col>
            </van-row>
       </div>
       <div class="content">
           <ul>
               <li v-for="(item,index) in listNav" :key="index" @click="dropShow(index)">{{item.name}}</li>
           </ul>
       </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        dropShow(){
            this.$store.commit("indexsy/dropShow")
        }
    },
}
</script>
<style lang='scss' scoped>
    .indexDrop{
        // height: 42px;
        .top{
            padding: 10px;
            font-size: 24px;
            height: 42px;
            box-sizing: border-box;
            // height: 2px;
            .iconUp{
                color: #999;
                font-size: 30px;
            }
        }
        .content{
            position: absolute;
            padding-top: 10px;
            z-index: 100;
            background-color: #f2f2f2;
            ul{
                list-style: none;
                li{
                    float: left;
                    border: 1px solid #eee;
                    padding: 15px 40px;
                    margin-left: 20px;
                    background-color: #fff;
                    border-radius: 5px;
                    font-size: 20px;
                    margin-bottom: 20px;
                }
            }
        }
    }
</style>