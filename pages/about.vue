<template>
  <div class="page page--about">
    <BannerDetail
      id="about-us"
      :ref="'about-us'"
      :title="banner.title"
      :img-small="banner.imgSmall"
      :img-large="banner.imgLarge"
      :text="aboutText"
      :sign="banner.sign"
    />
    <mission
      id="mission"
      :ref="'mission'"
      :handwriting="''"
      :show-button="false"
      :src="mission.src"
      :description="mission.description"
    />
    <council
      v-if="false"
      id="council"
      :ref="'council'"
      :title="council.title"
      :title-decor="council.titleDecor"
      :items="councils.items"
    />
    <honorary
      :classes="'honorary--light'"
      :ref="'honorary'"
      id="honorary"
      :title="honorary.title"
      :items="members.items"
    />
    <team
      id="team"
      :ref="'team'"
      :img-small="team.imgSmall"
      :img-large="team.imgLarge"
      :items="teamItems"
    />
  </div>
</template>

<script>
export default {
  async asyncData({ $api }) {
    const aboutText = await $api.about_text.get();
    const mission = await $api.mission.about.get();
    const members = await $api.members.get('', 0);
    const councils = await  $api.councils.get('', 0);
    const teamItems = await $api.team.get();
    return { aboutText, mission, members, councils, teamItems: teamItems.items };
  },
  data() {
    return {
      team: {
        imgSmall: {
          default: '/img/team-img-small.png',
          tablet: '/img/team-img-small-tablet.png',
        },
        imgLarge: {
          default: '/img/team-img-large.png',
          tablet: '/img/team-img-large-tablet.png',
        },
        items: [
          {
            src: '/img/team-1.png',
            name: 'Начинкина Юлия Сергеевна',
            post: 'Руководитель клуба',
            phone: '+7 (910) 407-76-24',
            mail: 'nachnkina-ys@ranepa.ru',
          },
          {
            src: '/img/team-2.png',
            name: 'Немировченко Полина Геннадиевна',
            post: 'Председатель клуба',
            phone: '+7 (499) 956-01-64',
            mail: 'nemirovchenko-pg@ranepa.ru',
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
      council: {
        title: 'Совет клуба',
        titleDecor: 'Президентской академии',
        items: [
          {
            src: '/img/council-4.png',
            name: 'Попова Дарья Олеговна',
            post: 'Выпускница Президентской Академии',
          },
          {
            src: '/img/council-5.png',
            name: 'Немировченко Полина Геннадиевна',
            post: 'Проректор Президентской Академии, Кандидат социологических наук, PMP',
          },
          {
            src: '/img/council-4.png',
            name: 'Комиссаров Алексей Геннадиевич',
            post: 'Ректор Президентской Академии',
          },
        ],
      },
      banner: {
        title: 'О клубе',
        imgSmall: {
          default: '/img/banner-detail-small-1.png',
          tablet: '/img/banner-detail-small-tablet-1.png',
          mobile: '/img/banner-detail-small-mobile-1.png',
        },
        imgLarge: {
          default: '/img/banner-detail-large-1.png',
          tablet: '/img/banner-detail-large-tablet-1.png',
          mobile: '/img/banner-detail-large-mobile-1.png',
        },
        sign: 'Выпускники для своей Академии',
        text: 'Клуб благодарных выпускников Академии — это сплоченное сообщество, объединяющее тех, кто не хочет терять связь с alma mater, признает ее важную роль в своей жизни и готов вносить вклад в ее процветание.<br/><br/>' +
          'Почему «55 параллель»?<br/><br/>' +
          'На 55-й параллели, широте Золотого сечения, располагается главное здание   Академии. К 55й параллели тянутся города, где работают ее филиалы:   Калининград, Новосибирск, Омск, Курган и Челябинск.<br/><br/>' +
          'Также «пятерка» – это   традиционно высший балл оценки знаний и умений.',
      },
    };
  },
  mounted() {
      this.$nuxt.$emit('scrollToElByParam', this.$refs);
  },
}
</script>
