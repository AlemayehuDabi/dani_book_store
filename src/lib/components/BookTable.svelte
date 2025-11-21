<script lang="ts">
  import type { Book } from '$lib/data/books';
  import { Pencil, Trash2, Sparkles } from '@lucide/svelte';

  export let books: Book[] = [];
  export let onEdit = (b) => {};
  export let onDelete = (b) => {};

  const stockClass = (stock: number) => {
    if (stock < 10) return 'text-rose-600 bg-rose-50';
    if (stock < 30) return 'text-amber-600 bg-amber-50';
    return 'text-emerald-600 bg-emerald-50';
  };

  const stockValue = (book: Book) => book.stock ?? Math.max(8, Math.round((book.pages ?? 120) / 4));
</script>

<div class="overflow-hidden rounded-3xl border border-[var(--color-border)]/80 bg-white/90 shadow-xl shadow-primary-900/5 dark:bg-white/5">
  <table class="hidden min-w-full divide-y divide-[var(--color-border)]/70 text-sm md:table">
    <thead class="bg-[var(--color-bg-muted)]/70 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-text-secondary)]/80">
      <tr>
        <th class="px-6 py-4 text-left">Book</th>
        <th class="px-6 py-4 text-left">Genre</th>
        <th class="px-6 py-4 text-left">Price</th>
        <th class="px-6 py-4 text-left">Stock</th>
        <th class="px-6 py-4 text-left">Rating</th>
        <th class="px-6 py-4 text-left">Actions</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-[var(--color-border)]/60">
      {#each books as book (book.id)}
        <tr class="transition hover:bg-primary-50/50 dark:hover:bg-white/5">
          <td class="px-6 py-5">
            <div class="flex items-center gap-4">
              <div class="relative">
                <img
                  src={book.coverImage || '/cover-placeholder.png'}
                  alt={book.title}
                  class="h-16 w-12 rounded-2xl object-cover shadow-md"
                />
                {#if book.rating >= 4.7}
                  <span class="absolute -right-2 -top-2 inline-flex items-center justify-center rounded-full bg-primary-500/90 p-1 text-white">
                    <Sparkles size={12} />
                  </span>
                {/if}
              </div>
              <div>
                <p class="text-base font-semibold text-[var(--color-text-primary)]">{book.title}</p>
                <p class="text-xs uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">{book.author}</p>
              </div>
            </div>
          </td>
          <td class="px-6 py-5 text-sm text-[var(--color-text-secondary)]">{book.genre}</td>
          <td class="px-6 py-5 text-sm font-semibold text-[var(--color-text-primary)]">${book.price.toFixed(2)}</td>
          <td class="px-6 py-5">
            <span class={`inline-flex items-center gap-2 rounded-full px-4 py-1 text-xs font-semibold ${stockClass(stockValue(book))}`}>
              {stockValue(book)} units
            </span>
          </td>
          <td class="px-6 py-5">
            <div class="flex items-center gap-2 text-sm font-semibold text-amber-600">
              ★ {book.rating?.toFixed?.(1) ?? '—'}
            </div>
          </td>
          <td class="px-6 py-5">
            <div class="flex gap-3">
              <button
                class="inline-flex items-center gap-2 rounded-2xl border border-[var(--color-border)]/70 px-3 py-1.5 text-xs font-semibold text-[var(--color-text-secondary)] transition hover:border-primary-200 hover:text-primary-600"
                on:click={() => onEdit(book)}
              >
                <Pencil size={14} /> Edit
              </button>
              <button
                class="inline-flex items-center gap-2 rounded-2xl border border-rose-100/70 px-3 py-1.5 text-xs font-semibold text-rose-500 transition hover:bg-rose-50"
                on:click={() => onDelete(book)}
              >
                <Trash2 size={14} /> Remove
              </button>
            </div>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>

  <div class="space-y-4 p-4 md:hidden">
    {#each books as book (book.id)}
      <div class="rounded-3xl border border-[var(--color-border)]/80 bg-white/90 p-4 shadow-sm dark:bg-white/5">
        <div class="flex items-center gap-4">
          <img
            src={book.coverImage || '/cover-placeholder.png'}
            alt={book.title}
            class="h-20 w-16 rounded-2xl object-cover"
          />
          <div>
            <p class="text-base font-semibold">{book.title}</p>
            <p class="text-xs uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">{book.author}</p>
            <p class="mt-2 text-sm text-[var(--color-text-secondary)]">{book.genre}</p>
          </div>
        </div>
          <div class="mt-4 flex flex-wrap items-center gap-3 text-sm">
          <span class="font-semibold text-primary-600">${book.price.toFixed(2)}</span>
            <span class={`rounded-full px-3 py-1 text-xs ${stockClass(stockValue(book))}`}>{stockValue(book)} stock</span>
          <span class="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-600">★ {book.rating}</span>
        </div>
        <div class="mt-4 flex gap-2">
          <button class="flex-1 rounded-2xl border border-[var(--color-border)]/80 px-3 py-2 text-xs font-semibold" on:click={() => onEdit(book)}>
            Edit
          </button>
          <button class="flex-1 rounded-2xl border border-rose-200/70 px-3 py-2 text-xs font-semibold text-rose-500" on:click={() => onDelete(book)}>
            Delete
          </button>
        </div>
      </div>
    {/each}
  </div>
</div>