<!-- 友情链接 -->
<template>
    <div class="friendship-link">
        友情链接
        <!-- <cm-breadcrumb
            :navTree="navTree"
        ></cm-breadcrumb> -->
    </div>
</template>
<script>
import CmBreadCrumb from '@/components/cm-breadcrumb';

export default{
    name : 'FriendShipLink',
    data(){
        return {
            navTree : ['首页' , '友情链接'],//meta
        }
    },
    component : {
        CmBreadCrumb,
    },
    created(){
        // this.navTree = this.$route.meta;
    }
}
</script>
<style lang="scss" scoped>

</style>


