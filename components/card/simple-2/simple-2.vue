<template>
  <div class="card card--simple-2">
    <NuxtLink :to="data?.url" class="card__img">
      <picture>
        <img :src="data?.src ? data.src : '/img/default-picture-medium.png'" alt="card-img">
      </picture>
    </NuxtLink>
    <div class="card__date">{{showDate()}}</div>
    <div class="card__name card__name--simple-2">
      <NuxtLink :to="data?.url" class="card__name-link" v-html="data?.name"></NuxtLink>
    </div>
    <div class="card__description" >{{data?.description ?? ''}}</div>
  </div>
</template>

<script>
import '../card.scss';
  export default {
    name: 'CardSimple2',
    props: {
      data: {
        type: Object,
        default: () => {},
      },
    },
    methods: {
      showDate() {
        let result = '';
        const arr = this.data?.date ?  this.data?.date.split(' ') : [];

        if(arr.length === 2) {
          result = this.$moment(this.data.date, 'DD.MM.YYYY HH:mm').format('DD MMMM YYYY')
        } else if (arr.length === 1) {
          result = this.$moment(this.data.date, 'DD.MM.YYYY').format('DD MMMM YYYY')
        }
        return result;
      },
    },
  }
</script>
