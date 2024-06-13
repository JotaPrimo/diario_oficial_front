<template>
  <div>
    <div class="row">
      <div class="col-12 col-xl-12">
        {{ v$.usuario.username.minLength }}
        <h4>Erros</h4>
        <ul>
          <li class="text-danger" v-for="(erro, index) in erros" :key="index">
            {{ erro }}
          </li>
        </ul>
        <div class="card">
          <div class="card-header">
            <h5 class="card-title">{{ tituloPagina }}</h5>
            <h6 class="card-subtitle text-muted">
              {{ descricaoPagina }}
            </h6>
          </div>
          <div class="card-body">
            <div class="col-md-12">
              <form @submit.prevent="store">
                <div class="row">
                  <div class="mb-3 col com-sm-12 com-sm-12">
                    <label class="form-label" for="username">Username</label>
                    <input
                      type="text"
                      class="form-control"
                      autocomplete="new-username"
                      v-model="usuario.username"
                      id="username"
                      placeholder="Username"
                      @blur="v$.usuario.username.$touch"
                      :class="{
                        'is-invalid':
                          v$.usuario.username.$dirty &&
                          v$.usuario.username.$error,
                        'is-valid':
                          v$.usuario.username.$dirty &&
                          !v$.usuario.username.$error,
                      }"
                    />

                    <div
                      class="invalid-feedback"
                      v-if="
                        v$.usuario.username.$dirty &&
                        v$.usuario.username.required.$invalid
                      "
                    >
                      Username é um campo obrigatório.
                    </div>
                    <div
                      class="invalid-feedback"
                      v-if="
                        v$.usuario.username.$dirty &&
                        v$.usuario.username.minLength.$invalid
                      "
                    >
                      Mínimo de 5 caracteres
                    </div>
                    <div
                      class="invalid-feedback"
                      v-if="
                        v$.usuario.username.$dirty &&
                        v$.usuario.username.maxLength.$invalid
                      "
                    >
                      Máximo de 50 caracteres.
                    </div>
                    <div
                      class="valid-feedback"
                      v-if="
                        v$.usuario.username.$dirty &&
                        !v$.usuario.username.$error
                      "
                    >
                      Parece bom.
                    </div>
                  </div>

                  <div class="mb-3 col com-sm-12 com-sm-12">
                    <label class="form-label" for="email">Email</label>
                    {{ erros.email }}
                    <input
                      type="email"
                      class="form-control"
                      v-model="usuario.email"
                      id="email"
                      placeholder="Email"
                      @blur="v$.usuario.email.$touch"
                      :class="{
                        'is-invalid':
                          (v$.usuario.email.$dirty &&
                            v$.usuario.email.$error) ||
                          erros.email,
                        'is-valid':
                          v$.usuario.email.$dirty && !v$.usuario.email.$error,
                      }"
                    />

                    <div class="text-danger" v-if="this.erros.email">
                      {{ erros.email }}
                    </div>

                    <div
                      class="invalid-feedback"
                      v-if="
                        v$.usuario.email.$dirty &&
                        v$.usuario.email.required.$invalid
                      "
                    >
                      Email é um campo obrigatório.
                    </div>

                    <div
                      class="invalid-feedback"
                      v-if="
                        v$.usuario.email.$dirty && v$.usuario.email.$invalid
                      "
                    >
                      Email deve ser válido.
                    </div>

                    <div
                      class="invalid-feedback"
                      v-if="
                        v$.usuario.email.$dirty &&
                        v$.usuario.email.minLength.$invalid
                      "
                    >
                      Mínimo de 5 caracteres
                    </div>
                    <div
                      class="invalid-feedback"
                      v-if="
                        v$.usuario.email.$dirty &&
                        v$.usuario.email.maxLength.$invalid
                      "
                    >
                      Máximo de 50 caracteres.
                    </div>
                    <div
                      class="valid-feedback"
                      v-if="v$.usuario.email.$dirty && !v$.usuario.email.$error"
                    >
                      Parece bom.
                    </div>
                  </div>

                  <div class="mb-3 col com-sm-12 com-sm-12">
                    <label class="form-label" for="role">Role</label>
                    <select
                      id="role"
                      class="form-control"
                      v-model="usuario.role"
                      @blur="v$.usuario.role.$touch"
                      :class="{
                        'is-invalid':
                          (v$.usuario.role.$dirty && v$.usuario.role.$error) ||
                          erros.role,
                        'is-valid':
                          v$.usuario.role.$dirty && !v$.usuario.role.$error,
                      }"
                    >
                      <option selected="" disabled>Selecione...</option>
                      <option
                        :value="role"
                        v-for="(role, index) in roles"
                        :key="index"
                      >
                        {{ role }}
                      </option>                     
                    </select>
                    <div class="text-danger" v-if="this.erros.role">
                      {{ erros.role }}
                    </div>
                    <div
                      class="valid-feedback"
                      v-if="
                        v$.usuario.role.$dirty &&
                        !v$.usuario.role.$error
                      "
                    >
                      Parece bom.
                    </div>
                  </div>

                  <div class="mb-3 col com-sm-12 com-sm-12">
                    <label class="form-label" for="inputPassword4"
                      >Password</label
                    >
                    <input
                      type="password"
                      autocomplete="new-password"
                      class="form-control"
                      v-model="usuario.password"
                      id="inputPassword4"
                      placeholder="Password"
                    />
                    <div v-if="v$.usuario.password.$error">
                      Password field has an error.
                    </div>
                  </div>
                </div>
                <button type="submit" class="btn btn-primary">Salvar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import messageService from "@/services/messageService";
import usuarioService from "@/services/usuarioService";
import roleService from "@/services/roleService";

import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength, maxLength } from "@vuelidate/validators";

export default {
  name: "UsuariosCreate",
  components: {},
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      usuario: {
        username: "",
        password: "",
        email: "",
        role: "",
      },
      roles: [],
      erros: [],
      tituloPagina: "Cadastrar novo usuário",
      descricaoPagina: "Preencha todos os dados corretamente",
    };
  },

  validations() {
    return {
      usuario: {
        username: {
          required,
          minLength: minLength(5),
          maxLength: maxLength(50),
        },
        password: {
          required,
          minLength: minLength(8),
          maxLength: maxLength(8),
        },
        role: { required },
        email: {
          required,
          email,
          minLength: minLength(5),
          maxLength: maxLength(50),
        },
      },
    };
  },

  created() {
    this.getAllRoles();
  },

  methods: {
    store() {
      usuarioService
        .store(this.usuario)
        .then(() => {
          messageService.success("Usuário cadastrado com sucesso");
        })
        .catch((err) => {
          this.erros = err.errors;
          messageService.error("Ocorreu um erro");
        });
    },

    clearForm() {
      console.log("limpar form");
      this.usuario.username = "";
      this.usuario.password = "";
      this.usuario.email = "";
      this.usuario.role = "";
    },

    getAllRoles() {
      roleService
        .getAllRoles()
        .then((res) => {
          console.log("listagem de roles");
          console.log(res);
          this.roles = res;
        })
        .catch((err) => {
          console.log("errro");
          console.log(err);
          messageService.error("Erro ao carregar listagem de roles");
        });
    },
  },
};
</script>