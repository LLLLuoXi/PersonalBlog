var randomtTags = new Vue({
    el: "#random_tags",
    data: {
        tags: ["asd", "asdsad", "fdfet4trt", "sadsawr", "fdfetrert", "ereffgrt", "dwdwdw", "sdasddf", "oooooo", "asd", "asdsad", "fdfet4trt", "sadsawr", "fdfetrert", "ereffgrt", "dwdwdw", "sdasddf", "oooooo"],
    },
    computed: {
        randomColor: function () {
            return function () {
                var red = Math.random() * 255 + 50;
                var green = Math.random() * 255 + 50;
                var blue = Math.random() * 255 + 50;
                return `rgb(${red},${green},${blue})`

            }


        },
        randomSize() {
            return function () {
                var size = Math.random() * 20 + 12 + "px";
                return size
            }

        }

    },
    created: function () {

    }
})

var newHot= new Vue({
    el:"#new_hot",
    data:{
        titleList:[
            {title:"这是一个链接",link:"http://www.baidu.com"},
            {title:"这是一个链接",link:"http://www.baidu.com"},
            {title:"这是一个链接",link:"http://www.baidu.com"},
            {title:"这是一个链接",link:"http://www.baidu.com"},
            {title:"这是一个链接",link:"http://www.baidu.com"},
            {title:"这是一个链接",link:"http://www.baidu.com"},
            {title:"这是一个链接",link:"http://www.baidu.com"},
            {title:"这是一个链接",link:"http://www.baidu.com"},
            {title:"这是一个链接",link:"http://www.baidu.com"},
            {title:"这是一个链接",link:"http://www.baidu.com"}
        ]
    }
});

var newComments= new Vue({
    el:"#new_comments",
    data:{
        commentList:[
            {name:"这里是用户名1",date:"2020-10-10",comment:"这里是一大串评论"},
            {name:"这里是用户名2",date:"2020-10-10",comment:"这里是一大串评论"},
            {name:"这里是用户名3",date:"2020-10-10",comment:"这里是一大串评论"},
            {name:"这里是用户名4",date:"2020-10-10",comment:"这里是一大串评论"},
            {name:"这里是用户名5",date:"2020-10-10",comment:"这里是一大串评论"},
            {name:"这里是用户名6",date:"2020-10-10",comment:"这里是一大串评论"},
            {name:"这里是用户名7",date:"2020-10-10",comment:"这里是一大串评论"},
            {name:"这里是用户名8",date:"2020-10-10",comment:"这里是一大串评论"},
        ]
    }

})