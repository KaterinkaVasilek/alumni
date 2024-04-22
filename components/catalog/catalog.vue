<script>
import './catalog.scss';
import CardSimple6 from '../card/simple-6/simple-6.vue';

export default {
  name: 'Catalog',
  props: {
    imgGrayscale: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      default: () => [],
    },
    showMoreButtonCb: {
      type: Function,
      default: () => {}
    },
    src: {
      type: String,
    },
    page: {
      type: Object,
    },
    currentPage: {
      type: Number
    },
    cardsOnRow: {
      type: Object,
      default() {
        return {
          mobile: 1,
          tablet: 2,
          desktop: 3,
        }
      }
    },
    isLoading: {
      type: Boolean,
    }
  },
  computed: {
    cardOnPageMobile() {
      return this.cardsOnRow.mobile;
    },
    cardOnPageTablet() {
      return this.cardsOnRow.tablet;
    },
    cardOnPageDesktop() {
      return this.cardsOnRow.desktop;
    },
  },
};
</script>

<template>
  <section class="catalog">
    <div class="catalog__title">
      <h1 class="catalog__heading title">{{ title }}</h1>
      <p v-if="subtitle" class="catalog__subtitle">{{ subtitle }}</p>
    </div>
    <ul class="catalog__list">
      <li class="catalog__item article" v-for="article in items" :key="article.id">
        <CardSimple6 :data="article" :imgGrayscale="imgGrayscale" :src="src" />
      </li>
    </ul>
    <button
      class="catalog__button r-btn r-btn--light"
      type="button"
      v-if="(currentPage < page.count) || isLoading"
      @click="showMoreButtonCb"
      :disabled="isLoading"
    >
      Показать еще
    </button>
  </section>
</template>

<style lang="scss">
.catalog__list {
  grid-template-columns: v-bind('cardOnPageMobile');

  @media (min-width: 744px) {
    grid-template-columns: repeat(v-bind('cardOnPageTablet'), 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(v-bind('cardOnPageDesktop'), 1fr);
  }
}
</style>
