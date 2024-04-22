<template>
  <div class="card card--accordion" :class="{'open': show }">
    <div class="card__outer" @click="show = !show">
      <div class="card__title">{{data?.title || ''}}</div>
      <icon-arrow-bottom class="card__opener"/>
    </div>
    <div class="card__inner" v-if="show">
      <div class="card__content">{{data?.content || ''}}</div>
      <slot name="footer"/>
    </div>
  </div>
</template>

<script>
import './accordion.scss';

import IconArrowBottom from '@/assets/icons/arrow-bottom.svg?inline';
export default {
  name: 'CardAccordion',
  components: {
    IconArrowBottom,
  },
  data() {
    return {
      show: false,
    };
  },
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
