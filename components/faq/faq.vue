<template>
  <div class="faq">
    <div class="r-container">
      <div class="faq__inner">
        <div class="faq__title title title--3 title--center">{{title}}</div>
        <div class="faq__list">
          <list-simple
            :col-count="2"
            :item-type="'question'"
            :items="items"
            :classes="'item-mb-none accordions'"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './faq.scss';
export default {
  name: 'Faq',
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
