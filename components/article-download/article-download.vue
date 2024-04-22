<template>
  <div class="article-download">
    <div class="article-download__inner">
      <div class="article-download__texts">
        <div class="article-download__title" v-html="title"></div>
        <div class="article-download__description" v-html="description"></div>
      </div>
      <div class="article-download__action">
        <a :href="link" target="_blank" class="article-download__link r-btn">Скачать</a>
      </div>
    </div>
  </div>
</template>

<script>
import './article-download.scss';
export default {
  name: 'ArticleDownload',
  props: {
    link: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
};
</script>
