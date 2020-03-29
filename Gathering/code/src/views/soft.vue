<template>
    <div>
        <!-- 一个吸顶功能 -->
        <van-sticky>
             <!-- top导航栏 -->
             <van-sticky >
                <van-nav-bar class="softNav" >
                    <span slot="title" class="topTitle">{{$route.name}}</span>
                    <van-icon name="arrow-left" slot="left" class="search" @click="$router.go(-1)"/>
                </van-nav-bar>
            </van-sticky>
        </van-sticky>
        <!-- content -->
        <div class="content">
            <div class="left" ref="left">
                <ul>
                    <li v-for="(item,index) in left" :key="index" :class="['left-item-hook',{current:index==currentIndex}]" @click="selectItem(index,$event)">
                        <span class="left-item">{{item}}</span>
                    </li>
                </ul>
            </div>
            <div class="right" ref="right">
                <ul>
                    <li  v-for="(item,index) in right" :key="index"  class="right-item right-item-hook">
                        <h2>{{item.name}}</h2>
                        <ul>
                            <router-link to="/details" tag="li" v-for="(contentItem,contentIndex) in item.content" :key="contentIndex">
                                <img :src="contentItem.path">
                                <p>{{contentItem.title}}</p>
                            </router-link>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'

export default {
    data() {
        return {
            left:["宝宝食品","宝宝食具","宝宝衣服","宝宝启智","宝宝尿裤","宝宝玩具","宝宝防护","母婴赠品"],
                right:[
                        {
                            name:"宝宝食品",
                            content:[
                                {
                                    title:'零食',
                                    path:'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i2/735580970/O1CN012Yzop01J2IlzCfkOD_!!735580970.jpg_430x430q90.jpg'
                                },
                                {
                                    title:'药物补品',
                                    path:'https://img.alicdn.com/imgextra/i1/99255279/O1CN01jHrneC1orpP7iW5iH_!!0-saturn_solar.jpg_220x220.jpg_.webp'
                                },
                                {
                                    title:'开胃',
                                    path:'https://img.alicdn.com/imgextra/i2/115042519/O1CN01DiwbgN1UTkH5MnT8O_!!0-saturn_solar.jpg_220x220.jpg_.webp'
                                },
                                {
                                    title:'海藻油',
                                    path:'https://img.alicdn.com/imgextra/i2/125853508/O1CN01pVvZ3d1bmhzHLRBsT_!!0-saturn_solar.jpg_220x220.jpg_.webp'
                                },
                                {
                                    title:'营养品',
                                    path:'https://img.alicdn.com/imgextra/i3/131478646/O1CN01M7Eq0B2DjuyK2qXkf_!!0-saturn_solar.jpg_220x220.jpg_.webp'
                                },
                                {
                                    title:'副食品',
                                    path:'https://img.alicdn.com/imgextra/i2/857750049/O1CN01UXJzMi1CETzjAlI6G_!!0-saturn_solar.jpg_220x220.jpg_.webp'
                                },
                            ]      
                            
                        },
                        {
                            name:"宝宝食具",
                            content:[
                                {
                                    title:'婴儿叉勺',
                                    path:'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i2/735580970/O1CN012Yzop01J2IlzCfkOD_!!735580970.jpg_430x430q90.jpghttps://img.alicdn.com/imgextra/i2/116951526/O1CN01XIh0dv1N8wz3pXknd_!!0-saturn_solar.jpg_220x220.jpg_.webp'
                                },
                                {
                                    title:'婴儿碗套',
                                    path:'https://img.alicdn.com/imgextra/i4/40624971/O1CN01yw7eY71malQmFB8h9_!!0-saturn_solar.jpg_220x220.jpg_.webphttps://img.alicdn.com/imgextra/i4/40624971/O1CN01yw7eY71malQmFB8h9_!!0-saturn_solar.jpg_220x220.jpg_.webp'
                                },
                                {
                                    title:'奶瓶',
                                    path:'https://img.alicdn.com/imgextra/i4/96651379/O1CN01FKYCyJ1M3clFfkR5m_!!0-saturn_solar.jpg_220x220.jpg_.webp'
                                },
                            ]      
                            
                        },
                        {
                            name:"宝宝衣服",
                            content:[
                                {
                                    title:'男生',
                                    path:'https://img.alicdn.com/imgextra/i2/32588945/O1CN01bmiP5G2FwrOe2HWQ8_!!0-saturn_solar.jpg_220x220.jpg_.webp'
                                },
                                {
                                    title:'女生',
                                    path:'https://img.alicdn.com/imgextra/i2/447880133/O1CN015GfBfa1CqxGTVdNt3_!!0-saturn_solar.jpg_220x220.jpg_.webp'
                                },
                                {
                                    title:'春天',
                                    path:'https://img.alicdn.com/imgextra/i3/41835778/O1CN01I5E6hc1sYN3a32U5D_!!0-saturn_solar.jpg_220x220.jpg_.webp'
                                },
                                {
                                    title:'夏天',
                                    path:'https://img.alicdn.com/imgextra/i1/280090194/O1CN0146DOQ31DItQOk56Ip_!!0-saturn_solar.jpg_220x220.jpg_.webp'
                                },
                                {
                                    title:'秋天',
                                    path:'https://img.alicdn.com/imgextra/i3/98810895/O1CN01chE00E1ITx2DsLX0L_!!0-saturn_solar.jpg_220x220.jpg_.webp'
                                },
                                {
                                    title:'冬天',
                                    path:'https://img.alicdn.com/imgextra/i4/32588945/O1CN01WvUH662FwrOeGw6oe_!!0-saturn_solar.jpg_220x220.jpg_.webp'
                                },
                            ]      
                            
                        },
                        {
                            name:"宝宝启智",
                            content:[
                                {
                                    title:'早教书籍',
                                    path:'https://img.alicdn.com/imgextra/i2/117126475/O1CN01lhzsnF1xhb6aH3HcR_!!0-saturn_solar.jpg_220x220.jpg_.webp'
                                },
                                {
                                    title:'玩具',
                                    path:'https://img.alicdn.com/imgextra/i4/14808752/TB2PXOsf1OSBuNjy0FdXXbDnVXa_!!0-saturn_solar.jpg_220x220.jpg_.webp'
                                },
                            ]      
                            
                        },
                        {
                            name:"宝宝尿裤",
                            content:[
                                {
                                    title:'纸尿片',
                                    path:'https://img.alicdn.com/imgextra/i2/53804297/O1CN01eFegct1hc4S3bYdwN_!!0-saturn_solar.jpg_220x220.jpg_.webp'
                                },
                                {
                                    title:'纸尿裤',
                                    path:'https://img.alicdn.com/imgextra/i4/114024299/O1CN01TRSJsW1hczH8jmijz_!!0-saturn_solar.jpg_220x220.jpg_.webp'
                                },
                            ]      
                            
                        },
                        {
                            name:"宝宝玩具",
                            content:[
                                {
                                    title:'男生',
                                    path:'https://img.alicdn.com/imgextra/i4/96484190/O1CN01IncKCb1gp45rFBdlK_!!0-saturn_solar.jpg_220x220.jpg_.webp'
                                },
                                {
                                    title:'女生',
                                    path:'https://img.alicdn.com/imgextra/i3/45420913/O1CN01GnvWSm1IcCC86VCu8_!!0-saturn_solar.jpg_220x220.jpg_.webp'
                                },
                                {
                                    title:'启智',
                                    path:'https://img.alicdn.com/imgextra/i1/110922053/O1CN01i3Nrbf1R2JhpOJCPL_!!0-saturn_solar.jpg_220x220.jpg_.webp'
                                },
                                {
                                    title:'大型玩具',
                                    path:'https://img.alicdn.com/imgextra/i3/59625968/O1CN017VWPgW1txOJAXdZYF_!!0-saturn_solar.jpg_220x220.jpg_.webp'
                                },
                            ]      
                            
                        },
                        {
                            name:"宝宝防护",
                            content:[
                                {
                                    title:'儿童床护栏',
                                    path:'https://img.alicdn.com/imgextra/i2/204860006/O1CN015iVCKj1BumxivGOVp_!!0-saturn_solar.jpg_220x220.jpg_.webp'
                                },
                                {
                                    title:'走路护',
                                    path:'https://img.alicdn.com/imgextra/i3/118710629/O1CN01VrW0ba1GW7eYsg4LX_!!0-saturn_solar.jpg_220x220.jpg_.webp'
                                },
                                {
                                    title:'护肤',
                                    path:'https://img.alicdn.com/imgextra/i2/50061010/O1CN01hVMshG1JKcc64uVJh_!!0-saturn_solar.jpg_220x220.jpg_.webp'
                                },
                            ]      
                            
                        },
                        {
                            name:"母婴赠品",
                            content:[
                                {
                                    title:'10元专区',
                                    path:'https://img.alicdn.com/imgextra/i4/700640189/O1CN01BUwsKX1DGbQlsK9m0_!!0-saturn_solar.jpg_220x220.jpg_.webp'
                                },
                                {
                                    title:'50元专区',
                                    path:'https://img.alicdn.com/imgextra/i1/767690142/O1CN01PhRwlJ1Cv4pHFZgNp_!!0-saturn_solar.jpg_220x220.jpg_.webp'
                                },
                                {
                                    title:'100元专区',
                                    path:'https://img.alicdn.com/imgextra/i3/30301854/O1CN011ps3Sl1PZAtTGmFx3_!!0-saturn_solar.jpg_220x220.jpg_.webp'
                                },
                                {
                                    title:'500元专区',
                                    path:'https://img.alicdn.com/imgextra/i2/116363728/O1CN011dPSzyTY5mXcqlc_!!0-saturn_solar.jpg_220x220.jpg_.webp'
                                },
                            ]      
                            
                        },
                ],
            scrollY:0,
            listHeight:[],
            
        }
    },
    methods: {
        _initScroll(){
            this.lefts = new BScroll(this.$refs.left,{
                click:true, //拥有触发事件
                probeType:3 //探针效果,实时获取滚动的高度
            })
            this.rights = new BScroll(this.$refs.right,{
                click:true,
                probeType:3 //探针效果,实时获取滚动的高度
            })
            //right这个对象监听滚动事件
            this.rights.on("scroll",(pos)=>{
                this.scrollY = Math.abs(Math.round(pos.y))
            })
        },
        _getHeight(){
            let rightItems = this.$refs.right.getElementsByClassName("right-item-hook")
            let height = 0
            this.listHeight.push(height)
            for(let i = 0 ; i <rightItems.length-1; i++){
                let item = rightItems[i]
                height += item.clientHeight
                this.listHeight.push(height)
            }
        },
        selectItem(index,event){
            if(!event._constructed){ //方式往死里点
                return
            }else{
                //联动效果
                let rightItems = this.$refs.right.getElementsByClassName("right-item-hook")
                let el = rightItems[index] //找到要滚动到达的元素
                this.rights.scrollToElement(el,300) //滚动

                // 左边联动
                // let leftItems = this.$refs.left.getElementsByTagName("li")
                let leftItems = this.$refs.left.getElementsByClassName("left-item-hook")
                let elLe = leftItems[index]
                this.lefts.scrollToElement(elLe)
                this.currentLeftBg=index
                // this.currentIndex = this.currentIndexM()
                // console.log(this.currentIndex,'index')
            }
        },  
    },
    
    created(){
        this.$store.state.btmNav = true
    },
    mounted() {
        this.$nextTick(()=>{
            this._initScroll()
            this._getHeight()
        })
    },
    destroyed() {
        this.$store.state.btmNav = false
    },
    
    computed:{
        currentIndex(){
            for (let i = 0; i < this.listHeight.length; i++) {
                let height = this.listHeight[i]
                let height2 = this.listHeight[i+1]
                if(this.scrollY == 0){
                    return i = 0
                }
                if(!height2 || (this.scrollY > height && this.scrollY < height2)){
                    let leftItems =  this.$refs.left.getElementsByTagName("li")
                    let elLi = leftItems[i]
                    this.lefts.scrollToElement(elLi)
                    return i
                }
                
            }
            return 0
        }
    }
}
</script>
<style lang='scss' scoped>

    ul{
        list-style: none;
    }
    .content{
        display: flex;
        position: absolute;
        /* 不写定位的左右样式,不写高度,自动获取高度 */
        top: 50px;
        bottom: 100px;
        background-color: #eee;
        width: 100%;
        overflow: hidden;
    }
    .left{
        flex:0 0 80px;
        width: 80px;
        background-color: #f8f8f8;
    }
    .left li{
        width: 100%;
        height: 100%;
        font-size: 16px;
    }

    .left li.current{
        background-color: #fff;
        color: #ff5555;
    }
    .left-item{
        display: block;
        width: 100%;
        height: 100%;
        height: 70px;
        line-height: 70px;
        text-align: center;
    }
    .right{
        flex: 1;
        background-color: #fff;
        h2{
            background-color: #f9cc9d;
            font-size: 18px;
            font-weight: 400;
            letter-spacing: 2px;
            color: #111;
            text-align: center;
        }
    }
    .right-item{
        margin-bottom: 30px;
        overflow: hidden;
        li{
            float: left;
            width: 50%;
            line-height: 100px;
            text-align: center;
            img{
                width: 100px;
                height: 100px;
                border-radius: 50%;
                margin: 10px auto;
            }
            p{
                height: 20px;
                line-height: 20px;
            }
        }
    }
</style>