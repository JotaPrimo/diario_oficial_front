<template>
	<div class="auth-full-page d-flex">
		<div class="auth-form p-3">

			<div class="text-center">
				<h1 class="h2">Welcome back!</h1>
				<p class="lead">
					Sign in to your account to continue
				</p>
			</div>

			<div class="mb-3">			
				<form>
					<div class="mb-3">
						<label class="form-label">Email</label>
						<input class="form-control form-control-lg" type="email" name="email"
							placeholder="Enter your email">
					</div>
					<div class="mb-3">
						<label class="form-label">Password</label>
						<input class="form-control form-control-lg" type="password" name="password"
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
						<a class="btn btn-lg btn-primary" href="/dashboard-default">Sign in</a>
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
export default {
	name: "LoginComponent",
};
</script>