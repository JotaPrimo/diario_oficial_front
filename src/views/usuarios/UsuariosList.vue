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
					<table class="table table-bordered">
						<thead>
							<tr>
								<th style="width: 40%">Name</th>
								<th style="width: 25%">Phone Number</th>
								<th class="d-none d-md-table-cell" style="width: 25%">
									Date of Birth
								</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(usuario, index) in usuarios" :key="index">
								<td>{{ usuario.username }}</td>
								<td>{{ usuario.email }}</td>
								<td class="d-none d-md-table-cell">{{ usuario.role }}</td>
								<td>
									<a href="#">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
											viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
											stroke-linecap="round" stroke-linejoin="round" data-lucide="edit-2"
											class="lucide lucide-edit-2 align-middle">
											<path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
										</svg></a>
									<a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
											viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
											stroke-linecap="round" stroke-linejoin="round" data-lucide="trash"
											class="lucide lucide-trash align-middle">
											<path d="M3 6h18"></path>
											<path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
											<path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
										</svg></a>
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

export default {
	name: "UsuariosList",
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
				.catch((error) => {
					messageService.error("Erro ao carregar usuários")
					console.error("Erro ao obter os usuários:", error);
				});
		},
	},
};
</script>