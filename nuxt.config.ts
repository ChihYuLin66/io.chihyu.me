// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', 'vuetify-nuxt-module'],
  // alias: {
  //   '@': '/src', // Adjust this to your project structure
  // },

  // Global page headers: https://nuxtjs.org/docs/configuration-glossary/configuration-head
  app: {
    head: {
      title: 'Dashboard - Nuxt.js fast loading dashboard theme',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'Dashboard – is a lightweight, minimal, fast loading front-end dashboard theme. It is built with Vue.js and Nuxt.js.',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap',
        },
      ],
    },
  },

  // Global CSS: https://nuxtjs.org/docs/configuration-glossary/configuration-css
  css: ['normalize.css/normalize.css', '@/assets/style.scss'],

  // Plugins to run before rendering page: https://nuxtjs.org/docs/configuration-glossary/configuration-plugins
  plugins: [],

  // Auto import components: https://nuxtjs.org/docs/configuration-glossary/configuration-components
  components: [
    '~/components',
    { path: '~/components/icons/', prefix: 'icons' },
  ],

})


// // nuxt.config.ts
// import { defineNuxtConfig } from 'nuxt'

// export default defineNuxtConfig({
//   // Target: https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-target
//   target: 'static',

//   router: {
//     base: '/',
//   },

//   // Global page headers: https://nuxtjs.org/docs/configuration-glossary/configuration-head
//   head: {
//     title: 'Dashboard - Nuxt.js fast loading dashboard theme',
//     meta: [
//       { charset: 'utf-8' },
//       { name: 'viewport', content: 'width=device-width, initial-scale=1' },
//       {
//         hid: 'description',
//         name: 'description',
//         content:
//           'Dashboard – is a lightweight, minimal, fast loading front-end dashboard theme. It is built with Vue.js and Nuxt.js.',
//       },
//     ],
//     link: [
//       { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
//       {
//         rel: 'stylesheet',
//         href:
//           'https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap',
//       },
//     ],
//   },

//   // Global CSS: https://nuxtjs.org/docs/configuration-glossary/configuration-css
//   css: ['normalize.css/normalize.css', '@/assets/style.scss'],

//   // Plugins to run before rendering page: https://nuxtjs.org/docs/configuration-glossary/configuration-plugins
//   plugins: [],

//   // Auto import components: https://nuxtjs.org/docs/configuration-glossary/configuration-components
//   components: [
//     '~/components',
//     { path: '~/components/icons/', prefix: 'icons' },
//   ],

//   // Modules: https://nuxtjs.org/docs/configuration-glossary/configuration-modules
//   modules: [
//     '@nuxtjs/axios',  // Axios module
//     '@nuxtjs/pwa',    // PWA module
//   ],

//   // Axios module configuration: https://nuxtjs.org/docs/configuration-glossary/configuration-axios
//   axios: {},

//   // PWA module configuration: https://nuxtjs.org/docs/configuration-glossary/configuration-pwa
//   pwa: {
//     manifest: {
//       lang: 'en',
//     },
//   },

//   // Build Configuration: https://nuxtjs.org/docs/configuration-glossary/configuration-build
//   build: {},
// })