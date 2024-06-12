<template>
  <div class="wrapper">
    <nav id="sidebar" class="sidebar">
      <SidebarComponent />
    </nav>

    <div class="main">
      <NavbarComponent />

      <main class="content">
        <div class="container-fluid p-0">
          <div class="row mb-2 mb-xl-3">
            <div class="col-auto d-none d-sm-block">
              <h3>Dashboard</h3>
            </div>          
          </div>

          <div class="row">
            <div class="col-12 col-sm-6 col-xxl-3 d-flex">
              
            </div>
          </div>
        </div>
      </main>

      <FooterComponent />
    </div>
  </div>
</template>

<script>
import messageService from "./services/messageService.js";
import FooterComponent from "./components/layout/FooterComponent.vue";
import SidebarComponent from "./components/layout/SidebarComponent.vue";
import NavbarComponent from "./components/layout/NavbarComponent.vue";

export default {
  name: "App",
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
