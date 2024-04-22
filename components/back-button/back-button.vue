<script>
import './back-button.scss';
import IconArrowLeft from '@/assets/icons/arrow-left.svg?inline';

export default {
  name: 'BackButton',
  components: {
    IconArrowLeft
  },
  methods: {
    onBackButtonClick() {
      history.back();
    }
  }
}
</script>

<template>
  <div class="back-button">
    <button class="back-button__link" type="button" @click="onBackButtonClick">
      <IconArrowLeft class="back-button__icon" />
      <p>Назад</p>
    </button>
  </div>
</template>
