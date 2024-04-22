<template>
  <div ref="question" class="card card--accordion card--question" :class="{'open': show }">
    <div class="card__outer" @click="show = !show">
      <div class="card__title">{{data.question}}</div>
      <icon-arrow-bottom class="card__opener"/>
    </div>
    <div class="card__inner" :class="{'open': show }">
      <div class="card__content" v-html="data.answer"></div>
    </div>
  </div>
</template>

<script>
import './question.scss';

import IconArrowBottom from '@/assets/icons/arrow-bottom.svg?inline';
export default {
  name: 'CardQuestion',
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
