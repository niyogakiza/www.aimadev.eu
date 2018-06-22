<template>
    <v-app toolbar footer>
        <v-toolbar class="blue-grey elevation-0" >
            <nuxt-link to="/">
                <img src="../assets/image/baseline_home_black_48dp.png" alt="Logo" class="logo"/>
            </nuxt-link>
            <v-card-text class="text-xs-center black--text"  >
               <p class="size">Love to Build <strong> Web App - Mobile App - Websites</strong></p>
            </v-card-text>
        </v-toolbar>
        <main class="mt-0">
            <v-toolbar-title class="text-xs-center white--text ma-5">
                {{ pageTitle }}
            </v-toolbar-title>
            <nuxt/>
        </main>
        <v-footer class=" text-xs-center white--text" height="auto">
        <v-card
        flat
        tile
        class="black white--text text-xs-center"
        >
        <v-card-text class="white--text pt-0">
           <p>Web development enthusiast. Autonomous, self-taught man.
           What I enjoy the most is dealing with new challenges and overcoming them,
           High adaptability. Great sociability. I gladly exchange ideas on my passions.
           Comfortable with several computer languages and frameworks.</p>
        </v-card-text>
        <v-card-text class="white--text">
        Copyright © {{ copyrightDate }} — <strong>Aimable Niyogakiza</strong>
        </v-card-text>
        </v-card>
        </v-footer>
    </v-app>

</template>

<script>
    /*eslint-disable */
    export default {
        computed: {
            pageTitle () {
                switch (this.$route.path) {
                    case '/':
                        return 'Work Hard In Silence, Let Success Be The Noise'
                    case '/portfolio':
                        return 'Portfolio'
                }
            },
            copyrightDate: function () {
                const initialYear = 2016
                const currentYear = new Date().getFullYear()
                return currentYear === initialYear ? initialYear : `${initialYear} - ${currentYear}`
            }
        }
    }
</script>

<style scoped>
    main {
        min-height: 100vh;
        background: url('../assets/image/backgroun.jpg')no-repeat fixed center;
        background-size: cover;
    }

    .logo {
        height: 50px;
    }
    .footer p{
        width: 100%;
    }
</style>
