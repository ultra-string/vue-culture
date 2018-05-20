<template>
    <div class="cm-pic-list">
        <ul class="pic-list">
            <li 
                class="pic-list-box clearfix" 
                v-for="(item , index) in dataList" 
                :key="index"
            >
                <img src="@/common/images/comment/test-pic.jpg" alt="" class="adv-pic">
                <p class="text">{{item.content}}</p>
            </li>
        </ul>
        <cm-change-page></cm-change-page>
    </div>
</template>
<script>
import CmChangePage from '@/components/cm-change-page';
    

export default{
    name : 'CmArrowList',
    data(){
        return {
            dataList : [
                {
                    content : '1讲述了思科技地方了',
                    date : '1526814292078'
                },
                {
                    content : '2讲述了思科技地方了',
                    date : '1526814292078'
                },
                {
                    content : '3讲述了思科技地方了',
                    date : '1526814292078'
                },
                {
                    content : '4讲述了思科技地方了',
                    date : '1526814292078'
                },
                {
                    content : '5讲述了思科技地方了',
                    date : '1526814292078'
                },
                {
                    content : '6讲述了思科技地方了',
                    date : '1526814292078'
                },
                {
                    content : '7讲述了思科技地方了',
                    date : '1526814292078'
                },
                {
                    content : '8讲述了思科技地方了',
                    date : '1526814292078'
                },
                {
                    content : '9讲述了思科技地方了',
                    date : '1526814292078'
                },
            ],
        }
    },
    props : {
        // dataList : {
        //     type : Array,
        //     default : function(){
        //         return [];
        //     }
        // }
    },
    components : {
        CmChangePage,
    }
}
</script>
<style lang="scss" scoped>
.cm-pic-list{
    width : 100%;
    .font-black{
        color : #666;
    }
    .font-red{
        color : $font-hot;
    }
    .pic-list{
        width : 100%;
        @include display-flex;
        @include justify-content-space;
        flex-wrap: wrap;
        
        .pic-list-box{
            width : 208px;
            height : 180px;
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



