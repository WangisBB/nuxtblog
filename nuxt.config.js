export default {
    mode: "universal",
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || "",
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            {
                hid: "description",
                name: "description",
                content: process.env.npm_package_description || "",
            },
            { hid: "author", name: "Wang Bingbing" },
            { hid: "copyright", name: "Wang Bingbing" },
            { name: "revisit-after", content: "1 days" },
            { name: "renderer", content: "webkit" },
            { "http-equiv": "X-UA-Compatible", content: "IE=edge,chrome=1" },
            { "http-equiv": "cache-control", content: "no-cache" },
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
            {
                rel: "stylesheet",
                href: "//at.alicdn.com/t/font_2164850_l1txsscp98.css",
            },
        ],
    },
    transition: {
        name: "page",
        mode: "out-in",
        beforeEnter(el) {
            // console.log("Before enter...");
        },
    },
    /*
     ** Customize the progress-bar color
     */
    // loading: { color: '#fff' },
    loading: "~/components/loading.vue",
    /*
     ** Global CSS
     */
    css: [
        "element-ui/lib/theme-chalk/index.css",
        "@/assets/style/reset.css",
        "@/assets/style/defualt.scss",
        "mavon-editor/dist/css/index.css",
    ],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        "@/plugins/element-ui",
        {src: '@/plugins/baidu-Analytics', ssr: false},
    {src: '@/plugins/baidu-seo-push.js', ssr: false},
        { src: "@/plugins/interceptor", ssr: false },
        { src: "@/plugins/directive.js", ssr: false },
        { src: "@/plugins/markdown.js", ssr: false },
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        "@nuxtjs/axios",
        "cookie-universal-nuxt",
        "@nuxtjs/style-resources",
        "@nuxtjs/proxy",
        'bootstrap-vue/nuxt'
    ],
    styleResources: {
        scss: "@/assets/style/defualt.scss",
    },
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},
    // proxy: {
    //     //开启代理
    //     "/api/": {
    //       target: "http://api.lilaile.work",
     
    //     }
    //   },
    server: {
        port: 8000, // default: 3000
        host: "0.0.0.0", // default: localhost,
        open: true,
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {},
        // loaders: [
        //     
        
        //   ]
        // extend(config, { isDev, isClient }) {
        //     // Web Worker support
        //     if (isClient) {
        //       config.module.rules.push({
        //                 test: /\.md$/,
        //                 use: [{
        //                         loader: 'html-loader'
        //                     },
        //                     {
        //                         loader: 'markdown-loader',
        //                         options: {}
        //                     }
        //                 ]
        //             })
        //     }
        //   }
    },
    
};