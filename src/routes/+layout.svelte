<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<title>BookStore - Your Gateway to Great Books</title>
	<meta name="description" content="Discover amazing books at BookStore. Browse our curated collection of fiction, non-fiction, and more." />
</svelte:head>

{@render children?.()}
