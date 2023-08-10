// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  

  runtimeConfig: {
    MONGO_URI: process.env.MONGO_URI,
  },

  css: ['~/assets/css/main.css'],

  googleFonts: {
    families: {
      Inter: [400, 800],
      Comfortaa: true,
    }
  },

  nitro: {
    plugins: ['@/server/db/index.js'],
  },

  modules: ['@nuxtjs/google-fonts', 'nuxt-icons', '@pinia/nuxt']
})