import UsuariosList from "@/views/usuarios/UsuariosList.vue";
import UsuariosCreate from "@/views/usuarios/UsuariosCreate.vue";
import UsuariosEdit from "@/views/usuarios/UsuariosEdit.vue";

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
  },
  {
    path: "/usuarios/edit/:id",
    name: "UsuariosEdit",
    component: UsuariosEdit,
  }
];

