(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d4dac8b"],{"03c1":function(t,a,n){"use strict";var i=n("9c92"),e=n.n(i);e.a},"159b":function(t,a,n){var i=n("da84"),e=n("fdbc"),o=n("17c2"),s=n("9112");for(var c in e){var r=i[c],u=r&&r.prototype;if(u&&u.forEach!==o)try{s(u,"forEach",o)}catch(p){u.forEach=o}}},"17c2":function(t,a,n){"use strict";var i=n("b727").forEach,e=n("a640"),o=n("ae40"),s=e("forEach"),c=o("forEach");t.exports=s&&c?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},4160:function(t,a,n){"use strict";var i=n("23e7"),e=n("17c2");i({target:"Array",proto:!0,forced:[].forEach!=e},{forEach:e})},5530:function(t,a,n){"use strict";n.d(a,"a",(function(){return o}));n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");var i=n("ade3");function e(t,a){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?e(Object(n),!0).forEach((function(a){Object(i["a"])(t,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):e(Object(n)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))}))}return t}},5954:function(t,a,n){},"75a3":function(t,a,n){"use strict";var i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"tjSwiper"},[n("van-swipe",{attrs:{autoplay:3e3}},t._l(t.imgs,(function(t,a){return n("van-swipe-item",{key:a},[n("img",{attrs:{src:t}})])})),1)],1)},e=[],o={data:function(){return{}},props:["imgs"]},s=o,c=(n("a920"),n("2877")),r=Object(c["a"])(s,i,e,!1,null,"2592b356",null);a["a"]=r.exports},"9c92":function(t,a,n){},a920:function(t,a,n){"use strict";var i=n("5954"),e=n.n(i);e.a},ade3:function(t,a,n){"use strict";function i(t,a,n){return a in t?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n,t}n.d(a,"a",(function(){return i}))},b64b:function(t,a,n){var i=n("23e7"),e=n("7b0b"),o=n("df75"),s=n("d039"),c=s((function(){o(1)}));i({target:"Object",stat:!0,forced:c},{keys:function(t){return o(e(t))}})},dbb4:function(t,a,n){var i=n("23e7"),e=n("83ab"),o=n("56ef"),s=n("fc6a"),c=n("06cf"),r=n("8418");i({target:"Object",stat:!0,sham:!e},{getOwnPropertyDescriptors:function(t){var a,n,i=s(t),e=c.f,u=o(i),p={},l=0;while(u.length>l)n=e(i,a=u[l++]),void 0!==n&&r(p,a,n);return p}})},e439:function(t,a,n){var i=n("23e7"),e=n("d039"),o=n("fc6a"),s=n("06cf").f,c=n("83ab"),r=e((function(){s(1)})),u=!c||r;i({target:"Object",stat:!0,forced:u,sham:!c},{getOwnPropertyDescriptor:function(t,a){return s(o(t),a)}})},e82f:function(t,a,n){"use strict";n.r(a);var i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"detail"},[n("van-button",{staticClass:"icon-back",attrs:{icon:"arrow-left"},on:{click:function(a){return t.$router.go(-1)}}}),n("swiper",{attrs:{imgs:t.images}}),n("div",{staticClass:"int"},[n("van-row",[n("van-col",{attrs:{span:"20"}},[n("h1",[t._v(t._s(t.list.name))])]),n("van-col",{attrs:{span:"2",offset:"2"}},[n("span",{staticClass:"iconfont iconfenxiang share",on:{click:t.share}})])],1),n("p",[t._v(" 线上专供乐点宝宝婴儿纸尿裤 男女宝适用尿不湿 尿不湿厂家OEMC")]),n("div",{staticClass:"price"},[t._v("￥"+t._s(t.list.price))]),n("van-row",{staticClass:"intBtm"},[n("van-col",{attrs:{span:"8"}},[n("span",[t._v("快递:0 ~ 6")])]),n("van-col",{attrs:{span:"7",offset:"1"}},[n("span",[t._v("销量:816件")])]),n("van-col",{attrs:{span:"5",offset:"3"}},[n("span",[t._v("四川成都")])])],1)],1),n("div",[n("van-coupon-cell",{attrs:{coupons:t.coupons,"chosen-coupon":t.chosenCoupon},on:{click:function(a){t.showList=!0}}}),n("van-popup",{staticStyle:{height:"90%","padding-top":"4px"},attrs:{round:"",position:"bottom"},model:{value:t.showList,callback:function(a){t.showList=a},expression:"showList"}},[n("van-coupon-list",{attrs:{coupons:t.coupons,"chosen-coupon":t.chosenCoupon,"disabled-coupons":t.disabledCoupons,"show-exchange-bar":t.showExchangeBar},on:{change:t.onChange,exchange:t.onExchange}})],1)],1),n("div",{staticClass:"activity"},[n("van-cell",{attrs:{"is-link":""}},[n("template",{slot:"title"},[n("div",{staticClass:"custom-title fl activity"},[t._v("活动")]),n("div",{staticClass:"label fl"},[n("div",[n("van-tag",{attrs:{type:"danger"}},[t._v("满减")]),t._v(" 全场满 ")],1),n("div",[n("van-tag",{attrs:{type:"danger"}},[t._v("包邮")]),t._v(" 全场满¥200包邮 ")],1)])])],2)],1),n("div",{staticClass:"specification"},[n("van-cell",{attrs:{title:"请选择商品规格","is-link":""},on:{click:function(a){t.showSpecifications=!0}}}),n("van-sku",{attrs:{sku:t.sku,goods:t.goods,"close-on-click-overlay":"","preview-on-click-image":""},on:{"add-cart":t.addBuyS,"buy-clicked":t.buy},model:{value:t.showSpecifications,callback:function(a){t.showSpecifications=a},expression:"showSpecifications"}})],1),n("van-tabs",{staticClass:"mt-10",attrs:{"line-width":"70px"}},[n("van-tab",{staticClass:"mt-10",attrs:{title:"图文详情"}},[n("img",{attrs:{src:"https://cbu01.alicdn.com/img/ibank/2019/958/778/12229877859_1224175409.jpg",alt:""}}),n("img",{attrs:{src:"https://cbu01.alicdn.com/img/ibank/2019/889/751/10710157988_1224175409.jpg",alt:""}})]),n("van-tab",{staticClass:"evaluation",attrs:{title:"宝贝评价"}},[n("van-panel",[n("div",{attrs:{slot:"header"},slot:"header"},[n("van-image",{attrs:{round:"",width:"20px",height:"20px",src:"https://img.yzcdn.cn/vant/cat.jpeg"}}),n("span",{staticClass:"username"},[t._v("安慕希**")])],1),n("div",[t._v("嗯嗯,口感很好，纯天然感觉很新鲜，没有防腐剂，抱抱很喜欢吃")])]),n("van-panel",[n("div",{attrs:{slot:"header"},slot:"header"},[n("van-image",{attrs:{round:"",width:"20px",height:"20px",src:"https://cbu01.alicdn.com/img/ibank/2019/889/751/10710157988_1224175409.jpg"}}),n("span",{staticClass:"username"},[t._v("安慕希**")])],1),n("div",[t._v("饼干没有什么特殊的味道 ，口味还可以吧！虽然店家很贴心的用泡沫纸包的，还是有一些破碎的，性价比不是很高")])]),n("van-panel",[n("div",{attrs:{slot:"header"},slot:"header"},[n("van-image",{attrs:{round:"",width:"20px",height:"20px",src:"https://cbu01.alicdn.com/img/ibank/2019/958/778/12229877859_1224175409.jpg"}}),n("span",{staticClass:"username"},[t._v("安慕希**")])],1),n("div",[t._v("味道不错，有老饼干的味道，就是有很多碎了")])])],1)],1),n("van-goods-action",[n("van-goods-action-icon",{attrs:{icon:"wap-home",color:"#07c160",to:"/index"}}),n("van-goods-action-icon",{attrs:{icon:"cart-o",info:t.num,to:"/cart"}}),n("van-goods-action-icon",{directives:[{name:"show",rawName:"v-show",value:!t.favorite,expression:"!favorite"}],attrs:{icon:"icon iconfont iconshoucang",color:"#ff5000"},on:{click:t.addFavorite}}),n("van-goods-action-icon",{directives:[{name:"show",rawName:"v-show",value:t.favorite,expression:"favorite"}],attrs:{icon:"star",color:"#ff5000"},on:{click:t.delFavorite}}),n("van-goods-action-button",{attrs:{type:"warning",text:"加入购物车"},on:{click:function(a){t.showSpecifications=!0}}}),n("van-goods-action-button",{attrs:{type:"danger",text:"立即购买"},on:{click:function(a){t.showSpecifications=!0}}})],1)],1)},e=[],o=n("5530"),s=n("2f62"),c=n("75a3"),r=n("d399"),u=n("2241"),p=Object(s["a"])("cart"),l=p.mapState,d=p.mapMutations,h={available:1,condition:"无使用门槛\n最多优惠12元",reason:"",value:150,name:"优惠券名称",startAt:1489104e3,endAt:1514592e3,valueDesc:"1.5",unitDesc:"元"},v={components:{swiper:c["a"]},data:function(){return{chosenCoupon:-1,coupons:[h],disabledCoupons:[h],showList:!1,showExchangeBar:!1,couponValue:0,images:["https://cbu01.alicdn.com/img/ibank/2019/986/361/10710163689_1224175409.jpg","https://cbu01.alicdn.com/img/ibank/2019/986/361/10710163689_1224175409.jpg","https://cbu01.alicdn.com/img/ibank/2018/809/952/9423259908_1224175409.jpg","https://cbu01.alicdn.com/img/ibank/2018/836/858/9443858638_1224175409.jpg","https://cbu01.alicdn.com/img/ibank/2018/694/982/9423289496_1224175409.jpg"],list:{id:1,name:"君乐宝1段原白金装乐铂出生婴儿配方奶粉",price:"175.00",desc:"商品描述信息",num:1,imgUrl:"https://cbu01.alicdn.com/img/ibank/2019/986/361/10710163689_1224175409.jpg"},favorite:!1,showSpecifications:!1,sku:{tree:[{k:"尺寸",v:[{id:"1111",name:"L码",previewImgUrl:"https://cbu01.alicdn.com/img/ibank/2019/082/246/10736642280_1224175409.jpg"},{id:"1112",name:"XL码",previewImgUrl:"https://cbu01.alicdn.com/img/ibank/2019/082/246/10736642280_1224175409.jpg"},{id:"1113",name:"XXL码",previewImgUrl:"https://cbu01.alicdn.com/img/ibank/2019/082/246/10736642280_1224175409.jpg"}],k_s:"s1"}],list:[{id:2259,price:17500,s1:"1111",stock_num:110,desc:"L码",name:"君乐宝1段原白金装乐铂出生婴儿配方纸尿片",imgUrl:"https://cbu01.alicdn.com/img/ibank/2019/986/361/10710163689_1224175409.jpg"},{id:2260,price:17500,s1:"1112",stock_num:112,desc:"XL码",name:"君乐宝1段原白金装乐铂出生婴儿配方纸尿片",imgUrl:"https://cbu01.alicdn.com/img/ibank/2019/986/361/10710163689_1224175409.jpg"},{id:2261,price:17500,s1:"1113",desc:"XXL码",stock_num:113,name:"君乐宝1段原白金装乐铂出生婴儿配方纸尿片",imgUrl:"https://cbu01.alicdn.com/img/ibank/2019/986/361/10710163689_1224175409.jpg"}],price:"175.00",stock_num:227,none_sku:!1,messages:[{datetime:"0",multiple:"0",name:"留言",type:"text",required:"0",placeholder:""}],hide_stock:!1},goods:{picture:"https://cbu01.alicdn.com/img/ibank/2019/986/361/10710163689_1224175409.jpg"}}},methods:Object(o["a"])({},d(["addCart"]),{addFavorite:function(){this.favorite=!this.favorite,this.$store.commit("favorite/addFavorite",this.list)},delFavorite:function(){this.favorite=!this.favorite,this.$store.commit("favorite/delFavorite",this.list)},addBuyS:function(t){this.$store.commit("cart/addBuyS",t),this.showSpecifications=!1},buy:function(t){var a=this;t.selectedSkuComb.couponValue=this.couponValue,this.$store.commit("myOrder/getGood",t),""!=this.$store.state.username?this.$router.push({path:"/order"}):u["a"].confirm({message:"您还没有登陆呀!"}).then((function(){a.$router.push({path:"/login",query:{path:"/order"}})})).catch((function(){}))},onChange:function(t){this.showList=!1,this.chosenCoupon=t,this.couponValue=this.coupons[t].value,this.$store.commit("cart/addCoupon",this.couponValue)},onExchange:function(t){this.coupons.push(t)},share:function(){r["a"].success("已复制链接")}}),computed:Object(o["a"])({},l({num:function(t){return t.num}})),created:function(){this.$store.state.btmNav=!1},destroyed:function(){this.$store.state.btmNav=!0}},f=v,m=(n("03c1"),n("2877")),g=Object(m["a"])(f,i,e,!1,null,"019e5462",null);a["default"]=g.exports}}]);
//# sourceMappingURL=chunk-1d4dac8b.4f441b0a.js.map