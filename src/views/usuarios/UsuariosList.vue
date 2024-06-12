<template>
	<div>
		<div class="row">
			<div class="col-12 col-xl-12">
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
								<th style="width: 40%">Username</th>
								<th style="width: 25%">Email</th>
								<th class="d-none d-md-table-cell" style="width: 25%">
									Role
								</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(usuario, index) in usuarios" :key="index">
								<td>{{ usuario.username }}</td>
								<td>{{ usuario.email }}</td>
								<td class="d-none d-md-table-cell">{{ usuario.role }}</td>
								<td class="text-center">
									<a href="#">
										<EyeIcon />
									</a>
									<a href="#">
										<EditIcon />
									</a>
									<a href="#">
										<TrashIcon @click="deleteUsuario(usuario.id)" />
									</a>
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
import messageService from "@/services/messageService";
import usuarioService from "@/services/usuarioService";

import { EditIcon, TrashIcon, EyeIcon } from '@/components/common/icons/index';


export default {
	name: "UsuariosList",
	components: {
		EditIcon, TrashIcon, EyeIcon
	},
	data() {
		return {
			usuarios: [],
			tituloPagina: 'Usuários',
			descricaoPagina: 'Recurso para gerênciamento de usuários'
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
					this.usuarios = data;
				})
				.catch(() => {
					messageService.error("Erro ao carregar usuários");					
				});
		},
		deleteUsuario(id) {			
			messageService.confirm().then(res => {
				if (res.isConfirmed) {
					usuarioService.delete(id)
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
					messageService.info("Operação cancelada")
				}				
			});
		},
	},
};
</script>