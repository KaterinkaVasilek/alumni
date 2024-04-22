<template>
  <div class="banner banner--detail">
    <div class="r-container">
      <div class="banner__inner">
        <div class="banner__images">
          <picture class="banner__img-small box-grayscale-1" ref="animate-banner-img-small">
            <source :srcset="imgSmall.mobile" media="(max-width: 767px)"/>
            <source :srcset="imgSmall.tablet" media="(max-width: 1440px)"/>
            <img :src="imgSmall.default" alt="detail-img-small">
            <IconStar class="banner__img-small-icon"/>
          </picture>
          <picture class="banner__img-large box-grayscale-1" ref="animate-banner-img-large">
            <source :srcset="imgLarge.mobile" media="(max-width: 767px)"/>
            <source :srcset="imgLarge.tablet" media="(max-width: 1440px)"/>
            <img :src="imgLarge.default" alt="detail-img-large">
          </picture>
        </div>
        <div class="banner__box">
          <div class="banner__content">
            <div class="banner__title title title--3">{{title}}</div>
            <div class="banner__text" v-html="text"></div>
          </div>
          <div class="banner__footer">
            <a href="/club.pdf" class="r-btn r-btn--light" target="_blank">Положение Клуба</a>
          </div>
          <div class="banner__sign handwriting">{{sign}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './detail.scss';
import IconStar from '@/assets/icons/star.svg?inline';
export default {
  name: 'BannerDetail',
  components: {
    IconStar,
  },
  props: {
    imgSmall: {
      type: Object,
      default: () => {},
    },
    imgLarge: {
      type: Object,
      default: () => {},
    },
    title: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    sign: {
      type: String,
      default: '',
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
