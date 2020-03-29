<template>
    <div>
    <van-sticky >
        <van-nav-bar class="softNav" >
            <span slot="title" class="topTitle">{{$route.name}}</span>
            <van-icon name="arrow-left" slot="left" class="search" @click="$router.push({path:'/my'})"/>
        </van-nav-bar>
    </van-sticky>

      <van-address-edit
            :area-list="areaList"
            show-postal
            show-delete
            show-set-default
            :area-columns-placeholder="['请选择', '请选择', '请选择']"
            @save="onSave"
            @delete="onDelete"
            @change-detail="onChangeDetail"
        />
    </div>
</template>
<script>
// import {createNamespacedHelpers} from "vuex"
// const{mapMutations} = createNamespacedHelpers("my")

export default {
  // beforeRouteEnter ( from, next) {
  //   var fromPath = from.path
  //   next()
  // },
  // beforeRouteLeave (to, from) {
  //   // 导航离开该组件的对应路由时调用
  //   console.log(to,'to'),
  //   console.log(from,'from')
  //   if(fromPath == "/checkAddress"){
  //     next("/order")
  //   }
  //   // next(false)
  // },
  data() {
    return {
      areaList:this.$store.state.area.areaList,
      
      searchResult: [],
    
    }
  },
  methods: {
    //   ...mapMutations([
    //       'onSave'
    //   ]),
    onSave(content){
        // this.$router.push({
        //     path:"/address",
        // })
        this.$router.go(-1)
        this.$store.commit("my/onSave",content)
    },
    onDelete() {
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }];
      } else {
        this.searchResult = [];
      }
    }
  }
}
</script>

<style lang='scss' scoped>

</style>