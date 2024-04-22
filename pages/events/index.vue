<script>
import IconEagle from '@/assets/icons/eagle.svg?inline';

export default {
  components: {
    IconEagle
  },
  async asyncData({ $api }) {
    const events = await $api.events.get('', 12, 1, 'SORT');
    return { events }
  },
  data() {
    return {
      cardOnPage: 12,
      page: 1,
      isLoading: false,
    }
  },
  methods: {
    async onShowMoreButtonClick() {
      try {
        this.isLoading = !this.isLoading;
        this.page += 1;
        const { items } = await this.$api.events.get('', this.cardOnPage, this.page, 'SORT');
        this.events.items = [...this.events.items, ...items];
      } catch (error) {
        console.error("An error occurred:", error);
      } finally {
        this.isLoading = !this.isLoading;
      }
    }
  }
}
</script>

<template>
  <main class="r-container temp">
    <Catalog
      title="Мероприятия"
      :img-grayscale="false"
      :items="events.items"
      :page="events.page"
      :currentPage="page"
      :showMoreButtonCb="onShowMoreButtonClick"
      :isLoading="isLoading"
      :cardsOnRow="{mobile: 1, tablet: 2, desktop: 4}"
      src="events"
    />
  </main>
</template>
