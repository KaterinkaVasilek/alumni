<template>
  <div class="documents">
    <div class="documents__inner">
      <div class="documents__list">
        <div class="documents__item" v-for="(item, i) in items" :key="i">
          <a :href="item.url" target="_blank" class="documents__item-link">
            <icon-doc class="documents__item-icon"/>
            {{item.name}}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './documents.scss';

import IconDoc from '@/assets/icons/doc.svg?inline';
export default {
  name: 'Documents',
  components: {
    IconDoc,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
