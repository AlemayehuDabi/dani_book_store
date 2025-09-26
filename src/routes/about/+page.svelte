<script lang="ts">
	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<svelte:head>
	<title>About - BookStore</title>
	<meta name="description" content="Learn more about BookStore - your gateway to great books and amazing stories." />
</svelte:head>

<!-- Navigation -->
<nav class="bg-white shadow-lg sticky top-0 z-50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between items-center h-16">
			<!-- Logo -->
			<div class="flex items-center">
				<a href="/" class="text-2xl font-bold text-gradient">📚 Dani's BookStore</a>
			</div>
			
			<!-- Navigation Links -->
			<div class="hidden md:flex space-x-8">
				<a href="/" class="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">Home</a>
				<a href="/about" class="text-primary-600 font-medium">About</a>
				<a href="/contact" class="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">Contact</a>
			</div>
		</div>
	</div>
</nav>

<!-- Hero Section -->
<section class="hero-gradient py-20">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
				About <span class="text-gradient">BookStore</span>
			</h1>
			<p class="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-slide-up">
				Your gateway to great books and amazing stories
			</p>
		</div>
	</div>
</section>

<!-- About Content -->
<section class="py-16 bg-white">
	<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="prose prose-lg max-w-none">
			<h2 class="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
			<p class="text-gray-600 mb-6">
				BookStore was founded with a simple mission: to connect readers with the books that will inspire, 
				educate, and entertain them. We believe that every book has the power to change a life, and we're 
				passionate about helping you discover your next favorite read.
			</p>
			
			<h3 class="text-2xl font-bold text-gray-900 mb-4">What We Offer</h3>
			<ul class="text-gray-600 mb-6 space-y-2">
				<li>• Curated collection of the best books across all genres</li>
				<li>• Detailed book information and reviews</li>
				<li>• Easy search and filtering capabilities</li>
				<li>• Beautiful, responsive design for all devices</li>
				<li>• Regular updates with new releases</li>
			</ul>
			
			<h3 class="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
			<div class="grid md:grid-cols-3 gap-6 mb-8">
				<div class="text-center p-6 bg-gray-50 rounded-lg">
					<div class="text-4xl mb-4">📚</div>
					<h4 class="text-xl font-semibold text-gray-900 mb-2">Quality</h4>
					<p class="text-gray-600">We carefully curate our collection to ensure every book meets our high standards.</p>
				</div>
				<div class="text-center p-6 bg-gray-50 rounded-lg">
					<div class="text-4xl mb-4">🔍</div>
					<h4 class="text-xl font-semibold text-gray-900 mb-2">Discovery</h4>
					<p class="text-gray-600">We make it easy to find your next favorite book with powerful search tools.</p>
				</div>
				<div class="text-center p-6 bg-gray-50 rounded-lg">
					<div class="text-4xl mb-4">❤️</div>
					<h4 class="text-xl font-semibold text-gray-900 mb-2">Passion</h4>
					<p class="text-gray-600">We're book lovers ourselves, and we're passionate about sharing great reads.</p>
				</div>
			</div>
			
			<div class="text-center">
				<button onclick={scrollToTop} class="btn-primary">
					Back to Top
				</button>
			</div>
		</div>
	</div>
</section>

<!-- Footer -->
<footer class="bg-gray-900 text-white py-12">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 md:grid-cols-4 gap-8">
			<!-- Brand -->
			<div class="col-span-1 md:col-span-2">
				<h3 class="text-2xl font-bold mb-4">📚 BookStore</h3>
				<p class="text-gray-300 mb-4">
					Your gateway to great books. Discover amazing stories, knowledge, and inspiration 
					from our curated collection.
				</p>
			</div>
			
			<!-- Quick Links -->
			<div>
				<h4 class="text-lg font-semibold mb-4">Quick Links</h4>
				<ul class="space-y-2">
					<li><a href="/" class="text-gray-300 hover:text-white transition-colors duration-200">Home</a></li>
					<li><a href="/about" class="text-gray-300 hover:text-white transition-colors duration-200">About</a></li>
					<li><a href="#contact" class="text-gray-300 hover:text-white transition-colors duration-200">Contact</a></li>
				</ul>
			</div>
			
			<!-- Contact Info -->
			<div>
				<h4 class="text-lg font-semibold mb-4">Contact</h4>
				<div class="space-y-2 text-gray-300">
					<p>📧 info@bookstore.com</p>
					<p>📞 (555) 123-4567</p>
					<p>📍 123 Book Street<br>Reading City, RC 12345</p>
				</div>
			</div>
		</div>
		
		<div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
			<p>&copy; 2024 BookStore. All rights reserved. Made with ❤️ for book lovers.</p>
		</div>
	</div>
</footer>
