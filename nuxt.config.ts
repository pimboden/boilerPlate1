// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  css: ['@/assets/scss/first.scss','@progress/kendo-theme-default/dist/all.css', '/assets/scss/site.scss'],
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss' 
  ],
  tailwindcss: {
    cssPath: false,
    configPath: 'tailwind.config.ts',
    exposeConfig: false,
    viewer: true,
  },
  i18n: {
    debug: false,
    lazy: true,
    langDir: 'data/locales',
    locales: [
      { code: 'de', iso: 'de-CH', file: 'de.json' },
      { code: 'en', iso: 'en-GB', file: 'en.json' },
    ], // used in URL path prefix
    defaultLocale: 'de', // default locale of your project for Nuxt pages and routings,
    strategy: 'prefix_except_default',
    vueI18n: {
      legacy: false,
      locale: 'de',
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@import "@/assets/scss/_variables.scss"',
        },
      },
    },
  },
  typescript: {
    shim: false,
  },
  debug: true
})
