<template>
    <div class="st-right-adv">
        <div class="go-top" @click="goTopFn">
            <span class="go-top-arow">^</span>
            <p class="go-top-word">返回顶部</p>
        </div>
    </div>
</template>
<script>
export default {
    name : 'stRightAdv',
    data (){
        return {}
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
.st-right-adv{
    width : 202px;
    position : fixed;
    top : 50%;
    right : 140px;
    @include transform-translate-y;

    .go-top{
        width : 202px;
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


