import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import './index.css'
import router from './router/index.js'
import App from './App.vue'

const pinia = createPinia();

pinia.use(({store}) => {
    store.router = markRaw(router);
});

createApp(App).use(pinia).use(router).mount('#app');
