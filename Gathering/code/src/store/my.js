export default{
    namespaced:true,
    state: {
        addressLists:[
            {
              id: '1',
              name: '张三',
              tel: '13000000000',
              address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
              isDefault:false,
              province: "浙江省",
              city: "杭州市",
              county: "西湖区",
              addressDetail: "文三路 138 号东方通信大厦 7 楼 501 室",
              postalCode: "528234",
              areaCode: "110101"
            },
            {
              address: "浙江省杭州市拱墅区莫干山路 50 号",
              id: "2",
              isDefault: true,
              name: "李四",
              tel: "1310000000",
              province: "浙江省",
              city: "杭州市",
              county: "拱墅区",
              addressDetail: "莫干山路 50 号",
              postalCode: "528234",
              areaCode: "110101"
          }
        ],
        defaultAddress:{
          address: "浙江省杭州市拱墅区莫干山路 50 号",
          id: "2",
          isDefault: true,
          name: "李四",
          tel: "1310000000",
          province: "北京市",
          city: "北京市",
          county: "东城区",
          addressDetail: "21",
          postalCode: "528234",
          areaCode: "110101"
      },
        editAddressId:0
          
        
      },
      mutations: {
          onSave(state,obj){
              let newAdd = obj
              newAdd.id = state.addressLists.length
              newAdd.address = obj.province+obj.city+obj.county+obj.addressDetail
              state.addressLists.push(newAdd)
          },
          //修改默认地址
          editDefault(state,item){
            state.defaultAddress = item
            state.defaultAddress.isDefault = true
          },
          // 修改地址
          onEdit(state,id){
            state.editAddressId = id
            
          },
          editAddress(state,content){
            // console.log(state.addressLists.find(item=>item.id == state.editAddressId),'id')
            let index = state.addressLists.findIndex(item=>item.id == state.editAddressId)
            state.addressLists[index] = content
          },
          //删除地址
          onDelete(state){
            let index = state.addressLists.findIndex(item=>item.id == state.editAddressId)
            state.addressLists.splice(index,1)
          }
      },
      actions: {
      },
      modules: {
        
      }
}