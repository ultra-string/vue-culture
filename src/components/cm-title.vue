<template>
    <div class="cm-title">
        {{title}}
    </div>
</template>

<script>
import CmTitle from '@/components/cm-title'

export default {
    name : 'CmTitle',
    props: {
        title: {
            type: String,
            default: '标题'
        }
    },
    data (){
        return {
        }
    }
}
</script>

<style lang="scss" scoped>
.cm-title{
    line-height: 29px;
    font-size: 23px;
    border-bottom: 3px solid $font-hot;
    padding-left: 6px;
    color: $font-hot;
}
</style>