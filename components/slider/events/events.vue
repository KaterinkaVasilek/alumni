<template>
  <div class="events events--slider">
    <div class="r-container">
      <div class="events__inner">
        <div class="events__title title title--3" v-html="title"></div>
        <div class="events__slider">
          <div class="swiper">
            <div class="swiper-wrapper">
              <template v-for="(item, i) in items">
                <div :key="i" class="swiper-slide" :class="`slide--${i}`">
                  <div class="slider-content">
                    <card-simple :data="{
                      alt: item.previewPictureDescription,
                      src: item.previewPicture,
                      date: formatDate(item.datePublishedHuman) || '',
                      name: item.name,
                      url: `/events/${item.code}`,
                    }"/>
                  </div>
                </div>
              </template>
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
        <div class="events__footer">
          <NuxtLink to="/events/" class="r-btn r-btn--light">Все мероприятия</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './events.scss';
import 'swiper/swiper-bundle.min.css';

import { Swiper, Navigation, Pagination, Autoplay } from 'swiper';

import IconArrowRound from '@/assets/icons/arrow-round.svg?inline';
export default {
  name: 'SliderEvents',
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
