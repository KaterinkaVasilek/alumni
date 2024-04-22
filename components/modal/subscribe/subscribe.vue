<template>
  <modal
    name="modal-subscribe"
    class="modal modal-box-hiddener"
    transition=""
    :adaptive="true"
    width="92%"
    :max-width="768"
    height="auto"
    @before-open="onOpenModal"
    @before-close="onCloseModal"
  >
    <div class="modal__content">
        <icon-cross
          class="modal__close"
          @click="$modal.hide('modal-subscribe')"
        />
      <div class="modal__title">Анкета</div>
      <div class="modal__description">
        Пожалуйста, заполните небольшую анкету, чтобы мы могли приглашать вас
        на мероприятия, делиться новостями, предлагать участие в проектах
        и обращаться к вам за поддержкой новых программ Академии.
      </div>
      <div class="modal__form">
        <form-subscribe/>
      </div>
    </div>
  </modal>
</template>

<script>
import '../modal.scss';

import IconCross from '@/assets/icons/cross.svg?inline';

export default {
  name: 'ModalSubscribe',
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
}
</script>
