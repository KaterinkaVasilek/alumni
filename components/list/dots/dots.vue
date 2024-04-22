<template>
  <ul class="list list--dots">
    <li class="list__item" v-for="(el,i) in items" :key="i" v-html="el"></li>
  </ul>
</template>

<script>
import './dots.scss';
export default {
  name: 'ListDots',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
