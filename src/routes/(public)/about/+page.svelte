<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import NavBar from "$lib/components/NavBar.svelte";

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<svelte:head>
	<title>About - BookStore</title>
	<meta name="description" content="Learn more about BookStore - your gateway to great books and amazing stories." />
</svelte:head>

<!-- Navigation -->
<NavBar />

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
<Footer />
