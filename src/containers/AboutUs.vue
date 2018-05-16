<template>
    <div class="about-us">
        关于我们
    </div>
</template>
<script>
export default {
    name : 'AboutUs',
    data (){
        return {
        }
    },
    created() {
        console.log(this.$route.meta)
    }
}
</script>
<style lang="scss" scoped>
.about-us{

}
</style>