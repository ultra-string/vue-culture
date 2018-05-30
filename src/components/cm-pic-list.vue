<template>
    <div class="cm-pic-list">
        <ul class="pic-list clearfix">
            <li 
                class="pic-list-box clearfix" 
                v-for="(item , index) in dataList" 
                :key="index"
                @click="toDetail(item)"
            >
                <img :src="item.thumbnailUrl" alt="" class="adv-pic">
                <p class="text">{{item.bodyTitle}}</p>
            </li>
        </ul>
        <!-- <cm-change-page></cm-change-page> -->
    </div>
</template>
<script>
import CmChangePage from '@/components/cm-change-page';
    

export default{
    name : 'CmArrowList',
    data(){
        return {
            
        }
    },
    props : {
        dataList : {
            type : Array,
            default : function(){
                return [];
            }
        }
    },
    components : {
        CmChangePage,
    },
    methods : {
        toDetail : function(obj){
            this.$router.push({
                query : {
                    oneTitleId : obj.oneTitleId,
                    twoTitleId : obj.twoTitleId,
                    id : obj.id
                },
                params : {
                    id : obj.id
                },
                name : 'Details',
            });
        }
    }
}
</script>
<style lang="scss" scoped>
.cm-pic-list{
    width : 100%;
    overflow: hidden;
    .font-black{
        color : #666;
    }
    .font-red{
        color : $font-hot;
    }
    .pic-list{
        width : calc(100% + 50px);
        // @include display-flex;
        // @include justify-content-space;
        // flex-wrap: wrap;
        // overflow: hidden;
        
        .pic-list-box{
            width : 208px;
            height : 180px;
            float : left;
            margin-right : 54px;
            margin-bottom : 10px;
            img{
                width : 208px;
                height : 130px;
                display: block;
                margin : 0 auto;
            }
            .text{
                width : 100%;
                height : 50px;
                line-height : 50px;
                font-size : 18px;
                color : #3b6289;
                text-align : center;
                @include nowrap-ellipsis;
                
            }
        }
    }
}  

</style>



