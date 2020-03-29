//npm init -y
//cnpm i express -S


var express = require("express")
var app = express()
//创建静态目录./dist,默认访问index.html文件
app.use(express.static("./dist"))
//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

var userList = [{username:'admin',password:'123'}]
//req 客户端向服务器数据响应
//res //服务器向客户端数据响应

//res 服务端想客户端数据响应
//get()  //数据请求,get请求,post请求 ,function一个回调函数,"/",这是一个路由
app.get("/",function (req,res){
    //返回字符串 用send方法就好
    res.send("你好")
})
//通过设定不同的路由"/hahaha

//登陆接口
//http://127.0.0.1:3000/login 
app.get("/login",function (req,res){
    //req.query就能拿到从前端传过来得值
    let{username,password} = req.query;
    if(username == "" && password == ""){
        return 
    }

    //1.通过前端传递登陆信息
    //2.使用前台登陆用户名,在后台中userList匹配到相同用户名密码,找到为登陆成功,找不到登陆失败

    let data = userList.find(item=>item.username == username) //返回对象
    if(data && data.password == password){

        res.send("200")
    }else{
        res.send("201")
    }

})
//项目使用手法
//注册的接口
//http://127.0.0.1/register
app.get("/register",function (req,res){
    //返回对象,用json,最后返回给前端的是一段json的数据
    // res.json({name:"商品名称",price:"22",num:1})
    console.log(req.query)
    let{username,password,password1} = req.query
    if(username != "" && password !="" && password == password1){
        console.log('注册成功')
        userList.push({username,password})//这是存储在服务器上的
        res.send("200") //这是返回给前端的
    }else{
        res.send({username,password,password1})
        res.send("201")
    }
})

app.listen(3000,"127.0.0.1",()=>{
    console.log("请访问:http://127.0.0.1:3000")
})