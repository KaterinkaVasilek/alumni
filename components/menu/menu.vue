<template>
  <div class="menu" :class="classes">
    <div class="menu__inner">
      <div class="menu__item" v-for="(item, index) in items" :key="index">
        <div class="menu__item-inner">
            <NuxtLink :to="item.href" @click.native="clickMobileLink(item.href)" v-if="isTablet">{{item.name}}</NuxtLink>
            <NuxtLink :to="item.href" v-else>{{item.name}}</NuxtLink>
            <icon-arrow class="menu__item-icon" v-if="item.items?.length" @click="clickMobileOpener(`dropdown-menu-${index}`)"/>
        </div>
        <template v-if="item.items?.length">
          <div class="menu__dropdown" :ref="`dropdown-menu-${index}`" :class="item?.show ? 'show': ''">
            <div class="menu__dropdown-inner">
              <div class="menu__dropdown-item" v-for="(el, index) in item.items" :key="index">
                  <button
                    class="menu__dropdown-item-link"
                    type="button"
                    @click="itemClickHandler(item.href, el.id)"
                  >
                    {{el.name}}
                  </button>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import './menu.scss';
import IconArrow from "~/assets/icons/arrow.svg?inline";
export default {
  name: 'Menu',
  components: {
    IconArrow,
  },
  data() {
    return {
      width: 1442,
    };
  },
  computed: {
    isTablet() {
      let result = false;
      if (process.browser) result = window.innerWidth <= this.width;
      return result;
    },
  },
  props: {
    classes: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
  emits: ['toggleBurger'],
  methods: {
    itemClickHandler(href, id) {
      if (process.browser) {
        if (href === location.pathname) {
          this.$scrollToView(document.getElementById(`${id}`));
        }
        this.$router.push(`${href}?anchor=${id}`);
        this.$emit('toggleBurger', false);
      }
    },
    clickMobileOpener(refName) {
      if(this.isTablet) {
        this.$refs[refName][0].classList.contains('opened')
          ? this.$refs[refName][0].classList.remove('opened')
          : this.$refs[refName][0].classList.add('opened');
      }
    },
    clickMobileLink(href) {
      if(this.isTablet) {
        this.$router.push(href);
        this.$emit('toggleBurger', false);
      }
    },
  },
}
</script>
