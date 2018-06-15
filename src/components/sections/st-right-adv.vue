<template>
    <div class="st-right-adv" id="rightAdv">
        <div class="adv flex-box">
            <cm-thumbnail v-if="advArr && advArr.length" v-for="(item,k) in advArr" :key="k" :width="140" :height="70" :title="item.name" 
            :msg="item"
            :isFn="true"
            :isTitle="true" :src="item.url" class="adv-box"></cm-thumbnail>
        </div>
        <div class="go-top" @click="goTopFn" v-show="showReturnBtn">
            <span class="go-top-arow">^</span>
            <p class="go-top-word">返回顶部</p>
        </div>
    </div>
</template>
<script>
import CmThumbnail from "@/components/cm-thumbnail";
export default {
    name : 'RtRightAdv',
    data (){
        return {
            pageHeight : 0,
            showReturnBtn : false,
            advWidth : 1,
            advHeight : 1,
        }
    },
    created(){
        // var clientWidth = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
        // this.advWidth = Math.floor((clientWidth - 1000) / 2 -5);
        // this.advHeight = Math.floor(this.advWidth / 202 * 128);
    },
    mounted(){
        window.addEventListener('scroll', this.handleScroll);
        this.pageHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        // rightAdv.style.width = (this.advWidth - 5) + 'px';
    },
    beforeDestroy(){
      window.removeEventListener("scroll",this.handleScroll);
    },
    props : {
        advArr : {
            type : Array,
            default : function(){
                return [];
            }
        }
    },
    components: {
      CmThumbnail,
    },
    methods : {
        goTopFn : function(){
            let topDis = 0;
			if(
				document.documentElement
				&& document.documentElement.scrollTop
			){
                topDis=document.documentElement.scrollTop;
			}else if(document.body){
				topDis=document.body.scrollTop;
            }
            this.jump(topDis);
        },
        handleScroll : function(){
            // this.showReturnBtn = true;
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            if(scrollTop > this.pageHeight * 3){
                this.showReturnBtn = true;
            }else{
                this.showReturnBtn = false;
            }
        },
        jump: function (total) {
			let distance = 0;
            let step = total / 30;
            let curTTime = 0;
            let newTotal = distance - total;
            step = newTotal / 50;
            smoothUp();
            function easeInOut (start,alter,curTime,dur) {
                var progress =curTime/dur*2;
                return (progress<1?Math.pow(progress,2):-((--progress)*(progress-2) - 1))*alter/2+start;
            }
			function smoothUp () {
                var a = easeInOut(0,total,curTTime,1000)
				if (Math.ceil(distance) < total) {
                    document.documentElement.scrollTop -= a;
                    distance += a;
                    curTTime += 30;
					setTimeout(smoothUp, 30);
				} else {
					document.body.scrollTop = 0;
					document.documentElement.scrollTop = 0;
					window.pageYOffset = 0;
				}
			} 
		},
    }
}
</script>
<style lang="scss" scoped>
.flex-box {
    width :100%;
    @include display-flex;
    @include justify-content-space;
    @include flex-wrap-wrap;
}
.adv-box{
    margin-bottom : 10px;
}
.st-right-adv{
    width : 140px;
    position : fixed;
    top : 50%;
    right : 1%;
    z-index : 999;
    @include transform-translate-y;

    .go-top{
        width : 100%;
        height : 38px;
        background : #d7d4ce;
        color : #ffffff;
        text-align : center;
        padding-top : 4px;

        .go-top-arow{
            display : block;
            // font-size : 11px;
            height : 12px;
            font-size : 12px;
            line-height : 12px;
        }

        .go-top-word{
            font-size : 16px;
            height : 26px;
            line-height : 26px;
        }
    }
}
</style>


