<template>
  <div class="card card--simple-3">
    <div class="card__img">
      <picture>
        <source :srcset="data?.src?.mobile" media="(max-width: 743px)"/>
        <source :srcset="data?.src?.tablet" media="(max-width: 1239px)"/>
        <img :src="data?.src?.default ? data.src?.default : '/img/default-picture-simple.png'" :alt="data.alt || 'img-council'">
      </picture>
    </div>
    <div class="card__name card__name--simple-3" v-html="data?.name ?? ''"></div>
    <div class="card__description" v-html="data?.post ?? ''"></div>
  </div>
</template>

<script>
import '../card.scss';
import './simple-3.scss';
  export default {
    name: 'CardSimple3',
    props: {
      data: {
        type: Object,
        default: () => {},
      },
    },
  }
</script>
