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
				</div>
				<router-link class="btn btn-sm btn-primary mb-2" to="/usuarios">Voltar</router-link>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: "UsuariosCreate",
	components: {
		
	},
	data() {
		return {
			usuarios: [],
			tituloPagina: 'Cadastrar novo usuário',
			descricaoPagina: 'Preencha todos os dados corretamente'
		};
	},
	created() {
		
	},
	methods: {
		
	},
};
</script>