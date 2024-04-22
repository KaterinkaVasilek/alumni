<template>
  <div class="news news--slider">
    <div class="r-container">
      <div class="news__inner">
        <div class="news__title title title--3" v-html="title"></div>
        <div class="news__slider">
          <div class="swiper">
            <div class="swiper-wrapper">
              <div v-for="(item, i) in items" :key="i" class="swiper-slide" :class="`slide--${i}`">
                <div class="slider-content">
                  <card-simple-2 :data="{
                  alt: item.previewPictureDescription,
                  src: item.previewPicture,
                  date: item.datePublishedHuman || '',
                  name: item.name,
                  url: `/news/${item.code}`,
                  description: item.previewText,
                }"/>
                </div>
              </div>
            </div>
            <div class="swiper-footer">
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
        <div class="news__footer">
          <NuxtLink to="/news/" class="r-btn r-btn--light">Все новости</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './news.scss';
import 'swiper/swiper-bundle.min.css';

import { Swiper, Navigation, Pagination, Autoplay } from 'swiper';

import IconArrowRound from '@/assets/icons/arrow-round.svg?inline';
export default {
  name: 'SliderNews',
  components: {
    IconArrowRound,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
  mounted() {
    Swiper.use([Navigation, Pagination, Autoplay]);
    const swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      slidesPerView: 4,
      spaceBetween: 25,
      autoplay: {
        delay: 5000,
      },
      modules: [Navigation, Pagination, Autoplay],
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        600: {
          slidesPerView: 2,
        },
        767: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      },
    })
  },
  methods: {
    formatDate(date) {
      const arr = date.split('.');
      return `${arr[1]}-${arr[0]}-${arr[2]}`;
    },
  },
}
</script>
