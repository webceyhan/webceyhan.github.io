import { createApp } from 'vue';
import Particles from 'vue3-particles';
import App from './App.vue';

import 'bootstrap-icons/font/bootstrap-icons.css';
import './style.css';

createApp(App).use(Particles).mount('#app');
