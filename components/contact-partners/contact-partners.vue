<template>
  <div class="contact-partners">
    <div class="contact-partners__decor">
      <icon-decor />
    </div>
    <div class="r-container">
      <div class="contact-partners__inner">
        <div class="contact-partners__left">
          <div class="contact-partners__title">Контакт для <span class="italic">корпоративных</span> партнеров</div>
          <div class="contact-partners__action">
            <a :href="data?.presentation || ''" target="_blank" class="contact-partners__btn contact-partners__presentation r-btn r-btn--light">Скачать презентацию</a>
          </div>
        </div>
        <div class="contact-partners__right">
          <card-simple7
            :data="{
              src: '/img/team-1.png',
              name: 'Начинкина Юлия Сергеевна',
              post: data?.post || '',
              phone: data?.phone?.text || '',
              phoneLink: data?.phone?.link || '',
              mail: data?.email?.text || '',
              mailLink: data?.email?.link || '',
            }"
          />
          <div class="contact-partners__action-mobile">
            <a :href="data?.presentation || ''" target="_blank" class="contact-partners__btn contact-partners__presentation r-btn r-btn--light">Скачать презентацию</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './contact-partners.scss';

import IconDecor from "@/assets/icons/decor-2.svg?inline";
export default {
  name: 'ContactPartners',
  components: {
    IconDecor,
  },
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
