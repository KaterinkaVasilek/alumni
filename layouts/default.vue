<template>
  <div class="r-layout">
    <Header :header="header"/>
    <Nuxt/>
    <Footer :footer="footer"/>
    <support />
    <cookies />
    <modal-cookies-detail />
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: {},
      header: {
        items: [
          {
            code: 'about',
            name: 'О клубе',
            href: '/about/',
            items: [
              { name: 'О Клубе', id: 'about-us' },
              { name: 'Команда', id: 'team' },
            ],
          },
          {
            name: 'Мероприятия',
            href: '/events',
          },
          {
            code: 'news',
            name: 'Новости',
            href: '/news/',
          },
          {
            code: 'projects',
            name: 'Поддержка',
            href: '/projects/',
            items: [],
          }
        ],
      },
      footer: {
        items: [
          {
            name: 'О клубе',
            href: '/about/',
          },
          {
            name: 'Как поддержать',
            href: '/how-support',
          },
          {
            name: 'Поддержка',
            href: '/projects',
          },
          {
            name: 'Новости',
            href: '/news',
          },
        ],
        social: {
          items: [
            {
              src: '/img/telegram.svg',
              href: '/',
            },
            {
              src: '/img/vk.svg',
              href: '/',
            },
          ],
        },
      },
    };
  },
  async fetch() {
    const res = await this.$api.project.sections.get('', 0);
    this.header.items.filter(el => el?.code === 'projects')[0].items = res.items;
  },
  created() {
    this.$nuxt.$on('scrollToElByParam', (refs) => this.scrollToElByParam(refs));
  },
  beforeDestroy() {
    this.$nuxt.$off('scrollToElByParam', (refs) => this.scrollToElByParam(refs));
  },
  methods: {
    scrollToElByParam(refs) {
      setTimeout(() => {
        const anchor = new URLSearchParams(window.location.search).get('anchor') || null;
        if(anchor) this.$scrollToView(refs[anchor].$el);
      }, 300);
    },
  },
};
</script>
