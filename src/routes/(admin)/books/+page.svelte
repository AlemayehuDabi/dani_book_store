<script lang="ts">
  import BookTable from '$lib/components/BookTable.svelte';
  import Modal from '$lib/components/ui/Modal.svelte';
  import BookForm from '$lib/components/BookForm.svelte';
  import Pagination from '$lib/components/ui/Pagination.svelte';
  import SearchBar from '$lib/components/ui/SearchBar.svelte';
  import FilterBar from '$lib/components/ui/FilterBar.svelte';
  import StatCard from '$lib/components/ui/StatCard.svelte';
  import type { Book } from '$lib/data/books';
  import { books as seedBooks } from '$lib/data/books';
  import { BookMarked, Download, Filter, Sparkles, ListFilter } from '@lucide/svelte';

  let books: Book[] = seedBooks;
  let open = false;
  let editBook: Book | null = null;
  let searchTerm = '';
  let activeFilter = 'all';
  let page = 1;
  const pageSize = 6;

  const filters = [
    { label: 'All inventory', value: 'all' },
    { label: 'Low stock', value: 'low' },
    { label: 'Featured', value: 'featured' },
    { label: 'Pre-order', value: 'preorder' }
  ];

  $: filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      activeFilter === 'all'
        ? true
        : activeFilter === 'low'
          ? (book.stock ?? Math.round(book.pages / 4)) < 20
          : activeFilter === 'featured'
            ? Boolean(book.featured)
            : activeFilter === 'preorder'
              ? book.publishedYear > 2023
              : true;
    return matchesSearch && matchesFilter;
  });

  $: totalPages = Math.max(1, Math.ceil(filteredBooks.length / pageSize));
  $: paginatedBooks = filteredBooks.slice((page - 1) * pageSize, page * pageSize);

  function handleEdit(book: Book) {
    editBook = book;
    open = true;
  }

  function handleDelete(book: Book) {
    if (confirm(`Delete ${book.title}?`)) {
      books = books.filter((x) => x.id !== book.id);
    }
  }

  const generateId = () => {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
      return crypto.randomUUID();
    }
    return `${Date.now()}`;
  };

  function onCreate() {
    editBook = null;
    open = true;
  }
</script>

<section class="space-y-10">
  <div class="rounded-[2.75rem] border border-[var(--color-border)]/70 bg-gradient-to-br from-primary-50/90 via-white/90 to-white/70 p-8 shadow-xl shadow-primary-900/10 dark:from-primary-900/10 dark:via-white/5 dark:to-white/5">
    <div class="flex flex-wrap items-center justify-between gap-6">
      <div>
        <p class="text-xs uppercase tracking-[0.5em] text-primary-500">Collection intelligence</p>
        <h1 class="mt-3 text-4xl font-semibold tracking-tight text-[var(--color-text-primary)] luxury-heading">Curate the Dani Book Studio library</h1>
        <p class="mt-3 max-w-2xl text-sm text-[var(--color-text-secondary)]">
          Monitor inventory health, orchestrate launch drops, and blend data-backed merchandising with editorial taste.
        </p>
      </div>
      <div class="flex flex-wrap items-center gap-3">
        <button class="inline-flex items-center gap-2 rounded-3xl border border-[var(--color-border)]/80 px-5 py-3 text-sm font-semibold text-[var(--color-text-secondary)] transition hover:-translate-y-0.5 hover:border-primary-200 hover:text-primary-600">
          <Download size={16} /> Export CSV
        </button>
        <button class="inline-flex items-center gap-2 rounded-3xl bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-primary-900/20 transition hover:-translate-y-0.5" on:click={onCreate}>
          <BookMarked size={16} /> Add title
        </button>
      </div>
    </div>

    <div class="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard title="TOTAL SKUS" value={`${books.length} titles`} delta="+8 curated" trend="up" icon={Sparkles} />
      <StatCard title="SELL-THROUGH" value="82%" delta="+6% vs LW" trend="up" accent="secondary" />
      <StatCard title="LOW INVENTORY" value={filteredBooks.filter((book) => (book.stock ?? book.pages) < 20).length} delta="needs restock" trend="down" />
      <StatCard title="WAITLISTED" value="214 readers" delta="+32 new" trend="up" accent="secondary" />
    </div>
  </div>

  <div class="rounded-3xl border border-[var(--color-border)]/80 bg-white/90 p-6 shadow-xl shadow-primary-900/10 dark:bg-white/5">
    <div class="flex flex-wrap items-center justify-between gap-4">
      <div class="flex flex-wrap items-center gap-3">
        <SearchBar placeholder="Search by title, author, ISBN..." bind:value={searchTerm} on:input={() => (page = 1)} />
        <button class="inline-flex items-center gap-2 rounded-2xl border border-[var(--color-border)]/80 px-4 py-2 text-sm font-semibold text-[var(--color-text-secondary)] transition hover:border-primary-200 hover:text-primary-600">
          <Filter size={16} /> Advanced filters
        </button>
      </div>
      <div class="flex flex-wrap items-center gap-2">
        <button class="inline-flex items-center gap-2 rounded-2xl border border-[var(--color-border)]/80 px-3 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">
          <ListFilter size={14} /> Segments
        </button>
      </div>
    </div>
    <div class="mt-4">
      <FilterBar {filters} bind:active={activeFilter} on:change={() => (page = 1)} />
    </div>
  </div>

  <BookTable books={paginatedBooks} onEdit={handleEdit} onDelete={handleDelete} />

  <div class="flex justify-end">
    <Pagination bind:page total={totalPages} on:change={(event) => (page = event.detail)} />
  </div>
</section>

<Modal {open} onClose={() => (open = false)}>
  <BookForm
    {editBook}
    on:save={(event) => {
      const payload = event.detail;
      if (payload.id) {
        books = books.map((book) => (book.id === payload.id ? payload : book));
      } else {
        payload.id = generateId();
        books = [payload, ...books];
      }
      open = false;
    }}
  />
</Modal>

