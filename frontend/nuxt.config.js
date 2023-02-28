export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Non Binary Tree',
    titleTemplate: 'Non Binary Tree',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Eczar&display=block' }
    ]
  },

  server: {
    host: process.env.NUXT_HOST,
    port: process.env.NUXT_PORT
  },

  target: 'server',

  css: [
    '~/assets/scss/global.scss'
  ],

  styleResources: {
    scss: ['~/assets/scss/*.scss']
  },

  plugins: [
  ],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module'
  ],

  modules: [
    '@nuxtjs/axios'
  ],

  axios: {
    baseURL: '/'
  },

  build: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    }
  },

  robots: [
    {
      UserAgent: '*',
      Disallow: '/'
    }
  ]
}
