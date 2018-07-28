<template>
    <div class="serch-text">
        <!-- 我是搜索 -->
        <h5 v-if="!resData.list || !resData.list.length">未找到与{{note}}相关信息</h5>
        <cm-news-list
            :hasDate="true"
            :newsList="resData.list"
            :hasDashBorder="true"
            v-else
        ></cm-news-list>
        <cm-change-page
            :pageNum="resData.pageNum"
            :data="resData"
            @changePageFn="changePageFn"
        ></cm-change-page>
    </div>
</template>
<script>
import CmNewsList from '@/components/cm-news-list';
import CmChangePage from '@/components/cm-change-page';

export default {
    name : 'SerchText',
    data(){
        return{
            params : '',
            resData : {},
            curType : '',//搜索类别
            note : '',//搜索关键字
        }
    },
    created(){
        this.params = this.$route.query;
        
        this.loadFn();
    },
    watch: {  
        '$route' (to, from) {  
            console.log(this.$route.query) 
            if(to.fullPath != from.fullPath){
                this.loadFn();
            } 
        }  
    }, 
    methods : {
        loadFn : function(){
            let params = this.$route.query;
            this.note = this.$route.params.str;
            console.log('curType' , params.type)
            this.$post('/search' , {
                "pageNo": 1,
                "pageSize": 10,
                "param": this.note,
                "type": params.type
            }).then(res => {
                console.log(res)
                this.resData = res.data;
                //test
                // this.resData.list = [];
            })
        },
        changePageFn : function(page){
            //pageNo:第几页
            let pageNo = page;
            //pageSize:一页几条数据
            let pageSize = 10;
            this.$post('/commentSearch', {
            "bodyId": this.params.id,
            "pageNo": pageNo,
            "pageSize": pageSize
            }).then(res => {
            console.log(res);
                this.resData = res.data;
                this.dataList = res.data.list;
                // console.log(this.dataList)
            })
        }
    },
    components : {
        CmNewsList,
        CmChangePage
    }
}
</script>
<style lang="scss" scoped>
.serch-text{
    width : 1000px;
    min-width :1000px;
    margin : 30px auto 20px;
    h5{
        text-align : center;
        font-size : 30px;
        margin : 20px auto;
    }
}
</style>






