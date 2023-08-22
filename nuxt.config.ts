// const IS_PROD = process.env.NODE_ENV === 'production';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
    css: ['~/assets/css/main.css', 'bootstrap-icons/font/bootstrap-icons.css'],
    components: [
        {
            path: '~/components',
            pathPrefix: false, // disable path prefix for components
        },
    ],
    // app: {
    //     buildAssetsDir: IS_PROD ? 'assets' : undefined,
    // },
});
