<template>
  <div class="help help--company">
    <div class="r-container">
      <div class="help__inner">
        <div class="help__box">
          <div class="help__title title title--3">Помощь компаний</div>
          <div class="help__description"v-html="descriptionText"></div>
          <div class="help__list">
            <list-dots :items="items"/>
          </div>
        </div>
        <div class="help__mobile-img" ref="animate-help-mobile-img">
          <picture>
            <img :src="src.mobile" alt="help-img">
          </picture>
        </div>
        <div class="help__joy-list">
          <list-star
            :title="'Мы будем рады'"
            :items="itemsJoy"
          />
        </div>
      </div>
    </div>
    <div class="help__img" ref="animate-help-mobile-img">
      <picture>
        <source :srcset="src.tablet" media="(max-width: 1239px)"/>
        <img :src="src.default" alt="help-img">
        <icon-rounds class="help__img-rounds"/>
      </picture>
    </div>
  </div>
</template>

<script>
import './company.scss';
import IconRounds from '@/assets/icons/decor-rounds-2.svg?inline';
export default {
  name: 'HelpCompany',
  components: {
    IconRounds,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    itemsJoy: {
      type: Array,
      default: () => [],
    },
    src: {
      type: Object,
      default: () => {},
    },
    descriptionText: {
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
    description() {
      return description
    },
    updAnimate() {
      this.$updAnimate(this.$refs);
    },
  },
};
</script>
