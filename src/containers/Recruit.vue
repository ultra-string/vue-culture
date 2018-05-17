<!-- 招聘 -->
<template>
        <div class="recruit">
            招聘
            <!-- <cm-breadcrumb
                :navTree="navTree"
            ></cm-breadcrumb> -->
        </div>
    </template>
    <script>
    import CmBreadCrumb from '@/components/cm-breadcrumb';
    
    export default{
        name : 'recruit',
        data(){
            return {
                navTree : ['首页' , '招聘'],//meta
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
    
    
    