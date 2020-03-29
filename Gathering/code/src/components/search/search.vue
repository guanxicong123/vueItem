<template>
    <div id="search">
        <div class="search">
            <van-row>
                <van-col span="21">
                    <input type="text" placeholder="婴儿用品" class="inp">
                    <van-icon name="search"  class="iconSearch"/>
                </van-col>
                <van-col span="2" class="del" offset="1" @click="$router.go(-1)">取消</van-col>
            </van-row>
        </div>
       <div v-if="isShowHistory" class="history">
           <h2>历史搜索</h2>
           <ul>
               <li>婴儿食品</li>
               <li>婴儿床</li>
               <li>奶粉</li>
               <li>纸尿裤</li>
               <li>玩具</li>
           </ul>
           <van-icon name="delete" class="del" @click="isShowHistory=!isShowHistory"/>
       </div>
       <div v-if="isShowSearchFind" class="searchFind">
           <h2>搜索发现</h2>
           <ul>
               <li>纸尿裤</li>
               <li>婴儿防护</li>
               <li>婴儿数据</li>
               <li>婴儿食具包邮</li>
               <li>婴儿零食</li>
           </ul>
           <van-icon name="delete" class="del"  @click="isShowSearchFind = !isShowSearchFind"/>
       </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            isShowSearchFind:true,
            isShowHistory:true
        }
    },
    created() {
        //让底部导航栏隐藏
        this.$store.state.btmNav = false
    },
    destroyed() {//返回时,把数据修改回去
        this.$store.state.btmNav = true
    },
}
</script>
<style lang='scss' scoped>
    #search{
        .search{
            padding: 10px ;
            .van-col--21{
                position: relative;
            }
            .inp{
                width: 100%;
                height: 22px;
                border: 1px solid #fd5840;
                border-radius: 20px;
                text-indent: 1em;
            }
            .del{
                font-size: 12px;
                line-height: 22px;
            }
            .iconSearch{
                position: absolute;
                right: 9px;
                top: 5px;
            }
        }
        
        
       .history{
           padding: 10px;
           position: relative;
           letter-spacing: 2px;
           h2{
               font-size: 16px;
               font-weight: 600;
           }
            ul{
                overflow: hidden;
                li{
                    font-size: 10px;
                    float: left;
                    padding:4px 8px;
                    background-color: #eee;
                    border: 1px solid #eee;
                    border-radius: 20px;
                    margin-left: 10px;
                    margin-top: 10px;
                }
            }
            .del{
                position: absolute;
                right: 8px;
                top: 6px;
                font-size: 18px;
            }
       }
        .searchFind{
            padding: 10px;
           letter-spacing: 2px;

            margin-top: 30px;
            position: relative;
            h2{
                font-size: 16px;
                font-weight: 600;
            }
            ul{
                overflow: hidden;
                li{
                    font-size: 10px;
                    float: left;
                    padding:4px 8px;
                    background-color: #eee;
                    border: 1px solid #eee;
                    border-radius: 20px;
                    margin-left: 10px;
                    margin-top: 10px;
                }
            }
            .del{
                position: absolute;
                right: 8px;
                top: 6px;
                font-size: 18px;
            }
        }
        
    }
</style>