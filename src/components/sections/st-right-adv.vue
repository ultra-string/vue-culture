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
            // document.body.scrollTop = 0;
            // document.documentElement.scrollTop = 0;
            let topDis = 0;
			if(
				document.documentElement
				&& document.documentElement.scrollTop
			){
                topDis=document.documentElement.scrollTop;
			}else if(document.body){
				topDis=document.body.scrollTop;
            }
            console.log(topDis)
            this.jump(-topDis);
        },
        jump: function (total) {
			let distance = 0;
			let step = total / 30;
			if (total < distance) {
                smoothDown()
			} else {
                let newTotal = distance - total
				step = newTotal / 50
				smoothUp()
			}
			function smoothDown () {
				if (distance > total) {
					distance += step;
					document.documentElement.scrollTop -= step;
					setTimeout(smoothDown, 10);
				} else {
					document.body.scrollTop = 0;
					document.documentElement.scrollTop = 0;
					window.pageYOffset = 0;
				}
			}
			function smoothUp () {
				if (distance < total) {
                    document.documentElement.scrollTop += step;
                    distance -= step;
                    console.log(distance);
					setTimeout(smoothUp, 30);
				} else {
                    // alert(3)
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


