<script>
import IconEagle from '@/assets/icons/eagle.svg?inline';

export default {
  async asyncData({ $api }) {
    const news = await $api.news.get('', 9, 1, 'news');
    return { news }
  },
  components: {
    IconEagle
  },
  data() {
    return {
      page: 1,
      cardOnPage: 9,
      isLoading: false,
    }
  },
  methods: {
    async onShowMoreButtonClick() {
      try {
        this.isLoading = !this.isLoading;
        const { items } = await this.$api.news.get('', this.cardOnPage, this.page + 1, 'news');
        this.news.items = [...this.news.items, ...items];
      } catch (error) {
        console.error("An error occurred:", error);
      } finally {
        this.isLoading = !this.isLoading;
        this.page += 1;
      }
    }
  }
}
</script>

<template>
  <main class="r-container temp">
    <Catalog
      title="Новости"
      :items="news.items"
      :showMoreButtonCb="onShowMoreButtonClick"
      :page="news.page"
      :isLoading="isLoading"
      :currentPage="page"
      src="news"
    />
  </main>
</template>
