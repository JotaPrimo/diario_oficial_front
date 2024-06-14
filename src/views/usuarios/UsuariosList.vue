<template>
  <div>
    <div class="row">
      <div class="col-12 col-xl-12">
        <UsuarioSearch @search="applyFilters" />
        <router-link class="btn btn-sm btn-primary mb-2" to="/usuarios/create">Novo</router-link>
        <div class="card">
          <div class="card-header">
            <h5 class="card-title">{{ tituloPagina }}</h5>
            <h6 class="card-subtitle text-muted">
              {{ descricaoPagina }}
            </h6>
          </div>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th style="width: 5%">#ID</th>
                <th style="width: 20%">Username</th>
                <th style="width: 25%">Email</th>
                <th style="width: 5%" class="text-center">Status</th>
                <th style="width: 15%">Role</th>
                <th style="width: 8%">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(usuario, index) in usuarios" :key="index">
                <td>{{ usuario.id }}</td>
                <td>{{ usuario.username }}</td>
                <td>{{ usuario.email }}</td>
                <td class="text-center">
                  <span class="badge" :class="{
                    'text-bg-success': checkIsAtivo(usuario),
                    'text-bg-secondary': !checkIsAtivo(usuario),
                  }">
                    {{ usuario.statusUsuario }}
                  </span>
                </td>
                <td class="d-none d-md-table-cell">{{ usuario.role }}</td>
                <td class="text-center">
                  <EyeIcon />

                  <UnlockIcon class="clickable" v-if="!checkIsAtivo(usuario)" @click="ativarUsuario(usuario)" />

                  <LockIcon class="clickable" v-if="checkIsAtivo(usuario)" @click="inativarUsuario(usuario)" />

                  <router-link title="Clique aqui para editar"
                    :to="{ name: 'UsuariosEdit', params: { id: usuario.id } }">
                    <EditIcon />
                  </router-link>

                  <TrashIcon class="clickable" @click="deleteUsuario(usuario.id)" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import queryService from "@/services/queryService";
import messageService from "@/services/messageService";
import usuarioService from "@/services/usuarioService";

import UsuarioSearch from "@/views/usuarios/UsuarioSearch.vue";

import {
  EditIcon,
  TrashIcon,
  EyeIcon,
  UnlockIcon,
  LockIcon,
} from "@/components/common/icons/index";


export default {
  name: "UsuariosList",
  components: {
    EditIcon,
    TrashIcon,
    EyeIcon,
    UnlockIcon,
    LockIcon,
    UsuarioSearch
  },

  data() {
    return {
      usuarios: [],
      filteredResults: [],
      hasSearched: false,
      tituloPagina: "Usuários",
      descricaoPagina: "Recurso para gerênciamento de usuários",
    };
  },

  created() {
    this.fetchUsuarios();
  },

  methods: {
    fetchUsuarios() {
      usuarioService
        .getAll()
        .then((data) => {
          this.usuarios = data.sort((atual, proximo) => atual.id - proximo.id);
          this.filteredResults = this.users;
        })
        .catch(() => {
          messageService.error("Erro ao carregar usuários");
        });
    },

    deleteUsuario(id) {
      messageService.confirm().then((res) => {
        if (res.isConfirmed) {
          usuarioService
            .delete(id)
            .then(() => {
              this.fetchUsuarios();
              messageService.success("Usuário deletado com sucesso");
              return;
            })
            .catch(() => {
              messageService.error("Ocorreu um erro");
              return;
            });
        } else {
          messageService.info("Operação cancelada");
        }
      });
    },

    checkIsAtivo(usuario) {
      return usuarioService.isAtivo(usuario);
    },

    async ativarUsuario(usuario) {
      try {
        const confirm = await messageService.confirm(`Ativar usuário ${usuario.username} ?`);

        if (confirm.isConfirmed) {
          await usuarioService.ativarUsuario(usuario);
          await this.fetchUsuarios();
          messageService.success("Usuário ativado com sucesso");
          return
        }

        messageService.warning("Operação cancelada com sucesso");
        return

      } catch (err) {
        console.error('Erro ao ativar usuário:', err);
        messageService.error('Ocorreu um erro ao ativar o usuário');
      }
    },

    async inativarUsuario(usuario) {
      try {
        const confirm = await messageService.confirm(`Inativar o usuário ${usuario.username} ?`);

        if (confirm.isConfirmed) {
          await usuarioService.inativarUsuario(usuario);
          await this.fetchUsuarios();
          messageService.success("Usuário inativado com sucesso");
        }
      } catch (error) {
        console.log(error);
        messageService.error('Ocorreu um erro ao ativar o usuário');
      }
    },

    applyFilters(filters) {
      console.log("applyFilters aqui");
      this.hasSearched = true;
      console.log(filters);  

      const queryString = queryService.createQueryString(filters);

      usuarioService.getAll(queryString).then((res) => {
        console.log(res);
      }).catch();
    }

  },
};
</script>