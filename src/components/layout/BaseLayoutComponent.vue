<template>
    <div class="wrapper">
      <nav id="sidebar" class="sidebar">
        <SidebarComponent />
      </nav>
  
      <div class="main">
        <NavbarComponent />      
  
        <main class="content">
            <router-view />
        </main>
  
        <FooterComponent />
      </div>
    </div>
  </template>
  
  <script>
  import messageService from "../../services/messageService.js";
  import FooterComponent from "../../components/layout/FooterComponent.vue";
  import SidebarComponent from "../../components/layout/SidebarComponent.vue";
  import NavbarComponent from "../../components/layout/NavbarComponent.vue";
  
  export default {
    name: "BaseLayoutComponent",
    components: {
      FooterComponent,
      NavbarComponent,
      SidebarComponent,
    },
    methods: {
      showAlert() {
        messageService.success("Operação realizada com sucesso");
      }
    }
  };
  </script>
  
  <style></style>
  