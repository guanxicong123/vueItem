// vue.config.js配置文件，跟前面学习webpack.config.js一样配置。属于扩展性配置
module.exports = {
    // 选项...
    // publicPath:"./",
    // 指定打包上线dist文件存放目录
    // 打包时，把dist文件放置../code目录下
    outputDir:"../code/dist",
    // assetsDir静态资源整合，比如img,css,js,font
    assetsDir:"public"
}