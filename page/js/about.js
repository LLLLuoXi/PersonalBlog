var blogComments = new Vue({
    el: "#blog_comments",
    data: {
        total: 100,
        comments: [],

    },
    computed: {
        reply: function () {
            return function (commentId, userName) {
                document.getElementById("comment_reply").value = commentId;
                document.getElementById("comment_reply_name").value = userName;
                location.href = "#send_comment";

            }
        }

    },
    created: function () {
                var bid = -1;
        axios({
            method:"get",
            url:`/queryCommentsByBlogId?bid=${bid}`
        }).then(function(resp){

            blogComments.comments = resp.data.data;
            console.log('进入循环');
            console.log(blogComments.comments)
            for(var i = 0;i < blogComments.comments.length;i++){
                if(blogComments.comments[i].parent > -1){
                    console.log('进入循环')
                    blogComments.comments[i].options = "回复@" + blogComments.comments[i].parent_name;
                }
            }
        });
        axios({
            method:"get",
            url:`/queryCommentsCountByBlogId?bid=${bid}`
        }).then(function(resp){
            blogComments.total = resp.data.data[0].count;
        }).catch(function(resp){
            console.log("请求错误");
        })

    }
})