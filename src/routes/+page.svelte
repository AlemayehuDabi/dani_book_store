<script lang="ts">
	import { onMount } from 'svelte';
	import { books, genres, type Book } from '$lib/data/books';
	
	let searchQuery = $state('');
	let selectedGenre = $state('All');
	let filteredBooks = $state(books);
	
	function filterBooks() {
		filteredBooks = books.filter(book => {
			const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
								book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
								book.description.toLowerCase().includes(searchQuery.toLowerCase());
			const matchesGenre = selectedGenre === 'All' || book.genre === selectedGenre;
			return matchesSearch && matchesGenre;
		});
	}
	
	$effect(() => {
		filterBooks();
	});
	
	function scrollToBooks() {
		document.getElementById('books-section')?.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<!-- Navigation -->
<nav class="bg-white shadow-lg sticky top-0 z-50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between items-center h-16">
			<!-- Logo -->
			<div class="flex items-center">
				<h1 class="text-2xl font-bold text-gradient">📚 Dani's BookStore</h1>
			</div>
			
			<!-- Navigation Links -->
			<div class="hidden md:flex space-x-8">
				<a href="/" class="text-primary-600 font-medium">Home</a>
				<a href="/about" class="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">About</a>
				<a href="/contact" class="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">Contact</a>
			</div>
			
			<!-- Mobile menu button -->
			<div class="md:hidden">
				<!-- <button class="text-gray-700 hover:text-primary-600">
					<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				</button> -->
			</div>
		</div>
	</div>
</nav>

<!-- Hero Section -->
<section id="home" class="hero-gradient min-h-screen flex items-center">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
		<div class="text-center">
			<h1 class="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
				Welcome to <span class="text-gradient">BookStore</span>
			</h1>
			<p class="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-slide-up">
				Discover your next favorite book from our curated collection of amazing stories, 
				knowledge, and inspiration.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
				<button 
					onclick={scrollToBooks}
					class="btn-primary text-lg px-8 py-4"
					aria-label="Browse our book collection"
				>
					Explore Books
				</button>
				<button class="btn-secondary text-lg px-8 py-4">
					Learn More
				</button>
			</div>
		</div>
	</div>
</section>

<!-- Search and Filter Section -->
<section class="bg-white py-12">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex flex-col lg:flex-row gap-6 items-center justify-between">
			<!-- Search Bar -->
			<div class="w-full lg:w-1/2">
				<div class="relative">
					<input
						type="text"
						placeholder="Search books, authors, or descriptions..."
						bind:value={searchQuery}
						class="w-full px-4 py-3 pl-12 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
						aria-label="Search books"
					/>
					<div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
						<svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
						</svg>
					</div>
				</div>
			</div>
			
			<!-- Category Filter -->
			<div class="w-full lg:w-1/3">
				<select
					bind:value={selectedGenre}
					class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
					aria-label="Filter by genre"
				>
					{#each genres as genre}
						<option value={genre}>{genre}</option>
					{/each}
				</select>
			</div>
		</div>
	</div>
</section>

<!-- Books Section -->
<section id="books-section" class="py-16 bg-gray-50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-12">
			<h2 class="text-4xl font-bold text-gray-900 mb-4">Our Book Collection</h2>
			<p class="text-xl text-gray-600">Discover amazing stories and knowledge</p>
		</div>
		
		<!-- Books Grid -->
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
			{#each filteredBooks as book (book.id)}
				<div class="book-card group">
					<div class="relative mb-4 overflow-hidden rounded-lg">
						<img 
							src={book.coverImage} 
							alt={`${book.title} by ${book.author}`}
							class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
							loading="lazy"
						/>
						<div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
							<span class="text-sm font-semibold text-primary-600">${book.price}</span>
						</div>
					</div>
					
					<div class="space-y-3">
						<h3 class="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
							{book.title}
						</h3>
						<p class="text-gray-600 font-medium">{book.author}</p>
						<p class="text-gray-500 text-sm line-clamp-3">{book.description}</p>
						
						<div class="flex items-center justify-between">
							<div class="flex items-center space-x-1">
								{#each Array(5) as _, i}
									<svg 
										class="w-4 h-4 {i < Math.floor(book.rating) ? 'text-yellow-400' : 'text-gray-300'}" 
										fill="currentColor" 
										viewBox="0 0 20 20"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
								{/each}
								<span class="text-sm text-gray-500 ml-1">({book.rating})</span>
							</div>
							<span class="text-sm text-gray-500">{book.genre}</span>
						</div>
						
						<button class="w-full btn-primary mt-4">
							View Details
						</button>
					</div>
				</div>
			{/each}
		</div>
		
		{#if filteredBooks.length === 0}
			<div class="text-center py-12">
				<div class="text-6xl mb-4">📚</div>
				<h3 class="text-2xl font-bold text-gray-900 mb-2">No books found</h3>
				<p class="text-gray-600">Try adjusting your search or filter criteria</p>
			</div>
		{/if}
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
				<div class="flex space-x-4">
					<a href="#" class="text-gray-400 hover:text-white transition-colors duration-200" aria-label="Facebook">
						<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
							<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
						</svg>
					</a>
					<a href="#" class="text-gray-400 hover:text-white transition-colors duration-200" aria-label="Twitter">
						<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
							<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
						</svg>
					</a>
					<a href="#" class="text-gray-400 hover:text-white transition-colors duration-200" aria-label="Instagram">
						<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
							<path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.281c-.49 0-.98.49-.98.98s.49.98.98.98.98-.49.98-.98-.49-.98-.98-.98z"/>
						</svg>
					</a>
				</div>
			</div>
			
			<!-- Quick Links -->
			<div>
				<h4 class="text-lg font-semibold mb-4">Quick Links</h4>
				<ul class="space-y-2">
					<li><a href="/" class="text-gray-300 hover:text-white transition-colors duration-200">Home</a></li>
					<li><a href="/about" class="text-gray-300 hover:text-white transition-colors duration-200">About</a></li>
					<li><a href="/contact" class="text-gray-300 hover:text-white transition-colors duration-200">Contact</a></li>
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
