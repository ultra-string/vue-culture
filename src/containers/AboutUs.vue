<template>
    <div class="about-us">
        关于我们
        <cm-video-player></cm-video-player>
    </div>
</template>

<script>
import CmVideoPlayer from '@/components/cm-video-player'

export default {
    name : 'AboutUs',
    data (){
        return {
        }
    },
    components: {
        CmVideoPlayer
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