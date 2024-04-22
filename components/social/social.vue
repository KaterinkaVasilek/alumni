<template>
  <div class="social">
    <div class="social__list">
      <div class="social__item" v-for="([key, val], i) in Object.entries(items)" :key="i">
        <a :href="val" target="_blank" class="social__link">
          <icon-telegram class="social__icon" :class="`social__icon--${key}`" v-if="key === 'telegram'"/>
          <icon-v-k class="social__icon" :class="`social__icon--${key}`" v-else-if="key === 'vk'" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import './social.scss';
import IconVK from "/assets/icons/vk.svg?inline";
import IconTelegram from "/assets/icons/telegram.svg?inline";
export default {
  name: 'Social',
  props: {
    items: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    IconVK,
    IconTelegram,
  },
  methods: {
    getImg(key) {
      let result = '';

      switch (key) {
        case 'vk':
          result = '/img/vk.svg';
          break;
        case 'telegram':
          result = '/img/telegram.svg';
          break;
      }

      return result;
    },
  },
}
</script>
