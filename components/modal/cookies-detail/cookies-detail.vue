<template>
  <modal
    name="modal-cookies-detail"
    class="modal modal--scrollable modal-box-hiddener"
    transition=""
    width="92%"
    :adaptive="true"
    :max-width="768"
    :height="'auto'"
    :scrollable="true"
    @before-open="onOpenModal"
    @before-close="onCloseModal"
  >
    <div class="modal__content modal__content--default">
      <icon-cross
        class="modal__close modal__close--zero"
        @click="$modal.hide('modal-cookies-detail')"
      />
      <div class="modal__title-default modal__title-default--offset title title--center title--6">Обработка данных пользователей</div>
      <div class="modal__description-default modal__description-default--offset-mb-0 modal__description-default--text-left">
        «Клуб благодарных выпускников «55 Параллель» использует Яндекс.Метрику. Этот сайт использует сервис веб-аналитики Яндекс Метрика, предоставляемый компанией ООО «ЯНДЕКС», 119021, Россия, Москва, ул. Л. Толстого, 16 (далее — Яндекс).
        <br/><br/>
        Сервис Яндекс Метрика использует технологию «cookie» — небольшие текстовые файлы, размещаемые на компьютере пользователей с целью анализа их пользовательской активности.
        <br/><br/>
        Собранная при помощи cookie информация не может идентифицировать вас, однако может помочь нам улучшить работу нашего сайта. Информация об использовании вами данного сайта, собранная при помощи cookie, будет передаваться Яндексу и храниться на сервере Яндекса в ЕС и Российской Федерации. Яндекс будет обрабатывать эту информацию для оценки использования вами сайта, составления для нас отчетов о деятельности нашего сайта, и предоставления других услуг. Яндекс обрабатывает эту информацию в порядке, установленном в условиях использования сервиса Яндекс Метрика.
        <br/><br/>
        Вы можете отказаться от использования cookies, выбрав соответствующие настройки в браузере. Также вы можете использовать инструмент — <a target="_blank" class="link-red" href="https://yandex.ru/support/metrika/general/opt-out.html">https://yandex.ru/support/metrika/general/opt-out.html</a>. Однако это может повлиять на работу некоторых функций сайта. Используя этот сайт, вы соглашаетесь на обработку данных о вас Яндексом в порядке и целях, указанных выше».
      </div>
    </div>
  </modal>
</template>

<script>
import '../modal.scss';

import IconCross from '@/assets/icons/cross.svg?inline';
export default {
  name: 'CookiesDetail',
  components: {
    IconCross,
  },
  methods: {
    onOpenModal() {
      document.body.style.top = `-${window.scrollY}px`;
      document.body.classList.add('scroll-lock');
    },
    onCloseModal() {
      const scrollY = document.body.style.top;
      document.body.style.top = '';
      document.body.classList.remove('scroll-lock');
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    }
  }
};
</script>
