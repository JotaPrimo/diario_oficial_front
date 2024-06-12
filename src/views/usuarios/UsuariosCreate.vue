<template>
	<div>
		<div class="row">
			<div class="col-12 col-xl-12">
				{{ v$.username.minLength }}
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
										<input type="text" class="form-control" v-model="username" id="username"
											placeholder="Username" @blur="v$.username.$touch"
											:class="{ 'is-invalid': v$.username.$dirty && v$.username.$error, 'is-valid': v$.username.$dirty && !v$.username.$error }">

										<div class="invalid-feedback"
											v-if="v$.username.$dirty && v$.username.required.$invalid">
											Username é um campo obrigatório.
										</div>
										<div class="invalid-feedback"
											v-if="v$.username.$dirty && v$.username.minLength.$invalid">
											Mínimo de 5 caracteres
										</div>
										<div class="invalid-feedback"
											v-if="v$.username.$dirty && v$.username.maxLength.$invalid">
											Máximo de 50 caracteres.
										</div>
										<div class="valid-feedback" v-if="v$.username.$dirty && !v$.username.$error">
											Parece bom.</div>
									</div>

									<div class="mb-3 col com-sm-12 com-sm-12">
										<label class="form-label" for="email">Email</label>
										<input type="email" class="form-control" v-model="email" id="email"
											placeholder="Email" @blur="v$.email.$touch"
											:class="{ 'is-invalid': v$.email.$dirty && v$.email.$error, 'is-valid': v$.email.$dirty && !v$.email.$error }">

										<div class="invalid-feedback" v-if="v$.email.$dirty && v$.email.required.$invalid">
											Email é um campo obrigatório.
										</div>

										<div class="invalid-feedback"
											v-if="v$.email.$dirty && v$.email.email.$invalid">
											Email deve ser válido.
										</div>										
										
										<div class="invalid-feedback"
											v-if="v$.email.$dirty && v$.email.minLength.$invalid">
											Mínimo de 5 caracteres
										</div>
										<div class="invalid-feedback"
											v-if="v$.email.$dirty && v$.email.maxLength.$invalid">
											Máximo de 50 caracteres.
										</div>
										<div class="valid-feedback" v-if="v$.email.$dirty && !v$.email.$error">
											Parece bom.
										</div>
									</div>

									<div class="mb-3 col com-sm-12 com-sm-12">
										<label class="form-label" for="role">Role</label>
										<select id="role" class="form-control" v-model="role">
											<option selected="" disabled>Selecione...</option>
											<option value="ROLE_ADMIN">ROLE_ADMIN</option>
											<option value="ROLE_COLABORADOR">ROLE_COLABORADOR</option>
											<option value="ROLE_CLIENTE_ADMIN">ROLE_CLIENTE_ADMIN</option>
											<option value="ROLEROLE_CLIENTE_COLABORADORADMIN">ROLE_CLIENTE_COLABORADOR
											</option>
										</select>
										<div v-if="v$.role.$error">Role field has an error.</div>
									</div>

									<div class="mb-3 col com-sm-12 com-sm-12">
										<label class="form-label" for="inputPassword4">Password</label>
										<input type="password" class="form-control" v-model="password"
											id="inputPassword4" placeholder="Password">
										<div v-if="v$.password.$error">Password field has an error.</div>
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
import messageService from '@/services/messageService';
import usuarioService from '@/services/usuarioService';

import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, maxLength } from '@vuelidate/validators'

export default {
	name: "UsuariosCreate",
	components: {

	},
	setup() {
		return { v$: useVuelidate() }
	},
	data() {
		return {
			username: '',
			password: '',
			email: '',
			role: '',
			tituloPagina: 'Cadastrar novo usuário',
			descricaoPagina: 'Preencha todos os dados corretamente'
		};
	},

	validations() {
		return {
			username: { required, minLength: minLength(5), maxLength: maxLength(50) },
			password: { required, minLength: minLength(8), maxLength: maxLength(8) },
			role: { required },
			email: { required, email, minLength: minLength(5), maxLength: maxLength(50) }
		}
	},

	methods: {
		store() {
			usuarioService.store(this.usuario)
				.then(() => {
					messageService.success("Usuário cadastrado com sucesso")
				})
				.catch(() => {
					messageService.error("Ocorreu um erro")
				});
		},

		clearForm() {
			console.log('limpar form');
			this.usuario.username = '';
			this.usuario.password = '';
			this.usuario.email = '';
			this.usuario.role = '';
		},
	},
};
</script>