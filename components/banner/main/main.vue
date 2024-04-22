<template>
  <div class="banner banner--main" :class="classes">
    <div class="banner__img-left" ref="animate-banner-img-left">
      <picture class="banner__img-left-picture box-grayscale-1">
        <source :srcset="imgLeft.mobile" media="(max-width: 743px)"/>
        <source :srcset="imgLeft.tablet" media="(max-width: 1239px)"/>
        <img :src="imgLeft.default" alt="banner-img-left"/>
      </picture>
      <icon-star class="banner__img-left-star"/>
      <icon-decor-round class="banner__img-left-round" />
    </div>
    <div class="r-container">
      <div class="banner__inner">
        <div class="title title--1 banner__title banner__title--start" v-html="titleStart"></div>
        <div class="banner__description" v-html="description"></div>
        <div class="title title--1 banner__title banner__title--end">{{titleEnd}}</div>
        <picture class="banner__img-right box-grayscale-1" ref="animate-banner-img-right">
          <source :srcset="imgRight.mobile" media="(max-width: 743px)"/>
          <source :srcset="imgRight.tablet" media="(max-width: 1239px)"/>
          <img :src="imgRight.default" alt="banner-img-left" />
        </picture>
      </div>
    </div>
  </div>
</template>

<script>
import './main.scss';

import IconStar from '@/assets/icons/star.svg?inline';
import IconDecorRound from '@/assets/icons/decor-rounds.svg?inline';
export default {
  name: 'BannerMain',
  components: {
    IconStar,
    IconDecorRound,
  },
  props: {
    titleStart: {
      type: String,
      default: '',
    },
    titleEnd: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    classes: {
      type: String,
      default: '',
    },
    imgLeft: {
      type: Object,
      default: () => {},
    },
    imgRight: {
      type: Object,
      default: () => {},
    },
  },
  mounted() {
    if(process.browser) {
      this.$updAnimate(this.$refs);
      document.addEventListener('scroll', this.updAnimate);
    }
  },
  beforeDestroy() {
    if(process.browser) document.removeEventListener('scroll', this.updAnimate);
  },
  methods: {
    updAnimate() {
      this.$updAnimate(this.$refs);
    },
  },
}
</script>
