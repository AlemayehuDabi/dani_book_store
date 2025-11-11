<script lang="ts">
  import { fade } from "svelte/transition";
  import BookShelf from "$lib/assets/bookshelf.jpg"

  let email ="";
  let password = "";
  let showPassword = false;

  function handleSubmit (e: Event) {
    e.preventDefault()
    console.log(e.target)
  }

</script>


<svelte:head>
    <title>Sign-in - BookStore</title>
</svelte:head>


<section>
    <div class="min-h-screen flex flex-col md:flex-row bg-[#fdf6ec]">
	<!-- Left side: image / quote -->
	<div
		class="hidden md:flex w-1/2 bg-[#6b4226] text-[#fdf6ec] flex-col items-center justify-center p-12 relative overflow-hidden"
		transition:fade={{ duration: 600 }}
	>
		<img
			src={BookShelf}
			alt="Bookshelf"
			class="absolute inset-0 w-full h-full object-cover opacity-30"
		/>
		<div class="relative z-10 text-center">
			<h2 class="text-4xl font-serif mb-4">“A room without books is like a body without a soul.”</h2>
			<p class="text-[#f4e9d7] text-sm tracking-wide font-medium">– Marcus Tullius Cicero</p>
		</div>
	</div>

	<!-- Right side: Sign In form -->
	<div
		class="w-full md:w-1/2 flex items-center justify-center p-8 bg-white/90 backdrop-blur-sm"
		transition:fade={{ duration: 500 }}
	>
		<div class="w-full max-w-md">
			<div class="text-center mb-6">
				<!-- <img src="/book-logo.svg" alt="Bookstore Logo" class="mx-auto w-14 h-14 mb-2" /> -->
				<h1 class="text-3xl font-serif text-[#6b4226]">Welcome Back</h1>
				<p class="text-[#856b53] mt-1">Sign in to continue exploring your next read.</p>
			</div>

			<form on:submit={handleSubmit} class="space-y-5">
				<div>
					<label class="block text-[#6b4226] mb-1 font-medium">Email</label>
					<input
						type="email"
						bind:value={email}
						required
						class="w-full px-4 py-3 border border-[#d9c9b3] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c49b63] bg-white placeholder:text-[#b79c7b]"
						placeholder="jon@example.com"
					/>
				</div>

				<div>
					<label class="block text-[#6b4226] mb-1 font-medium">Password</label>
					<div class="relative">
						<input
							type={showPassword ? 'text' : 'password'}
							bind:value={password}
							required
							class="w-full px-4 py-3 border border-[#d9c9b3] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c49b63] bg-white placeholder:text-[#b79c7b]"
							placeholder="••••••••"
						/>
						<button
							type="button"
							class="absolute right-3 top-3 text-[#856b53] hover:text-[#6b4226]"
							on:click={() => (showPassword = !showPassword)}
						>
							{#if showPassword}
								<span>🙈</span>
							{:else}
								<span>👁️</span>
							{/if}
						</button>
					</div>
				</div>

				<div class="flex justify-between items-center text-sm">
					<label class="flex items-center gap-2 text-[#6b4226]">
						<input type="checkbox" class="accent-[#c49b63]" />
						Remember me
					</label>
					<a href="/auth/forgot" class="text-[#c49b63] hover:underline">Forgot password?</a>
				</div>

				<button
					type="submit"
					class="w-full bg-[#6b4226] text-white py-3 rounded-xl font-semibold hover:bg-[#5a3820] transition"
				>
					Sign In
				</button>
			</form>

			<p class="text-center text-sm text-[#856b53] mt-6">
				Don’t have an account?
				<a href="/auth/signup" class="text-[#c49b63] font-medium hover:underline">Sign up</a>
			</p>
		</div>
	</div>
</div>
</section>
