const pkg = require("./package");

module.exports = {
  target: "static",
  server: {
    host: "0.0.0.0",
  },
  head: {
    title: "ZZC",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  loading: { color: "#ffd42a" },
  css: [{ src: "normalize.css" }],
  plugins: [
    // { src: '~/plugins/plugin-name', ssr: false }
  ],
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "@nuxtjs/svg",
    [
      "nuxt-i18n-module",
      {
        languages: ["en", "ru"],
      },
    ],
    // ['nuxt-i18n', {
    //   strategy: 'prefix_and_default',
    //   defaultLocale: 'en',
    //   locales: [
    //     { code: 'en',
    //       iso: 'en-US' },
    //     { code: 'ru',
    //       iso: 'ru-RU' }
    //   ],
    //   vueI18n: {
    //     fallbackLocale: 'en',
    //     messages: {
    //       en: {
    //         menu: {
    //           all: 'All',
    //           free: 'Free',
    //           paid: 'Paid',
    //           author: 'Sergey Ukolov'
    //         },
    //         relatedModules: 'Related Modules',
    //         free: 'Free'
    //       },
    //       ru: {
    //         menu: {
    //           all: 'Все',
    //           free: 'Бесплатные',
    //           paid: 'Платные',
    //           author: 'Сергей Уколов'
    //         },
    //         relatedModules: 'Модули по теме',
    //         free: 'Бесплатно'
    //       }
    //     }
    //   }
    // } ]
  ],
  axios: {
    browserBaseURL: "/",
  },

  build: {
    loaders: {
      scss: {
        implementation: require("sass"),
        sassOptions: {
          api: "modern",
          silenceDeprecations: ["legacy-js-api"],
        },
      },
    },
    extend(config, ctx) {},
  },
  generate: {
    routes: [
      "/clock-manipulation",
      "/generators",
      "/sequencers",
      "/clock-manipulation/clock",
      "/clock-manipulation/divider",
      "/generators/fn-3",
      "/sequencers/phaseque",
    ],
  },
};
