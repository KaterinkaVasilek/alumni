<script>
import './article-card.scss';
export default {
  name: 'ArticleCard',
  props: {
    imgGrayscale: {
      type: Boolean,
      default: true,
    },
    imageSrc: {
      type: String
    },
    imageTablet: {
      type: String
    },
    imageDesktop: {
      type: String
    },
    imageAlt: {
      type: String,
      default: 'Промо новости'
    },
    publishDate: {
      type: String,
    },
    vkSrc: {
      type: String,
    },
    telegramSrc: {
      type: String
    },
    format: {
      type: String,
    },
    isEvent: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<template>
  <div class="article-page__card article-card" :class="{'article-card--event': isEvent}">
    <picture class="article-card__image">
      <source media="(min-width: 1240px)" :srcset="imageDesktop" width="1240" height="560">
      <source media="(min-width: 744px)" :srcset="imageTablet" width="696" height="400">
      <img class="article-card__image" :class="{'no-grayscale': !imgGrayscale}" :src="imageSrc ? imageSrc : '/img/default-picture.png'" width="343" height="260" :alt="imageAlt"/>
    </picture>
    <div class="article-card__info">
      <div v-if="isEvent" class="article-card__publish">
        <p>Дата и время</p>
        <p class="article-card__date">{{ $moment(publishDate, 'DD.MM.YYYY HH:mm').format('D MMMM [в] HH:mm') }}</p>
      </div>
      <div v-else class="article-card__publish">
        <p>Публикация</p>
        <p class="article-card__date">{{ $moment(publishDate, 'DD.MM.YYYY').format('D MMMM YYYY') }}</p>
      </div>
      <div v-if="isEvent" class="article-card__format">
        <p>Формат</p>
        <p class="article-card__date">{{ format === 'ONLINE' ? 'Онлайн' : 'Офлайн' }}</p>
      </div>
      <SocialList
        class="article-card__list"
        :vkSrc="vkSrc"
        :telegramSrc="telegramSrc"
      />
    </div>
  </div>
</template>
