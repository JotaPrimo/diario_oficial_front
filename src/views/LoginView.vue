<template>
	<div class="auth-full-page d-flex">
		<div class="auth-form p-3">

			<div class="text-center">
				<h1 class="h2">Diário Oficial</h1>
				<p class="lead">
					Faça login em sua conta para continuar
				</p>
			</div>

			<div class="mb-3">
				<form @submit.prevent="handleLogin">
					<div class="mb-3">
						<label class="form-label">Username</label>
						<input class="form-control form-control-lg" v-model="username" type="text" name="email"
							placeholder="Enter your email">
					</div>
					<div class="mb-3">
						<label class="form-label">Password</label>
						<input class="form-control form-control-lg" v-model="password" type="password" name="password"
							placeholder="Enter your password">
						<small>
							<a href="/auth-reset-password">Forgot password?</a>
						</small>
					</div>
					<div>
						<div class="form-check align-items-center">
							<input id="customControlInline" type="checkbox" class="form-check-input" value="remember-me"
								name="remember-me" checked="">
							<label class="form-check-label text-small" for="customControlInline">Remember me</label>
						</div>
					</div>
					<div class="d-grid gap-2 mt-3">
						<button class="btn btn-lg btn-primary" type="submit">Entrar</button>
					</div>
				</form>
			</div>

			<div class="text-center">
				Don't have an account? <a href="/auth-sign-up">Sign up</a>
			</div>
		</div>
	</div>
</template>

<script>
import authService from '@/services/authService.js'
import messageService from '@/services/messageService';

export default {
	name: "LoginView",
	data() {
		return {
			username: 'caleb_romeo',
			password: '12345678',
		};
	},
	methods: {
		async handleLogin() {
			try {
				const token = await authService.login({
					username: this.username,
					password: this.password,
				});

				localStorage.setItem('accessToken', token);
				this.$router.push({name: 'Home'})
			} catch (error) {
				messageService.error("Credenciais inválidas")
				console.log(error);
			}
		},
		async clearForm() {
			this.username = '',
			this.password = ''
		}
	}
};
</script>