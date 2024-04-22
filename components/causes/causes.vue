<template>
  <div class="causes">
    <div class="r-container">
      <div class="causes__inner">
        <picture class="causes__img box-grayscale-1" ref="animate-causes-img">
          <source srcset="/img/causes-mobile-2.png" media="(max-width: 743px)">
          <source srcset="/img/causes-tablet-2.png" media="(max-width: 1239px)">
          <img :src="'/img/causes-2.png'" alt="causes-large-img">
        </picture>
        <div class="causes__title">
          <picture class="box-grayscale-1">
            <source srcset="/img/causes-tablet-1.png" media="(max-width: 1239px)">
            <img :src="'/img/causes-1.png'" alt="causes-title-img" class="causes__title-img" ref="animate-causes-title-img">
          </picture>
          <div class="causes__title-text title title--3"><span class="italic">5</span> причин быть в клубе</div>
        </div>
        <div class="causes__list">
          <list-simple
            :col-count="3"
            :items="items"
            :type="'causes'"
          >
            <div class="list__item subscribe">
              <subscribe-round/>
            </div>
          </list-simple>
        </div>
      </div>
      <div class="causes__footer">
        <div class="causes__handwriting handwriting">Развивайся и совершенствуйся вместе с Академией</div>
      </div>
    </div>
  </div>
</template>

<script>
import './causes.scss';
export default {
  name: 'Causes',
  props: {
    items: {
      type: Array,
      default: () => [],
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
};
</script>
