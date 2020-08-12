var everyDay = new Vue({
    el: "#every_day",
    data: {
        content: '岁月骛过，山陵浸远'
    },
    computed: {
        getContent: function () {
            return this.content
        }
    },
    created: function () {
        //请求数据，给content赋值
        axios({
            method: "get",
            url: "/queryEveryDay"
        }).then(function (resp) {
            console.log(resp)
            everyDay.content = resp.data.data[0].content

        }).catch(function (resp) {
            console.log("请求失败")
        })

    }
})

var articleList = new Vue({
    el: "#article_list",
    data: {
        page: 1,
        pageSize: 5,
        count: 100,
        pageNumList: [],
        articleList: [
            {
                title: '四连淀粉体的一听啊',
                content: ' 很快就会付款计划是否会考虑就很快就会付款计划是否会考虑就很快就会付款计划是否会考虑就很快就会付款计划是否会考虑就很快就会付款计划是否会考虑就很快就会付款计划是否会考虑就很快就会付款计划是否会考虑就很快就会付款计划是否会考虑就很快就会付款计划是否会考虑就大数据挖掘很快就会付款计划是否会考虑就大数据挖掘很快就会付款计划是否会考虑就大数据挖掘很快就会付款计划是否会考虑就大数据挖掘很快就会付款计划是否会考虑就大数据挖掘很快就会付款计划是否会考虑就大数据挖掘很快就会付款计划是否会考虑就大数据挖掘很快就会付款计划是否会考虑就大数据挖掘很快就会付款计划是否会考虑就大数据挖掘',
                date: "2020-1-23",
                views: "101",
                tags: "test1 test2",
                id: '1',
                link: ""

            }
        ]
    },
    computed: {
        jumpTo: function () {
            return function (page) {
                this.getPage(page, this.pageSize)

            }
        },
        getPage: function () {
            return function (page, pageSize) {
                axios({
                    method: "get",
                    url: "/queryBlogByPage?page=" + (page - 1) + "&pageSize=" + pageSize
                }).then(function (resp) {
                    console.log(resp);
                    var result = resp.data.data;
                    var list = [];
                    for (var i = 0; i < result.length; i++) {
                        var temp = {};
                        temp.title = result[i].title;
                        temp.content = result[i].content;
                        temp.date = result[i].ctime;
                        temp.views = result[i].views;
                        temp.tags = result[i].tags;
                        temp.id = result[i].id;
                        temp.link = "/blog_detail.html?bid=" + result[i].id;
                        list.push(temp)
                    }
                    articleList.articleList = list
                    articleList.page = page;
                }).catch(function (resp) {
                    console.log("请求错误")
                });
                axios({
                    method: "get",
                    url: "/queryBlogCount",
                }).then(function (resp) {
                    console.log(resp)
                    articleList.count = resp.data.data[0].count
                    articleList.generatePageTool
                })

            }

        },
        generatePageTool: function () {
            var nowPage = this.page;
            var pageSize = this.pageSize;
            var totalCount = this.count;
            var result = [];
            result.push({ text: "<<", page: 1 });
            if (nowPage > 2) {
                result.push({ text: nowPage - 2, page: nowPage - 2 });
            }
            if (nowPage > 1) {
                result.push({ text: nowPage - 1, page: nowPage - 1 });
            }
            result.push({ text: nowPage, page: nowPage });
            if (nowPage + 1 <= (totalCount + pageSize - 1) / pageSize) {
                result.push({ text: nowPage + 1, page: nowPage + 1 });
            }
            if (nowPage + 1 <= (totalCount + pageSize - 1) / pageSize) {
                result.push({ text: nowPage + 2, page: nowPage + 2 });
            }
            result.push({ text: ">>", page: parseInt((totalCount + pageSize - 1) / pageSize) });
            this.pageNumList = result;
            return result;

        }


    },
    created: function () {
        this.getPage(this.page, this.pageSize)


    }
})