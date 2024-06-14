<template>
  <div>
    <div class="row">
      <div class="col-12 col-xl-12">

        {{ erros }}

        {{ v$.usuario.$dirty }}

        {{ v$.usuario.$error }}
       

        <div class="errors" v-if="erros.length > 0">
          <h4>Erros</h4>
          <ul>
            <li class="text-danger" v-for="(erro, index) in erros" :key="index">
              {{ erro }}
            </li>
          </ul>
        </div>

        <div class="card">
          <div class="card-header">
            <h5 class="card-title">{{ tituloPagina }} {{ usuario.username }}</h5>
            <h6 class="card-subtitle text-muted">
              {{ descricaoPagina }}
            </h6>
          </div>
          <div class="card-body">
            <div class="col-md-12">
              <form @submit.prevent="update">
                <div class="row">
                  <div class="mb-3 col com-sm-12 com-sm-12">
                    <label class="form-label" for="username">Username</label>
                    <input type="text" class="form-control" autocomplete="new-username" v-model="usuario.username"
                      id="username" placeholder="Username" @blur="v$.usuario.username.$touch" :class="{
                        'is-invalid':
                          v$.usuario.username.$dirty &&
                          v$.usuario.username.$error,
                        'is-valid':
                          v$.usuario.username.$dirty &&
                          !v$.usuario.username.$error,
                      }" />

                    <div class="invalid-feedback" v-if="
                      v$.usuario.username.$dirty &&
                      v$.usuario.username.required.$invalid
                    ">
                      Username é um campo obrigatório.
                    </div>
                    <div class="invalid-feedback" v-if="
                      v$.usuario.username.$dirty &&
                      v$.usuario.username.minLength.$invalid
                    ">
                      Mínimo de 5 caracteres
                    </div>
                    <div class="invalid-feedback" v-if="
                      v$.usuario.username.$dirty &&
                      v$.usuario.username.maxLength.$invalid
                    ">
                      Máximo de 50 caracteres.
                    </div>
                    <div class="valid-feedback" v-if="
                      v$.usuario.username.$dirty &&
                      !v$.usuario.username.$error
                    ">
                      Parece bom.
                    </div>
                  </div>

                  <div class="mb-3 col com-sm-12 com-sm-12">
                    <label class="form-label" for="email">Email</label>
                    <input type="email" class="form-control" v-model="usuario.email" id="email" placeholder="Email"
                      @blur="v$.usuario.email.$touch" :class="{
                        'is-invalid':
                          (v$.usuario.email.$dirty &&
                            v$.usuario.email.$error),
                        'is-valid':
                          v$.usuario.email.$dirty && !v$.usuario.email.$error,
                      }" />

                    <div class="invalid-feedback" v-if="
                      v$.usuario.email.$dirty &&
                      v$.usuario.email.required.$invalid
                    ">
                      Email é um campo obrigatório.
                    </div>

                    <div class="invalid-feedback" v-if="
                      v$.usuario.email.$dirty && v$.usuario.email.$invalid
                    ">
                      Email deve ser válido.
                    </div>

                    <div class="invalid-feedback" v-if="
                      v$.usuario.email.$dirty &&
                      v$.usuario.email.minLength.$invalid
                    ">
                      Mínimo de 5 caracteres
                    </div>
                    <div class="invalid-feedback" v-if="
                      v$.usuario.email.$dirty &&
                      v$.usuario.email.maxLength.$invalid
                    ">
                      Máximo de 50 caracteres.
                    </div>
                    <div class="valid-feedback" v-if="v$.usuario.email.$dirty && !v$.usuario.email.$error">
                      Parece bom.
                    </div>
                  </div>

                  <div class="mb-3 col com-sm-12 com-sm-12">
                    <label class="form-label" for="role">Role</label>
                    <select id="role" class="form-control" v-model="usuario.role" @blur="v$.usuario.role.$touch" :class="{
                      'is-invalid':
                        (v$.usuario.role.$dirty && v$.usuario.role.$error),
                      'is-valid':
                        v$.usuario.role.$dirty && !v$.usuario.role.$error,
                    }">
                      <option selected="" disabled>Selecione...</option>
                      <option :value="role" v-for="(role, index) in roles" :key="index">
                        {{ role }}
                      </option>
                    </select>
                    <div class="text-danger" v-if="this.erros.role">
                      {{ erros.role }}
                    </div>
                    <div class="valid-feedback" v-if="
                      v$.usuario.role.$dirty &&
                      !v$.usuario.role.$error
                    ">
                      Parece bom.
                    </div>
                  </div>
                </div>                        

                <button type="submit" class="btn btn-primary" v-if="errorsIsEmpty && !v$.$invalid">Salvar</button>
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
  name: "UsuariosEdit",
  components: {},
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      id: this.$route.params.id,
      usuario: {
        username: "",
        password: "",
        email: "",
        role: "",
      },
      roles: [],
      erros: [],
      tituloPagina: "Editar usuário",
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
    this.findById(this.id);
  },

  methods: {
    findById(idUsuario) {
      usuarioService
        .findById(idUsuario)
        .then((res) => {
          this.usuario = res;
        }).catch(() => {
          messageService.error("Não foi possível encontrar o usuário")
        })
    },

    async update() {
      try {
        await usuarioService.update(this.usuario);
        messageService.success("Usuário atualizado com sucesso");
      } catch (err) {

        console.log('erros from update');
        console.log(err);

        if (err.errors) {
          console.log('erros from update');
          this.erros = err.errors
        }

        this.erros.push(err.message)
        console.log(this.erros);

        messageService.error(err.message);
      }
    },

    clearForm() {
      this.usuario.username = "";
      this.usuario.password = "";
      this.usuario.email = "";
      this.usuario.role = "";
    },

    getAllRoles() {
      roleService
        .getAllRoles()
        .then((res) => {
          this.roles = res;
        })
        .catch(() => {
          messageService.error("Erro ao carregar listagem de roles");
        });
    },

    errorsIsEmpty() {
      return this.erros.length == 0
    }
  },
};
</script>