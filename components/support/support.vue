<template>
  <div class="support" v-if="show">
      <div class="support__bar">
        <icon-close class="support__close" @click="close"/>
      </div>
      <div class="support__inner">
        <div class="support__text">Выпускники для своей Академии</div>
        <div class="support__desktop">
          <NuxtLink to="/how-support/" class="support__link r-btn">Поддержать</NuxtLink>
        </div>
        <div class="support__mobile">
          <NuxtLink to="/questionary/" class="support__link support__link--sign r-btn">Вступить</NuxtLink>
          <NuxtLink to="/how-support/" class="support__link r-btn r-btn--light">Поддержать</NuxtLink>
        </div>
      </div>
  </div>
</template>

<script>
import './support.scss';
import IconClose from '@/assets/icons/x-close.svg?inline';
export default {
  name: 'Support',
  components: {
    IconClose,
  },
  data() {
    return {
      show: true,
    };
  },
  methods: {
    close() {
      this.show = false;
    },
  },
};
</script>
