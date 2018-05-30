<template>
    <div class="serch-text"></div>
</template>
<script>
import CmNewsList from '@/components/cm-news-list';

export default {
    name : 'SerchText',
    data(){
        return{
            params : '',
        }
    },
    created(){
        this.params = this.$route.query;
        let params = this.params;
        
    },
    methods : {},
    components : {
        CmNewsList,
    }
}
</script>
<style lang="scss" scoped>
.serch-text{
    width : 1000px;
    min-width :1000px;
    margin : 0 auto;
}
</style>






