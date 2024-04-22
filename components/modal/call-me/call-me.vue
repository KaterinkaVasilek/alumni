<template>
  <modal
    name="modal-call-me"
    class="modal modal-box-hiddener"
    transition=""
    :adaptive="true"
    width="92%"
    :max-width="768"
    height="auto"
    @before-open="onOpenModal"
    @before-close="onCloseModal"
  >
    <div class="modal__content modal__content--default">
      <icon-cross
        class="modal__close modal__close--zero"
        @click="$modal.hide('modal-call-me')"
      />
      <div class="modal__title-default title title--center title--5">Оставьте ваши контакты</div>
      <div class="modal__description-default">И мы свяжемся с вами в ближайшее время
      </div>
      <div class="modal__form">
        <form-call-me/>
      </div>
    </div>
  </modal>
</template>

<script>
import '../modal.scss';

import IconCross from '@/assets/icons/cross.svg?inline';
export default {
  name: 'CallMe',
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
