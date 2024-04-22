<template>
  <div class="logo" v-if="src">
    <NuxtLink :to="url" class="logo__link" @click.native="click" :class="{disabledLink: 'logo__link--disabled'}">
      <img :src="src" alt="logo-img">
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    burgerShow: {
      type: Boolean,
      default: false,
    },
    disabledLink: {
      type: Boolean,
      default: false,
    },
    url: {
      type: String,
      default: 'javascript:void(0);',
    },
    src: {
      type: String,
      default: '',
    },
  },
  emits: ['toggleBurger'],
  methods: {
    click() {
      if (this.burgerShow) this.$emit('toggleBurger', false);
      this.$router.push(this.url);
    },
  },
}
</script>
