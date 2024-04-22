<template>
  <footer class="footer">
    <div class="r-container">
      <div class="footer__inner">
        <div class="footer__logo">
          <logo
            :src="'/img/logo+.svg'"
            :url="'/'"
          />
        </div>
        <div class="footer__menu">
          <Menu :items="footer.items" :classes="'col-count-2'"/>
        </div>
        <div class="footer__contacts">
          <div class="footer__phone footer__link-w-icon">
            <icon-phone class="footer__link-icon"/>
            <a :href="`tel:${data?.phone?.link}`">{{data?.phone?.text}}</a>
          </div>
          <div class="footer__mail footer__link-w-icon">
            <icon-email class="footer__link-icon"/>
            <a :href="`mailto:${data?.email}`">{{data?.email}}</a>
          </div>
          <div class="footer__social">
            <Social
              :items="data?.social || {}"
            />
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <div class="footer__copyrights">
          © 2023 Клуб выпускников Президентской академии «55 Параллель». Все права защищены.
        </div>
        <div class="footer__policy">
          <a href="https://www.ranepa.ru/images/docs/svedeniya_ooo/Politika_personal_dannih_02.02.2017.pdf" target="_blank">Политика в отношении обработки персональных данных</a>
        </div>
        <div class="footer__fund" v-if="false">
          <a href="/" target="_blank">Фонд развития Академии</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import './footer.scss';

import IconPhone from '@/assets/icons/phone-2.svg?inline';
import IconEmail from '@/assets/icons/email.svg?inline';
export default {
  name: 'Footer',
  components: {
    IconPhone,
    IconEmail,
  },
  props: {
    footer: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      data: {},
    };
  },
  async fetch() {
    this.data = await this.$api.footer.get();
  },
}
</script>
