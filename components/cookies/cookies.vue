<template>
  <div class="cookies" v-if="show">
    <div class="r-container">
      <div class="cookies__bar">
        <icon-close class="cookies__close" @click="close"/>
      </div>
      <div class="cookies__inner">
        <div class="cookies__text">
          Этот веб-сайт использует куки, чтобы улучшить ваш пользовательский опыт. Продолжая использовать его, вы соглашаетесь на обработку
          <a class="link-red underline" href="https://www.ranepa.ru/images/docs/svedeniya_ooo/Politika_personal_dannih_02.02.2017.pdf" target="_blank">персональных данных</a>.
        </div>
        <div class="cookies__actions">
          <div class="cookies__action">
            <button type="button" class="r-btn r-btn--light cookies__action-detail" @click="$modal.show('modal-cookies-detail')">Подробнее</button>
          </div>
          <div class="cookies__action">
            <button type="button" class="r-btn cookies__action-ok" @click="close">Принимаю</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './cookies.scss';
import IconClose from '@/assets/icons/x-close.svg?inline';
export default {
  name: 'Cookies',
  components: {
    IconClose,
  },
  data() {
    return {
      show: false,
    };
  },
  watch: {
    show(val) {
      if(!val) document.querySelector('body').classList.remove('cookies-block-show');
    },
  },
  mounted() {
    if(process.browser) {
      this.updStorageCookies();
      if (!localStorage.getItem('cookies')) {
        localStorage.setItem('cookies', 'true');
        this.show = true;
      }
      this.initBody();
    }
  },
  methods: {
    initBody() {
      if(this.show) {
        document.querySelector('body').classList.add('cookies-block-show');
      } else {
        document.querySelector('body').classList.remove('cookies-block-show');
      }
    },
    updStorageCookies() {
      const val = localStorage.getItem('cookies');
      if(val) this.show = val === 'true' || false;
    },
    close() {
      this.show = false;
      localStorage.setItem('cookies', 'false');
    },
  },
};
</script>
