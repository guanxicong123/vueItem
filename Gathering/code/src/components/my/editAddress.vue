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
            show-area
            :area-columns-placeholder="['请选择', '请选择', '请选择']"
            @save="onSave"
            @delete="onDelete"
            :address-info="addressInfo"
            
        />
    </div>
</template>
<script>
export default {
  data() {
    return {
    
    areaList:this.$store.state.area.areaList,
    searchResult: [],
    addressInfo:{
        // address: "浙江省杭州市拱墅区莫干山路 50 号",
        // id: "2",
        // isDefault: true,
        // name: "李四",
        // tel: "1310000000",
        // province: "北京市",
        // city: "北京市",
        // county: "东城区",
        // addressDetail: "21",
        // postalCode: "528234",
        // areaCode: "110101"
    },
    editAddressId:0
    }
},
  methods: {

    onSave(content){
        this.$router.push({
            path:"/address",
        })
        this.$store.commit("my/editAddress",content)
    },
    onDelete() {
      this.$store.commit("my/onDelete")
      this.$router.push({
        path:"/address"
      })
    },
  },
    created() {
        this.editAddressId = this.$store.state.my.editAddressId
        this.addressInfo = this.$store.state.my.addressLists.find(item=>item.id == this.editAddressId)
    },
}
</script>
<style lang='scss' scoped>

</style>