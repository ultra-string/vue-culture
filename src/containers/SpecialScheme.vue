<template>
    <div class="special-scheme">
        <!-- 图片广告 -->
        <div class="top-new-line clearfix">
            <h1 v-if="advOne && advOne[0]" class="hand-point" @click="toUrlFn(advOne[0].url)">{{advOne[0].name}}</h1>
            <div class="flex-box top-new-box">
                <p class="hand-point" v-if="advOne && advOne.length" v-for="(item , index) in advOne" :key="index" @click="toUrlFn(item.url)">{{item.name}}</p>
            </div>
        </div>
        <!-- 图片广告2 -->
        <div class="top-new-line clearfix">
            <h1 v-if="advOne && advOne[0]" class="hand-point" @click="toUrlFn(advOne[0].url)">{{advOne[0].name}}</h1>
            <div class="flex-box top-new-box">
                <p class="hand-point" v-if="advOne && advOne.length" v-for="(item , index) in advOne" :key="index" @click="toUrlFn(item.url)">{{item.name}}</p>
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
                <cm-short-content class="fr list short-content" v-if="resData['活动讯息'] && resData['活动讯息'].length" :msg="resData['活动讯息']['0']"></cm-short-content>
                <cm-news-list
                :newsList="activeMsg"
                :hasHotPoint="true"
                ></cm-news-list>
            </div>
        </div>
        <!-- 看见非遗 -->
        <div class="see-heritage">
            <cm-title 
            title="看见非遗"
            ></cm-title>
            <div class="clearfix">
                <div class="video-line fl">
                    <!-- 左上 -->
                    <div class="clearfix">
                        <cm-thumbnail
                        class="fl"
                        :width="230"
                        :height="135"
                        title="匠人故事"
                        :isTitle="true"
                        ></cm-thumbnail>
                        <cm-short-content
                        class="short-content fr"
                        ></cm-short-content>
                    </div>
                    <!-- 左下 -->
                    <div>
                        <cm-news-list
                        :newsList="newsList"
                        :hasHotPoint="true"
                        ></cm-news-list>
                    </div>
                </div>
                <div class="news-line fr">
                    <cm-news-list
                    :newsList="newsList"
                    :hasHotPoint="true"
                    ></cm-news-list>
                </div>
            </div>
        </div>
        <!-- 聆听非遗 -->
        <div class="linsten-heritage">
            <cm-title 
            title="聆听非遗"
            ></cm-title>
            <div class="top clearfix">
                <div class="fl">
                    <cm-news-list
                    :newsList="newsList"
                    :hasHotPoint="true"
                    ></cm-news-list>
                </div>
                <div  class="fr">
                    <st-video-content></st-video-content>
                    <st-video-content></st-video-content>
                </div>
            </div>
        </div>
        <!-- 触摸非遗 -->
        <div class="touch-heritage">
            <cm-title 
            title="触摸非遗"
            ></cm-title>
            <div class="clearfix">
                <div class="fl">
                    <st-video-content></st-video-content>
                    <cm-news-list
                    :newsList="newsList"
                    :hasHotPoint="true"
                    ></cm-news-list>
                </div>
                <div class="fr">
                    <st-video-content></st-video-content>
                    <cm-news-list
                    :newsList="newsList"
                    :hasHotPoint="true"
                    ></cm-news-list>
                </div>
            </div>
        </div>
        <!-- 品味非遗 -->
        <div class="taste-heritage">
            <cm-title 
            title="品味非遗"
            ></cm-title>
            <div class="clearfix">
                <div class="fl">
                    <st-video-content></st-video-content>
                    <cm-news-list
                    :newsList="newsList"
                    :hasHotPoint="true"
                    ></cm-news-list>
                </div>
                <div class="fr">
                    <cm-news-list
                    :newsList="newsList"
                    :hasHotPoint="true"
                    ></cm-news-list>
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
        })
        this.$get('/SpecPlanHeadSearch ').then(res => {
            console.log(res)
            this.newsData = res.data;
            this.advOne = this.changeArr(1,0,3,this.newsData[0]['专题策划头条一组']);
            this.advTwo = this.changeArr(1,0,3,this.newsData[1]['专题策划头条二组']);
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
          //活动讯息
          this.activeMsg = this.changeArr(1,0,3,this.resData['活动讯息']);
          console.log(this.activeMsg)
      },
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
    // 看见非遗
    .see-heritage{
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
        margin: 45px 0 57px 0;
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
        >div{
            margin-top: 22px;
            >div{
                width: 47.5%;
            }
        }
    }
    //品味非遗
    .taste-heritage{
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
    .flex-box {
      @include display-flex;
      @include justify-content-space;
      @include flex-wrap-wrap;
    }

}
</style>