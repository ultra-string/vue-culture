<template>
    <div class="test">
        我是测试
        <input type="button" @click="getBodyTitle" value="点击获取body标题">
        <input type="button" @click="postComment" value="发布评论">
        <input type="button" @click="delComment" value="删除评论">
        <input type="button" @click="getComment" value="获取评论">
        <input type="button" @click="getMark" value="获取验证码">
        <input type="button" @click="getUser" value="获取用户信息">
        <input type="button" @click="getRes" value="注册">
    </div>
</template>
<script>

export default{
    name : 'Test',
    data (){
        return {

        }
    },
    methods : {
        getBodyTitle : function(){
            //pageNo:第几页
            let pageNo = 1;
            //pageSize:一页几条数据
            let pageSize = 10;
            //twoId二级标题id
            let twoId = 2;
            //oneId一级标题id
            let oneId = 1;
            var str = '/body/page?pageNo=' + pageNo + '&pageSize=' + pageSize + '&oneId=' + oneId + '&twoId=' + twoId;
            this.$post('/body/page', {
                pageNo:  pageNo,
                pageSize: pageSize,
                oneId: oneId,
                twoId: twoId
            }).then(res => {
                console.log(res);
            })
        },
        postComment : function(){
            ///commentPublish
            //comment : 评论内容
            let comment = 'sdfsfs';
            //bodyId : 评论文章id
            let bodyId = '1';
            var str = '/commentPublish?comment=' + comment + '&bodyId=' + bodyId;
            this.$post('/commentPublish',{
                comment:comment,
                bodyId: bodyId
            }).then(res => {
                console.log(res);
            })
        },
        delComment : function(){
            ///commentDelete
            //id : 评论id
            let id = '18';
            this.$post('/commentDelete',{
                id : id
            }).then(res => {
                console.log(res);
            })
        },
        getComment : function(){
            ///commentSearch
            this.$post('/commentSearch',{
            "pageNo": 1,
            "pageSize": 1
            }).then(res => {
                console.log(res)
            })
        },
        getMark : function(){
            //smscode
            this.$get('/smscode?phone=18611422521').then(res => {
                console.log(res)
            })
        },
        getUser : function(){
            this.$get('/user').then(res => {
                console.log(res)
            })
        },
        getRes : function(){
            this.$post('/register',{
                "nickname": "string",
                "password": "string",
                "phone": "18611422521",
                "smscode": "POD4"
            }).then(res => {
                console.log(res)
            })
        }
    },
    created(){
        //get
        // this.$get().then(res => {
        //     console.log(res);
        // });
        //post
        // this.$post().then(res => {
        //     console.log(res)
        // })
        // this.$get('/index').then(res => {
        //     console.log(res);
        // })
        ///body/{id}文章id
        // let wordId = 1;
        // let str = '/body/' + wordId;
        // this.$get(str).then(res => {
        //     console.log(res);
        // })
        ///specialPlanningSearch
        // let str = '/specialPlanningSearch';
        // this.$get('/specialPlanningSearch').then(res => {
        //     console.log(res);
        // })
        ///user
        // let str = '/user';
        // this.$get('/user').then(res => {
        //     console.log(res)
        // })
        ///friendLink
        let str = '/friendLink';
        this.$get('/friendLink').then(res => {
            console.log(res);
        })
    }, 
}
</script>
<style lang="scss" scoped>
    input{
        width : 10rem;
        height : 1rem;
        display: block;
        margin : 1rem auto;
        border : 1px solid #ccc;
    }

</style>



