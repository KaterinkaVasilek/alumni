<template>
  <div class="article">
    <NuxtLink class="article__image-link" :to="`/${src}/${data.code}`">
      <picture>
        <img class="article__image" :class="{'no-grayscale': !imgGrayscale}" :src="data.previewPicture ? data.previewPicture : '/img/default-picture.png'" width="343" height="260" :alt="data.previewPictureDescription"/>
      </picture>
    </NuxtLink>
    <p class="article__date">{{data?.datePublishedHuman ? $moment(data.datePublishedHuman, 'DD.MM.YYYY').format('DD MMMM YYYY') : '' }}</p>
    <h2 class="article__title">
      <NuxtLink class="article__link" :to="`/${src}/${data.code}`" v-html="data.name"></NuxtLink>
    </h2>
    <p v-if="src !== 'events'" class="article__description">{{ data.previewText }}</p>
  </div>
</template>

<script>
import './simple-6.scss';
  export default {
    name: 'CardSimple6',
    props: {
      imgGrayscale: {
        type: Boolean,
        default: true,
      },
      data: {
        type: Object,
        default: () => {},
      },
      src: {
        type: String
      }
    },
    methods: {
      formatDate(date) {
        const arr = date.split('.');
        return `${arr[1]}-${arr[0]}-${arr[2]}`;
      },
    },
  }
</script>
