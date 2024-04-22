<template>
  <div class="team">
    <div class="team__img-left box-grayscale-1" ref="animate-team-img-left">
      <picture>
        <source :srcset="imgSmall.tablet" media="(max-width: 1240px)"/>
        <img :src="imgSmall.default" alt="team-img-small">
      </picture>
    </div>
    <div class="team__img-right box-grayscale-1" ref="animate-team-img-right">
      <picture>
        <source :srcset="imgLarge.tablet" media="(max-width: 1240px)"/>
        <img :src="imgLarge.default" alt="team-img-large">
        <icon-decor-rounds class="team__img-right-decor"/>
      </picture>
    </div>
    <div class="r-container">
      <div class="team__inner">
        <div class="team__title title title--3">Команда</div>
        <div class="team__list">
          <list-simple
            :items="items"
            :item-type="'team'"
            :col-count="2"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './team.scss';
import IconDecorRounds from '@/assets/icons/decor-rounds-2.svg?inline';
export default {
  name: 'Team',
  components: {
    IconDecorRounds,
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
