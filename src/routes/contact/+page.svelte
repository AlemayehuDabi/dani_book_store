<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import NavBar from "$lib/components/NavBar.svelte";

	let name = $state('');
	let email = $state('');
	let message = $state('');
	let isSubmitting = $state(false);
	let isSubmitted = $state(false);
	
	function handleSubmit(e: Event) {
		e.preventDefault();
		if (!name || !email || !message) return;
		
		isSubmitting = true;
		
		// Simulate form submission
		setTimeout(() => {
			isSubmitting = false;
			isSubmitted = true;
			name = '';
			email = '';
			message = '';
		}, 1000);
	}
</script>

<svelte:head>
	<title>Contact - BookStore</title>
	<meta name="description" content="Get in touch with BookStore. We'd love to hear from you!" />
</svelte:head>

<!-- Navigation -->
<NavBar />

<!-- Hero Section -->
<section class="hero-gradient py-20">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
				Get in <span class="text-gradient">Touch</span>
			</h1>
			<p class="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-slide-up">
				We'd love to hear from you! Send us a message and we'll respond as soon as possible.
			</p>
		</div>
	</div>
</section>

<!-- Contact Section -->
<section class="py-16 bg-white">
	<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid md:grid-cols-2 gap-12">
			<!-- Contact Form -->
			<div>
				<h2 class="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
				
				{#if isSubmitted}
					<div class="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
						<div class="text-4xl mb-4">✅</div>
						<h3 class="text-xl font-semibold text-green-800 mb-2">Message Sent!</h3>
						<p class="text-green-600">Thank you for your message. We'll get back to you soon!</p>
					</div>
				{:else}
					<form onsubmit={handleSubmit} class="space-y-6">
						<div>
							<label for="name" class="block text-sm font-medium text-gray-700 mb-2">Name</label>
							<input
								type="text"
								id="name"
								bind:value={name}
								required
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
								placeholder="Your name"
							/>
						</div>
						
						<div>
							<label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
							<input
								type="email"
								id="email"
								bind:value={email}
								required
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
								placeholder="your@email.com"
							/>
						</div>
						
						<div>
							<label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message</label>
							<textarea
								id="message"
								bind:value={message}
								required
								rows="5"
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
								placeholder="Your message..."
							></textarea>
						</div>
						
						<button
							type="submit"
							disabled={isSubmitting}
							class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
						>
							{isSubmitting ? 'Sending...' : 'Send Message'}
						</button>
					</form>
				{/if}
			</div>
			
			<!-- Contact Info -->
			<div>
				<h2 class="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
				
				<div class="space-y-6">
					<div class="flex items-start space-x-4">
						<div class="text-2xl">📧</div>
						<div>
							<h3 class="text-lg font-semibold text-gray-900">Email</h3>
							<p class="text-gray-600">info@bookstore.com</p>
							<p class="text-sm text-gray-500">We'll respond within 24 hours</p>
						</div>
					</div>
					
					<div class="flex items-start space-x-4">
						<div class="text-2xl">📞</div>
						<div>
							<h3 class="text-lg font-semibold text-gray-900">Phone</h3>
							<p class="text-gray-600">(555) 123-4567</p>
							<p class="text-sm text-gray-500">Mon-Fri, 9AM-6PM EST</p>
						</div>
					</div>
					
					<div class="flex items-start space-x-4">
						<div class="text-2xl">📍</div>
						<div>
							<h3 class="text-lg font-semibold text-gray-900">Address</h3>
							<p class="text-gray-600">
								123 Book Street<br>
								Reading City, RC 12345<br>
								United States
							</p>
						</div>
					</div>
					
					<div class="flex items-start space-x-4">
						<div class="text-2xl">💬</div>
						<div>
							<h3 class="text-lg font-semibold text-gray-900">Social Media</h3>
							<div class="flex space-x-4 mt-2">
								<a href="#" class="text-primary-600 hover:text-primary-700 transition-colors duration-200" aria-label="Facebook">
									<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
										<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
									</svg>
								</a>
								<a href="#" class="text-primary-600 hover:text-primary-700 transition-colors duration-200" aria-label="Twitter">
									<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
										<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
									</svg>
								</a>
								<a href="#" class="text-primary-600 hover:text-primary-700 transition-colors duration-200" aria-label="Instagram">
									<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
										<path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.281c-.49 0-.98.49-.98.98s.49.98.98.98.98-.49.98-.98-.49-.98-.98-.98z"/>
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Footer -->
<Footer />