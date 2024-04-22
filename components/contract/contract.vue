<template>
  <div class="contract">
    <div class="r-container">
      <div class="contract__inner">
        <div class="contract__title title title--3">{{title}}</div>
        <div class="contract__content" v-html="text"></div>
        <div class="contract__documents">
          <documents
            :items="docs"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './contract.scss';
export default {
  name: 'Contract',
  props: {
    title: {
      type: String,
      default: '',
    },
    docs: {
      type: Array,
      default: () => [],
    },
    text: {
      type: String,
      default: '',
    },
  },
};
</script>
