<template>
    <div class="special-scheme" v-if="beReady">
        <!-- 图片广告 -->
        <div class="top-new-line top-new-line-one clearfix" v-if="this.newsData[0].SpecPlanHeadOne">
            <h1 v-if="this.newsData[0].SpecPlanHeadOne[0]" class="hand-point" @click="toUrlFn(this.newsData[0].SpecPlanHeadOne[0].url)">{{this.newsData[0].SpecPlanHeadOne[0].name}}</h1>
            <div class="flex-box top-new-box">
                <p class="hand-point" v-if="advOne && advOne.length" v-for="(item , index) in advOne" :key="index" @click="toUrlFn(item.url)">{{item.name}}</p>
            </div>
        </div>
        <!-- 图片广告2 -->
        <div class="top-new-line clearfix" v-if="this.newsData[1].SpecPlanHeadTwo">
            <h1 v-if="this.newsData[1].SpecPlanHeadTwo[0]" class="hand-point" @click="toUrlFn(this.newsData[1].SpecPlanHeadTwo[0].url)">{{this.newsData[1].SpecPlanHeadTwo[0].name}}</h1>
            <div class="flex-box top-new-box">
                <p class="hand-point" v-if="advTwo && advTwo.length" v-for="(item , index) in advTwo" :key="index" @click="toUrlFn(item.url)">{{item.name}}</p>
            </div>
        </div>
        <!-- swiper -->
        <div class="swiper-line clearfix">
            <cm-swiper
            class="fl"
            :baseData="baseData"
            :height="330"
            ></cm-swiper>
            <div class="fr">
                <cm-title 
                title="活动讯息"
                ></cm-title>
                <cm-short-content class="fr list short-content" v-if="resData['1005'] && resData['1005'].length" :msg="resData['1005']['0']"></cm-short-content>
                <cm-news-list
                :newsList="activeMsg"
                :hasHotPoint="true"
                class="font-color"
                ></cm-news-list>
            </div>
        </div>
        <!-- 看见非遗 -->
        <div class="see-heritage">
            <cm-title 
            title="看见非遗"
            ></cm-title>
            <div class="clearfix flex-direction see-heritage-box">
                <div class="video-line">
                    <!-- 左上 -->
                    <div class="clearfix">
                        <cm-thumbnail
                        class="fl"
                        :width="230"
                        :height="135"
                        :title="resData['1007'][0].bodyTitle"
                        :isTitle="true"
                        :src="resData['1007'][0].thumbnailLink"
                        ></cm-thumbnail>
                        <cm-short-content
                        class="short-content fr"
                        :msg="resData['1007'][0]"
                        ></cm-short-content>
                    </div>
                </div>
                <div v-if="seeHeritage && seeHeritage.length" class="cm-news-list hand-point clearfix" v-for="(val, key) in seeHeritage"
                    :key="key" @click="toDetail(val)">
                    <i class="fl"></i>
                    <h3 class="fl font-color">{{val.bodyTitle}}</h3>
                </div>
            </div>
        </div>
        <!-- 聆听非遗 -->
        <div class="linsten-heritage">
            <cm-title 
            title="聆听非遗"
            ></cm-title>
            <div class="top clearfix flex-direction linsten-heritage-box">
                <div v-if="listenHeritage && listenHeritage.length" class="cm-news-list hand-point clearfix" v-for="(val, key) in listenHeritage"
                    :key="key" @click="toDetail(val)">
                    <i class="fl"></i>
                    <h3 class="fl font-color">{{val.bodyTitle}}</h3>
                </div>
                <div class="clearfix video-line">
                    <cm-thumbnail
                    class="fl"
                    :width="230"
                    :height="135"
                    :title="resData['1007'][0].bodyTitle"
                    :isTitle="true"
                    :src="resData['1007'][0].thumbnailLink"
                    ></cm-thumbnail>
                    <cm-short-content
                    style="width:230px;"
                    class="short-content fr"
                    :msg="resData['1007'][1]"
                    ></cm-short-content>
                </div>
                <div class="clearfix video-line">
                    <cm-thumbnail
                    class="fl"
                    :width="230"
                    :height="135"
                    :title="resData['1007'][2].bodyTitle"
                    :isTitle="true"
                    :src="resData['1007'][2].thumbnailLink"
                    ></cm-thumbnail>
                    <cm-short-content
                    style="width:230px;"
                    class="short-content fr"
                    :msg="resData['1007'][3]"
                    ></cm-short-content>
                </div>
            </div>
        </div>
        <!-- 触摸非遗 -->
        <div class="touch-heritage">
            <cm-title 
            title="触摸非遗"
            ></cm-title>
            <div class="clearfix flex-box">
                <div class="clearfix video-line">
                    <cm-thumbnail
                    class="fl"
                    :width="230"
                    :height="135"
                    :title="resData['1008'][2].bodyTitle"
                    :isTitle="true"
                    :src="resData['1008'][2].thumbnailLink"
                    ></cm-thumbnail>
                    <cm-short-content
                    style="width:230px;"
                    class="short-content fr"
                    :msg="resData['1008'][3]"
                    ></cm-short-content>
                </div>
                <div class="clearfix video-line">
                    <cm-thumbnail
                    class="fl"
                    :width="230"
                    :height="135"
                    :title="resData['1008'][2].bodyTitle"
                    :isTitle="true"
                    :src="resData['1008'][2].thumbnailLink"
                    ></cm-thumbnail>
                    <cm-short-content
                    style="width:230px;"
                    class="short-content fr"
                    :msg="resData['1008'][3]"
                    ></cm-short-content>
                </div>
                <div v-if="touchHeritage && touchHeritage.length" class="cm-news-list hand-point clearfix" v-for="(val, key) in touchHeritage"
                    :key="key" @click="toDetail(val)">
                    <i class="fl"></i>
                    <h3 class="fl font-color">{{val.bodyTitle}}</h3>
                </div>
            </div>
        </div>
        <!-- 品味非遗 -->
        <div class="taste-heritage">
            <cm-title 
            title="品味非遗"
            ></cm-title>
            <div class="clearfix flex-direction taste-heritage-box">
                <div class="clearfix video-line">
                    <cm-thumbnail
                    class="fl"
                    :width="230"
                    :height="135"
                    :title="resData['1009'][0].bodyTitle"
                    :isTitle="true"
                    :src="resData['1009'][0].thumbnailLink"
                    ></cm-thumbnail>
                    <cm-short-content
                    style="width:230px;"
                    class="short-content fr"
                    :msg="resData['1009'][1]"
                    ></cm-short-content>
                </div>
                <div v-if="tasteHeritage && tasteHeritage.length" class="cm-news-list hand-point clearfix" v-for="(val, key) in tasteHeritage"
                    :key="key" @click="toDetail(val)">
                    <i class="fl"></i>
                    <h3 class="fl font-color">{{val.bodyTitle}}</h3>
                </div>
            </div>
        </div>
        <!-- 评论 -->
        <st-comment></st-comment>

    </div>
