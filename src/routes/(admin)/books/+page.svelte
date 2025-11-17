<script lang="ts">
  import { onMount } from 'svelte';
  import BookTable from '$lib/components/BookTable.svelte';
  import Modal from '$lib/components/ui/Modal.svelte';
  import BookForm from '$lib/components/BookTable.svelte';
  import type { Book } from '$lib/data/books';
  let books: Book[] = [];
  let open = false;
  let editBook = null;

  onMount(async () => {
    // TODO: replace with real API call
    const res = await fetch('/book');
    books = await res.json();
  });

  function handleEdit(b) {
    editBook = b;
    open = true;
  }
  function handleDelete(b) {
    if (confirm(`Delete ${b.title}?`)) {
      books = books.filter((x) => x.id !== b.id);
    }
  }
  function onCreate() {
    editBook = null;
    open = true;
  }
</script>

<div class="flex items-center justify-between mb-6">
  <h2 class="text-2xl font-semibold">Books</h2>
  <div class="flex items-center gap-3">
    <button
      class="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700"
      on:click={onCreate}>Add Book</button
    >
  </div>
</div>

<BookTable {books} onEdit={handleEdit} onDelete={handleDelete} />

<Modal {open} onClose={() => (open = false)}>
  <BookForm
    {editBook}
    on:save={(e) => {
      const b = e.detail;
      if (b.id) {
        books = books.map((x) => (x.id === b.id ? b : x));
      } else {
        b.id = String(Date.now());
        books = [b, ...books];
      }
      open = false;
    }}
  />
</Modal>
