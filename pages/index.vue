<template>
  <div class="page page--main">
    <banner-main
      :classes="'header-bg'"
      :title-start="'клуб <br/> выпускников'"
      :title-end="'ПРЕЗИДЕНТСКАЯ АКАДЕМИЯ'"
      :img-left="{
        default: '/img/banner-3.png',
        tablet: '/img/banner-tablet-1.png',
        mobile: '/img/banner-mobile-1.png',
      }"
      :img-right="{
        default: '/img/banner-4.png',
        tablet: '/img/banner-tablet-2.png',
        mobile: '/img/banner-mobile-2.png',
      }"
      :description="banner?.items[0]?.text || ''"
    />
    <mission
      :src="mission.src"
      :handwriting="'Выпускники для своей академии'"
      :show-button="true"
      :description="mission.description"
    />
    <slider-events
      :title="events.title"
      :items="eventsItems.items"
      v-if="isTablet" />
    <events
      :title="events.title"
      :items="eventsItems.items"
      v-else/>
    <honorary
      :title="honorary.title"
      :items="members.items"
    />
    <causes
     :items="causes.items"
    />
    <slider-news
      :title="news.title"
      :items="newsItems.items"
      v-if="isTablet"
    />
    <news
      :title="news.title"
      :items="newsItems.items"
      v-else
    />
    <faq
      :title="'Вопросы и ответы'"
      :items="faq.items"
    />
    <feedback/>
    <modal-subscribe />
    <modal-success :name="'modal-success-payment'">
      <template #title>
        Спасибо за ваше пожертвование!
      </template>
    </modal-success>
  </div>
</template>

<script>
import Causes from "@/components/causes/causes.vue";

export default {
  components: {Causes},
  async asyncData({ $api }) {
    const faq = await $api.faq.get();
    const causes = await $api.causes.get();
    const banner = await $api.banner.get();
    const mission = await $api.mission.main.get();
    const members = await $api.members.get('', 0, 'rand');
    const eventsItems = await $api.events.get('', 4, 0, 'SORT');
    const newsItems = await $api.news.get('', 3, 1, 'news');

    return { faq, causes, banner, mission, members, eventsItems, newsItems };
  },
  data() {
    return {
      isTablet: false,
      news: {
        title: 'Новости',
        items: [
          {
            src: '/img/news-1.png',
            date: '07-23-2023',
            name: 'Клуб благодарных выпускников Академии открывает свои двери',
            description: 'Что ждет студентов и выпускников?',
          },
          {
            src: '',
            date: '07-23-2023',
            name: '«Наука помогает посмотреть на обыденные вещи под другим углом»',
            description: 'Интервью с выпускницей 2023 года Анной Петровой.',
          },
          {
            src: '',
            date: '07-23-2023',
            name: '«Знания позволили мне устроиться в топовую консалтинговую компанию еще во время учебы»',
            description: 'Интервью с выпускницей Академии-2023 Анной Макаревич.',
          },

        ],
      },
      events: {
        title: 'Мероприятия',
        items: [
          {
            src: '/img/events-1.png',
            date: '05-18-2023',
            name: 'Мастер-класс «Как применить SMART для определения карьерных целей»',
          },
          {
            src: '',
            date: '05-18-2023',
            name: 'Новая страница истории: Алексей Комиссаров о запуске Клуба',
          },
          {
            src: '',
            date: '05-18-2023',
            name: 'Выпускник Академии провел мастер-класс по поиску работы',
          },
          {
            src: '',
            date: '05-18-2023',
            name: 'Выпускница Академии запускает проект для студентов',
          },
        ],
      },
      honorary: {
        title: '<span class="italic">Почетные</span> члены клуба',
        items: [
          {
            surname: 'Евтушенко',
            patronymic: 'Николаевич',
            name: ' Олег',
            post: 'Исполнительный директор Государственной корпорации Ростех',
            year: 1993,
            src: '/img/honory-1.png',
          },
          {
            surname: 'Матвиенко',
            patronymic: 'Ивановна',
            name: 'Валентина',
            post: 'Председатель Совета Федерации Федерального Собрания Российской Федерации',
            year: 1985,
            src: '/img/honory-2.png',
          },
          {
            surname: 'Мантуров',
            patronymic: 'Валентинович',
            name: 'Денис',
            post: 'Министр промышленности и торговли Российской Федерации',
            year: 1993,
            src: '/img/honory-3.png',
          },
          {
            surname: 'Хоркина',
            patronymic: 'Васильевна',
            name: 'Светлана',
            post: 'Референт Контрольного управления Президента РФ, двукратная олимпийская чемпионка',
            year: 1993,
            src: '/img/honory-4.png',
          },
          {
            surname: 'Матвиенко',
            patronymic: 'Ивановна',
            name: 'Валентина',
            post: 'Председатель Совета Федерации Федерального Собрания Российской Федерации',
            year: 1985,
            src: '/img/honory-2.png',
          },
        ],
      },
    };
  },
  created() {
    this.updIsTablet();
     if(process.browser) window.addEventListener("resize", this.updIsTablet);
  },
  unmounted() {
    if(process.browser) window.removeEventListener("resize", this.updIsTablet);
  },
  mounted() {
    if(process.browser) {
      const params = new URLSearchParams(window.location.search);
      if(params.get('payment') === '1') this.$modal.show('modal-success-payment');
    }
  },
  methods: {
    updIsTablet() {
      this.isTablet = process.browser ? window.innerWidth <= 1023 : false;
    },
  },
}
</script>
