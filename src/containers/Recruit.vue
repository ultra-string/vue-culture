<template>
  <!-- 招聘 -->
  <div class="recruit">
    <cm-bradcrumb 
        style="margin:18px 0;lineHeight: 45px;height:45px;fontSize:19px" 
        :navTree="navTree"
    ></cm-bradcrumb>
    <cm-recruit :listArr="dataList"></cm-recruit>
    <cm-change-page
        :pageNum="resData.pageNum"
        :data="resData"
        @changePageFn="changePage"
    ></cm-change-page>
  </div>
</template>
<script>
  import CmBradcrumb from '@/components/cm-breadcrumb';
  import CmRecruit from '@/components/cm-recruit';
  import CmChangePage from '@/components/cm-change-page';

  export default {
    name: 'recruit',
    data() {
      return {
        navTree: [
            {
                name: '首页',
                path: 'CultureNews',
                url: '',
                nowPage: false,
                isOuter: false
            }, 
            {
                name: '招聘',
                path: 'Recruit',
                url: '',
                nowPage: false,
                isOuter: false
            }
        ],
        dataList : [],
        resData : {},
      }
    },
    components: {
      CmBradcrumb,
      CmRecruit,
      CmChangePage,
    },
    created(){
       this.changePage(1);
    },
    methods : {
      changePage : function(page){
          this.$post('/body/page' , {
              "oneId": 100,
              "pageNo": page,
              "pageSize": 12,
              "twoId": 1004
          }).then(res => {
              console.log(res);
              this.dataList = res.data.list;
              this.resData = res.data;
          })
      },
    }
  }

</script>
<style lang="scss" scoped>
  .recruit {
    width: 1000px;
    min-width: 1000px;
    margin: 0 auto;
    position: relative;
  }

</style>
