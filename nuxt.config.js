
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: 'blue',
    height: '5px'
  },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'normalize.css/normalize.css',
    'assets/css/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/vant',
    '~/plugins/vue-inject.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  axios: {
        // See https://github.com/nuxt-community/axios-module#options
  
    // 静态应用部署(npm run generate) 若不跨域需要设置baseURL
     baseURL: process.env.NODE_ENV === 'production' ? 'http://dev.nuxtdemo.com:3001/' : '',
  
    // 静态应用部署(npm run generate) 若跨域设置prefix,可配合nginx反向代理
    // prefix: '/apis/',
  
    // npm run dev,服务端渲染应用部署(npm run start) 跨域设置
    prefix: '/api/',
    proxy: true
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  server: {
    port: 3003 // default: 3000
  },
  router: {
    middleware: 'console'
  }
}
