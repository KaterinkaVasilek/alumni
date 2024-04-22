export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Клуб выпускников',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  env: {
    baseUrl: 'https://a1.ranepa.ru/',
    version: '1.0',
    paymentSuccessUrl: `${process.env.NODE_ENV === 'production' ? 'https://t15.ranepa.ru' : 'https://localhost:3000' }/?payment=1`,
    paymentFailUrl: `${process.env.NODE_ENV === 'production' ? 'https://t15.ranepa.ru' : 'https://localhost:3000' }/how-support/?payment=0`,
  },

  ssr: 'universal',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/vue-js-modal", mode: "client" },
    { src: '~/plugins/scroll-to-view.js', },
    { src: '~/plugins/is-in-viewport.js', },
    { src: '~/plugins/upd-animate.js', },
    { src: '~/plugins/rules.js', },
    { src: '~/plugins/v-mask.js', },
    { src: '~/plugins/tooltip.js', },
    { src: '~/plugins/api.js', },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/moment',
    '@nuxtjs/svg',
  ],

  moment: {
    defaultLocale: 'ru',
    locales: ['ru']
  },

  dayjs: {
    locales: ['ru'],
    defaultLocale: 'ru',
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dayjs',
    ['@rkaliev/nuxtjs-yandex-metrika', {
      id: 94943976,
      clickmap: true,
      trackLinks: true,
      noJS: true,
      accurateTrackBounce: true,
      webvisor: true,
    }],
    ['@nuxtjs/robots', {
      rules: {
        UserAgent: '*',
        Disallow: '/',
      }
    }]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
}
