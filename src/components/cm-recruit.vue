<!-- zp列表 -->
<template>
    <div class="cm-recruit">
        <div class="list" v-if="!listArr.length">
            暂无数据
        </div>
        <!-- 列表 -->
        <div v-else class="list clearfix" v-for="(item , index) in listArr" :key="index" @click="toDetail(item)">
            <div class="fl date">
                <h5>{{item.updateTime | getTimeDayWord}}</h5>
                <h6>{{item.updateTime | getTimeYMWord}}</h6>
            </div>
            <div class="fr content">
                <p>{{item.bodyTitle}}</p>
                <div class="btn-line clearfix">
                    <div class="more-btn fr">查看详情</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default{
    name : 'CmRecruit',
    data (){
        return {}
    },
    props : {
        listArr : {
            type : Array,
            default : function(){
                return []
            }
        },
    },
    mounted(){
        console.log(this.listArr)
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
.cm-recruit{
    width : 100%;
    margin : 0 auto;

    .list{
        cursor:pointer;
        width : 100%;
        margin-bottom : 42px;

        .date{
            width : 98px;
            height : 98px;
            border : 1px solid $font-hot;
            color : $font-hot;
            text-align : center;

            h5{
                font-size : 20px;
                padding : 20px 0;
            }

            h6{
                font-size : 16px;
            }
        }
        .content{
            width : calc(100% - 110px);
            height : 99px;
            font-size : 14px;
            border-bottom : 1px solid #ccc;
            p{
                @include overflow-hidden-wrap(3);
                min-height : 60px;
                line-height : 24px;
            }
        

            .btn-line{
                width : 100%;
                height : 20px;

                .more-btn{
                    width : 58px;
                    height : 20px;
                    border-radius : 3px;
                    padding : 0 6px;
                    background : $font-hot;
                    color : $font-white;
                    text-align : center;
                }
            }
        }
    }

}
</style>


