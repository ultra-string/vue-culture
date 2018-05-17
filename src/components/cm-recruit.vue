<!-- zp列表 -->
<template>
    <div class="cm-recruit">
        <!-- 列表 -->
        <div class="list clearfix" v-for="(item , index) in listArr" :key="index">
            <div class="fl date">
                <h5>{{item.date | getTimeDayWord}}</h5>
                <h6>{{item.date | getTimeYMWord}}</h6>
            </div>
            <div class="fr content">
                <p>{{item.content}}</p>
                <div class="btn-line clearfix">
                    <div class="more-btn fr">更多</div>
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

}
</script>
<style lang="scss" scoped>
.cm-recruit{
    width : 1000px;

    .list{
        width : 100%;
        margin-bottom : 30px;

        .date{
            width : 80px;
            height : 80px;
            border : 1px solid $font-hot;
        }
        .content{
            width : 800px;
            font-size : 16px;
            border-bottom : 1px solid #ccc;
            p{
                @include overflow-hidden-wrap(3);
                min-height : 60px;
            }
        

            .btn-line{
                width : 100%;
                height : 20px;

                .more-btn{
                    width : 45px;
                    height : 20px;
                    border-radius : 3px;
                    background : $font-hot;
                    color : $font-white;
                }
            }
        }
    }

}
</style>


