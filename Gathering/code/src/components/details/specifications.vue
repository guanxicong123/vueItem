<template>
    <div>
        <button @click="show = true">点击</button>
       <van-sku
            v-model="show"
            :sku="sku"
            :goods="goods"
            close-on-click-overlay
            preview-on-click-image
        />
    </div>
</template>
<script>

export default {

  data() {
    return {
        show:true,
        sku: {
            // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
            // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
            tree: [
                {
                    k: '颜色', // skuKeyName：规格类目名称
                    v: [
                        {
                            id: '1111', // skuValueId：规格值 id
                            name: '红色', // skuValueName：规格值名称
                            imgUrl: 'https://gd3.alicdn.com/imgextra/i3/2206616935494/O1CN01KY06ST1qSIZeyfolx_!!2206616935494.jpg_400x400.jpg', // 规格类目图片，只有第一个规格类目可以定义图片
                            previewImgUrl: 'https://gd3.alicdn.com/imgextra/i3/2206616935494/O1CN01wrt0l21qSIZa1UUjB_!!2206616935494.jpg_400x400.jpg', // 用于预览显示的规格类目图片
                        },
                        {
                            id: '1112',
                            name: '蓝色',
                            imgUrl: 'https://gd2.alicdn.com/imgextra/i2/2206616935494/O1CN017CqQbP1qSIZdNNeOx_!!2206616935494.jpg_400x400.jpg',
                            previewImgUrl: 'https://gd2.alicdn.com/imgextra/i2/2206616935494/O1CN017CqQbP1qSIZdNNeOx_!!2206616935494.jpg_400x400.jpg',
                        }
                    ],
                    k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
                },
                {
                    k: '尺寸', // skuKeyName：规格类目名称
                    v: [
                        {
                        id: '2222', // skuValueId：规格值 id
                        name: 'S', // skuValueName：规格值名称
                        // imgUrl: 'https://img.yzcdn.cn/1.jpg', // 规格类目图片，只有第一个规格类目可以定义图片
                        // previewImgUrl: 'https://img.yzcdn.cn/1p.jpg', // 用于预览显示的规格类目图片
                        },
                        {
                        id: '2223',
                        name: 'M',
                        // imgUrl: 'https://img.yzcdn.cn/2.jpg',
                        // previewImgUrl: 'https://img.yzcdn.cn/2p.jpg',
                        }
                    ],
                    k_s: 's2' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
                }
            ],
            // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
            list: [//每一个规格组合对应一个商品id
                {
                    id: 2259, // skuId，下单时后端需要
                    price: 17500, // 价格（单位分）
                    s1: '1111', // 规格类目 k_s 为 s1 的对应规格值 id
                    s2: '2222', // 规格类目 k_s 为 s2 的对应规格值 id
                    s3: '0', // 最多包含3个规格值，为0表示不存在该规格
                    stock_num: 110 // 当前 sku 组合对应的库存
                },
                {
                    id: 2260, // skuId，下单时后端需要
                    price: 17500, // 价格（单位分）
                    s1: '1111', // 规格类目 k_s 为 s1 的对应规格值 id
                    s2: '2223', // 规格类目 k_s 为 s2 的对应规格值 id
                    s3: '0', // 最多包含3个规格值，为0表示不存在该规格
                    stock_num: 110 // 当前 sku 组合对应的库存
                },
                {
                    id: 2261, // skuId，下单时后端需要
                    price: 17500, // 价格（单位分）
                    s1: '1112', // 规格类目 k_s 为 s1 的对应规格值 id
                    s2: '2222', // 规格类目 k_s 为 s2 的对应规格值 id
                    s3: '0', // 最多包含3个规格值，为0表示不存在该规格
                    stock_num: 110 // 当前 sku 组合对应的库存
                }
            ],
            price: '175.00', // 默认价格（单位元）
            stock_num: 227, // 商品总库存
            none_sku: false, // 是否无规格商品
            messages: [
                {
                // 商品留言
                datetime: '0', // 留言类型为 time 时，是否含日期。'1' 表示包含
                multiple: '0', // 留言类型为 text 时，是否多行文本。'1' 表示多行
                name: '留言', // 留言名称
                type: 'text', // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
                required: '1', // 是否必填 '1' 表示必填
                placeholder: '' // 可选值，占位文本
                }
            ],
            hide_stock: false // 是否隐藏剩余库存
        },
        goods: {
            // 数据结构见下方文档
            //商品默认没有规格时候的图片
            picture: 'https://gd1.alicdn.com/imgextra/i4/2206616935494/O1CN01dqju5l1qSIZBWehem_!!2206616935494.jpg_400x400.jpg'
        },
     
    }
  
  },
  
}
</script>
<style lang='scss' scoped>

</style>