<template>
	<div>
		<div class="row">
			<div class="col-12 col-xl-12">

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
										<input type="text" class="form-control" v-model="usuario.username" id="username"
											placeholder="Username">
									</div>
									<div class="mb-3 col com-sm-12 com-sm-12">
										<label class="form-label" for="email">Email</label>
										<input type="email" class="form-control" v-model="usuario.email" id="email"
											placeholder="Email">
									</div>
									<div class="mb-3 col com-sm-12 com-sm-12">
										<label class="form-label" for="role">Role</label>
										<select id="role" class="form-control" v-model="usuario.role">
											<option selected="" disabled>Selecione...</option>
											<option value="ROLE_ADMIN">ROLE_ADMIN</option>
											<option value="ROLE_COLABORADOR">ROLE_COLABORADOR</option>
											<option value="ROLE_CLIENTE_ADMIN">ROLE_CLIENTE_ADMIN</option>
											<option value="ROLEROLE_CLIENTE_COLABORADORADMIN">ROLE_CLIENTE_COLABORADOR</option>
										</select>
									</div>
									<div class="mb-3 col com-sm-12 com-sm-12">
										<label class="form-label" for="inputPassword4">Password</label>
										<input type="password" class="form-control" v-model="usuario.password"
											id="inputPassword4" placeholder="Password">
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

export default {
	name: "UsuariosCreate",
	components: {

	},
	data() {
		return {
			usuario: {
				username: '',
				password: '',
				email: '',
				role: ''
			},
			tituloPagina: 'Cadastrar novo usuário',
			descricaoPagina: 'Preencha todos os dados corretamente'
		};
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
		}
	},
};
</script>