<template>
 <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/login">Login</router-link>
    </nav>   
    <router-view />
  </div>
</template>

<script>
import messageService from "./services/messageService.js";

export default {
  name: "App",
  components: {
    
  },
  methods: {
    showAlert() {
      messageService.success("Operação realizada com sucesso");
    }
  }
};
</script>

<style></style>
