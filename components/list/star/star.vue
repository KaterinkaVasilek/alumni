<template>
  <div class="list list--star">
    <div class="list__title" v-if="title" v-html="title"></div>
    <ul class="list__inner">
      <li class="list__item" v-for="(el,i) in items" :key="i">
        <icon-star class="list__item-star"/>
        <div class="list__item-text" v-html="el"></div>
      </li>
    </ul>
  </div>
</template>

<script>
import './star.scss';
import IconStar from "@/assets/icons/star.svg?inline";
export default {
  name: 'ListStar',
  components: {
    IconStar,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      default: '',
    },
  },
};
</script>
