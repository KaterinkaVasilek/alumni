<script>
import IconPlay from '@/assets/icons/play.svg?inline';
import './article-player.scss'

export default {
  name: 'ArticlePlayer',
  components: {
    IconPlay,
  },
  props: {
    classes: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isPlay: false,
    }
  },
  methods: {
    onPlayButtonClick() {
      this.isPlay = true;
      this.doPlay()
    },
    doCommand(CommandJSON) {
      const player = document.getElementById('my-player');
      player.contentWindow.postMessage(JSON.stringify(CommandJSON), '*');
    },
    doPlay() {
      this.doCommand({type:'player:play',data:{}});
      this.doCommand({type:'player:unMute',data:{}});
    },
  },
}
</script>

<template>
  <div class="video-player" :class="classes">
    <div class="video">
      <icon-play v-if="!this.isPlay" class="video__button" @click="onPlayButtonClick" />
      <img  v-if="!this.isPlay" src="https://pic.rutubelist.ru/video/a0/14/a014130b97f4182b143ecf6890a684a3.jpg" width="100%" height="100%">
      <iframe
        title="video"
        id="my-player"
        :class="{'video__frame--play': this.isPlay}"
        class="video__iframe"
        src="https://rutube.ru/play/embed/750adccfa88cec4cb546647cfe2f2c91?rel=0&amp;enablejsapi=1&amp;origin=https://www.ranepa.ru"
        allow="accelerometer; autoplay; picture-in-picture"
        allowfullscreen=""
      >
      </iframe>
    </div>
    <p class="video__label">Название видео</p>
  </div>
</template>
