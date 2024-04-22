<template>
  <div class="card card--simple">
    <NuxtLink :to="data.url" class="card__img">
      <picture>
        <img :src="data?.src ? data.src : '/img/default-picture.png'" :alt="data.alt || 'card-img'">
      </picture>
    </NuxtLink>
    <div class="card__date">{{data?.date ? $moment(data.date, 'MM-DD-YYYY').format('DD MMMM YYYY') : ''}}</div>
    <div class="card__name line-clamp-3">
      <NuxtLink :to="data.url" class="card__img" v-html="data.name"></NuxtLink>
    </div>
  </div>
</template>

<script>
import '../card.scss';
  export default {
    name: 'CardSimple',
    props: {
      data: {
        type: Object,
        default: () => {},
      },
    },
  }
</script>
