<template>
    <div class="cm-foot-nav clearfix">
        <router-link 
            v-for="(item , k) in listArr" 
            :key="k" 
            v-show="listArr.length ? true : false"
            :to="item.path"
            class="to-index"
            :ref="k"
        >
            {{item.name}}
        </router-link>
    </div>
</template>
<script>
export default {
    name : 'cmFootNav',
    data () {
        return {
            listNameId : ''
        }
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
        for(var i = 0; i < this.listArr.length; i ++){
            var listName = i + '';
            for(name in this.listArr[i].style){
                this.$refs[listName][0].$el.style[name] = this.listArr[i].style[name];
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


