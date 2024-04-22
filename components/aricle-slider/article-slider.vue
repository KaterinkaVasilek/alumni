<script>
import './article-slider.scss';
import 'swiper/swiper-bundle.min.css';
import { Swiper, Navigation, Pagination, Autoplay } from 'swiper';
import IconArrowRound from '@/assets/icons/arrow-round.svg?inline';
import IconPlay from '@/assets/icons/play.svg?inline';

export default {
  name: 'ArticleSlider',
  props: {
    images: Array,
  },
  components: {
    IconArrowRound,
    IconPlay,
  },
  mounted() {
    Swiper.use([Navigation, Pagination, Autoplay]);
    const swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      slidesPerView: 1,
      modules: [Navigation, Pagination, Autoplay],
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    })
  },
}
</script>

<template>
  <div class="slider">
    <div class="swiper">
      <div class="swiper-wrapper">
        <div v-for="(item, i) in images" :key="i" class="swiper-slide" :class="`slide--${i}`">
          <div class="slider-content">
            <div class="slider__slide">
              <picture class="slider__slide-img">
                <img class="slider__slide-img" :src="item.src" alt="honorary-img">
              </picture>
            </div>
          </div>
        </div>
      </div>
      <div class="slider__footer">
        <div class="swiper-pagination"></div>
        <div class="swiper-buttons">
          <div class="swiper-button-prev">
            <icon-arrow-round/>
          </div>
          <div class="swiper-button-next">
            <icon-arrow-round/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
