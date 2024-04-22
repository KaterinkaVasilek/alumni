<template>
  <header class="header" :class="{'fixed': isHeaderFix}">
    <div class="r-container">
      <div class="header__inner">
        <div class="header__logo">
          <Logo :src="'/img/logo.svg'" :url="'/'"/>
        </div>
        <div class="header__menu" :class="{'opened': burger.show}">
          <div class="header__menu-mobile header__menu-mobile--top">
            <div class="header__logo">
              <Logo :src="'/img/logo.svg'" :url="'/'" :burgerShow="burger.show" @toggleBurger="toggleBurger"/>
            </div>
            <button class="header__burger-close" type="button" @click="burger.show = false">
              <icon-cross />
            </button>
          </div>
          <Menu :items="header.items" @toggleBurger="toggleBurger"/>
          <div class="header__menu-mobile">
            <NuxtLink class="r-btn" to="/questionary">Вступить в Клуб</NuxtLink>
          </div>
        </div>
        <div class="header__subscribe">
          <NuxtLink class="r-btn" to="/questionary">Вступить в Клуб</NuxtLink>
        </div>
        <div class="header__burger">
          <button type="button" class="header__burger-opener" @click="burger.show = true">
            <icon-burger/>
          </button>
        </div>
        <div class="header__overlay" :class="{'opened': burger.show}"></div>
      </div>
    </div>
  </header>
</template>

<script>
import './header.scss';

import IconBurger from '@/assets/icons/burger.svg?inline';
import IconCross from '@/assets/icons/cross-3.svg?inline';
export default {
  name: 'Header',
  components: {
    IconBurger,
    IconCross,
  },
  data() {
    return {
      burger: {
        show: false,
      },
      isHeaderFix: false,
    };
  },
  props: {
    header: {
      type: Object,
      default: {},
    },
  },
  watch: {
    $route() {
      this.burger.show = false;
    },
  },
  mounted() {
    this.updHeaderFix();
    if(process.browser) document.addEventListener('scroll', this.updHeaderFix);
  },
  methods: {
    toggleBurger(bool) {
      this.burger.show = bool;
    },
    updHeaderFix() {
      if (process.browser ) {
        this.isHeaderFix = window.scrollY;
      }
    },
  },
}

</script>
