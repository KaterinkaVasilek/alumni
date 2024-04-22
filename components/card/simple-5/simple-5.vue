<template>
  <div class="card card--simple-5">
    <div class="card__title">{{data?.title ?? ''}}</div>
    <div class="card__description">{{data?.text ?? ''}}</div>
  </div>
</template>

<script>
import '../card.scss';
import './simple-5.scss';

import IconPhone from '@/assets/icons/phone.svg?inline';
import IconMail from '@/assets/icons/email.svg?inline';

export default {
  name: 'CardSimple5',
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
