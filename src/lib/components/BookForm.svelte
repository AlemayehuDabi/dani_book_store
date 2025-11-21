<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { genres } from '$lib/data/books';

  export let editBook = null;
  const dispatch = createEventDispatcher();

  const baseForm = {
    title: '',
    author: '',
    price: 0,
    stock: 0,
    description: '',
    coverImage: '',
    slug: '',
    genre: genres[0],
    featured: false
  };

  const clone = <T>(value: T): T => {
    if (typeof structuredClone === 'function') return structuredClone(value);
    return JSON.parse(JSON.stringify(value));
  };

  let form = clone(baseForm);

  $: if (editBook) {
    form = { ...clone(baseForm), ...editBook };
  }

  function save() {
    dispatch('save', form);
  }
</script>

<div class="space-y-8">
  <div class="space-y-2">
    <p class="text-sm uppercase tracking-[0.4em] text-primary-500/80">{editBook ? 'Update book' : 'Create new title'}</p>
    <h3 class="text-3xl font-semibold text-[var(--color-text-primary)] luxury-heading">{editBook ? 'Refine edition details' : 'Add a new collectible'}</h3>
    <p class="text-sm text-[var(--color-text-secondary)]">
      Capture publishing metadata, pricing and marketing context. Every field writes directly into the inventory and analytics stack.
    </p>
  </div>

  <div class="grid gap-6 rounded-3xl border border-[var(--color-border)]/80 bg-white/90 p-6 shadow-sm dark:bg-white/5 lg:grid-cols-[1fr,380px]">
    <div class="space-y-6">
      <div class="grid gap-5 sm:grid-cols-2">
        <label class="space-y-2">
          <span class="text-xs uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">Title</span>
          <input
            class="w-full rounded-2xl border border-[var(--color-border)] bg-white/70 px-4 py-3 text-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-100 dark:bg-white/5"
            bind:value={form.title}
            placeholder="The Midnight Library"
          />
        </label>
        <label class="space-y-2">
          <span class="text-xs uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">Author</span>
          <input
            class="w-full rounded-2xl border border-[var(--color-border)] bg-white/70 px-4 py-3 text-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-100 dark:bg-white/5"
            bind:value={form.author}
            placeholder="Matt Haig"
          />
        </label>
      </div>

      <div class="grid gap-5 sm:grid-cols-3">
        <label class="space-y-2">
          <span class="text-xs uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">Price</span>
          <div class="flex rounded-2xl border border-[var(--color-border)] bg-white/70 px-3 py-2 text-sm focus-within:border-primary-400 focus-within:ring-2 focus-within:ring-primary-100 dark:bg-white/5">
            <span class="flex items-center text-[var(--color-text-secondary)]">$</span>
            <input
              type="number"
              class="w-full border-none bg-transparent pl-2 focus:outline-none"
              bind:value={form.price}
              min="0"
              step="0.01"
            />
          </div>
        </label>
        <label class="space-y-2">
          <span class="text-xs uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">Stock</span>
          <input
            type="number"
            class="w-full rounded-2xl border border-[var(--color-border)] bg-white/70 px-4 py-3 text-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-100 dark:bg-white/5"
            bind:value={form.stock}
            min="0"
          />
        </label>
        <label class="space-y-2">
          <span class="text-xs uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">Genre</span>
          <select
            class="w-full rounded-2xl border border-[var(--color-border)] bg-white/70 px-4 py-3 text-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-100 dark:bg-white/5"
            bind:value={form.genre}
          >
            {#each genres as genre}
              <option value={genre}>{genre}</option>
            {/each}
          </select>
        </label>
      </div>

      <label class="space-y-2">
        <span class="text-xs uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">Description</span>
        <textarea
          rows={5}
          class="w-full rounded-3xl border border-[var(--color-border)] bg-white/70 px-4 py-3 text-sm leading-relaxed focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-100 dark:bg-white/5"
          bind:value={form.description}
          placeholder="Write a poetic synopsis that sells the book like a curator."
        />
      </label>

      <div class="grid gap-5 sm:grid-cols-2">
        <label class="space-y-2">
          <span class="text-xs uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">Slug</span>
          <input
            class="w-full rounded-2xl border border-[var(--color-border)] bg-white/70 px-4 py-3 text-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-100 dark:bg-white/5"
            bind:value={form.slug}
            placeholder="the-midnight-library"
          />
        </label>
        <label class="space-y-2">
          <span class="text-xs uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">Cover URL</span>
          <input
            class="w-full rounded-2xl border border-[var(--color-border)] bg-white/70 px-4 py-3 text-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-100 dark:bg-white/5"
            bind:value={form.coverImage}
            placeholder="https://images.unsplash.com/..."
          />
        </label>
      </div>

      <label class="flex items-center justify-between rounded-3xl border border-dashed border-primary-200/80 bg-primary-50/40 px-4 py-3 text-sm font-medium text-primary-700 dark:border-primary-700/60 dark:bg-primary-900/15 dark:text-primary-200">
        <div>
          <p>Feature this title on spotlight</p>
          <p class="text-xs text-primary-500/80">Pushes book to the hero carousel and weekly drop.</p>
        </div>
        <input
          type="checkbox"
          class="h-5 w-5 rounded-full border-primary-400 text-primary-600 focus:ring-primary-200"
          bind:checked={form.featured}
        />
      </label>
    </div>

    <div class="space-y-4 rounded-3xl border border-[var(--color-border)]/70 bg-[var(--color-bg-muted)]/60 p-4 text-sm dark:bg-white/5">
      <div class="space-y-3 rounded-2xl bg-white/80 p-4 shadow-sm dark:bg-white/5">
        <p class="text-xs uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">Live preview</p>
        <div class="flex gap-3">
          <div class="aspect-[3/4] w-24 overflow-hidden rounded-2xl border border-[var(--color-border)]/80 bg-[var(--color-bg-muted)]">
            {#if form.coverImage}
              <img src={form.coverImage} alt="cover" class="h-full w-full object-cover" />
            {:else}
              <div class="flex h-full items-center justify-center text-[0.65rem] uppercase tracking-[0.5em] text-[var(--color-text-secondary)]/60">
                Cover
              </div>
            {/if}
          </div>
          <div>
            <p class="text-lg font-semibold">{form.title || 'Untitled edition'}</p>
            <p class="text-sm text-[var(--color-text-secondary)]">{form.author || 'Author name'}</p>
            <p class="mt-4 text-primary-600">${form.price?.toFixed?.(2) ?? '0.00'}</p>
          </div>
        </div>
      </div>

      <div class="rounded-2xl border border-dashed border-[var(--color-border)]/80 p-4">
        <p class="text-xs uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">Metadata status</p>
        <ul class="mt-3 space-y-2 text-sm">
          <li class="flex items-center justify-between">
            <span>Required fields</span>
            <span class="rounded-full bg-emerald-50 px-3 py-0.5 text-xs font-semibold text-emerald-700">
              {Object.values(form).filter(Boolean).length}/8
            </span>
          </li>
          <li class="flex items-center justify-between text-[var(--color-text-secondary)]">
            <span>Preview</span>
            <span>Instant</span>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="flex flex-wrap justify-end gap-3">
    <button
      class="rounded-3xl border border-[var(--color-border)]/80 px-6 py-3 text-sm font-semibold text-[var(--color-text-secondary)] transition hover:-translate-y-0.5 hover:border-primary-200 hover:text-primary-600"
      on:click={() => dispatch('cancel')}
    >
      Cancel
    </button>
    <button
      class="rounded-3xl bg-gradient-to-r from-primary-600 to-primary-700 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-primary-900/20 transition hover:-translate-y-0.5"
      on:click={save}
    >
      {editBook ? 'Save changes' : 'Launch title'}
    </button>
  </div>
</div>
