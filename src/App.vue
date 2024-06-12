<template>
 <div id="app">      
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
