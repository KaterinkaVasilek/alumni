<template>
  <div class="mission">
    <div class="r-container">
      <div class="mission__inner">
        <div class="mission__video">
          <video
            class="mission__video-frame"
            muted
            playsinline
            autoplay
            loop
            :src="src"
          />
        </div>
        <div class="mission__content">
          <div class="title title--2 mission__title">Миссия</div>
          <div class="mission__description" v-html="description"></div>
          <div class="mission__about" v-if="showButton">
            <NuxtLink to="/about" class="r-btn r-btn--light">О клубе</NuxtLink>
          </div>
        </div>
      </div>
      <div class="mission__footer">
        <div class="handwriting mission__handwriting">{{handwriting}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import './mission.scss';
import IconPlay from '@/assets/icons/play.svg?inline';
import IconDecor from '@/assets/icons/decor-2.svg?inline';
export default {
  name: 'Mission',
  components: {
    IconPlay,
    IconDecor,
  },
  data() {
    return {
      showVideoOverlay: true,
      isFirstPlay: false,
    };
  },
  props: {
    src: {
      type: String,
      default: '',
    },
    showButton: {
      type: Boolean,
      default: true,
    },
    handwriting: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
}
</script>
