import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.css'
import router from './router'
import store from './store/index'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import BaseButton from './components/UI/BaseButton.vue';

const app = createApp(App);

app.use(router);
app.use(store);

app.component('base-button',BaseButton);

app.mount('#app')
