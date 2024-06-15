<template>
  <div>
    <div class="row">
      <div v-if="loading" class="d-flex justify-content-center">        
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>      
      </div>

      <div class="col-12 col-xl-12">
        <UsuarioSearch @search="applyFilters" />

        <router-link class="btn btn-sm btn-primary mb-2" to="/usuarios/create">Novo</router-link>

        <div v-if="!loading" class="card">
          <div class="card-header">
            <h5 class="card-title">
              {{ tituloPagina }}
              {{ pagination }}
              <select v-model="pagination.pageSize" @change="fetchUsuarios()">
                <option value="10" selected>10</option>
                <option value="20" selected>20</option>
                <option value="50" selected>50</option>
                <option value="100" selected>100</option>
              </select>
            </h5>
            <div>
              <h6 class="card-subtitle text-muted">
                {{ descricaoPagina }}
              </h6>
              <div id="infos_datatable">

                <div>
                  <label for="totalRegistros" class="pt-2">
                    Registro encontrados
                    <span id="totalRegistros" class="badge text-bg-success fw-bold">
                      {{ pagination.totalElements }}
                    </span>
                  </label>
                </div>

              </div>
            </div>
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

        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item" :class="{ disabled: pagination.first }">
              <a class="page-link" href="#" @click.prevent="fetchUsuarios(0)">First</a>
            </li>
            <li class="page-item" :class="{ disabled: pagination.first }">
              <a class="page-link" href="#" @click.prevent="prevPage">Previous</a>
            </li>
            <li class="page-item" v-for="page in visiblePages" :key="page"
              :class="{ active: page - 1 === pagination.pageNumber }">
              <a class="page-link" href="#" @click.prevent="fetchUsuarios(page - 1)">{{ page }}</a>
            </li>
            <li class="page-item" :class="{ disabled: pagination.last }">
              <a class="page-link" href="#" @click.prevent="nextPage">Next</a>
            </li>
            <li class="page-item" :class="{ disabled: pagination.last }">
              <a class="page-link" href="#" @click.prevent="fetchUsuarios(pagination.totalPages - 1)">Last</a>
            </li>
          </ul>
        </nav>

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
      loading: true,
      pagination: {
        pageNumber: 0,
        pageSize: 10,
        totalPages: 0,
        totalElements: 0,
        first: true,
        last: false
      }
    };
  },

  created() {
    this.fetchUsuarios();
  },

  computed: {
    totalPagesArray() {
      return Array.from({ length: this.pagination.totalPages }, (v, k) => k + 1);
    },

    visiblePages() {
      const { pageNumber, totalPages } = this.pagination;
      const delta = 2;
      const range = [];
      const start = Math.max(2, pageNumber - delta);
      const end = Math.min(totalPages - 1, pageNumber + delta + 1);

      if (start > 2) {
        range.push("...");
      }

      for (let i = start; i < end; i++) {
        range.push(i);
      }

      if (end < totalPages - 1) {
        range.push("...");
      }

      if (totalPages > 1) {
        range.unshift(1);
        range.push(totalPages);
      }

      return range;
    }
  },

  methods: {
    fetchUsuarios(page = 0) {
      this.loading = true;
      usuarioService
        .getAll(page, this.pagination.pageSize)
        .then((res) => {
          this.usuarios = res.content;
          this.filteredResults = this.users;

          this.pagination = {
            pageNumber: res.pageable.pageNumber,
            pageSize: res.pageable.pageSize,
            totalPages: res.totalPages,
            totalElements: res.totalElements,
            first: res.first,
            last: res.last
          }

          this.loading = false
          return;
        })
        .catch((err) => {
          console.log("errors");
          console.log(err);
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

      this.loading = true;
      this.hasSearched = true;

      const queryString = queryService.createQueryString(filters);

      console.log("retorno do query string");
      console.log(queryString);

      usuarioService.getAll(this.pagination.pageNumber, this.pagination.pageSize, queryString)
        .then((res) => {
          console.log(res.content);
          this.usuarios = res.content;
          this.filteredResults = this.users;

          this.pagination = {
            pageNumber: res.pageable.pageNumber,
            pageSize: res.pageable.pageSize,
            totalPages: res.totalPages,
            totalElements: res.totalElements,
            first: res.first,
            last: res.last
          }

          this.loading = false;
        }).catch((err) => {

          this.loading = false;
          console.log(err);
        });
    },

    nextPage() {
      if (!this.pagination.last) {
        this.fetchUsuarios(this.pagination.pageNumber + 1);
      }
    },

    prevPage() {
      if (!this.pagination.first) {
        this.fetchUsuarios(this.pagination.pageNumber - 1);
      }
    }

  },
};
</script>