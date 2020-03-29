<template>
    <div>
         <!-- 一个吸顶功能 -->
          <!-- top导航栏 -->
        <van-sticky >
            <van-nav-bar class="softNav" >
                <span slot="title" class="topTitle">{{$route.name}}</span>
                <van-icon name="arrow-left" slot="left" class="search" @click="$router.push({path:'/my'})"/>
            </van-nav-bar>
        </van-sticky>

       <van-address-list
            v-model="chosenAddressId"
            :list="$store.state.my.addressLists"
            @add="onAdd"
            @click-item="editDefault"
            @change-detail="onChangeDetail"
            @edit="onEdit"
        />
    </div>
</template>
<script>
export default {
  data() {
    return {
      chosenAddressId: '2',
    }
  },
  methods: {
    onAdd() {
        this.$router.push({
            path:"/addAddress"
        })
    },
    onChangeDetail(){
      },
    editDefault(item){
      this.chosenAddressId = item.id
      
      this.$store.commit("my/editDefault",item)
    },
    onEdit(item) {
      this.$router.push({
        path:"/editAddress"
      })
      this.$store.commit("my/onEdit",item.id)
    }
  },
  created(){

  }
}
</script>
<style lang='scss' scoped>

</style>