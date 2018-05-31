<!-- 友情链接 -->
<template>
    <div class="friendship-link">
        <!-- <cm-bradcrumb
            :navTree="navTree"
            style="margin:18px 0;lineHeight: 45px;fontSize:19px"
        ></cm-bradcrumb> -->
        <h2 class="friend-title">合作伙伴</h2>
        <div class="content">
            <img :src="item.imgUrl" alt="" v-for="(item , index) in dataList" :key="index" @click="toPath(item.url)">
        </div>
    </div>
</template>
<script>
import CmBreadCrumb from '@/components/cm-breadcrumb';

export default{
    name : 'FriendShipLink',
    data(){
        return {
            navTree: [{
                    name: '首页',
                    path: 'CultureNews',
                    url: '',
                    nowPage: false,
                    isOuter: false
                },
                {
                    name: '友情链接',
                    path: 'CultureNews',
                    url: '',
                    nowPage: false,
                    isOuter: false
                }
            ],//meta
            dataList : [
                
            ],
        }
    },
    component : {
        CmBreadCrumb,
    },
    created(){
        this.$get(`/friendLink`).then( res => {
            console.log(res)
            this.dataList = res.data;
        })
    },
    methods : {
        toPath : function(url){
            window.open('https://' + url);
        }
    }
}
</script>
<style lang="scss" scoped>
.friendship-link{
    width : 100%;
    position : relative;
    .friend-title{
        width : 100%;
        height : 94px;
        line-height : 94px;
        color : #4d4d4d;
        text-align : center;
        font-weight : bold;
    }
    .content{
        width : 100%;
        @include display-flex;
        @include justify-content-space;
        flex-wrap: wrap;

        img{
            width : 180px;
            height : 98px;
            border : 1px solid #eeeeee;
            margin-bottom : 30px;
        }
    }
    
}
</style>


