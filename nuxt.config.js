module.exports = {
    /*
    *
    * Headers of the page
    *
    * */

    head: {
        htmlAttrs: {
            lang: 'eng'
        },
        titleTemplate: '%s - Aimable Niyogakiza',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-with, initial-scale'},
            {
                hid: 'description',
                name: 'description',
                content: 'Aimable Niyogakiza Personal Website, I am FullStack Javascript Developer Based Solihull in England.'
            },
            //Open Graph
            {property: 'og:title', content: 'Aimable Niyogakiza Personal Website'},
            {property: 'og:type', content: 'website'},
            {property: 'og:url', content: 'http://www.aimadev.eu'},
            {property: 'og:image', content: 'http://www.aimadev.eu/image/myImage.jpg'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            {
                rel: 'stylesheet',
                type: 'text/css',
                href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
            }
        ]
    },
        /**
         *
         * Global CSS
         *
         */
        css: ['vuetify/dist/vuetify.min.css', '~assets/css/main.css'],
        /**
         * Progress-bar color
         */
        loading: { color: '#fff'},
        /**
         * Plugins Configuration
         *
         */
        plugins: ['~plugins/vuetify'],
        /**
         *
         * Build Cofiguration
         *
         */
        build: {
            vendor: ['vuetify'],
            /*
            ** Run ESLINT on save
            */
            extend (config, ctx) {
                if (ctx.isClient) {
                    config.module.rules.push({
                        enforce: 'pre',
                        test: /\.(js|vue)$/,
                        loader: 'eslint-loader',
                        exclude: /(node_modules)/
                    })
                }
            }
        }
    }
