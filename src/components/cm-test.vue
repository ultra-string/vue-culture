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
        <img :src="this.picPath" alt="">
<!-- 替换标题  -->
<div class="test">
<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-submenu index="2">
    <template slot="title">新媒体</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
</el-submenu>
</el-menu>
    <!-- <el-menu ref="elmentItem" :default-active="activeIndex" :collapse-transition="false" class="el-menu-demo" mode="horizontal" @select="handleSelect" :unique-opened="true">
        <el-menu-item index="1" @click="toPathFn">11111111</el-menu-item>
        <el-submenu v-for="(item,key) in titleList" :key="key" :index="key+''">
            <!-- <template slot="title">{{item.oneTitleName}}</template> -->
            <!-- <el-menu-item index="key" slot="title" @click="toPathFn">{{item.oneTitleName}}</el-menu-item>
            <!-- <el-menu-item index="key+'-'+0">{{item.oneTitleName}}</el-menu-item> -->
            <!-- <el-menu-item v-for="(val , k) in item.twoTitleVOs" :key="k" index="key+'-'+(k+1)">{{val.twoTitleName}}</el-menu-item>
            </el-submenu>
        </el-submenu> -->
    <!-- </el-menu> --> 
<!-- <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">处理中心</el-menu-item>
  <el-submenu index="2">
    <template slot="title">我的工作台</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">选项4</template>
      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="3" disabled>消息中心</el-menu-item>
  <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
</el-menu> -->
</div>
    </div>
</template>
<script>

export default{
    name : 'Test',
    data (){
        return {
            picPath : '',
            dataList : [],
            activeIndex: '1',
            activeIndex2: '1',
            titleList : [],
            itemTrue : true,
        }
    },
    methods : {
        toPathFn : function(){
            alert(111)
        },
        handleSelect : function(key, keyPath) {
            console.log(key, keyPath);
        },
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
                "pageSize": 10,
                "bodyId" : 2
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
                this.picPath = res;
                console.log(res)
            })
        },
        //获取图形验证码
        getPicMark : function(){
            // this.$getPic('imageVali/').then(res => {
            //     console.log(res);
            // })
            this.picPath = `http://118.190.152.1:8084/imageVali/?time=${new Date().getTime()}`
        },
        getBodyFn : function(){
            this.$get('/index').then(res => {
                this.titleList = res.data.titleVOs;
                console.log(this.titleList);
            })
        },
    },
    mounted(){
        console.log(this.$refs.elmentItem.uniqueOpened)
    //     this.$refs.elmentItem.uniqueOpened = true;
    },
    created(){
        this.getBodyFn();
        
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
        // let str = '/friendLink';
        // this.$get('/friendLink').then(res => {
        //     console.log(res);
        // })
        // this.getBodyTitle();
        // this.getPicMark();
    }, 
}
</script>
<style lang="scss" scoped>
    .test{
        width : 1000px;
        min-width : 1000px;
        margin : 0 auto;
    }
    // .el-menu--horizontal > .el-submenu .el-submenu__title{
    //     padding : 0 10px;
    //     margin : 0px;
    //     font-size : 16px;
    //     border : none !important;
    // }
    // .el-menu--horizontal > .el-submenu:hover .el-submenu__title{
    //     color : $font-hot;
    //     border-bottom : 1px solid $font-hot !important;
    // }
    // .el-menu--horizontal > .el-submenu{
    //     border-bottom : none;
    // }
    // .el-menu--horizontal{
    //     border-bottom : none;
    // }
    // .el-menu--horizontal > .el-submenu .el-submenu__icon-arrow{
    //     width : 0px;
    //     height : 0px;
    //     overflow: hidden;
    //     padding : 0;
    //     margin : 0;
    // }
    // .el-submenu__title{
    //     padding : 0px;
    //     margin : 0px;
    // }
    // .el-submenu{
    //     padding : 0px;
    //     margin : 0px;
    // }
input{
    width : 10rem;
    height : 1rem;
    display: block;
    margin : 1rem auto;
    border : 1px solid #ccc;
}
</style>



