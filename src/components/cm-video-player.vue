<template>
    <div class="cm-video-player">
        <!-- 我是播放器 -->
          <video-player  class="video-player-box"
                        ref="videoPlayer"
                        :options="playerOptions"
                        :playsinline="true"
                        customEventName="customstatechangedeventname"
                        @ready="playerReadied">
        </video-player>
    </div>
</template>

<script>
import 'video.js/dist/video-js.css'
import { videoPlayer } from 'vue-video-player'

export default {
    name : 'CmVideoPlayer',
    data (){
        return {
            playerOptions: {
                // videojs options
                muted: true,
                language: 'en',
                playbackRates: [0.7, 1.0, 1.5, 2.0],
                sources: [{
                    type: "video/mp4",
                    src: ''
                }],
                poster:require('./../common/images/demo.png'),
                width : '100%'
            }
        }
    },
    components: {
        videoPlayer
    },
    computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
    },
    props : {
        src : {
            type : String,
            default : 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm'
        },
        width : {
            type : String,
            default : '100%'
        },
        height : {
            type : String,
            default : '100%'
        }
    },
    created(){
        this.playerOptions.sources[0].src = this.src;
        this.playerOptions.width = this.width;
        this.playerOptions.height = this.height;
    },
    methods: {
      // listen event
      onPlayerPlay(player) {
        // console.log('player play!', player)
      },
      onPlayerPause(player) {
        // console.log('player pause!', player)
      },
      // ...player event

      // or listen state event
      playerStateChanged(playerCurrentState) {
        // console.log('player current update state', playerCurrentState)
      },

      // player is ready
      playerReadied(player) {
        console.log('the player is readied', player)
        // you can use it to do something...
        // player.[methods]
      }
    }
}
</script>

<style lang="scss" >
.video-js{
    margin : 0 auto;
}
.video-js .vjs-big-play-button{
    top : 50%;
    left : 50%;
    /*transform: translate(-50%,-50%);*/
    @include center;
}
.cm-video-player{
    width : 100%;
    .video-player-box{
        width : 100%;
    }
}

</style>