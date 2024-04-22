<script>
import '../modal.scss';

import modalClose from '@/assets/icons/modal-close.svg?inline';

export default {
  name: 'ModalSuccess',
  components: {
    modalClose,
  },
  props: {
    name: {
      type: String,
      default: 'modal-success',
    },
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
      this.$router.push('/');
    }
  }
}
</script>

<template>
  <modal
    :name="name"
    class="modal modal--success modal-box-hiddener"
    :adaptive="true"
    width="92%"
    :max-width="512"
    transition=""
    height="auto"
    @before-open="onOpenModal"
    @before-close="onCloseModal"
  >
    <div class="modal__content">
      <modal-close
        class="modal__close"
        @click="$modal.hide(name)"
      />
      <h2 class="modal__title"><slot name="title"></slot></h2>
      <div class="modal__description">
        <slot name="text"></slot>
      </div>
    </div>
  </modal>
</template>
