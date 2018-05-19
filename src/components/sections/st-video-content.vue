<template>
    <div class="st-video-content clearfix">
        <cm-thumbnail
        class="fl video"
        :width="230"
        :height="135"
        title="匠人故事"
        :isTitle="true"
        ></cm-thumbnail>
        <cm-short-content
        class="short-content fr"
        ></cm-short-content>
    </div>
</template>

<script>
import CmThumbnail from '@/components/cm-thumbnail';
import CmShortContent from '@/components/cm-short-content';

export default {
    name : 'StVideoContent',
    props: {
    },
    data (){
        return {
        }
    },
    components: {
       CmThumbnail,
       CmShortContent
    }
}
</script>

<style lang="scss" scoped>
.st-video-content{
    .video{
        width: 47.5%;
    }
    .short-content{
        width: 47.5%;
    }
}
</style>