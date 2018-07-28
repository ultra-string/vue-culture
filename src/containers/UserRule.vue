<template>
    <div class="use-rule">
        <cm-bradcrumb
            style="margin:18px 0;lineHeight: 45px;fontSize:19px"
            :navTree="navTree"
        ></cm-bradcrumb>
        <cm-news-list
            :hasDate="true"
            :newsList="dataList"
            :hasDashBorder="true"
        ></cm-news-list>
        <cm-change-page
            :pageNum="resData.pageNum"
            :data="resData"
            @changePageFn="changePage"
        ></cm-change-page>
    </div>
</template>
<script>
import CmNewsList from '@/components/cm-news-list';
import CmChangePage from '@/components/cm-change-page';
import CmBradcrumb from '@/components/cm-breadcrumb';


export default {
    name : 'UserRule',
    data (){
        return {
            path: this.$route.meta,
            dataList : [],
            resData : {},
            navTree: [
                {
                    name: '首页',
                    path: 'CultureNews',
                    url: '',
                    nowPage: false,
                    isOuter: false
                },
                {
                    name: '使用条款',
                    path: 'CultureNews',
                    url: '',
                    nowPage: false,
                    isOuter: false
                }
            ],
        }
    },
    components: {
        CmNewsList,
        CmChangePage,
        CmBradcrumb
    },
    created(){
       this.changePage(1);
    },
    methods : {
        changePage : function(page){
            this.$post('/body/page' , {
                "oneId": 100,
                "pageNo": page,
                "pageSize": 12,
                "twoId": 1002
            }).then(res => {
                console.log(res);
                this.dataList = res.data.pageInfo.list;
                this.resData = res.data;
            })
        },
    }
}
</script>
<style lang="scss" scoped>
.use-rule{
    width : 1000px;
    min-width : 1000px;
    margin : 0 auto;
}
</style>
