<script>
import './social-list.scss';
import IconVK from '@/static/img/vk.svg?inline';
import IconTelegram from '@/static/img/telegram.svg?inline';
import IconLink from '@/static/img/link.svg?inline';
import IconCheckMark from '@/assets/icons/checkmark.svg?inline';

export default {
  name: 'SocialList',
  props: {
    telegramSrc: String,
    vkSrc: String
  },
  components: {
    IconVK,
    IconTelegram,
    IconLink,
    IconCheckMark
  },
  data() {
    return {
      isCopySuccess: false,
    }
  },
  methods: {
    onCopyLinkButtonClick() {
      navigator.clipboard.writeText(window.location.href);
      this.isCopySuccess = true;
      setTimeout(() => {
        this.isCopySuccess = false;
      }, 2000)
    }
  }
}
</script>

<template>
  <ul class="social-list">
    <li>
      <button class="social-list__link" @click.prevent="onCopyLinkButtonClick">
        <TransitionGroup name="clipboard">
          <IconLink v-show="!this.isCopySuccess" class="social-list__icon" key="1"/>
          <IconCheckMark v-show="this.isCopySuccess" class="social-list__icon" key="2"/>
        </TransitionGroup>
      </button>
    </li>
    <li>
      <a class="social-list__link" :href="telegramSrc" target="_blank">
        <IconTelegram class="social-list__icon" />
      </a>
    </li>
    <li>
      <a class="social-list__link" :href="vkSrc" target="_blank">
        <IconVK class="social-list__icon" />
      </a>
    </li>
  </ul>
</template>
