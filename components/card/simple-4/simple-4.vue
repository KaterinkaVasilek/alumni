<template>
  <div class="card card--simple-4">
    <div class="card__img">
      <picture>
        <img :src="data?.src ? data.src : ''" alt="card-img">
      </picture>
    </div>
    <div class="card__name card__name--simple-4">{{data?.name ?? ''}}</div>
    <div class="card__description" v-html="data?.post ?? ''"></div>
    <div class="card__data card__data--phone">
      <IconPhone class="card__icon" />
      <a :href="`tel:${data?.phone?.link || ''}`">{{data?.phone?.text || ''}}</a>
    </div>
    <div class="card__data card__data--mail">
      <IconMail class="card__icon" />
      <a :href="`mailto:${data?.mail || ''}`">{{data?.mail || ''}}</a>
    </div>
  </div>
</template>

<script>
import '../card.scss';
import './simple-4.scss';

import IconPhone from '@/assets/icons/phone.svg?inline';
import IconMail from '@/assets/icons/email.svg?inline';

export default {
  name: 'CardSimple4',
  components: {
    IconMail,
    IconPhone,
  },
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
