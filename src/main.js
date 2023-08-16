import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

import 'bootstrap-icons/font/bootstrap-icons.css';
import './style.css';

createApp(App)
    .use(createPinia())
    .mount('#app');
