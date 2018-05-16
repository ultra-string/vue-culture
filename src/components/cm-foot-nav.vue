<template>
    <div class="cm-foot-nav clearfix">
        <router-link 
            v-for="(item , index) in listArr" 
            :key="index" 
            v-show="listArr.length ? true : false"
            :to="item.path"
            class="to-index"
            id="every"
        >
            {{item.name}}
        </router-link>
    </div>
</template>
<script>
export default {
    name : 'cmFootNav',
    data () {
        return {}
    },
    props : {
        listArr : {
            type : Array,
            default : function(){
                return [];
            }
        },
    },
    mounted(){
        let arrStyle = this.listArr[0].style;
        var name;
        for(var i = 0; i < every.length; i ++){
            for(name in this.listArr[i].style){
                every[i].style[name] = this.listArr[i].style[name];
                if(i == 0){
                    every[i].style.paddingLeft = 0;
                }else if(i == every.length - 1){
                    every[i].style.paddingRight = 0;
                    every[i].style.borderRight = 'none';
                }
            }
        }
    },
}
</script>
<style lang="scss" scoped>
.to-index{
    float : left;
}
</style>


