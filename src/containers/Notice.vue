<template>
    <div class="notice">
        <div v-for="(value, key) in path" :key="key">
            <div>{{value}}</div>
        </div>
    </div>
</template>
<script>
export default {
    name : 'Notice',
    data (){
        return {
            path: this.$route.meta
        }
    }
}
</script>
<style lang="scss" scoped>
.notice{

}
</style>
