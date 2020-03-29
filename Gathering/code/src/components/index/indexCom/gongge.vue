<template>
    <div id="googge">
       <van-grid square icon-size="50">
        <van-grid-item
            v-for="value in 8"
            :key="value"
            :icon="urlImg[value-1]"
            @click="toSoft(value)"
            :text="text[value-1]"
        />
        </van-grid>
    </div>
</template>
<script>
//https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?thumb=1&w=144&h=152
//https://i8.mifile.cn/v1/a1/eb5024fe-dfe3-6e53-3e18-675bef5fa06e.webp
//https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8a3d25fdc76472277b6d342d12aa7ebe.jpg?thumb=1&w=144&h=152
//https://i8.mifile.cn/v1/a1/e8bc849a-0a3b-21a0-6810-7da3a3903dee.webp
export default {
    data() {
        return {
            urlImg:[
                'https://cbu01.alicdn.com/img/ibank/2019/549/212/10855212945_1224175409.jpg',
                'https://imgservice.suning.cn/uimg1/b2c/image/pMDv7xglx6OG-dm4ariYTA.jpg_800w_800h_4e',
                'https://imgservice.suning.cn/uimg1/b2c/image/qxEHDz9E4LXerioOZT4wHg.jpg_800w_800h_4e',
                'https://img.alicdn.com/imgextra/i1/2549841410/O1CN01ahKf4e1MHp10asw4a_!!2549841410.jpg_430x430q90.jpg',
                'https://cbu01.alicdn.com/img/ibank/2019/549/212/10855212945_1224175409.jpg',
                'https://imgservice.suning.cn/uimg1/b2c/image/pMDv7xglx6OG-dm4ariYTA.jpg_800w_800h_4e',
            ],
            text:[
                '食品类',
                '食具类',
                '启智类',
                '服装及布类',
                '家具类',
                '电子电器类',
            ],
            path:[

            ]
        }
    },
    methods:{
        toSoft(value){
            this.$router.push({
                path:"/soft",
                query:{
                    id:value-1
                }
            })
        }
    }
}
</script>
<style lang='scss' scoped>
    #googge{
        
            img{
                border-radius: 50%;
                width: 100px;
                height: 100px;
            }
    }
    
</style>