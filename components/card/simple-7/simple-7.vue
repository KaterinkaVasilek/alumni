<template>
  <div class="card card--simple-7">
    <div class="card__bar">
      <div class="card__img">
        <picture>
          <img :src="data?.src ? data.src : ''" alt="card-img">
        </picture>
      </div>
      <div class="card__content">
        <div class="card__name">{{data?.name ?? ''}}</div>
        <div class="card__description">{{data?.post ?? ''}}</div>
      </div>
    </div>
    <div class="card__data card__data--phone">
      <IconPhone class="card__icon" />
      <a :href="`tel:${data?.phoneLink || data?.phone || ''}`">{{data?.phone || ''}}</a>
    </div>
    <div class="card__data card__data--mail">
      <IconMail class="card__icon" />
      <a :href="`mailto:${data?.mailLink || data?.mail || ''}`">{{data?.mail || ''}}</a>
    </div>
  </div>
</template>

<script>
import '../card.scss';
import './simple-7.scss';

import IconPhone from '@/assets/icons/phone.svg?inline';
import IconMail from '@/assets/icons/email.svg?inline';

export default {
  name: 'CardSimple7',
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
