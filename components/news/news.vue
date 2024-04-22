<template>
  <div class="news">
    <div class="r-container">
      <div class="news__inner">
        <div class="news__title title title--3 title--center">{{title}}</div>
        <div class="news__list">
          <list-simple
            :col-count="3"
            :item-type="'news'"
            :items="items"
          />
        </div>
        <div class="news__footer">
          <NuxtLink to="/news/" class="r-btn r-btn--light">Все новости</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './news.scss';
export default {
  name: 'News',
  props: {
    title: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
