<template>
    <div class="st-comment">
        我是微博
        <cm-comment
            :userName="item.userName"
            :commentContent="item.commentContent"
            :commentDate="item.commentDate"
            v-for="(item , k) in commentData"
            :key = 'k'
        ></cm-comment>
    </div>
</template>
<script>
import CmComment from '@/components/cm-comment';

export default{
    name : 'StComment',
    data (){
        return {
            commentData : [],
        }
    },
    components : {
        CmComment
    },
    created(){
        this.commentData = [
            {
                userName : 'fk',
                commentContent : '熟练度附近抗裂砂浆的方式来拉克砂浆的方式来拉克砂浆的方式来拉克砂浆的方式来拉克砂浆的方式来拉克砂浆的方式来拉克丝接待来访善良大方加适量的解放路上地方吉林省空间大发牢骚发',
                commentDate : '1526460237434',
                // isGoodNav : false,
            },
            {
                userName : 'fklslsl',
                commentContent : '熟练度附近抗裂砂浆的方式来拉克丝接待来访善良大方加适量的解放路上地方吉林省空间大发牢骚发',
                commentDate : '1526460247434',
                // isGoodNav : false,
            },
        ];
    }
}
</script>
<style lang="scss" scoped>

</style>


