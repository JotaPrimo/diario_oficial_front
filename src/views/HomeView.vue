<template>
  <div class="container-fluid p-0">
    <div class="row mb-2 mb-xl-3">
      <div class="col-auto d-none d-sm-block">
        <h3>Dashboard home view</h3>
      </div>
    </div>

    <div class="row">
      <div class="col-12 col-sm-6 col-xxl-3 d-flex"></div>
    </div>
  </div>
</template>
  
  <script>
import messageService from "../services/messageService.js";

export default {
  name: "HomeView",
  components: {},
  methods: {
    showAlert() {
      messageService.success("Operação realizada com sucesso");
    },
  },
};
</script>
  
  <style></style>
  