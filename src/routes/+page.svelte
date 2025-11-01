<script lang="ts">
	import { onMount } from 'svelte';
	import { books, genres, type Book } from '$lib/data/books';
	import NavBar from '$lib/components/NavBar.svelte';
    import Footer from '$lib/components/Footer.svelte';
	
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
<NavBar />

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
<Footer />
