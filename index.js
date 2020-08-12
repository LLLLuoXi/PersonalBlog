var express = require("express");
var globalConfig = require("./config")
var loader = require("./loader")

var app = new express();

//静态资源存放目录
app.use(express.static("./page/"))

app.post("/editEveryDay", loader.get("/editEveryDay"))
app.get("/queryEveryDay", loader.get("/queryEveryDay"))


app.post("/editBlog", loader.get("/editBlog"));
app.get("/queryBlogByPage", loader.get("/queryBlogByPage"))

app.get("/queryBlogCount", loader.get("/queryBlogCount"))
app.get("/queryBlogById", loader.get("/queryBlogById"))


app.get("/addComment",loader.get("/addComment"));
app.get("/queryRandomCode",loader.get("/queryRandomCode"));

app.get("/queryCommentsByBlogId",loader.get("/queryCommentsByBlogId"));
app.get("/queryCommentsCountByBlogId",loader.get("/queryCommentsCountByBlogId"));



// const port = 12306
app.listen(globalConfig.port, function () {
    console.log(`服务器已经启动`)
})

// function listen(port, callback) {
//     const http = require("http")
//     http.createServer(this).listen(port, callback)
// }  mysql -uroot -p