</template>

<script>
import CmTitle from '@/components/cm-title';
import CmSwiper from '@/components/cm-swiper';
import CmShortContent from '@/components/cm-short-content';
import CmNewsList from '@/components/cm-news-list';
import CmThumbnail from '@/components/cm-thumbnail';
import StVideoContent from '@/components/sections/st-video-content';
import StComment from '@/components/sections/st-comment.vue';


export default {
    name : 'SpecialScheme',
    data (){
        return {
            // swiper数据
            baseData: [
                {
                    IMG_URL: require('@/common/images/index/modelbg.png'),
                    link: 'https://www.baidu.com'
                },
                {
                    IMG_URL: require('@/common/images/index/newUserAlert.png'),
                    link: 'https://www.taobao.com'
                },
                {
                    IMG_URL: require('@/common/images/index/oldAlert.png'),
                    link: 'https://www.souhu.com'
                }
            ],
            newsList: [
                {
                    title: '我是政策法规的标题啊！',
                    date: '2018-7-20'
                },{
                    title: '我是政策法规的标题啊！',
                    date: '2018-7-20'
                },{
                    title: '我是政策法规的标题啊！',
                    date: '2018-7-20'
                }
            ],
            resData : [],
            newsData : [],
            activeMsg : '',
            advOne : [],
            advTwo : [],
            seeHeritage : [],//看见非遗
            listenHeritage : [],//聆听非遗
            touchHeritage : [],//触摸非遗
            tasteHeritage : [],//品味非遗
            beReady : false,
        }
    },
    components: {
        CmTitle,
        CmSwiper,
        CmShortContent,
        CmNewsList,
        CmThumbnail,
        StVideoContent,
        StComment
    },
    created() {
        this.$get('/specialPlanningSearch').then(res => {
            console.log(res)
            this.resData = res.data;
            this.changeListByType();
            this.beReady = true;
        })
        this.$get('/SpecPlanHeadSearch ').then(res => {
            console.log(res)
            this.newsData = res.data;
            this.advOne = this.changeArr(1,0,4,this.newsData[0].SpecPlanHeadOne);
            console.log(this.advOne)
            this.advTwo = this.changeArr(1,0,4,this.newsData[1].SpecPlanHeadTwo);
        })
        this.$get('/getBanner').then(res => {
            console.log(res);
            this.baseData = this.changeArr(0,0,5,res.data);
        })
    },
    methods : {
        //根据格式处理数组方法
      changeArr: function (del, from, to, newArr) {
        var arr = [];
        //去掉删除的
        to += del;
        //test
        if (to > newArr.length) {
          to = newArr.length;
        }
        from += del;
        if (from > newArr.length) {
          return arr;
        }
        //取值
        for (var i = from; i < to; i++) {
          arr.push(newArr[i]);
        }
        return arr;
        console.log(arr);
      },
      toUrlFn: function (url) {
        window.open(url);
      },
      //根据类别处理数组
      changeListByType: function () {
          let resData = this.resData;
          //活动讯息
          this.activeMsg = this.changeArr(1,0,3,resData['1005']);
          //看见非遗
          this.seeHeritage = this.changeArr(2,0,10,resData['1006']);
          //聆听非遗
          this.listenHeritage = this.changeArr(4,0,8,resData['1007']);
          //触摸非遗
          this.touchHeritage = this.changeArr(4,0,6,resData['1008']);
          //品味非遗
          this.tasteHeritage = this.changeArr(2,0,10,resData['1009']);
          console.log(this.tasteHeritage)
      },
      //跳文章详情
      toDetail: function (obj) {
        this.$router.push({
          query: {
            oneTitleId: obj.oneTitleId,
            twoTitleId: obj.twoTitleId,
            id: obj.id
          },
          params: {
            id: obj.id
          },
          name: 'Details',
        });
      }
    }
}
</script>

