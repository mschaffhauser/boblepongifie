import redirectSSL from 'redirect-ssl'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'BobLPA',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],
  serverMiddleware: [
    redirectSSL.create({
      enabled: process.env.NODE_ENV === 'production',
    }),
  ],
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/pwa',
  ],
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    'nuxt-clipboard2',
  ],
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  pwa: {
    meta: {
      title: 'BoBlEpOnGiFiE',
      author: 'Maxime SCHAFFHAUSER',
    },
    manifest: {
      name: 'BoBlEpOnGiFiE for your best sentence',
      short_name: 'BoBlEpOnGiFiE PWA',
      lang: 'en',
    },
  },
}
