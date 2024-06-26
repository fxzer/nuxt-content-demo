// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  devtools: { enabled: true },
  modules: ['@nuxt/content','@nuxt/image'],
  routeRules: {
    '/': { prerender: true }
  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  },
  content: {
    documentDriven:true,
    experimental: {
      search: true
    }
  }
})
