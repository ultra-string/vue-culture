<template>
    <div class="cm-arrow-list">
        <ul class="arrow-list">
            <li 
                class="arrow-list-box clearfix" 
                v-for="(item , index) in dataList" 
                :key="index"
                :class="showArrow==index?'font-red':'font-black'"
            >
                <img src="@/common/images/comment/arrow.jpg" alt="" class="arrow" v-if="showArrow == index">
                <p class="text fl">{{item.content}}</p>
                <div class="fr">{{item.date | getTimeYMDWord}}</div>
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
                    content : '讲述了地方吉林省蓝思科技地方了',
                    date : '1526814292078'
                },
                {
                    content : '讲述了地方吉林省蓝思科技地方了',
                    date : '1526814292078'
                },
                {
                    content : '讲述了地方吉林省蓝思科技地方了',
                    date : '1526814292078'
                },
                {
                    content : '讲述了地方吉林省蓝思科技地方了',
                    date : '1526814292078'
                },
            ],
            showArrow : 0,
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
.cm-arrow-list{
    width : 100%;
    .font-black{
        color : #666;
    }
    .font-red{
        color : $font-hot;
    }
    .arrow-list{
        .arrow-list-box{
            height : 36px;
            border-bottom : 1px dashed #ccc;
            padding-left : 38px;
            position : relative;

            .arrow{
                margin-right : 10px;
                position :absolute;
                top : 14px;
                left : 10px;
            }

            .text{
                width : 530px;
                line-height : 36px;
            }

            .text{
                @include overflow-hidden-wrap(1);
            }
        }
    }
}  

</style>



