import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import '@/assets/css/app.css';
import '@/assets/css/global.css';
import '@/assets/js/app.js';

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


const app = createApp(App);

app.use(router); // Use o router
app.use(VueSweetalert2);

app.config.productionTip = false;

app.mount('#app');
