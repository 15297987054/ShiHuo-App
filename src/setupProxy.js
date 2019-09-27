const proxy=require("http-proxy-middleware");

module.exports=(app)=>{
    app.use(proxy("/m"),{
        target:"http://m.shihuo.cn",
        changeOrigin:true,
        pathRewrite:{
            "^/m":""
        }
    })
}