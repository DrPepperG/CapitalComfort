import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/tailwind.css';

const el = document.getElementById('app');
el.classList.add('h-full');

createApp(App)
    .use(router)
    .mount(el);
