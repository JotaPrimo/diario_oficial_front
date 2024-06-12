import { createRouter, createWebHistory } from "vue-router";

import BaseLayoutComponent from "@/components/layout/BaseLayoutComponent.vue";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";


// rotas
import usuarios from "./modules/usuarios";

const routes = [  
  {
    path: '/',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        name: 'Home',
        component: HomeView
      },
      ...usuarios     
    ]
  }, 
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  }  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
