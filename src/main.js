import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/css/app.css';
import '@/assets/js/app.js';

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

createApp(App).use(VueSweetalert2).mount('#app')
