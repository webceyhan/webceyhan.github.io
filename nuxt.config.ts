// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
    css: ['~/assets/css/main.css', 'bootstrap-icons/font/bootstrap-icons.css'],
});
