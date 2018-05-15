<template>
  <section class="swiper-list">
    <section class="swiper-container BCindex_container">
      <section class="swiper-wrapper">
        <section v-for="(item,key) in baseData" :key="key" class="swiper-slide">
          <a :href="item.link"><img :style="{height: height+'px'}" :src="item.IMG_URL"></a>
        </section>
      </section>
      <section v-if="showPagination" class="swiper-pagination BCindex_page"></section>
    </section>
  </section>
</template>

<script>
import Swiper from './../../static/swiper.min.js';
require('./../../static/swiper.min.css');

export default {
  name: 'ListSwiper',
  props: {
    baseData: Array,
    showPagination: {
        type: Boolean,
        default: true
    },
    height: {
        type: Number,
        default: 300
    }
  },
  data() {
    return {
      swiper: Object
    }
  },
  computed: {
  },
  mounted() {
    this.swiper = new Swiper('.BCindex_container', {
      pagination: '.BCindex_page',
      // loop: true,
      autoplay: 3000,
      observer: true,
      observeParents: true
    });
  }
}
</script>

<style>
.BCindex_container .swiper-list {
  width: 100%;
  height: 100%;
}

.BCindex_container .swiper-slide img {
  width: 100%;
}

.BCindex_container {
  width: 100%;
  height: 100%;
}

.BCindex_container .swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
/* .BCindex_container .BCindex_page{
    position: absolute;
    bottom: 0;
    right:0;
} */
.BCindex_container .swiper-pagination-bullet{
    width: 14px;
    height: 14px;
    border-radius: 100%;
}
.BCindex_container .swiper-pagination-bullet-active {
    background-color: rgb(178,47,36); 
}
</style>
