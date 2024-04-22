<template>
  <div class="honorary" :class="classes">
    <div class="r-container">
      <div class="honorary__inner">
        <div class="honorary__title title title--3" v-html="title"></div>
        <div class="honorary__slider">
          <div class="swiper">
            <div class="swiper-wrapper">
              <div v-for="(item, i) in items" :key="i" class="swiper-slide" :class="`slide--${i}`">
                <div class="slider-content">
                  <div class="honorary__slide">
                    <picture class="honorary__slide-img box-grayscale-1">
                      <source :srcset="item.photoPhone" media="(max-width: 743px)"/>
                      <source :srcset="item.photoTablet" media="(max-width: 1239px)"/>
                      <img :src="item.photoDesktop" alt="honorary-img">
                    </picture>
                    <div class="honorary__slide-name" v-html="`${item.surname}<br/>${item.names}`"></div>
                    <div class="honorary__slide-post">{{item.position}}</div>
                    <div class="honorary__slide-year">{{`Год выпуска: ${item.year}`}}</div>
                  </div>
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
      </div>
    </div>
  </div>
</template>

<script>
import './honorary.scss';
import 'swiper/swiper-bundle.min.css';

import { Swiper, Navigation, Pagination, Autoplay } from 'swiper';

import IconArrowRound from '@/assets/icons/arrow-round.svg?inline';
import IconDecor from '@/assets/icons/decor-1.svg?inline';
export default {
  name: 'Honorary',
  components: {
    IconArrowRound,
    IconDecor,
  },
  props: {
    classes: {
      type: String,
      default: '',
    },
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
}
</script>
