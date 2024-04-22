<template>
  <div class="council">
    <div class="r-container">
      <div class="council__inner">
        <div class="council__title">
          <div class="council__title-main title title--3">{{title}}</div>
          <div class="council__title-decor handwriting">{{titleDecor}}</div>
        </div>
        <div class="council__list">
          <list-simple
            :classes="'even-offset'"
            :col-count="5"
            :items="items"
            :item-type="'council'"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './council.scss';
export default {
  name: 'Council',
  props: {
    title: {
      type: String,
      default: '',
    },
    titleDecor: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