<style lang="scss" scoped>
.special-scheme{
    .top-new-box{
        width : 810px;
        margin : 0 auto;
    }
    .swiper-line{
        margin: 64px 0 63px 0;
        .swiper-list{
            width: 470px;
        }
        >div{
            width:474px;
            margin: 0 15px 0 40px;
            .short-content{
                padding-bottom: 24px;
                border-bottom: 1px solid $color-border-input;
                margin-bottom: 19px;
            }
        }
    }
    .cm-news-list{
        width : 472px;
        line-height : 34px;
        height : 34px;
        i {
            width: 6px;
            height: 6px;
            border-radius: 100%;
            background: $font-hot;
            margin: 15px 8px 0 0; 
        }
        h3 {
            vertical-align: top;
            max-width: 80%;
            @include nowrap-ellipsis;
        }
    }
    // 看见非遗
    .see-heritage{
        width : 100%;
        height : 250px;
        padding-bottom : 30px;
        .see-heritage-box{
            height :100%;
        }
        >div{
            margin-top: 20px;
            .video-line{
                width: 47.5%;
                .short-content{
                    width: 220px;
                }
            }
            .news-line{
                width: 47.5%;
            }
        }
    }
    // 聆听非遗
    .linsten-heritage{
        width : 100%;
        height : 304px;
        margin: 45px 0 57px 0;
        padding-bottom : 40px;
        .linsten-heritage-box{
            height : 100%;
        }
        .video-line{
            width : 47.5%;
            height : 136px;
            margin-bottom : 16px;
        }
        .top{
            margin-top: 22px;
        }
        >div{
            >div{
                width: 47.5%;
            }
        }
    }
    // 触摸非遗
    .touch-heritage{
        padding-bottom : 20px;
        >div{
            margin-top: 22px;
            >div{
                width: 47.5%;
            }
        }
    }
    //品味非遗
    .taste-heritage{
        height : 270px;
        .taste-heritage-box{
            height : 100%;
        }
        padding-bottom: 48px;
        border-bottom: 3px solid $font-hot;
        >div{
            margin-top: 22px;
            >div{
                width: 47.5%;
            }
        }
    }
    .top-new-line {
      width: 100%;
      padding-bottom : 20px;
      margin: 20px auto;
      background: #f2f6f8;
      padding-top: 30px;
      text-align: center;
      color: #0b3c6c;
      h1 {
        line-height: 30px;
        font-size: 30px;
        width: 600px;
        margin: 0 auto;
        @include nowrap-ellipsis;
      }
      p {
        line-height: 14px;
        font-size: 14px;
        margin-top: 10px;
        width: 380px;
        @include nowrap-ellipsis;
      }
      .top-new-line-left {
        margin-left: 100px;
      }
      .top-new-line-right {
        margin-right: 100px;
      }
    }
    .top-new-line-one{
        background : #f6f3ec;
    }
    .flex-box {
      @include display-flex;
      @include justify-content-space;
      @include flex-wrap-wrap;
    }
    .font-color{
      color : #4c6f95;
    }
    .flex-direction{
      @include display-flex;
      // @include justify-content-space;
      @include flex-wrap-wrap;
      @include flex-direction;
    }

}
</style>