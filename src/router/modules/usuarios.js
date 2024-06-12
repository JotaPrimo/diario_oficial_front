import UsuariosList from "@/views/usuarios/UsuariosList.vue";
import UsuariosCreate from "@/views/usuarios/UsuariosCreate.vue";

export default [
  {
    path: "/usuarios/list",
    name: "UsuariosList",
    component: UsuariosList,
  },
  {
    path: "/usuarios/create",
    name: "UsuariosCreate",
    component: UsuariosCreate,
  }
];

